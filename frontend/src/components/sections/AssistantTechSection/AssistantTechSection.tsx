import React from 'react';
import styles from './AssistantTechSection.module.css';

const AssistantTechSection: React.FC = () => {
  return (
    <section id="tech-stack" className={styles.sectionFullwidthShaded}>
      <div className={styles.sectionContentWrapper}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Technology Stack</h2>
          <p className={styles.sectionSubtitle}>
            Production-grade architecture with modern AI/ML technologies
          </p>
        </div>

        <div className={styles.techGrid}>
          <div className={styles.techItem}>
            <div className={styles.techIcon}>⚛️</div>
            <div className={styles.techLabel}>Frontend</div>
            <div className={styles.techValue}>React 19 + TypeScript</div>
            <div className={styles.techDesc}>Modern UI with type safety</div>
          </div>

          <div className={styles.techItem}>
            <div className={styles.techIcon}>⚡</div>
            <div className={styles.techLabel}>Backend</div>
            <div className={styles.techValue}>FastAPI + Python</div>
            <div className={styles.techDesc}>High-performance async API</div>
          </div>

          <div className={styles.techItem}>
            <div className={styles.techIcon}>🤖</div>
            <div className={styles.techLabel}>AI Engine</div>
            <div className={styles.techValue}>GPT-5 / Gemini-2.5 / Claude-4.5</div>
            <div className={styles.techDesc}>Multi-model support</div>
          </div>

          <div className={styles.techItem}>
            <div className={styles.techIcon}>🐳</div>
            <div className={styles.techLabel}>Deployment</div>
            <div className={styles.techValue}>Docker + NGINX</div>
            <div className={styles.techDesc}>Containerized architecture</div>
          </div>

          <div className={styles.techItem}>
            <div className={styles.techIcon}>🔒</div>
            <div className={styles.techLabel}>Security</div>
            <div className={styles.techValue}>Basic Auth + CORS</div>
            <div className={styles.techDesc}>Protected endpoints</div>
          </div>

          <div className={styles.techItem}>
            <div className={styles.techIcon}>🌐</div>
            <div className={styles.techLabel}>API Endpoint</div>
            <div className={styles.techValue}>api.yuriodev.co.uk</div>
            <div className={styles.techDesc}>RESTful interface</div>
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className={styles.architectureSection}>
          <h3 className={styles.architectureTitle}>
            <span className={styles.terminalPrompt}>$ cat ./architecture.txt</span>
          </h3>
          <div className={styles.architectureDiagram}>
            <pre className={styles.diagramContent}>
{`
┌────────────────────────────────────────────────────────────────────┐
│                     USER INTERACTION LAYER                         │
│                   yuriodev.co.uk/assistant                         │
│                  (React 19 + TypeScript UI)                        │
│                                                                    │
│  • Terminal Interface    • Theme Support    • Command History      │
│  • Input Validation      • Auto-scroll      • Error Handling       │
└─────────────────────────────────┬──────────────────────────────────┘
                                  │
                          HTTPS + CORS Enabled
                                  │
                                  ▼
┌────────────────────────────────────────────────────────────────────┐
│                      REVERSE PROXY LAYER                           │
│                      api.yuriodev.co.uk                            │
│                       (NGINX Gateway)                              │
│                                                                    │
│  • SSL/TLS Termination   • Load Balancing   • Rate Limiting        │
│  • Request Routing       • Security Headers • CORS Config          │
└─────────────────────────────────┬──────────────────────────────────┘
                                  │
                                  ▼
┌────────────────────────────────────────────────────────────────────┐
│                       BACKEND API LAYER                            │
│                   FastAPI Application (Port 8000)                  │
│                                                                    │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  Request Validation (Pydantic)                               │  │
│  │  • Customer ID validation    • Query sanitization            │  │
│  │  • Schema enforcement        • Type checking                 │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                 │                                  │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  Data Retrieval Layer                                        │  │
│  │  • customers.json lookup     • Product data access           │  │
│  │  • ISA/Bond information      • Account details               │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                 │                                  │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  Intent Classification                                       │  │
│  │  • Query analysis            • Context extraction            │  │
│  │  • Domain verification       • Refusal logic                 │  │
│  └──────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────┬──────────────────────────────────┘
                                  │
                                  ▼
┌────────────────────────────────────────────────────────────────────┐
│                        AI ENGINE LAYER                             │
│                   Inference Service (Port 8500)                    │
│                                                                    │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  Multi-Model Support                                         │  │
│  │  • GPT-5 (OpenAI)           • Gemini-2.5 Pro (Google)        │  │
│  │  • Claude-4.5-Haiku (Anthropic)                              │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                 │                                  │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  Prompt Engineering                                          │  │
│  │  • System prompts            • Context injection             │  │
│  │  • Safety constraints        • Domain boundaries             │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                 │                                  │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  Response Processing                                         │  │
│  │  • Output formatting         • JSON serialization            │  │
│  │  • Error handling            • Logging & metrics             │  │
│  └──────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────┘`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssistantTechSection;
