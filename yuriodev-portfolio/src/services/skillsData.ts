/**
 * Skills Data - Technical Expertise Taxonomy
 * Aligned with CV and LinkedIn (October 2025)
 */

export interface Skill {
  id: number;
  title: string;
  level: string;
  progress: number;
  details: string[];
  highlight?: string;
}

// ============================================
// TYPED SKILLS DATA (Used by SkillTerminal)
// ============================================

export type SkillTagType = 
  | 'framework'      // Agentic frameworks, orchestration tools
  | 'database'       // Databases, vector stores
  | 'model'          // LLMs, ML models
  | 'language'       // Programming languages
  | 'cloud'          // Cloud platforms, infrastructure
  | 'tool'           // Development tools, libraries
  | 'concept'        // Patterns, architectures, methodologies
  | 'metric';        // Performance metrics, achievements

export interface SkillDetail {
  name: string;
  type: SkillTagType;
}

export interface SkillWithTypes {
  id: number;
  title: string;
  progress: number;
  details: SkillDetail[];
  highlight: { text: string; type: SkillTagType };
}

export const skillsDataTyped: SkillWithTypes[] = [
  {
    id: 1,
    title: "agentic_systems.py",
    progress: 100,
    details: [
      { name: "LangGraph", type: "framework" },
      { name: "LangChain", type: "framework" },
      { name: "MCP", type: "framework" },
      { name: "A2A", type: "framework" },
      { name: "Multi-Agent", type: "concept" },
      { name: "ReAct", type: "concept" },
      { name: "Reflexion", type: "concept" },
    ],
    highlight: { text: "Agentic Architect", type: "metric" },
  },
  {
    id: 2,
    title: "rag_pipelines.py",
    progress: 100,
    details: [
      { name: "ChromaDB", type: "database" },
      { name: "Pinecone", type: "database" },
      { name: "Weaviate", type: "database" },
      { name: "pgvector", type: "database" },
      { name: "ElasticSearch", type: "database" },
      { name: "LlamaIndex", type: "framework" },
      { name: "Context Window", type: "concept" },
      { name: "Prompt Engineering", type: "concept" },
    ],
    highlight: { text: "Advanced RAG", type: "metric" },
  },
  {
    id: 3,
    title: "llm_operations.py",
    progress: 100,
    details: [
      { name: "Gemini API", type: "model" },
      { name: "OpenAI GPT", type: "model" },
      { name: "Anthropic Claude", type: "model" },
      { name: "Structured Output", type: "concept" },
      { name: "PEFT/LoRA", type: "concept" },
      { name: "Guardrails AI", type: "tool" },
      { name: "Function Calling", type: "concept" },
      { name: "Streaming", type: "concept" },
    ],
    highlight: { text: "Production LLMs", type: "metric" },
  },
  {
    id: 4,
    title: "deep_learning.py",
    progress: 100,
    details: [
      { name: "PyTorch", type: "framework" },
      { name: "Transformers", type: "model" },
      { name: "Sentence-BERT", type: "model" },
      { name: "ViT", type: "model" },
      { name: "CNNs", type: "model" },
      { name: "Mixed Precision", type: "concept" },
      { name: "Transfer Learning", type: "concept" },
    ],
    highlight: { text: "Custom Architectures", type: "metric" },
  },
  {
    id: 5,
    title: "ml_classical.py",
    progress: 100,
    details: [
      { name: "Scikit-learn", type: "framework" },
      { name: "XGBoost", type: "framework" },
      { name: "LightGBM", type: "framework" },
      { name: "Feature Engineering", type: "concept" },
      { name: "Time Series", type: "concept" },
      { name: "SHAP", type: "tool" },
      { name: "Hyperparameter Tuning", type: "concept" },
    ],
    highlight: { text: "Predictive Modeling", type: "metric" },
  },
  {
    id: 6,
    title: "fastapi_microservices.py",
    progress: 100,
    details: [
      { name: "FastAPI", type: "framework" },
      { name: "PostgreSQL", type: "database" },
      { name: "MongoDB", type: "database" },
      { name: "Redis", type: "database" },
      { name: "OAuth2", type: "concept" },
      { name: "Async/Await", type: "concept" },
      { name: "API Design", type: "concept" },
    ],
    highlight: { text: "Scalable APIs", type: "metric" },
  },
  {
    id: 7,
    title: "cloud_native_gcp.sh",
    progress: 100,
    details: [
      { name: "GCP", type: "cloud" },
      { name: "BigQuery", type: "database" },
      { name: "AWS Bedrock", type: "cloud" },
      { name: "Snowflake", type: "database" },
      { name: "Kubernetes", type: "tool" },
      { name: "Lambda", type: "cloud" },
      { name: "Serverless", type: "concept" },
    ],
    highlight: { text: "Cloud Architecture", type: "metric" },
  },
  {
    id: 8,
    title: "devops_mlops.yaml",
    progress: 100,
    details: [
      { name: "Docker", type: "tool" },
      { name: "GitHub Actions", type: "tool" },
      { name: "CI/CD", type: "concept" },
      { name: "LangSmith", type: "tool" },
      { name: "MLflow", type: "tool" },
      { name: "W&B", type: "tool" },
      { name: "Model Monitoring", type: "concept" },
    ],
    highlight: { text: "End-to-End MLOps", type: "metric" },
  },
  {
    id: 9,
    title: "data_engineering.py",
    progress: 100,
    details: [
      { name: "Pandas", type: "tool" },
      { name: "NumPy", type: "tool" },
      { name: "ETL Pipelines", type: "concept" },
      { name: "Kafka", type: "tool" },
      { name: "RabbitMQ", type: "tool" },
      { name: "GDPR Compliance", type: "concept" },
      { name: "Data Validation", type: "concept" },
    ],
    highlight: { text: "Real-Time Pipelines", type: "metric" },
  },
  {
    id: 10,
    title: "full_stack_dev.tsx",
    progress: 100,
    details: [
      { name: "React", type: "framework" },
      { name: "TypeScript", type: "language" },
      { name: "Next.js", type: "framework" },
      { name: "Tailwind CSS", type: "tool" },
      { name: "Streamlit", type: "tool" },
      { name: "SSE/WebSockets", type: "concept" },
      { name: "Responsive Design", type: "concept" },
    ],
    highlight: { text: "Interactive UIs", type: "metric" },
  },
];

// ============================================
// LEGACY SKILLS DATA (Used by SkillsSection)
// ============================================

export const skillsData: Skill[] = [
  {
    id: 1,
    title: "agentic_systems.py",
    level: "EXPERT",
    progress: 100,
    details: ["LangGraph", "LangChain", "MCP", "A2A", "Multi-Agent", "ReAct", "Reflexion"],
    highlight: "Agentic Architect",
  },
  {
    id: 2,
    title: "rag_pipelines.py",
    level: "EXPERT",
    progress: 100,
    details: ["ChromaDB", "Pinecone", "Weaviate", "pgvector", "ElasticSearch", "LlamaIndex", "Context Window", "Prompt Engineering"],
    highlight: "Advanced RAG",
  },
  {
    id: 3,
    title: "llm_operations.py",
    level: "EXPERT",
    progress: 100,
    details: ["Gemini API", "OpenAI GPT", "Anthropic Claude", "Structured Output", "PEFT/LoRA", "Guardrails AI", "Function Calling", "Streaming"],
    highlight: "Production LLMs",
  },
  {
    id: 4,
    title: "deep_learning.py",
    level: "EXPERT",
    progress: 100,
    details: ["PyTorch", "Transformers", "Sentence-BERT", "ViT", "CNNs", "Mixed Precision", "Transfer Learning"],
    highlight: "Custom Architectures",
  },
  {
    id: 5,
    title: "ml_classical.py",
    level: "EXPERT",
    progress: 100,
    details: ["Scikit-learn", "XGBoost", "LightGBM", "Feature Engineering", "Time Series", "SHAP", "Hyperparameter Tuning"],
    highlight: "Predictive Modeling",
  },
  {
    id: 6,
    title: "fastapi_microservices.py",
    level: "EXPERT",
    progress: 100,
    details: ["FastAPI", "PostgreSQL", "MongoDB", "Redis", "OAuth2", "Async/Await", "API Design"],
    highlight: "Scalable APIs",
  },
  {
    id: 7,
    title: "cloud_native_gcp.sh",
    level: "EXPERT",
    progress: 100,
    details: ["GCP", "BigQuery", "AWS Bedrock", "Snowflake", "Kubernetes", "Lambda", "Serverless"],
    highlight: "Cloud Architecture",
  },
  {
    id: 8,
    title: "devops_mlops.yaml",
    level: "EXPERT",
    progress: 100,
    details: ["Docker", "GitHub Actions", "CI/CD", "LangSmith", "MLflow", "W&B", "Model Monitoring"],
    highlight: "End-to-End MLOps",
  },
  {
    id: 9,
    title: "data_engineering.py",
    level: "EXPERT",
    progress: 100,
    details: ["Pandas", "NumPy", "ETL Pipelines", "Kafka", "RabbitMQ", "GDPR Compliance", "Data Validation"],
    highlight: "Real-Time Pipelines",
  },
  {
    id: 10,
    title: "full_stack_dev.tsx",
    level: "EXPERT",
    progress: 100,
    details: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Streamlit", "SSE/WebSockets", "Responsive Design"],
    highlight: "Interactive UIs",
  },
];


