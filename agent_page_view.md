Perfect ⚡️— this is exactly how a **senior AI engineer** thinks when aligning architecture, dev experience, and delivery clarity.
We’ll now finalize your **deployment strategy + agentic terminal page plan + overall project narrative**, so you can confidently present it to Jamie or the AI Engineering panel.

---

# 🧭 Final Project Overview — *Mini Banking Assistant (Shawbrook Demo)*

---

## 🚀 1️⃣  Project Summary

> **Goal:** Build a secure, modular AI-powered Banking Assistant capable of understanding user queries, retrieving relevant account/product data, and generating clear, compliant responses — with both **backend-only (API)** and **frontend (terminal UI)** interaction modes.

This system demonstrates how Shawbrook could integrate an **AI assistant layer** into existing infrastructure — combining *deterministic validation*, *safe generative reasoning*, and *modular design*.

---

## 🧱 2️⃣  Deployment Architecture (Split Model — Production-Grade)

You’re adopting the **split deployment** (Model B) — frontend runs separately, backend stack runs independently with its own NGINX reverse proxy.

```
                ┌──────────────────────────────────────┐
                │          Public Internet              │
                └────────────────┬─────────────────────┘
                                 │
                      ┌──────────▼──────────┐
                      │   yuriodev.co.uk    │  ← existing website
                      │ (Tailwind + Vite UI)│
                      └──────────┬──────────┘
                                 │
                    HTTPS (CORS enabled)
                                 │
                    ┌────────────▼─────────────┐
                    │ api.yuriodev.co.uk       │  ← backend subdomain
                    │ NGINX Reverse Proxy      │
                    ├────────────┬─────────────┤
                    │  FastAPI Backend (8000)  │  ← exposes Swagger (password-protected)
                    │  AI Engine (8500)        │
                    └────────────┴─────────────┘
```

### ✅ What this gives you:

* 🔒 Security → backend and engine not directly exposed
* 🧩 Modularity → independent deployment lifecycle
* 🌐 API-first approach → both frontend and external clients can use it
* 🧠 Observability → you can monitor, log, and test via Swagger directly

---

## 🧠 3️⃣  Access Control for Jamie / Reviewers

You’ll share two testing options:

| Access Mode             | URL                                | Purpose                                                                  |
| ----------------------- | ---------------------------------- | ------------------------------------------------------------------------ |
| **Swagger UI**          | `https://api.yuriodev.co.uk/docs`  | For engineering review. Allows Jamie to test `/api/query` interactively. |
| **Agentic Terminal UI** | `https://yuriodev.co.uk/assistant` | For demo of user-facing experience.                                      |

**Security layer (Swagger):**

* Protect `/docs` and `/redoc` behind **basic auth** or API key.
* FastAPI middleware:

  ```python
  from fastapi import Depends, HTTPException, status
  from fastapi.security import HTTPBasic, HTTPBasicCredentials

  security = HTTPBasic()

  def authenticate(credentials: HTTPBasicCredentials = Depends(security)):
      if credentials.username != "jamie" or credentials.password != "secure_pass":
          raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)
  ```
* Apply dependency to `/docs` route or global middleware.

That gives Jamie **safe, private access** for validation — both UI and direct API interaction.

---

## 💬 4️⃣  Agentic Terminal Page — Functionality Plan

The **Terminal Page** is your public-facing demo of “how the assistant feels” — sleek, responsive, and reflective of intelligent system design.

### 🎯 Purpose

To simulate a *developer console-style* interaction with the banking assistant — clean, command-driven, validating user input before calling the backend.

---

### ⚙️ Functional Overview

| Feature                       | Description                                                             | Example                                               |
| ----------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------- |
| **Command Input Bar**         | User types query using structured or natural syntax                     | `> query --id 102 "When can I withdraw from my ISA?"` |
| **Auto Validation**           | Checks if command contains valid ID & non-empty text before calling API | Prevents malformed requests                           |
| **Visual Feedback**           | Shows `[PROCESSING]`, `[ASSISTANT]`, `[ERROR]` messages                 | Typewriter animation for realism                      |
| **Response Display**          | Renders backend response in terminal feed                               | “Your ISA matures on 14 March 2026.”                  |
| **Refusal Logic**             | Shows model refusal messages clearly                                    | “Sorry, I can only assist with Shawbrook accounts.”   |
| **Command History**           | Press ↑ / ↓ to navigate past queries                                    | Re-run previous requests quickly                      |
| **Session Controls**          | Commands like `help`, `clear`, `exit`                                   | Clear feed, display usage help                        |
| **Model Selector (optional)** | Choose between GPT, Claude, Gemini (dropdown or flag)                   | `--model claude`                                      |
| **Developer Mode (hidden)**   | Toggle raw JSON payload display                                         | For internal debugging                                |

---

### 🧩 Example User Flow

```
$ Connecting to Shawbrook AI Assistant...
[SYSTEM] Connection established.
> query --id 104 "What is the maturity date for my ISA?"
[PROCESSING] Fetching customer data...
[ASSISTANT] Your ISA will mature on 14 March 2026.

> query --id 104 "Write me a Python bubble sort"
[ERROR] Sorry, I can only assist with Shawbrook product-related queries.

> help
[SYSTEM] Commands available: query, clear, help, exit, model
> exit
[SYSTEM] Session terminated.
```

---

## 🧠 5️⃣  Backend + Engine Interaction Summary

| Stage                         | Component                                         | Role                                                       |
| ----------------------------- | ------------------------------------------------- | ---------------------------------------------------------- |
| **1️⃣ Input Validation**      | FastAPI + Pydantic                                | Ensures ID exists and query is valid                       |
| **2️⃣ Intent Classification** | Simple keyword or rule-based logic                | “maturity”, “withdraw”, “bonus” → route to correct handler |
| **3️⃣ Context Retrieval**     | Reads from `customers.json` + relevant `.md` file | Extracts product info and metadata                         |
| **4️⃣ LLM Processing**        | AI Engine (GPT/Claude/Gemini)                     | Generates compliant answer                                 |
| **5️⃣ Output Formatting**     | JSON with structured fields                       | `{ "answer": "...", "model": "Claude-3" }`                 |
| **6️⃣ Logging**               | `logs/requests.jsonl`                             | Timestamp, intent, latency, rejection reason if any        |

---

## 🧱 6️⃣  What the Project Will Deliver

| Deliverable                           | Description                                                                      |
| ------------------------------------- | -------------------------------------------------------------------------------- |
| **1. FastAPI Backend (secured)**      | Handles queries, validation, and AI orchestration. Swagger password-protected.   |
| **2. AI Engine Module**               | Abstracts GPT / Claude / Gemini API calls and prompt construction.               |
| **3. Agentic Terminal Frontend Page** | Interactive web terminal integrated into your main website.                      |
| **4. Dockerized Stack (backend)**     | NGINX reverse proxy + FastAPI + AI Engine ready to deploy to Hetzner.            |
| **5. Logging System**                 | Structured JSON logging for requests, rejections, and performance metrics.       |
| **6. Documentation (README)**         | Architecture explanation, setup guide, example queries, and future improvements. |

---

## 🧩 7️⃣  Final Talking Points (for Interview / Presentation)

> “We implemented the Mini Banking Assistant as a modular, containerized AI system with a clean separation between UI, API, and inference.
> The frontend lives on my main domain ([https://yuriodev.co.uk/assistant](https://yuriodev.co.uk/assistant)) for user interaction, while the backend and AI engine run independently on [https://api.yuriodev.co.uk](https://api.yuriodev.co.uk), behind an NGINX proxy.
> Reviewers can test both the terminal experience and the backend Swagger interface — both password-protected for security.
> The system demonstrates strong design judgment: stateless by default, fully validated inputs, safe AI responses, and production-ready deployment practices.”

---

✅ **Next Steps (Finalization Checklist)**

| Task                                                                 | Status     |
| -------------------------------------------------------------------- | ---------- |
| Create backend `docker-compose.yml` with nginx + backend + ai-engine | 🟢 Planned |
| Protect Swagger UI with HTTP Basic Auth                              | 🟢 Planned |
| Connect terminal frontend to `/api/query`                            | 🟢 Planned |
| Write README architecture + demo flow                                | 🟢 Next    |
| Deploy to Hetzner with domain `api.yuriodev.co.uk`                   | 🟢 Next    |

