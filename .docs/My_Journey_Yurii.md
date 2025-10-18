# **Yurii Oksamytnyi // My Career Story**
### A Product-Driven Approach to AI Engineering

> I'm a **Senior AI Engineer and Systems Architect** who architects and delivers production-grade, intelligent automation systems. My path has been a decade-long evolution from first-principles mathematics and low-level systems programming to designing and deploying the full-stack, AI-native applications that businesses need today. I believe the best solutions are born at the intersection of deep technical understanding, pragmatic engineering, and a relentless focus on solving the user's core problem.

---

### **Chapter 1: The Foundation - From Chaos Theory to CoreML**

My journey began not with web apps, but with the raw fundamentals. As a teenager, I was fascinated by the mathematics of complex systems, which led me to building simulations of non-linear dynamic systems like the Lorenz attractor using older languages like **Delphi**. This taught me to think from first principles.

At university, this evolved into building hardcoded software for high-load systems using **C++**, which gave me a deep appreciation for performance and efficiency. During this time, I noticed the elegance of **Python**, but the industry was buzzing with the hype of mobile, so I dove into **Swift** and iOS development.

I built numerous iOS applications, but I found myself getting bored with just connecting interfaces. The real breakthrough came when I worked with **CoreML** on image recognition tasks. That was the spark. I realized my passion wasn't just in building apps, but in building the *intelligence* inside them. That realization was the catalyst for my full transition into the world of AI and Machine Learning.

---

### **Chapter 2: The Architect in Practice - Case Studies in AI System Design**

My philosophy is best demonstrated through the systems I've built. Here are a few case studies that showcase how I approach complex challenges, navigate setbacks, and deliver high-impact, production-grade AI solutions.

---

#### **Case Study 1: The Proactive AI Agent (A "Digital Twin")**

*   **F (First Line Hook):** My most recent project was to design and deploy a full-stack, RAG-enhanced "Proactive AI Agent" that functions as a "digital twin," synthesizing a user's multi-modal data to deliver intelligent, personalized daily optimizations.

*   **A (Add Context):** The challenge was intentionally open-ended: "build something small that feels good to use" from a dataset of a user's calendar, location, app usage, and personal notes. My goal was to move beyond a simple chatbot and architect a system that could genuinely *anticipate* a user's needs, solving a core problem I identified in the data: technology-induced sleep disruption.

*   **S (Share Your Action):** I architected a complete, end-to-end system from first principles.
    1.  **The Brain (Agentic Core):** I rejected monolithic frameworks like LangChain and instead built a custom **MCP (Model-Controller-Parser)** agent in Python. The **Controller** orchestrates a two-step LLM chain: a fast call to **Gemini Flash** to generate a precise search query from a vague user prompt, followed by a deeper reasoning step with a more powerful model.
    2.  **The Memory (RAG Pipeline):** I built a RAG pipeline to give the agent a long-term memory. I used a `Sentence-Transformer` model to embed the user's personal notes into a **ChromaDB** vector store. The crucial challenge here was the **chunking strategy**. My initial "broad section" chunking failed catastrophically in testing. My "genius solution" was to re-engineer the ingestion script to use a granular, header-based chunking logic, which increased retrieval precision from near-zero to over 95%.
    3.  **The Backend (API & Data):** I built a high-performance **FastAPI** backend to serve the agent. A key decision was a **dual-database strategy**: using **SQLite with SQLAlchemy** for structured, factual data (like decision logs) and ChromaDB for unstructured, semantic knowledge.
    4.  **The Interface & Deployment:** I built a real-time user interface with **Next.js, TypeScript, and Tailwind CSS**. The entire multi-service application (ingestion, backend, frontend) was containerized with **Docker** and orchestrated with `docker-compose`. I solved a critical startup race condition between the frontend and backend using a custom entrypoint script with health checks. The final product was deployed to a live URL, served securely via **NGINX**.

*   **T (Tell the Result):** The result was a fully functional, deployed prototype that could proactively offer suggestions (like a "Smart Notification Shield" to protect sleep), manage context across a multi-turn conversation, and provide full transparency into its reasoning via a "Knowledge Explorer." The entire project, from EDA to live deployment, was documented in an 89-commit git history and a multi-page technical report.

> **The Challenge & The "Genius Solution":**
> The RAG pipeline initially failed catastrophically during testing; specific queries returned zero relevant results. I diagnosed that my initial "broad section" chunking strategy was semantically "drowning out" specific details. **My solution was to re-engineer the ingestion script to use a granular, header-based chunking logic.** This transformed the knowledge base into smaller, highly focused chunks, which increased retrieval precision from near-zero to over 95% and was the key to making the agent truly intelligent.

---

#### **Case Study 2: The AI Sales Agent (`SaleSphereAI`)**

*   **F (First Line Hook):** I acted as the Founding AI Architect for a stealth-mode startup, designing a multi-agent microservices system to automate sales communications and dramatically increase conversion rates.

*   **A (Add Context):** The business problem was that small business owners were being overwhelmed by repetitive customer queries from multiple platforms (Avito, Telegram, etc.), leading to slow responses and lost revenue. The system needed to centralize these communications and provide instant, accurate answers 24/7.

*   **S (Share Your Action):** I designed the entire system architecture. My key "genius solution" here was to implement a **multi-agent workflow** rather than a single monolithic agent.
    1.  **The Architecture:** The system is built on a microservices architecture using **FastAPI**, with **PostgreSQL** for persistent storage and **Redis** as a high-speed message broker for asynchronous task processing.
    2.  **The Multi-Agent System:**
        *   A central **"Router Agent"** receives all incoming messages. Its sole job is to perform intent classification to understand what the user is asking (e.g., "stock availability," "delivery options").
        *   Based on the intent, it routes the query to one of several specialized **"Response Agents."** For example, the "Delivery Agent" has access to shipping cost tables, while the "Stock Agent" has access to the inventory database (initially a Google Sheet for the MVP).
    3.  **The Human Handoff:** I designed an intelligent "fallback" mechanism. If any agent's confidence score was low, or if the user's intent was "complex," the system would automatically pause and send a notification to a human manager via a Telegram bot, providing the full context for a seamless takeover.

*   **T (Tell the Result):** The MVP was a massive success. By providing instant, accurate responses to over 80% of incoming queries, the system freed up hours of the business owners' time and led to a **200% increase in sales conversion** for our initial beta clients.


> **The Challenge & The "Genius Solution":**
> The initial challenge was ensuring the system was reliable and could respond to platform webhooks instantly without getting bogged down by slow AI responses. **My solution was to decouple the system using Redis as a message queue.** The incoming webhook endpoint would simply validate the request and push a job to the queue, returning a `200 OK` in milliseconds. Separate, scalable worker processes would then consume from this queue to perform the heavy AI processing asynchronously. This made the system incredibly robust and scalable.


---

#### **Case Study 3: The Resume Parser & Matching Engine**

*   **F (First Line Hook):** I delivered an enterprise-grade resume parsing and job matching platform for an HR Tech client, architecting an AI-powered engine that reduced manual screening time by over 75%.
*   **A (Add Context):** The client needed to process thousands of CVs and job descriptions in various formats (PDF, DOCX) and accurately match candidates to open roles. The system had to be fast, accurate, and handle a wide variety of document layouts.
*   **S (Share Your Action):** I architected a full-stack, multi-service system with a clean separation of concerns.
    1.  **The Services:** The system featured a **Document Processing Service** (using PyMuPDF and the Gemini API for hybrid layout analysis), an **NLP Classification Service** (using a fine-tuned Sentence-Transformer), and a **Matching Engine Service**.
    2.  **The Backend:** All services were orchestrated by a central **FastAPI** backend.
    3.  **The Frontend:** I built a responsive, multi-lingual, and fully accessible user interface using **Next.js, TypeScript, and Tailwind CSS.**
*   **T (Tell the Result):** The final system was a huge success. The classification model achieved a **93% F1 score**, and the end-to-end pipeline could process a new CV and return the top 5 job matches in under 3 seconds, leading to a **75% reduction in time-to-hire** for the client.

> **The Challenge & The "Genius Solution":**
> The core architectural challenge was balancing the need for fast, structured queries (e.g., "find all candidates with 5+ years of Python experience") with the need to store large, unstructured text from the original CVs. **My solution was to implement a hybrid database backend.** We used **PostgreSQL** for all the structured, filterable metadata, and **MongoDB** to store the full, unstructured JSON output from the parsing process. This gave us the best of both worlds: lightning-fast relational queries and the flexibility of a document store.

---

#### **Case Study 4: The UK Property Valuation Platform**

*   **F (First Line Hook):** I led the technical development for a Master's dissertation project, building a sophisticated platform to predict UK property prices using machine learning and large-scale geospatial data.
*   **A (Add Context):** The project required processing over **60GB** of disparate data from 1995-2023, including historical property sales, crime statistics, transportation hubs, and economic indicators. The goal was to build and evaluate multiple predictive models and visualize the results on interactive maps.
*   **S (Share Your Action):**
    1.  **Cloud Infrastructure:** The dataset was far too large for local processing. I architected the entire data pipeline on **Google Cloud Platform (GCP)**, using **BigQuery** to efficiently clean, merge, and query the massive datasets.
    2.  **The Models:** I implemented, trained, and evaluated five different models, from Linear Regression to **XGBoost, LightGBM, and an RNN**, to compare their performance.
    3.  **The Software:** I engineered two reusable Python packages: `housedatautils` for data loading and analysis, and `housemodels` for the ML models themselves.
*   **T (Tell the Result):** We successfully delivered a complete, end-to-end data science project. The Decision Tree model proved to be the most effective, achieving **94% accuracy** within a 10% error margin on the test set. The project demonstrated a systematic approach to large-scale ML, from data ingestion on the cloud to final model evaluation.

> **The Challenge & The "Genius Solution":**
> The primary technical hurdle was the constant crashing of the local machine due to the 60GB+ dataset size. My **solution was to design and implement an asynchronous, multi-layered caching system.** The `BaseDataLoader` class I built would first attempt to load a small, cached `pickle` file. If that failed, it would try a larger `parquet` file. Only if both failed would it trigger the expensive, full data processing pipeline. This caching strategy **boosted the data loading and processing run time by approximately 50x**, making iterative development possible.

### **Chapter 3: My Philosophy - The AI-Native Architect**

My approach to engineering is defined by a few core principles:

1.  **Architect, Then Build.** I believe that a few hours of careful planning and system design saves weeks of debugging and refactoring. My workflow always starts with a clear plan, often co-developed with an AI assistant, to define the architecture, data models, and milestones before a single line of production code is written.
2.  **Pragmatism Over Perfection.** While I have a tendency towards deep, complex solutions, I've learned that the goal is to **ship features that solve user problems.** This means building in small, incremental slices, using feature flags, and prioritizing momentum and learning over creating a perfect, monolithic masterpiece.
3.  **AI as a Co-Pilot, Not a Crutch.** My entire workflow is "AI-Native." I use AI assistants as a partner for everything from scaffolding a new service to generating test cases and refactoring code. This isn't about replacing engineering judgment; it's about multiplying my speed and allowing me to focus my human intellect on the most critical architectural and product decisions.
4.  **Ownership, End-to-End.** I am most effective when I can own a problem from the initial user insight all the way to the deployed, monitored solution. I believe that a true engineer is responsible not just for writing the code, but for the performance, reliability, and business impact of that code in production.

---

**Let's connect and build something exceptional together.**