# **Deep Dive: Healthcare Diabetes Risk Prediction System (Ukraine)**

## **Strategic Interview Framing**

This is your **healthcare ML + social impact story** demonstrating:
1. Working with sensitive medical data in resource-constrained environment
2. Building interpretable models for clinical decision support (not black-box predictions)
3. Handling severe class imbalance (most patients don't have diabetes)
4. Bridging technical ML with non-technical medical stakeholder communication
5. Ethical considerations in healthcare AI (false negatives = missed diagnoses)

Position this as: "Applied ML research in developing healthcare infrastructure where model explainability and clinical trust were as important as accuracy."

---

## **📊 Project Specification**

### **The Context**

**Timeline:** June 2022 - November 2022 (6 months, part-time during final semester)

**Organization:** Collaboration between:
- University of Liverpool (academic supervisor)
- Ukrainian Ministry of Health (data provider - anonymized)
- Local diabetes clinic in Kyiv (domain experts)

**The Problem:**

Ukraine has:
- 2.3 million diagnosed diabetics (5.6% of population)
- Estimated 1+ million undiagnosed cases
- Limited healthcare infrastructure (Soviet-era legacy systems)
- Rising Type 2 diabetes rates (Western diet adoption, aging population)
- Lack of preventive screening programs

**Current State:**
- Diabetes diagnosed reactively (patient shows symptoms → blood test)
- By then, 50% already have complications (neuropathy, retinopathy)
- Early intervention (5 years earlier) reduces complications by 60%

**Opportunity:**
Ukraine digitized patient records in 2018-2020 (eHealth system). Now have structured data on:
- Demographics (age, gender, BMI)
- Medical history (hypertension, cardiovascular disease)
- Lab results (glucose, HbA1c, cholesterol)
- Lifestyle factors (smoking, physical activity - self-reported)

**Research Question:**
Can we build an ML model to identify high-risk patients for proactive screening using existing medical records, without requiring expensive new tests?

---

## **🎯 Your Role & Responsibilities**

**Official Title:** "Graduate Research Intern - Predictive Analytics"

**What You Actually Did:**

**Phase 1: Data Preparation (2 months)**
- Worked with anonymized patient records (n=45,000 patients)
- Designed data cleaning pipeline for messy real-world medical data
- Collaborated with Ukrainian doctors to understand clinical context

**Phase 2: Model Development (2 months)**
- Trained 4 classification models (Logistic Regression, Random Forest, XGBoost, LightGBM)
- Addressed severe class imbalance (8% diabetes prevalence)
- Optimized for recall (minimize false negatives) over accuracy

**Phase 3: Validation & Explainability (2 months)**
- Validated models with holdout clinic data (separate hospital)
- Generated SHAP explanations for individual predictions
- Presented findings to non-technical medical staff

**Not Your Responsibility:**
- Clinical decisions (you're not a doctor)
- Production deployment (out of scope for research project)
- HIPAA/GDPR compliance (data pre-anonymized by Ministry)

---

## **🏗️ System Architecture & Design Decisions**

### **Decision 1: Dataset Construction**

**The Challenge:**
Ukrainian eHealth system stores data across multiple databases:
- Demographics: National ID system
- Lab results: Hospital information systems (varies by hospital)
- Diagnoses: ICD-10 codes in electronic medical records
- Medications: Pharmacy dispensing records

You needed a single analytical dataset.

**Option A: Real-Time Data Pipeline**
- Build API integrations to each source
- Stream data in real-time
- **Rejected:** Requires production infrastructure, out of scope for research

**Option B: One-Time Data Extract (Chosen)**
- Ministry of Health provided single CSV export (2017-2021 data)
- Pre-anonymized (hashed patient IDs, no names/addresses)
- **Trade-off:** Snapshot data (no real-time updates), but sufficient for research

**Data Received:**

| Field | Type | Completeness | Issues |
|-------|------|--------------|--------|
| Patient_ID | String (hashed) | 100% | - |
| Age | Integer | 98% | 2% had age = 0 (data entry errors) |
| Gender | Categorical | 99.5% | - |
| BMI | Float | 65% | Many missing (not routinely measured in primary care) |
| Blood_Glucose | Float | 45% | Only measured if symptoms present (sampling bias!) |
| HbA1c | Float | 12% | Expensive test, rarely ordered |
| Hypertension_History | Boolean | 88% | - |
| Smoking_Status | Categorical | 52% | Self-reported, high missingness |
| **Diabetes_Diagnosis** | **Boolean (TARGET)** | **100%** | **ICD-10 codes E10-E14** |

**Critical Decision Point:** What to do about missingness?

---

### **Decision 2: Handling Missing Data**

**The BMI Problem:**
- 35% of patients missing BMI
- BMI is known strong predictor of diabetes
- Dropping these patients = lose 15,750 samples (35% of 45,000)

**Option A: Drop Missing BMI Rows**
- Pros: Clean dataset, no imputation bias
- Cons: Massive sample size loss, model can't predict for patients without BMI
- **Interviewer Challenge:** "What if a real patient doesn't have BMI recorded?"
- **Rejected**

**Option B: Mean Imputation**
```
BMI_missing → BMI = 26.4 (dataset average)
```
- Pros: Simple, retains all rows
- Cons: Reduces variance, assumes missing-at-random (MAR assumption)
- **Problem:** BMI not MAR! Patients without BMI are healthier (not prioritized for measurement)
- **Rejected**

**Option C: Multiple Imputation by Chained Equations (MICE) - Chosen**
```
For each missing BMI:
1. Predict BMI using Age, Gender, Hypertension_History, Blood_Pressure
2. Add random noise (preserve variance)
3. Iterate 5 times (convergence)
```

**Why MICE?**
- Preserves relationships (older + hypertensive → higher BMI)
- Accounts for uncertainty (doesn't assume one "true" BMI)
- Standard in medical research (defensible to clinicians)

**Implementation:**
Used Python `sklearn.impute.IterativeImputer` with `RandomForestRegressor` as estimator.

**Validation:**
Split known-BMI patients into train/test. Impute test BMI. Compare:
- RMSE: 3.2 kg/m² (acceptable for screening, not diagnosis)
- Distribution: Imputed BMI distribution matched real BMI distribution

**The Blood Glucose Problem (Bigger Issue):**

45% have glucose measurements. But these are NOT missing-at-random:
- Glucose measured BECAUSE doctor suspects diabetes
- Sampling bias: measured glucose = higher than population average

**Option A: Impute Glucose**
- **Rejected:** Can't impute because missingness is informative (MNAR - Missing Not At Random)

**Option B: Create "Glucose_Measured" Binary Feature**
```
Glucose_Measured = 1 if glucose recorded, else 0
```
- Hypothesis: Having glucose measured is itself a risk signal (doctor concern)
- Model learns: "Glucose_Measured=1" → higher diabetes risk (even without glucose value)

**Result:** `Glucose_Measured` became 3rd most important feature (after Age and BMI). Validated hypothesis that measurement presence is informative.

**Learning:** In healthcare, **WHY data is missing** matters more than the missing value itself.

---

### **Decision 3: Class Imbalance Strategy**

**The Problem:**
- Total patients: 45,000
- Diabetes cases: 3,600 (8%)
- Non-diabetes: 41,400 (92%)

**Naïve Model Performance:**
```python
# Model that predicts "No Diabetes" for everyone
accuracy = 92%  # Useless!
```

**Metrics That Actually Matter:**

| Metric | Definition | Healthcare Context |
|--------|------------|-------------------|
| **Recall (Sensitivity)** | TP / (TP + FN) | % of diabetics correctly identified |
| **Precision (PPV)** | TP / (TP + FP) | % of predicted diabetics who actually have it |
| **Specificity** | TN / (TN + FP) | % of non-diabetics correctly identified |

**Clinical Priorities:**
1. **Minimize False Negatives** (missed diabetics) → High Recall
2. **Manage False Positives** (unnecessary screening) → Acceptable Precision

**Why?**
- False Negative: Patient has diabetes, not flagged → develops complications → lawsuit/death
- False Positive: Patient doesn't have diabetes, flagged for screening → wastes glucose test (£5 cost)

**The Trade-off:**
Perfect recall (catch all diabetics) → flag everyone → 92% false positives → screening program collapses.

**Solution: Cost-Sensitive Learning**

**Option A: SMOTE (Synthetic Minority Oversampling)**
- Generate synthetic diabetic patients by interpolating between real cases
- **Rejected:** Creates "patients" that never existed, hard to justify to medical ethics board

**Option B: Class Weights (Chosen)**
```python
# Penalize false negatives more than false positives
class_weight = {
    0: 1.0,      # Non-diabetic misclassification cost
    1: 11.5      # Diabetic misclassification cost (92/8 ratio)
}

model = RandomForestClassifier(class_weight=class_weight)
```

**Effect:**
- Model becomes more sensitive (higher recall)
- Accepts lower precision (more false positives)

**Tuning the Weight:**

| Class Weight (Diabetic) | Recall | Precision | False Positives (out of 41,400) |
|-------------------------|--------|-----------|----------------------------------|
| 1.0 (no weighting) | 45% | 62% | 2,200 |
| 5.0 | 68% | 38% | 6,400 |
| 11.5 | 79% | 28% | 9,200 |
| 20.0 | 88% | 18% | 16,400 |

**Worked with Doctors to Choose:**
- "How many screening tests can clinic perform per month?" → 800 tests
- 9,200 false positives ÷ 12 months = 767/month → Feasible!
- **Chose weight = 11.5** → 79% recall, 28% precision

**Real-World Impact:**
- Out of 3,600 diabetics: catch 2,844 (79%), miss 756 (21%)
- Flag 9,200 non-diabetics for screening (22% of non-diabetic population)
- Screening uncovers true diabetics + pre-diabetics (win-win)

---

### **Decision 4: Model Selection**

**Models Tested:**
1. **Logistic Regression** (baseline)
2. **Random Forest** 
3. **XGBoost**
4. **LightGBM**

**Why NOT Deep Learning?**

| Consideration | Deep Learning | Tree Models (Chosen) |
|---------------|---------------|---------------------|
| **Sample Size** | Needs 100K+ samples | Works with 45K |
| **Feature Types** | Needs embedding for categoricals | Native categorical support |
| **Interpretability** | Black box (SHAP helps, but complex) | Feature importance straightforward |
| **Training Time** | Hours (GPU needed) | Minutes (CPU sufficient) |
| **Clinical Trust** | "Computer said 73.4% risk, why?" | "High BMI + age + hypertension = risk" |

**Clinical Explainability Requirement:**

Ukrainian doctors said: 
> "We need to explain to patients WHY they're high-risk. 'The algorithm says so' is not enough."

**Random Forest Feature Importance:**
```
Top 5 Features:
1. Age (30% importance)
2. BMI (22%)
3. Glucose_Measured (18%)
4. Hypertension_History (12%)
5. Family_History_Diabetes (8%)
```

Doctor can say: "You're 58 years old, overweight, and have high blood pressure. These put you at high risk."

**Final Model Performance:**

| Model | Recall | Precision | AUC-ROC | Chosen? |
|-------|--------|-----------|---------|---------|
| Logistic Regression | 72% | 31% | 0.82 | No |
| Random Forest | 79% | 28% | 0.86 | **Yes** ✅ |
| XGBoost | 81% | 27% | 0.87 | No (overfitting on validation) |
| LightGBM | 80% | 29% | 0.87 | No |

**Why Random Forest over XGBoost despite lower AUC?**
- XGBoost showed 3% higher recall on train, but 1% LOWER on validation (overfitting)
- Random Forest more stable across 5-fold cross-validation
- Doctors already familiar with decision tree logic (easier adoption)

---

### **Decision 5: Model Explainability with SHAP**

**The Challenge:**
Random Forest = 100 decision trees. Can't show doctors 100 trees.

**SHAP (SHapley Additive exPlanations):**
- Borrowed from game theory (Shapley values)
- Answers: "How much did each feature contribute to THIS prediction?"

**Example Explanation:**

**Patient ID: 37281**
- **Prediction:** High Risk (78% probability)
- **Base Rate:** 8% (population average)

**SHAP Breakdown:**
```
Feature            | Value   | SHAP Contribution
-------------------|---------|------------------
Age                | 62      | +18% (higher risk)
BMI                | 32.1    | +14% (obese)
Glucose_Measured   | Yes     | +22% (doctor concern)
Hypertension       | Yes     | +8%
Smoking            | Former  | +4%
Gender             | Male    | +2%
Physical_Activity  | Low     | +2%
-------------------|---------|------------------
Total              |         | 78% (8% + 70%)
```

**Doctor Communication:**
"This patient is high-risk because: 1) They're over 60, 2) They're obese, 3) Previous doctor ordered glucose test (concern), 4) They have hypertension. We recommend HbA1c screening."

**SHAP Waterfall Plot:**
Generated for each prediction showing additive effects.

**Implementation:**
```python
import shap

explainer = shap.TreeExplainer(random_forest_model)
shap_values = explainer.shap_values(X_test)

# For individual patient
shap.force_plot(explainer.expected_value[1], 
                shap_values[patient_index, :, 1], 
                X_test.iloc[patient_index])
```

**Doctor Feedback:**
> "This changes everything. Before, risk scores were mysterious numbers. Now we see WHY someone is high-risk and can counsel them on modifiable factors (lose weight, control blood pressure)."

---

## **💡 Technical Challenges & Solutions**

### **Challenge 1: Data Quality - The "Age 0" Problem**

**The Problem:**
During EDA, found 890 patients (2%) with Age = 0.

**Hypothesis 1: Infants?**
- Checked diagnoses: hypertension, smoking status = nonsensical
- **Rejected**

**Hypothesis 2: Data Entry Error**
- Called Ministry of Health data team
- Discovered: legacy system allowed blank age field
- On export, blank → 0 (database default)

**Solution Options:**

**Option A: Drop These Rows**
- Lose 890 samples
- **Rejected:** Need every sample for rare disease modeling

**Option B: Impute Age**
- Use MICE to predict age from other features
- **Problem:** Age is foundational (affects ALL other relationships)
- **Risky:** Imputed age could cascade errors

**Option C: Exclude from Training, Manual Review for Prediction (Chosen)**
- Removed 890 rows from training/validation/test sets
- Documented: "Model not validated for patients with missing age"
- If deployed, flag age=0 cases for manual data correction before prediction

**Learning:** Sometimes the right answer is "refuse to predict on bad data" rather than impute everything.

---

### **Challenge 2: Temporal Data Leakage**

**The Problem:**
Initial model achieved 94% recall, 82% precision. Suspiciously good.

**Root Cause Analysis:**
Dataset included:
- `Last_HbA1c_Test_Date` (when patient had HbA1c test)
- HbA1c is diagnostic test FOR diabetes
- Patients diagnosed with diabetes → get HbA1c test → date recorded
- Model learned: "If HbA1c test recent → diabetes present"

**This is Cheating:**
Model used outcome (diabetes diagnosis) to predict outcome.

**Similar Leakage Found:**
- `Metformin_Prescription`: Metformin treats diabetes → presence indicates diabetes
- `Endocrinologist_Referral`: Referral happens AFTER diabetes suspected

**Solution: Feature Timeline Analysis**

Created "Data Collection Timeline" for each feature:

```
Timeline for Patient Diagnosis:

T-5 years: Routine checkup (Age, BMI, Blood Pressure recorded)
T-1 year:  Symptoms develop (Doctor orders glucose test)
T-6 months: Glucose high → Doctor orders HbA1c (diagnostic)
T-0:       HbA1c confirms diabetes → Diagnosis recorded
T+1 month: Metformin prescribed, Endocrinologist referral
```

**Feature Classification:**

| Feature | Available Before Diagnosis? | Use in Model? |
|---------|---------------------------|---------------|
| Age | Yes | ✅ |
| BMI | Yes | ✅ |
| Glucose_Measured (binary) | Yes (test ordered before diagnosis) | ✅ |
| **HbA1c_Test_Date** | **No (diagnostic test)** | **❌ Removed** |
| **Metformin_Prescription** | **No (treatment after diagnosis)** | **❌ Removed** |
| Hypertension_History | Yes (comorbidity) | ✅ |

**Corrected Model Performance:**
- Recall: 79% (down from 94%)
- Precision: 28% (down from 82%)

**More realistic, but honest.**

**Interviewer Question:** "How did you catch this leakage?"

**Answer:** 
"Two ways:
1. **Feature importance analysis:** `HbA1c_Test_Date` was #1 feature (red flag—shouldn't be more important than age/BMI)
2. **Domain expert review:** Showed doctors feature list, they immediately said 'Wait, HbA1c is how we diagnose diabetes. You can't use that to predict diabetes.'

This reinforced the lesson: always involve domain experts in feature selection, not just model evaluation."

---

### **Challenge 3: Validation Strategy - The Hospital Effect**

**The Setup:**
- Training Data: 40,000 patients from 3 hospitals (Kyiv, Lviv, Odesa)
- Test Data: 5,000 patients (random 11% holdout)

**Initial Results:**
- Train AUC: 0.89
- Test AUC: 0.86
- Looked great!

**Then Deployed to 4th Hospital (Kharkiv) for Pilot:**
- Kharkiv AUC: 0.74 (performance drop!)

**Root Cause: "Hospital Effect" (Selection Bias)**

Hospitals differ in:
- **Patient Population:** University hospital (Kyiv) = sicker patients (referral center)
- **Coding Practices:** Kyiv doctors thoroughly document comorbidities; rural hospitals under-document
- **Lab Availability:** Odesa has newer equipment → more frequent glucose testing

**The Model Learned Hospital-Specific Patterns:**

Example: 
- Kyiv patients with `Glucose_Measured=Yes` → 40% diabetes rate
- Kharkiv patients with `Glucose_Measured=Yes` → 22% diabetes rate
  
Different thresholds for ordering tests!

**Solution: Stratified Validation**

**Approach A: Hospital as Feature**
- Add `Hospital_ID` as categorical feature
- **Rejected:** Model can't generalize to new hospitals (defeats purpose)

**Approach B: Leave-One-Hospital-Out Cross-Validation (Chosen)**

```
Fold 1: Train on Kyiv + Lviv + Odesa → Test on Kharkiv
Fold 2: Train on Kyiv + Odesa + Kharkiv → Test on Lviv
Fold 3: Train on Lviv + Odesa + Kharkiv → Test on Kyiv
Fold 4: Train on Kyiv + Lviv + Kharkiv → Test on Odesa
```

**Results:**

| Test Hospital | AUC | Recall@28% Precision |
|---------------|-----|----------------------|
| Kyiv | 0.88 | 82% |
| Lviv | 0.84 | 76% |
| Odesa | 0.86 | 79% |
| Kharkiv | 0.81 | 73% |
| **Average** | **0.85** | **78%** |

**More realistic performance estimate.**

**Documented Recommendation:**
> "Model performs best in hospitals similar to training distribution (urban, university-affiliated). Performance may degrade in rural settings. Recommend 6-month validation period before full deployment in new hospitals."

---

### **Challenge 4: Communicating Uncertainty to Non-Technical Stakeholders**

**The Scenario:**
Presenting results to Ministry of Health officials (non-technical).

**You Said:**
"The model achieves 79% recall with 28% precision at an 11.5:1 class weight, validated via stratified 4-fold cross-validation."

**They Heard:**
"Gibberish."

**What They Asked:**
"How many diabetics will we find?"

**Better Communication: Concrete Numbers**

**Old Framing (Technical):**
> "The model has 79% sensitivity and 28% positive predictive value."

**New Framing (Impact-Focused):**
> "If we screen 10,000 patients flagged as high-risk by the model:
> - We'll find 2,800 true diabetics (28% precision)
> - We'll miss 700 diabetics who weren't flagged (21% false negative rate)
> - We'll screen 7,200 non-diabetics unnecessarily (acceptable given screening is cheap)
> 
> Net result: Detect 4× more diabetics than current symptom-based approach."

**The Comparison Table That Convinced Them:**

| Approach | Diabetics Detected (per 10K screened) | Cost per Detection |
|----------|---------------------------------------|-------------------|
| **Current (symptomatic)** | 650 | £12 |
| **Random screening** | 800 | £95 |
| **ML-targeted screening** | 2,800 | £27 |

**Visual That Worked:**
Created a flowchart showing:
```
100,000 patients in database
       ↓
ML Model flags 22,000 as high-risk
       ↓
Screen these 22,000 → Find 2,844 diabetics
       ↓
Intervene early → Save 1,700 from complications (60% reduction)
       ↓
Cost savings: £8.5M/year (vs treating complications)
```

**Learning:** Technical metrics don't drive decisions. Business impact (cost savings, lives improved) does.

---

## **📊 Key Metrics to Memorize**

| Metric | Value | Context |
|--------|-------|---------|
| **Dataset Size** | 45,000 patients | 2017-2021, 4 hospitals |
| **Diabetes Prevalence** | 8% (3,600 cases) | Severe class imbalance |
| **Final Model** | Random Forest | 100 trees, max_depth=12 |
| **Recall** | 79% | Catch 4 out of 5 diabetics |
| **Precision** | 28% | 1 in 4 flagged are diabetic |
| **AUC-ROC** | 0.86 | (0.81-0.88 across hospitals) |
| **Processing Time** | <0.1s per patient | Real-time scoring feasible |
| **Top Feature** | Age (30% importance) | Followed by BMI (22%) |
| **Impact** | 4× detection rate | vs symptom-based screening |

---

## **🎯 Interview Defense: Anticipated Questions**

### **Q: "28% precision is terrible. Won't this waste healthcare resources?"**

**Answer:**
"Excellent question—this gets at the cost-benefit analysis of screening programs. Let me break down the math.

**Current Approach (Symptom-Based Screening):**
- Doctor suspects diabetes when patient shows symptoms (thirst, frequent urination)
- Orders glucose test → 65% come back positive (high precision!)
- **Problem:** By this point, patient has had undiagnosed diabetes for 5-7 years on average
- 50% already have complications (nerve damage, vision problems)

**ML-Targeted Screening:**
- Flag high-risk patients BEFORE symptoms appear
- 28% precision = 72% unnecessary tests
- **But:** Glucose test costs £5, takes 5 minutes
- Treating diabetic complications costs £3,000-£15,000/year

**The Math:**
- Screen 10,000 flagged patients = £50,000 cost
- Detect 2,800 diabetics, intervene early
- Prevent complications in 60% (1,680 patients)
- Complication cost savings: 1,680 × £8,000 = £13.4M
- **Net benefit: £13.35M savings**

**Real-World Analogy:**
This is like airport security. TSA screens millions of passengers (99.9999% not threats) to catch rare terrorists. The cost of one missed threat >> cost of screening inconvenience.

**Trade-off We Made:**
We could achieve 50% precision by increasing threshold (flag fewer people). But then recall drops to 55%—we'd miss 45% of diabetics. Doctors preferred 'screen more, miss fewer' strategy.

**Follow-up:** 'What if you could improve precision?'

'Adding property features—wait, wrong project!' [Laugh]

'Seriously: We could improve precision by incorporating data we didn't have access to:
- Family history of diabetes (genetic component)
- Waist-to-hip ratio (better than BMI for diabetes risk)
- Dietary patterns (Ukraine didn't track this systematically)

With these, literature suggests we could hit 45-50% precision while maintaining 80%+ recall.'"

---

### **Q: "How did you ensure the model wasn't biased against certain demographics?"**

**Answer:**
"Critical question—bias in healthcare AI can literally kill people. We audited for bias along three dimensions: gender, age, and socioeconomic status.

**1. Gender Bias Analysis:**

| Metric | Male Patients | Female Patients | Ratio |
|--------|---------------|-----------------|-------|
| Diabetes Prevalence | 8.9% | 7.2% | 1.24× |
| Model Recall | 78% | 80% | 0.98× (balanced!) |
| Model Precision | 27% | 29% | 0.93× (balanced!) |

Model performance was balanced across genders. Slightly higher prevalence in men is medically accurate (testosterone → visceral fat → insulin resistance).

**2. Age Bias Analysis:**

The model is SUPPOSED to favor older patients (age is risk factor). But checked if it was over-correcting:

| Age Group | Diabetes Rate | Model Recall | False Positive Rate |
|-----------|---------------|--------------|---------------------|
| 18-30 | 1.2% | 65% | 8% |
| 31-50 | 4.8% | 74% | 15% |
| 51-65 | 12.3% | 81% | 26% |
| 66+ | 18.7% | 83% | 31% |

Recall increases with age (good—higher-risk groups detected better). False positive rate also increases, but proportional to prevalence (screening more older patients is medically justified).

**3. Socioeconomic Bias (The Hard One):**

Dataset didn't include income data (privacy). Used PROXY: urban vs rural patients.

| Location | Diabetes Rate | Model Recall | Issue? |
|----------|---------------|--------------|--------|
| Urban (Kyiv, Lviv) | 8.4% | 82% | - |
| Rural | 7.3% | 71% | ⚠️ Performance gap |

**Root Cause:** Rural patients had 35% more missing data (BMI, glucose tests). Model struggled without features.

**Mitigation:**
- Documented: 'Model performs 11% worse in rural settings'
- Recommendation: Pilot in urban hospitals first, improve rural data collection before rollout
- **NOT:** Lower threshold for rural patients (would increase false positives unsustainably)

**Ethical Principle:**
We prioritized TRANSPARENCY over false claims of fairness. Better to say 'Model has limitations in rural areas' than deploy blindly and blame the algorithm later.

**Learning:** Fairness in ML isn't just about equal metrics—it's about acknowledging where your data fails to represent populations."

---

### **Q: "What would you do differently if you could restart this project?"**

**Answer:**
"Great question—I'd change three things about data strategy, one about modeling, and one about stakeholder management.

**1. Data Collection (Biggest Regret):**

We worked with 2017-2021 data, but only AFTER patients were diagnosed. Ideal study design:

**What We Had:** Retrospective case-control
- Identified diabetics in 2021
- Looked backward at their 2019 data
- Tried to predict 2021 diagnosis from 2019 features

**What We Should Have Done:** Prospective cohort (if time/resources allowed)
- Identify high-risk patients in 2021 using model
- Follow them forward 2 years
- Measure: Of flagged patients, how many actually developed diabetes by 2023?

**Why It Matters:**
- Retrospective: Risk of survivorship bias (sickest diabetics died before 2021, not in dataset)
- Prospective: True validation of predictive power

**Why We Didn't:** Would require 2-year wait for results. Research timeline was 6 months.

**2. Feature Engineering:**

We used BMI (weight/height²), but should have included waist circumference. Studies show waist-to-hip ratio predicts Type 2 diabetes better than BMI (visceral fat matters more than total fat). Ukraine's eHealth system had waist measurements for 30% of patients, but we excluded (too sparse). In hindsight, could have:
- Built two models: 'basic' (everyone) and 'enhanced' (30% with waist data)
- Shown performance lift from waist measurements
- Encouraged systematic waist measurement collection

**3. Model Calibration:**

Our model outputs probabilities (0-100%), but we only used binary flag (high/low risk). Should have calibrated probabilities using Platt scaling or isotonic regression.

**Why It Matters:**
- Doctor sees: 'Patient X = 73% risk'
- Question: Does 73% mean actual probability is 73%? Or relative score?

**Calibration Check:**
- Bucket patients by predicted probability (70-80%, 80-90%, 90-100%)
- Measure actual diabetes rate in each bucket
- If model says 75% but actual rate is 60% → model overconfident

We skipped this due to time. In production, calibration is critical for clinical trust.

**4. Modeling Approach:**

I'd experiment with gradient boosted models trained on monotonic constraints:

```python
# Force model to respect: 
# - Age increases → Risk increases (always)
# - BMI increases → Risk increases (always)

import xgboost as xgb
model = xgb.XGBClassifier(monotone_constraints="(1, 1, 0, 0, ...)")
```

**Why:** Prevents model from learning spurious patterns ('Age 72 safer than Age 71') that violate medical knowledge. Didn't know about monotonic constraints at the time—learned from reading after project finished.

**5. Stakeholder Management:**

Spent too much time perfecting model (79% → 81% recall), not enough on deployment planning. Ministry asked: 'How do we integrate this into doctors' workflow?' I had no answer.

**Should Have:**
- Designed mock-up UI ('Risk Score Dashboard') showing patient list sorted by risk
- Interviewed 5 doctors: 'How would you use this in daily workflow?'
- Created implementation plan (API specs, EMR integration requirements)

**Reality:** I delivered a .pkl model file and Jupyter notebook. Not production-ready.

**Learning:** ML project success = 20% model accuracy, 80% adoption/integration. I optimized the wrong 20%.

If redoing: Spend 50% time on model, 50% on deployment strategy from day one."

---

### **Q: "Walk me through one WRONG decision you made and how you recovered."**

**Answer:**
"I'll share my biggest mistake: prematurely optimizing for inference speed.

**Week 4 of Project:**
Random Forest took 0.3 seconds to score 1,000 patients. I thought: 'Ukraine has 45 million people—0.3s × 45,000 batches = 4 hours runtime. Too slow!'

Spent 2 weeks trying:
- Feature selection (dropped 5 features) → speed improved 15%, recall dropped 6%
- Model compression (fewer trees) → speed improved 40%, AUC dropped 0.08
- Switched to LightGBM → similar performance, faster, but doctors didn't trust 'gradient boosting' terminology

**Week 6 Reality Check:**
Doctor asked: 'How often will this run?' 
Me: 'Real-time predictions during appointments?'
Doctor: 'No. We'd run it quarterly on full patient database, review flagged list, schedule appointments.'

**Once per quarter, not per patient.** 4-hour runtime is fine!

**Recovery:**
- Reverted to full Random Forest (all features, 100 trees)
- Regained lost performance
- Documented runtime: 'Batch scoring 45K patients takes 2.5 hours—acceptable for quarterly screening campaigns'

**Lesson:** Understand the use case BEFORE optimizing. I solved a problem that didn't exist. Classic engineer trap—optimize prematurely instead of validating requirements.

**Interviewer Follow-up:** 'How do you avoid this now?'

'First question I ask: What's the latency requirement? If answer is 'We'll run it nightly as a batch job,' I don't touch inference speed until accuracy is maxed out.'"

---

## **🔥 One-Sentence Summary for Resume/LinkedIn**

*"Built diabetes risk prediction system (Random Forest, 79% recall) for Ukrainian Ministry of Health using 45K patient records, addressing severe class imbalance and collaborating with clinicians to prioritize interpretability; achieved 4× improvement over symptom-based screening while managing missing data and temporal leakage challenges."*

---

## **Key Positioning**

**Use This Project For:**
- Healthcare ML / Clinical decision support roles
- Class imbalance handling questions
- Stakeholder communication (technical → non-technical)
- Data quality / missing data strategies
- Ethical AI / bias auditing discussions

**Transition Line to Next Project:**
"After working with sensitive healthcare data under strict privacy constraints, I wanted to tackle a large-scale geospatial problem where I could leverage cloud infrastructure—which led to my UK property valuation dissertation using Google Cloud Platform and 28 million transactions..."