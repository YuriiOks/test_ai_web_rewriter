# **Deep Dive: Resume Parser & Job Matcher Platform**

## **Strategic Interview Framing**

This is your **strongest full-stack architecture story** demonstrating:
1. Strategic pivot from failing approach (regex) to hybrid solution (LLM + heuristics)
2. Polyglot persistence justified by query patterns
3. Measurable client impact (75% time-to-hire reduction)
4. Cross-functional collaboration (HR team, junior engineer mentorship)

---

## **📊 Complete Project Specification**

### **Business Context**

**The Client Need:**
HR Tech company processing 2,000-5,000 CVs monthly for recruitment agencies. Manual screening process:
- Recruiter reads CV (3-5 minutes per CV)
- Extracts: skills, years of experience, education, location
- Matches against job requirements
- 40+ hours/week spent on initial screening alone
- High error rate (fatigue, inconsistency between recruiters)
- Slow turnaround (candidates wait 5-7 days for feedback)

**Business Goals:**
- Reduce time-to-hire by 50%+
- Increase accuracy of candidate-job matching
- Scale without proportionally increasing headcount
- Handle 50K CVs/day capacity (10× current volume for growth)

---

## **🏗️ Architecture Evolution: The Pivot Story**

### **Initial Approach: Rule-Based NER + Regex (Days 1-4)**

**The Strategy:**
Use spaCy NER (Named Entity Recognition) + custom regex patterns to extract structured data.

**What We Built:**

Extraction pipeline with layers:
1. PyMuPDF extracts text + layout coordinates from PDFs
2. spaCy identifies entities (PERSON, ORG, DATE, GPE)
3. Custom regex for emails, phones, URLs
4. Heuristic section detection (keywords like "Experience", "Education")
5. Pattern matching for dates, job titles, degree names

**The Failure Point (Day 4):**

Testing on 50 diverse CVs revealed catastrophic accuracy:

**Experience Section Extraction:**
- Accuracy: 68% (34/50 CVs correctly identified all positions)
- Failures: 
  - Non-standard headers ("Career History", "Professional Background")
  - Merged sections ("Experience & Achievements")
  - Bullet points without dates
  - Freelance work described differently than employment

**Education Parsing:**
- Accuracy: 72% (36/50 CVs)
- Failures:
  - International degrees (Bachelor vs Licence vs Licenciatura)
  - Incomplete information ("University of X" without degree type)
  - Online courses mixed with formal education
  - PhD candidates listing "In Progress"

**Skills Extraction:**
- Accuracy: 45% (disastrous)
- Failures:
  - Skills embedded in sentences ("Experienced with Python for data analysis")
  - Synonyms (JavaScript vs JS vs ECMAScript)
  - Context-dependent (is "Java" the language or island?)
  - Skill proficiency levels not captured

**The Realization:**

Meeting with project manager on Day 4:
- PM: "We need 90%+ accuracy for production launch."
- Me: "With current approach, I'd need 3-4 more weeks to reach maybe 80%."
- PM: "Can we make it work faster?"

Analysis of time investment:
- Already spent 32 hours building regex patterns
- Each new edge case = 2-3 hours of pattern refinement
- Diminishing returns (each fix breaks something else)
- Maintenance nightmare (every CV format variant needs new rules)

**Decision Point:** Continue iterating on failing approach OR pivot to new strategy?

---

### **The Strategic Pivot: Hybrid LLM Approach (Day 5)**

**New Strategy:**

Combine strengths of both approaches:
- **Regex:** High-precision patterns for structured data (email, phone, URLs)
- **Layout Analysis:** PyMuPDF block coordinates for section detection
- **LLM:** Context understanding for complex parsing (experience, education, skills)

**Why This Works:**

| Task | Best Tool | Reason |
|------|-----------|--------|
| Extract email | Regex | Perfect precision, instant |
| Find section boundaries | Layout analysis | Visual structure is reliable |
| Parse "5 years as Senior Engineer at Company X" | LLM | Understands context, handles variations |
| Identify skills in prose | LLM | Semantic understanding needed |
| Normalize dates | Regex + post-processing | Pattern matching works well |

**Cost-Benefit Analysis Presented to PM:**

| Approach | Dev Time | API Cost/CV | Accuracy | Maintainability |
|----------|----------|-------------|----------|-----------------|
| Pure Regex | 4-6 weeks | $0 | 75-80% | High burden |
| Pure LLM | 1 week | $0.05 | 85-90% | Low burden |
| Hybrid | 2 weeks | $0.02 | 92-95% | Low burden |

Decision: **Hybrid approach approved**

---

## **🎯 Technical Architecture Details**

### **Document Processing Pipeline**

**Stage 1: File Ingestion**
- Accept PDF, DOCX, DOC formats
- PyMuPDF for PDFs (extracts text blocks with coordinates)
- python-docx for Word documents
- Validate file size (max 5MB), scan for malware signatures
- Generate unique document ID, store original file in S3-compatible storage

**Stage 2: Layout Analysis (PDF only)**
- Extract text blocks with bounding box coordinates
- Sort blocks by Y-position (top to bottom), then X-position (left to right)
- Apply heuristics to identify sections:
  - Headers: All caps, larger font size, position near left margin
  - Section keywords: "Experience", "Education", "Skills" (with fuzzy matching)
  - Visual separators: Horizontal lines, significant whitespace gaps
- Create section map: {"Experience": [blocks 5-12], "Education": [blocks 13-15]}

**Stage 3: Hybrid Extraction**

For contact details (high precision needed):
- Regex patterns for email, phone, LinkedIn URL
- Validate with format checking (email has @ and domain, phone has country code)
- Extract from entire document (not section-dependent)

For experience section:
- Send section text to Gemini with structured prompt
- Prompt includes: schema definition, 3 example inputs/outputs, instructions to return JSON
- Parse LLM response, validate against Pydantic schema
- Retry with error correction if validation fails (max 2 retries)

For education section:
- Similar LLM approach with education-specific schema
- Post-process: normalize degree levels (Bachelor/BS/BSc → "bachelors")
- Validate graduation dates (must be in past, sensible range 1950-2025)

For skills section:
- LLM extracts skills list
- Post-process: deduplicate synonyms using fuzzy matching
- Categorize skills: programming languages, frameworks, tools, soft skills
- Use curated skill taxonomy (2,000+ normalized skill names)

**Stage 4: Data Transformation**
- Convert Document Processor output format to canonical backend schema
- Enrich with computed fields:
  - Total years of experience (sum of all position durations)
  - Career progression indicators (title changes, salary growth)
  - Education level ranking (PhD > Masters > Bachelors > None)
- Validate against canonical schema using Pydantic

**Stage 5: Persistence**
- Store structured metadata in PostgreSQL (indexed, queryable)
- Store full parsed document JSON in MongoDB (flexible schema, fast retrieval)
- Link records: PostgreSQL row has mongo_doc_id foreign key

---

## **🔥 The Hybrid Database Decision**

### **The Query Pattern Problem**

Recruiters need two very different query types:

**Type 1: Structured Filtering (Fast, Specific)**
```text
Find candidates:
- Skills: Python AND (Django OR Flask)
- Experience: 5+ years
- Education: Bachelors or higher
- Location: London OR Remote
- Exclude: Current students

Expected: <100ms response time
Volume: 500-1000 queries/day
```

**Type 2: Full Document Retrieval (Complete Data)**
```text
Show candidate profile:
- Return ALL parsed fields
- Display original formatting where possible
- Include metadata (when processed, confidence scores)

Expected: <200ms response time
Volume: 200-300 retrievals/day
```

### **Options Evaluated**

**Option 1: PostgreSQL Only (with JSONB)**

Pros:
- Single database to manage
- ACID transactions
- Mature, well-understood

Cons tested in benchmarks:
- JSONB queries on nested skills arrays: 400-800ms for complex filters
- Index bloat (need GIN index on JSONB, large overhead)
- Schema rigidity (changing structure requires migration)

**Option 2: MongoDB Only**

Pros:
- Flexible schema
- Fast document retrieval
- Good for nested data

Cons tested in benchmarks:
- Compound queries across multiple fields: 200-500ms
- No enforced schema (bugs harder to catch)
- Weaker consistency guarantees

**Option 3: Hybrid PostgreSQL + MongoDB**

Pros proven in testing:
- PostgreSQL queries on structured fields: 60-120ms (5× faster than JSONB)
- MongoDB full document retrieval: 20-40ms
- Right tool for each job

Cons:
- Operational complexity (two databases)
- Data consistency challenges (must keep in sync)
- Transaction coordination needed

### **The Defense to PM/Stakeholders**

"Here's the trade-off:

**Complexity Cost:**
- Two databases to monitor, backup, scale
- Need to ensure PostgreSQL record creation and MongoDB insert succeed together
- More moving parts = more potential failure modes

**Performance Benefit:**
- Recruiter does 50 searches/hour during peak times
- 500ms delay × 50 searches = 25 seconds wasted per hour
- 100ms delay × 50 searches = 5 seconds wasted per hour
- 20 seconds saved per hour × 8 hours × 5 recruiters = 13 minutes/day
- Over a month: 13 min × 20 workdays = 260 minutes = **4.3 hours saved**

**Business Impact:**
- Current hourly rate for recruiters: £30/hour
- Time saved: 4.3 hours/month = £129/month
- Database hosting cost difference: £15/month
- Net benefit: £114/month, £1,368/year

**Plus:** System scales to 50K CVs/day without query degradation (tested)."

Decision: Hybrid approach approved.

---

## **📈 Technical Challenges & Solutions**

### **Challenge 1: Data Consistency Across Two Databases**

**The Problem:**
```text
Timeline of failure case:
1. Insert into PostgreSQL succeeds (ID: 12345)
2. Network hiccup
3. Insert into MongoDB fails
4. PostgreSQL has record, MongoDB doesn't
5. Recruiter clicks candidate → 404 error (can't find mongo_doc_id)
```

**Solution: Transaction Coordinator Pattern**

Implementation approach without showing code:
- Wrap both operations in try-except
- If PostgreSQL succeeds but MongoDB fails:
  - Delete PostgreSQL record (rollback)
  - Return error to client
  - Log failure for investigation
- If MongoDB succeeds but PostgreSQL fails:
  - Delete MongoDB document
  - Return error to client
- Both succeed: commit transaction, return success
- Implement idempotency (retry-safe with unique document ID)

**Result:** Zero inconsistency cases in 6 months production (50K CVs processed).

---

### **Challenge 2: LLM Hallucinations**

**The Problem:**

LLM inventing information not in CV:
- CV states: "Worked at Google"
- LLM returns: "Senior Software Engineer at Google, Mountain View, CA"
  - Added fake title (not stated)
  - Added fake location (not stated)

**Detection Approach:**

Post-processing validation:
- Extract all named entities from original CV text
- Check if LLM output contains entities NOT in original
- Flag for manual review if mismatch detected
- Confidence scoring: lower confidence if many unverifiable claims

**Prompt Engineering:**

Explicit instructions in system prompt:
- "ONLY extract information explicitly stated in the text"
- "If a field is not mentioned, use null rather than inferring"
- "Do not add details like location, job level, or salary unless directly stated"
- Include 2-3 examples showing correct behavior (null for missing fields)

**Result:** Hallucination rate dropped from 12% to 1.8% (measured on 500-CV test set).

---

### **Challenge 3: Skill Normalization Chaos**

**The Problem:**

Same skill written 20 different ways:
- JavaScript, Javascript, JS, ECMAScript, ES6, ES2015, Node.js, React (uses JS)
- Python, python, Python3, Py, python3.9

Recruiter searches "JavaScript" → misses candidates who wrote "JS"

**Solution: Skill Taxonomy + Fuzzy Matching**

Built curated skill taxonomy:
- 2,000+ canonical skill names
- Each canonical skill has aliases (JavaScript: [JS, ECMAScript, ES6, ...])
- Categories: Languages, Frameworks, Databases, Cloud, DevOps, Soft Skills

Normalization pipeline:
- LLM extracts raw skills from CV
- Fuzzy match each raw skill against taxonomy (Levenshtein distance)
- If distance < 2 edits: map to canonical name
- If uncertain: flag for manual review, add to taxonomy
- Store both: original text (for display) + canonical ID (for search)

**Result:**
- Search recall improved from 65% to 94%
- Example: Search "Python" now finds "python", "Python3", "py" variants

---

### **Challenge 4: PDF Layout Complexity**

**The Problem:**

CVs with complex layouts break text extraction:
- Two-column layouts: text order scrambled
- Tables: cells extracted out of sequence
- Text boxes: positioned arbitrarily
- Headers/footers: repeated on every page

**Solution: Layout-Aware Extraction**

PyMuPDF provides block coordinates, exploit this:
- Sort blocks by Y-coordinate (top to bottom) THEN X-coordinate (left to right)
- Detect column layouts: if blocks cluster into vertical groups, process column-wise
- Filter noise: remove headers/footers (blocks repeated across pages)
- Table detection: identify grid-like block arrangements, preserve row order

Fallback strategy:
- If layout detection fails (confidence < 0.7): send full text to LLM without sections
- LLM is more robust to scrambled text than rule-based extraction
- Trade-off: slower processing (one large LLM call vs targeted section calls) but accurate

**Result:** Layout-aware extraction handled 92% of CVs correctly (vs 68% with naive extraction).

---

## **🤝 Collaboration Stories**

### **Working with HR Team (Non-Technical Stakeholders)**

**Weekly Validation Sessions:**

Process:
- Every Friday: HR team reviews 20 randomly sampled parsed CVs
- Compare parsed data against original CV
- Mark errors: Missing information, hallucinations, incorrect categorization
- Discuss patterns: "Many CVs write experience as bullet points without job titles"

**Key Insight from HR Feedback:**

HR Manager: "Your system marks 'Microsoft Office' as a technical skill. For us, that's baseline—we filter for technical roles, Office proficiency is assumed. Can we exclude it?"

Action taken:
- Built configurable skill filters
- Default filter: exclude basic skills (MS Office, Email, Internet)
- Recruiter can customize per job posting

Impact: Reduced noise in search results by 30%.

---

### **Mentoring Junior Engineer**

**The Situation:**
Junior engineer tasked with building evaluation harness (measure accuracy at scale).

**My Approach:**

Initial Discussion (1 hour):
- Me: "What metrics matter for measuring extraction accuracy?"
- Junior: "Maybe... percentage of fields filled?"
- Me: "Good start, but think about quality. If we extract a phone number incorrectly, is that better or worse than leaving it blank?"
- Junior: "Worse—wrong data is dangerous."
- Me: "Exactly. So we need precision (correctness) and recall (completeness). Let's define both."

Design Review (30 minutes):
- Junior presents design doc
- I ask questions: "What if ground truth is missing?" "How do you handle partial matches?"
- Identify edge cases together
- Junior revises design

Code Review:
- First PR: 200 lines, I leave 40 comments (detailed)
- Focus on: error handling, test coverage, code organization
- Explain WHY for each comment, not just WHAT

Outcome:
- Junior's evaluation harness became production tooling
- Used for regression testing on every model update
- Junior presented findings to stakeholders (confidence boost)

---

### **Presenting to C-Suite (Non-Technical Executives)**

**The Challenge:**
CTO wanted detailed technical update. CEO wanted business impact. Same meeting.

**My Approach:**

Structure presentation in layers:
1. **Executive Summary (2 slides):** 75% time-to-hire reduction, cost savings, client satisfaction
2. **How It Works (1 slide, no jargon):** "AI reads CVs like humans do, extracts key facts, stores for instant search"
3. **Technical Deep Dive (5 slides, optional):** Architecture, accuracy metrics, scalability proof

**Key Slide for CEO:**

Before vs After comparison:
- Before: 40 hours/week manual screening, 5-7 day turnaround, £30/hour cost
- After: 2 hours/week review (only edge cases), 1-day turnaround, £0.02/CV cost
- ROI: £1,200/week labor saved, £62K/year

CEO question: "What if the AI makes a mistake and we reject a good candidate?"

My answer: "Great question. We never auto-reject. System ranks candidates, recruiter reviews top 50. Worst case: good candidate ranked #51 instead of #5—still screened, just lower priority. We built this as an augmentation tool, not replacement."

---

## **📊 Key Metrics to Memorize**

| Metric | Value | Measurement Method |
|--------|-------|-------------------|
| **Classification Accuracy** | 93% F1 | 500-CV labeled test set, 13 role classes |
| **Processing Speed** | <3s per CV | End-to-end: upload → parsed JSON |
| **Time-to-Hire Reduction** | 75% | Client reported: 7 days → 1.75 days average |
| **Throughput Capacity** | 50K CVs/day | Load test: sustained for 2 hours |
| **Search Query Latency** | 80ms p95 | PostgreSQL complex filters, 10K candidate DB |
| **Document Retrieval Latency** | 35ms p95 | MongoDB full document fetch |
| **Cost per CV** | $0.02 | Gemini API ($0.015) + compute ($0.005) |

---

## **🎯 Interview Defense: Key Questions**

### **Q: "Why not just use PostgreSQL JSONB instead of MongoDB?"**

"We benchmarked this extensively. Here's what we found:

**Test Setup:**
- 10,000 candidate database
- Query: Find candidates with 5+ years experience, Python skills, Bachelors degree, in London

**PostgreSQL JSONB:**
- Query time: 420ms average
- Index size: 2.3GB (GIN index on JSONB columns)
- Update cost: 180ms (reindex JSONB on skill list update)

**Hybrid (PostgreSQL + MongoDB):**
- Query time: 75ms average (indexed columns in PostgreSQL)
- Full document retrieval: 28ms from MongoDB
- Update cost: 45ms (update structured fields) + 12ms (replace MongoDB doc)

**Total latency for 'search + view profile' workflow:**
- JSONB: 420ms + 420ms = 840ms (query, then fetch same row again for full data)
- Hybrid: 75ms + 28ms = 103ms

**User Experience Impact:**
Recruiter does 50 'search → view profile' cycles per hour. 
- JSONB: 840ms × 50 = 42 seconds waiting
- Hybrid: 103ms × 50 = 5.15 seconds waiting
- **Saved: 37 seconds per hour, 5 minutes per day per recruiter**

**Trade-off:**
Yes, we manage two databases. But recruiter time costs £30/hour. Even saving 5 minutes/day = £2.50/day = £50/month per recruiter. MongoDB hosting costs £15/month. For 5 recruiters, we save £235/month while spending £15/month extra. Net: £220/month benefit.

PM approved the complexity because the math was clear."

---

### **Q: "What would you do differently if rebuilding from scratch?"**

"Three things:

**1. Start with LLM Hybrid from Day 1:**
I wasted 4 days on pure regex approach. If I'd done a quick prototype with LLM on Day 1, I would've seen its superiority immediately. Lesson: validate assumptions quickly, pivot early.

**2. Build Evaluation Harness First:**
We built it in Week 3 after noticing accuracy issues. Should've been Week 1. Having automated accuracy measurement would've caught the regex issues faster. Principle: instrumentation before optimization.

**3. Simpler Database for MVP:**
MongoDB-only would've been fine for first 1,000 CVs. We could've validated product-market fit, then added PostgreSQL when query performance mattered. We over-engineered for scale we didn't have yet. Lesson: optimize when pain is felt, not predicted.

**What I'd Keep:**
The hybrid LLM approach was brilliant. 93% accuracy with 2 weeks dev time vs 80% with 6 weeks on pure regex. That pivot saved the project."

---

## **🎯 Final Positioning**

This project demonstrates:
1. **Strategic Thinking:** Recognized failing approach early, pivoted decisively
2. **Architecture Skills:** Justified polyglot persistence with benchmarks and ROI
3. **Collaboration:** Worked with HR team, mentored junior engineer, presented to executives
4. **Business Impact:** 75% time-to-hire reduction, measurable cost savings

Use this project when:
- Discussing architectural trade-offs
- Demonstrating ability to pivot from failing approach
- Showing cross-functional collaboration skills
- Need to prove business impact, not just technical chops

This is your strongest "full-stack architecture with measured business ROI" story.