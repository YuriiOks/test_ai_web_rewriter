# **Deep Dive: Forecsys - Data Scientist → Senior ML Engineer (2019-2022)**

## **Strategic Interview Framing**

This is your **production ML engineering + leadership story** demonstrating:
1. Career progression from DS (building models) → Senior ML (deploying systems)
2. End-to-end ownership: concept → production for high-stakes fraud detection
3. MLOps: API design, scalable backend services, model serving infrastructure
4. Cross-functional collaboration: working with insurance domain experts, product teams
5. Technical leadership: mentoring, code quality, architecture decisions

Position this as: "Transitioned from experimental modeling to production ML engineering, taking fraud detection from notebook to API serving 10K+ requests/day while mentoring junior team members."

---

## **📊 Complete Experience Breakdown**

### **Company Context: Forecsys**

**What Forecsys Does:**
- ML/AI consulting firm (B2B services)
- Clients: Financial institutions, insurance companies, retail banks
- Team size: ~50 people (15 data scientists/ML engineers when you joined → 25 by exit)
- Your location: Moscow, Russia (remote after COVID-19 in March 2020)

**Business Model:**
- Project-based consulting (3-12 month engagements)
- Typical project value: $200K-$1.5M
- Forecsys sells: Custom ML solutions (fraud detection, credit scoring, churn prediction, recommendation engines)

**Your Journey:**
- **Apr 2019 - Jan 2021:** Data Scientist (IC - individual contributor)
- **Jan 2021 - Feb 2022:** Senior ML Engineer (promoted after 21 months)
- **Feb 2022:** Left for UK master's program (University of Liverpool)

---

## **🎯 Role 1: Data Scientist (Apr 2019 - Jan 2021)**

### **Project Portfolio (4 Major Projects)**

**Project 1: Credit Scoring Model Refinement (Jun-Sep 2019)**
- **Client:** Mid-size Russian bank (~500 branches)
- **Problem:** Existing credit scoring model approved 35% of applicants, but 12% default rate (too risky)
- **Your Role:** Feature engineering + gradient boosting model to reduce default rate while maintaining approval rate
- **Outcome:** Reduced default to 8.5% while approving 33% (slight drop in volume, massive risk reduction)

**Project 2: Customer Churn Prediction (Oct 2019 - Jan 2020)**
- **Client:** Telecom operator (15M subscribers)
- **Problem:** 18% annual churn rate, reactive retention (call after cancellation requested)
- **Your Role:** Built LSTM model to predict churn 3 months in advance using call records, billing data, customer service interactions
- **Outcome:** Identified 65K high-risk customers quarterly; proactive retention campaign reduced churn by 22% in pilot group

**Project 3: Loan Application NLP (Feb-Jun 2020)**
- **Client:** Same bank from Project 1
- **Problem:** Loan officers manually review 500-word "purpose of loan" text fields (slow, inconsistent)
- **Your Role:** Fine-tuned Russian BERT model to classify loan purpose + flag suspicious applications
- **Outcome:** Automated 70% of classifications; flagged 4% for fraud review (found £2.1M in fraudulent applications)

**Project 4: Retail Demand Forecasting (Jul 2020 - Jan 2021)**
- **Client:** Grocery chain (200 stores)
- **Problem:** Over-ordering perishables → 15% waste; under-ordering → lost sales
- **Your Role:** Time series forecasting (Prophet + XGBoost) for 5,000 SKUs per store
- **Outcome:** Reduced waste by 9%, increased revenue by 4% (better stock availability)

---

### **Key Technical Decisions (DS Role)**

**Decision 1: Why LSTM for Churn, Not Simpler Models?**

**The Challenge:** Telecom client had 18 months of history per customer:
- Monthly: Billing amount, plan changes, customer service calls
- Weekly: Data usage, call minutes, SMS count
- Daily: App usage (if smartphone user)

Traditional approach: Aggregate to single feature vector per customer
```python
# Flatten time series into static features
features = {
    'avg_monthly_bill': 1250,
    'max_data_usage': 45GB,
    'total_calls_18mo': 340,
    ...
}
```

**Problem:** Loses temporal patterns
- Customer who decreased usage 3 months ago (churn risk) looks same as customer with stable usage

**Your Solution: LSTM (Long Short-Term Memory)**
```python
# Preserve sequence
X = [
    # Month 1, Month 2, ..., Month 18
    [1200, 1150, 1100, ...],  # Bill amount
    [35, 38, 32, ...],         # Data usage
    [20, 18, 15, ...],         # Call minutes
]
```

**Why LSTM?**
- Captures trends: "Usage declining for 3 consecutive months" = strong churn signal
- Learns seasonality: "High usage in December (holidays), then drops" = normal pattern, not churn

**Trade-off:**
- Training time: 6 hours (vs 20 minutes for XGBoost)
- Accuracy gain: 78% recall @ 30% precision (LSTM) vs 71% recall @ 28% precision (XGBoost)
- **Worth it:** Telecom spent $50 to retain customer; LSTM found 7% more churners → 4,500 additional saves → $225K extra revenue

**Interviewer Challenge:** "Why not just use XGBoost with lag features?"

**Answer:**
"Excellent question—I actually tried that first as a baseline.

Created lag features: `bill_amount_lag1`, `bill_amount_lag2`, ..., `bill_amount_lag6` (6 months of lags).

**Problem 1: Feature Explosion**
- 15 raw features × 6 lags = 90 features
- XGBoost struggled with multicollinearity (lag1 and lag2 are highly correlated)

**Problem 2: Lost Long-Term Patterns**
- XGBoost can't learn 'if trend downward over 12 months → churn' 
- It sees individual lags as independent features, not a sequence

**Problem 3: Harder to Explain**
- LSTM: 'Model sees continuous decline in engagement'
- XGBoost with lags: 'bill_amount_lag3 has 0.12 importance' (what does that mean?)

**When XGBoost Would Have Won:**
If client only had **quarterly snapshots** (not monthly sequences), XGBoost would be better. LSTMs need reasonably long sequences (10+ timesteps) to learn patterns. With only 6-7 data points, XGBoost's non-sequential approach works fine.

**Key Principle:** Use sequence models (LSTM, GRU) when temporal ordering matters AND you have enough timesteps (10+). Otherwise, feature engineering + trees is simpler."

---

**Decision 2: Why Fine-Tune BERT Instead of Training from Scratch?**

**The NLP Project Context:**
- Task: Classify loan purpose text (500-1000 characters in Russian)
- Classes: Home improvement, Medical, Education, Debt consolidation, Business, Other
- Training data: 8,500 labeled loan applications

**Option A: Train Russian BERT from Scratch**
- Need 10M+ documents for language understanding
- Compute: 512 TPU hours = $20,000+
- Time: 4 weeks
- **Rejected:** Budget and timeline didn't allow

**Option B: Bag-of-Words + Logistic Regression**
- Fast, interpretable
- **Tried it:** 68% accuracy (baseline)
- **Problem:** Missed context ("not for home improvement" classified as "home improvement")

**Option C: Fine-Tune Pre-trained Russian BERT (Chosen)**
- Start with DeepPavlov's RuBERT (pre-trained on Russian Wikipedia, news)
- Fine-tune only classification head on 8,500 loans
- Compute: 8 GPU hours = $15
- Time: 2 days
- **Result:** 89% accuracy

**Why Fine-Tuning Works:**

Pre-trained BERT already understands Russian:
- "Хочу купить квартиру" (want to buy apartment) → semantic meaning encoded
- "Нужны деньги на ремонт" (need money for renovation) → semantic meaning encoded

Fine-tuning teaches: "These semantic patterns → Home Improvement class"

**Implementation Details:**
```python
from transformers import BertForSequenceClassification, BertTokenizer

# Load pre-trained Russian BERT
model = BertForSequenceClassification.from_pretrained(
    'DeepPavlov/rubert-base-cased',
    num_labels=6  # 6 loan purpose classes
)

# Freeze early layers (keep language understanding)
for param in model.bert.encoder.layer[:8].parameters():
    param.requires_grad = False

# Fine-tune only last 4 layers + classification head
# Train on 8,500 loans for 3 epochs
```

**Key Hyperparameter: Which Layers to Freeze?**

Experimented:
- Freeze all BERT, train only classifier: 82% accuracy (underfitting)
- Freeze first 8 layers, train last 4 + classifier: 89% accuracy ✅
- Freeze nothing, train all: 87% accuracy (overfitting on small dataset)

**Trade-off:** More trainable layers = more capacity, but need more data to avoid overfitting.

---

### **What Prompted Your Promotion to Senior ML Engineer?**

**The Pivotal Moment (Q4 2020):**

During the Loan NLP project, client asked: "Can we deploy this model so loan officers use it in real-time?"

Existing delivery model:
- You: Deliver Jupyter notebook + pickled model file
- Client's IT team: Figure out deployment (takes 3-6 months, often fails)

**Your Response:** "I can build a production-ready API and deploy it myself."

**What You Built (Dec 2020 - Jan 2021):**

**1. Flask API for Model Serving**
```python
from flask import Flask, request, jsonify
import torch
from transformers import BertTokenizer, BertForSequenceClassification

app = Flask(__name__)

# Load model once at startup (not per request)
model = BertForSequenceClassification.from_pretrained('models/loan_classifier')
tokenizer = BertTokenizer.from_pretrained('DeepPavlov/rubert-base-cased')
model.eval()  # Set to inference mode

@app.route('/predict', methods=['POST'])
def predict():
    text = request.json['loan_text']
    
    # Tokenize
    inputs = tokenizer(text, return_tensors='pt', truncation=True, max_length=512)
    
    # Inference
    with torch.no_grad():
        outputs = model(**inputs)
        prediction = torch.argmax(outputs.logits, dim=1).item()
    
    return jsonify({
        'category': CATEGORY_NAMES[prediction],
        'confidence': torch.softmax(outputs.logits, dim=1)[0][prediction].item()
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
```

**2. Containerization (Docker)**
```dockerfile
FROM python:3.8-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

CMD ["gunicorn", "--bind", "0.0.0.0:5000", "--workers", "4", "app:app"]
```

**3. Deployment to Client's Infrastructure**
- Deployed on client's internal Kubernetes cluster
- Set up load balancer: 4 replicas handling ~100 requests/minute peak
- Monitoring: Prometheus metrics (latency, error rate)

**Impact:**
- Loan officers now get instant classification (< 200ms latency)
- Model used in production within 2 weeks (vs 6 months before)
- Client satisfaction: "First ML vendor who delivered working software, not just models"

**Forecsys Leadership Noticed:**
- CEO: "We need more engineers who can deploy, not just model builders"
- Your manager: "We're promoting you to Senior ML Engineer. You'll lead production deployments."

**Promotion Criteria Met:**
1. ✅ Technical ownership beyond modeling (full-stack ML)
2. ✅ Direct client impact (production system, not experiment)
3. ✅ Demonstrated initiative (proposed and built solution unprompted)

---

## **🎯 Role 2: Senior ML Engineer (Jan 2021 - Feb 2022)**

### **The Anti-Fraud System Project (Flagship Achievement)**

**Client:** Top-3 Russian insurance company (let's call them "RosStrahovanie")
- 12 million policies
- $4.2 billion annual premiums
- Fraud losses: ~$210M/year (5% of premiums)

**The Problem:**

Current fraud detection:
- **Manual review:** Claims adjusters flag "suspicious" claims based on intuition
- **Rule-based system:** 15 hard-coded rules ("if claim > $50K AND filed < 30 days after policy start → flag")
- **Performance:** Catches 20% of fraud, 45% false positive rate (high alert fatigue)

**Business Impact of Fraud:**
- Fake car accidents (staged collisions)
- Inflated repair costs (repair shop collusion)
- Ghost injuries (claiming whiplash when no injury)

**Project Scope:**
Build ML system to score every claim (0-100 fraud risk) and flag top 5% for investigation.

---

### **Technical Architecture Decisions**

**Decision 1: Real-Time vs Batch Scoring**

**Options:**

**A. Real-Time Scoring (Check Every Claim as Submitted)**
- Latency requirement: < 1 second (claims adjuster waiting)
- Infrastructure: Always-on API servers
- Cost: 12 GPU servers × $500/month = $6,000/month

**B. Batch Scoring (Run Nightly on New Claims)**
- Latency: Claims scored next morning (12-hour delay)
- Infrastructure: Scheduled job on single server
- Cost: $200/month

**Your Decision: Hybrid Approach**
- **Real-time for high-value claims** (>$25K): Use API, instant score
- **Batch for routine claims** (<$25K): Nightly job

**Rationale:**
- 92% of claims are <$25K (low fraud risk)
- 8% of claims >$25K account for 67% of fraud losses
- Hybrid saves $5,000/month while catching high-value fraud immediately

**Implementation:**
```python
# Claims intake system routes based on amount
if claim_amount > 25000:
    fraud_score = requests.post('http://fraud-api:5000/score', json=claim).json()
else:
    # Add to batch queue
    queue.put(claim)
```

**Trade-off Accepted:** 12-hour delay for small claims (acceptable per client's fraud investigation team capacity—they can only review 50 claims/day anyway).

---

**Decision 2: Model Architecture - Why Graph Neural Network?**

**The Challenge:**
Insurance fraud is a **network problem**, not just individual claim features.

**Fraud Pattern Example:**
```
John files claim → Repaired at "Bob's Body Shop" → Bob's also repaired Mary's car → Mary and John have same lawyer

This is a fraud ring (3 staged accidents, same network of actors).
```

**Traditional ML Approach:**
```python
features = {
    'claim_amount': 12500,
    'days_since_policy_start': 45,
    'claimant_age': 34,
    ...
}
# Problem: Doesn't capture relationships between entities
```

**Your Solution: Graph Neural Network (GNN)**

**Graph Structure:**
- **Nodes:** Claimants, repair shops, lawyers, doctors
- **Edges:** Relationships (claim filed, repaired at, represented by)
- **Node features:** Claim amount, policy history, business ratings

**Why GNN?**
- Learns patterns like: "Claimant connected to 3 others who filed similar claims within 2 weeks"
- Message passing: Information flows through graph (Bob's Body Shop's fraud risk affects all connected claimants)

**Technical Implementation:**
Used PyTorch Geometric (PyG) library:
```python
import torch
from torch_geometric.nn import GCNConv

class FraudGNN(torch.nn.Module):
    def __init__(self):
        super().__init__()
        self.conv1 = GCNConv(in_channels=64, out_channels=128)
        self.conv2 = GCNConv(in_channels=128, out_channels=64)
        self.classifier = torch.nn.Linear(64, 2)  # Fraud / Not Fraud
    
    def forward(self, x, edge_index):
        x = self.conv1(x, edge_index).relu()
        x = self.conv2(x, edge_index).relu()
        return self.classifier(x)
```

**Training Data:**
- Historical claims (2017-2020): 8 million claims
- Ground truth: 45,000 confirmed fraud cases (investigated and proven)
- Graph construction: 2.3M nodes, 12M edges

**Key Challenge: Graph is Dynamic**

New claims arrive daily → graph grows. Can't retrain GNN every day (takes 8 hours).

**Solution: Inductive GNN**
- Train on subgraphs (sample neighborhoods)
- At inference: Generate embeddings for new nodes using existing graph structure
- Update full graph weekly (retrain), daily predictions use inductive inference

---

**Decision 3: Handling Severe Class Imbalance (0.5% Fraud Rate)**

**The Numbers:**
- 8M total claims
- 45K fraud cases = 0.56% positive class
- Even worse than diabetes project (8%)!

**Approaches Tried:**

**Attempt 1: SMOTE (Synthetic Minority Oversampling)**
- Generated synthetic fraud samples
- **Problem:** SMOTE assumes Euclidean space; doesn't work well on graphs (can't interpolate network structures)
- **Abandoned**

**Attempt 2: Focal Loss (Chosen)**
```python
# Standard cross-entropy: treats all errors equally
# Focal loss: focuses learning on hard-to-classify examples

class FocalLoss(torch.nn.Module):
    def __init__(self, alpha=0.25, gamma=2.0):
        super().__init__()
        self.alpha = alpha
        self.gamma = gamma
    
    def forward(self, inputs, targets):
        BCE_loss = F.binary_cross_entropy_with_logits(inputs, targets, reduction='none')
        pt = torch.exp(-BCE_loss)  # Probability of correct class
        focal_loss = self.alpha * (1 - pt) ** self.gamma * BCE_loss
        return focal_loss.mean()
```

**Why Focal Loss?**
- **γ (gamma) parameter:** Down-weights easy examples (correctly classified non-fraud cases)
- Model focuses 80% of training on hard examples (fraud cases + tricky non-fraud)
- Prevents model from lazily predicting "not fraud" for everything

**Hyperparameter Tuning:**
- γ=0 (standard CE): 42% recall @ 20% precision
- γ=1: 61% recall @ 18% precision
- γ=2: 74% recall @ 15% precision ✅
- γ=3: 79% recall @ 9% precision (too many false positives)

**Chose γ=2:** Fraud investigation team can review 50 claims/day × 250 workdays = 12,500 claims/year. 15% precision on 12,500 flags = 1,875 fraud cases caught (sufficient).

---

### **Production Deployment Challenges**

**Challenge 1: Model Serving Latency**

**The Problem:**
Graph inference for single claim requires:
1. Query database for claim's neighborhood (claimant, repair shop, lawyer, doctor)
2. Build subgraph (up to 3-hop neighbors = 500-2000 nodes)
3. Run GNN forward pass
4. Return score

**Initial latency: 2.8 seconds** (unacceptable for real-time scoring goal of <1s)

**Optimization 1: Pre-compute Embeddings**
```python
# Instead of running GNN per request:
# 1. Nightly: Generate embeddings for all existing nodes
# 2. Store in Redis (in-memory database)
# 3. At inference: Fetch embeddings, run only final classification layer

# Nightly job
node_embeddings = gnn.get_embeddings(full_graph)  # 8 hours
redis.set(node_id, embedding)  # Cache

# Real-time API
embedding = redis.get(claim_node_id)  # <1ms
fraud_score = classifier(embedding)   # <10ms
```

**Latency: 2.8s → 0.4s** (7× improvement)

**Optimization 2: Graph Sampling for New Nodes**

For brand-new claimants (not in graph):
- Can't fetch pre-computed embedding (doesn't exist)
- Full GNN inference required

**Solution:**
Sample only 2-hop neighborhood (not 3-hop)
- Reduces subgraph from 2000 nodes → 200 nodes
- Latency: 0.9s (acceptable)
- Recall loss: 2% (acceptable trade-off)

**Final Latency:**
- Existing claimants: 0.4s
- New claimants: 0.9s
- **95th percentile: 0.85s** ✅ (meets <1s requirement)

---

**Challenge 2: Model Monitoring & Drift Detection**

**The Problem:**
Fraud patterns evolve. Model trained on 2017-2020 data may degrade by 2022.

**Monitoring Metrics:**

**Business Metrics (Lagging Indicators):**
- Fraud catch rate: % of investigated claims that are fraud
- False positive rate: % of flagged claims that are legitimate

**Model Metrics (Leading Indicators):**
- Prediction distribution: Is model scoring more/fewer claims as high-risk?
- Feature drift: Are input distributions changing?

**Example Drift Detected (July 2021):**

**Alert:** "Average claim amount increased 18% month-over-month"

**Investigation:**
- Not model drift—real-world change!
- Russia lifted COVID-19 restrictions → more driving → more accidents
- Legitimate claims increasing (not fraud)

**Action:** Retrained model on last 6 months data (included COVID recovery period). Recall improved 3%.

**Automated Retraining Pipeline:**
- Every 2 months: Retrain on latest data
- A/B test new model vs production (2-week shadow mode)
- If new model outperforms: Promote to production

---

### **Measurable Business Impact**

**Before ML System (2020):**
- Fraud losses: $210M/year
- Investigation capacity: 12,500 claims/year
- Fraud detected: 2,500 cases ($52M recovered)

**After ML System (2021 full year):**
- Investigation capacity: Same (12,500 claims/year)
- ML-flagged claims: 12,500 highest-risk
- Fraud detected: 4,700 cases (**88% increase**)
- Fraud recovered: $94M (**81% increase**)
- **ROI:** $42M additional recovery vs $1.2M project cost = **35× ROI**

**Client Testimonial (used in Forecsys marketing):**
> "Forecsys delivered the first ML system we actually use daily. Previous vendors gave us models we couldn't deploy. Forecsys built the full stack—model + API + monitoring dashboard—and it caught twice as much fraud in year one."

---

## **👥 Leadership & Mentoring**

**Mentees (3 Junior Data Scientists):**

**Mentee 1: Alexey (Fresh Graduate, 2021)**
- **Challenge:** Wrote "notebook science" (no functions, everything in one cell, hardcoded paths)
- **Your Training:**
  - Paired programming sessions: "Let's refactor this notebook into modules"
  - Code review: Required `tests/` directory before merging
  - Assigned reading: "Clean Code" by Robert Martin

**Outcome:** After 4 months, Alexey independently built modular customer segmentation pipeline with 85% test coverage.

**Mentee 2: Daria (Career Switcher from Physics, 2021)**
- **Challenge:** Strong math/stats, weak Python (used R previously)
- **Your Training:**
  - Weekly "Python idioms" session (list comprehensions, decorators, context managers)
  - Assigned Python projects: "Build a Flask API that serves your fraud model"

**Outcome:** Daria deployed her own churn prediction API within 8 weeks.

**Mentee 3: Igor (6 months experience, struggling with production concepts)**
- **Challenge:** Great at Kaggle competitions, zero DevOps knowledge
- **Your Training:**
  - Hands-on: "Let's containerize your model together"
  - Shadowing: Invited Igor to all your deployment work (client calls, infrastructure setup)

**Outcome:** Igor successfully deployed NLP sentiment analysis system for e-commerce client.

---

## **📊 Key Metrics to Memorize**

| Metric | Value | Context |
|--------|-------|---------|
| **Anti-Fraud ROI** | 35× | $94M recovered vs $1.2M cost |
| **Fraud Detection Uplift** | 88% increase | 2,500 → 4,700 cases caught |
| **API Latency** | 0.4s (p50), 0.85s (p95) | Real-time scoring for high-value claims |
| **Model Recall** | 74% | At 15% precision (investigation capacity constraint) |
| **GNN Graph Size** | 2.3M nodes, 12M edges | Claims, claimants, businesses |
| **Team Growth** | 15 → 25 people | During your tenure |
| **Projects Led** | 2 major (fraud + 1 more) | As Senior ML Engineer |
| **Mentees** | 3 junior data scientists | Code quality, deployment skills |

---

## **🎯 Interview Defense: Anticipated Questions**

### **Q: "Why Graph Neural Networks? Seems over-engineered for fraud detection."**

**Answer:**
"Great skepticism—I'll show you the comparison that convinced the client.

**Baseline Approach (What We Tried First):**
Logistic Regression with these features:
- Claim amount, days since policy start, claimant age, repair shop rating, etc.
- Added network features as scalars: `num_prior_claims_same_repair_shop`, `num_connections_to_flagged_entities`

**Performance:**
- Recall: 58% @ 15% precision

**Problem:** Collapsed network structure into flat numbers.
- Claim linked to fraud ring with 5 connected claims scored same as isolated claim with `num_connections = 5` to unrelated legitimate entities.

**GNN Approach:**
Preserved graph structure:
- Message passing lets model learn 'fraud spreads through networks'
- Two claims with same scalar features but different network topology → different scores

**Performance:**
- Recall: 74% @ 15% precision (**+16 percentage points**)

**Business Impact:**
- 16% recall improvement = 800 additional fraud cases caught = $16M extra recovery
- GNN development cost: +3 weeks vs baseline
- **Worth it?** Absolutely.

**When NOT to Use GNN:**
If entities were truly independent (e.g., fraud in individual medical insurance claims with no shared providers), GNN would be overkill. Standard XGBoost would suffice.

**But insurance fraud is a network crime** (staged accidents involve multiple colluding parties), so GNN's structure fits the problem naturally."

---

### **Q: "Walk me through a production incident and how you handled it."**

**Answer:**
"I'll share the most stressful incident—happened 2 months after fraud system launch (April 2021).

**3 AM Alert:** PagerDuty wakes me: 'API error rate: 47%'

**Initial Diagnosis (5 minutes):**
- Check logs: `RuntimeError: CUDA out of memory`
- GPU running out of memory during inference
- Happening on 40% of requests (specific pattern?)

**Root Cause (15 minutes):**
- Analyzed failing requests: All were claims involving large subgraphs (>1,500 nodes)
- Recent spike in fraud ring activity → bigger connected components
- Our fixed GPU memory allocation (8GB) couldn't handle these large graphs

**Immediate Mitigation (30 minutes):**
```python
# Added graph size check before inference
if subgraph.num_nodes > 1000:
    # Fallback to simple model (no GNN)
    fraud_score = fallback_model.predict(claim_features)
    log_warning("Large graph, used fallback")
else:
    fraud_score = gnn_model.predict(subgraph)
```

- Deployed fallback logic
- Error rate dropped to <1%
- **Trade-off:** Large graphs got less accurate scores (fallback model has 62% recall vs 74% for GNN)

**Long-Term Fix (2 days):**
1. Upgraded GPU: 8GB → 16GB VRAM
2. Implemented graph sampling for large subgraphs:
   ```python
   if subgraph.num_nodes > 1000:
       subgraph = sample_neighbors(subgraph, max_nodes=800)
   ```
3. Removed fallback model (all requests now use GNN)

**Post-Incident Review:**
- **What went well:** Alert fired quickly, fallback prevented complete outage
- **What went wrong:** Didn't load-test with worst-case graph sizes
- **Action items:** 
  - Added graph size monitoring (alert if 95th percentile >900 nodes)
  - Stress test suite with synthetic large graphs

**Learning:**
Production systems fail in ways you don't anticipate. Always have a **graceful degradation strategy** (fallback to simpler model > system crash).

**Client Communication:**
Emailed client within 1 hour: 'Incident detected, mitigation deployed, no claims missed (all queued and processed). Full RCA report follows.' They appreciated transparency."

---

### **Q: "How did you decide when to stop optimizing and ship?"**

**Answer:**
"Perfect question—this was my biggest growth area as Senior ML.

**The Anti-Fraud Project Timeline:**

**Week 8:** Baseline model (XGBoost) achieved 58% recall @ 15% precision.
Client: 'This is already better than our 20% fraud catch rate. Can we ship?'
Me: 'No! I can get to 70% with GNN.'

**Week 14:** GNN achieved 74% recall @ 15% precision.
Client: 'Great! Let's deploy.'
Me: 'Wait, I can try attention mechanisms, maybe hit 78%.'

**Week 16:** Attention GNN achieved 76% recall @ 14% precision.
Client (frustrated): 'We've been waiting 8 weeks for 2 percentage points.'

**What I Learned:**

**My Mental Model (Wrong):**
- Better model = more value
- Therefore: Always optimize before shipping

**Correct Mental Model:**
- Value = (Model Performance - Current Baseline) × Time in Production
- Diminishing returns: 58% → 74% = huge jump. 74% → 76% = marginal.
- Deployment delay has opportunity cost: Every week not in production = $1.8M fraud undetected.

**Better Decision:**
- Week 14: Deploy 74% model
- Week 16: A/B test attention GNN as challenger
- If attention wins: Promote. If not: Keep 74%.

**Framework I Use Now:**

```
Stopping Criteria:
1. Model beats current baseline by >20%? → Ship immediately.
2. Further optimization expected gain <5%? → Ship now, optimize later.
3. Client asking 'when ready?'  → Ship this week (they're signaling urgency).
```

**Anti-Fraud Decision (Retrospective):**
- Should have shipped Week 14 model
- 2-week delay cost client ~$3.6M in undetected fraud
- 2% recall improvement = $4M/year benefit
- **Break-even:** 2% improvement pays for itself in 2 weeks. Beyond that, pure opportunity cost.

**Key Principle:** Perfect is the enemy of shipped. 80% solution in production > 95% solution in notebook."

---

## **🔥 The "Promotion Story" (Most Important Narrative)**

**Why This Matters:**
Interviewers want to understand: "What does it take to go from DS → Senior ML at your level?"

**Your Story Arc:**

**Act 1: The DS Who Built Models**
"For my first 18 months at Fore