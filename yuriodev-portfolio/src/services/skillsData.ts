/**
 * Skills Data - Technical Expertise Taxonomy
 * Updated from CV (October 2025)
 */

export type ProficiencyLevel = 'expert' | 'advanced' | 'proficient';

export interface SkillItem {
  name: string;
  proficiency: ProficiencyLevel;
  highlighted?: boolean;
}

export interface SkillSubcategory {
  title: string;
  items: SkillItem[];
}

export interface SkillCategory {
  id: number;
  category: string;
  icon: string;
  subcategories: SkillSubcategory[];
}

// Legacy interface for backward compatibility
export interface Skill {
  id: number;
  title: string;
  level: string;
  progress: number;
  details: string[];
  highlight?: string;
}

export const skillsCategories: SkillCategory[] = [
  {
    id: 1,
    category: "AI & Agentic Engineering",
    icon: "🤖",
    subcategories: [
      {
        title: "Agentic Frameworks & Orchestration",
        items: [
          { name: "LangGraph", proficiency: "expert", highlighted: true },
          { name: "LangChain", proficiency: "expert", highlighted: true },
          { name: "Model Context Protocol (MCP)", proficiency: "expert", highlighted: true },
          { name: "Multi-Agent Systems", proficiency: "expert" },
          { name: "ReAct Patterns", proficiency: "expert" },
          { name: "Agent State Management", proficiency: "expert" },
        ],
      },
      {
        title: "RAG & Retrieval Systems",
        items: [
          { name: "ChromaDB", proficiency: "expert", highlighted: true },
          { name: "LlamaIndex", proficiency: "expert" },
          { name: "Hybrid Search (Semantic + Keyword)", proficiency: "expert" },
          { name: "Chunking Strategies", proficiency: "expert" },
          { name: "Embedding Models", proficiency: "expert" },
          { name: "Retrieval Optimization", proficiency: "expert" },
        ],
      },
      {
        title: "LLMs & Foundation Models",
        items: [
          { name: "Google Gemini API", proficiency: "expert", highlighted: true },
          { name: "OpenAI GPT-4", proficiency: "expert" },
          { name: "Prompt Engineering", proficiency: "expert" },
          { name: "Few-Shot Learning", proficiency: "expert" },
          { name: "Model Fine-tuning (PEFT/LoRA)", proficiency: "advanced" },
          { name: "LLM Evaluation", proficiency: "expert" },
        ],
      },
      {
        title: "Deep Learning & PyTorch",
        items: [
          { name: "PyTorch", proficiency: "expert", highlighted: true },
          { name: "Transformers", proficiency: "expert" },
          { name: "Vision Transformers (ViT)", proficiency: "advanced" },
          { name: "Custom Neural Architectures", proficiency: "expert" },
          { name: "Mixed Precision Training", proficiency: "advanced" },
          { name: "GPU Optimization", proficiency: "advanced" },
        ],
      },
      {
        title: "Classical ML & Data Science",
        items: [
          { name: "Scikit-learn", proficiency: "expert" },
          { name: "XGBoost", proficiency: "expert" },
          { name: "LightGBM", proficiency: "expert" },
          { name: "Feature Engineering", proficiency: "expert" },
          { name: "Time Series Forecasting", proficiency: "advanced" },
          { name: "Statistical Analysis", proficiency: "advanced" },
        ],
      },
      {
        title: "MLOps & Model Deployment",
        items: [
          { name: "Model Serving", proficiency: "expert" },
          { name: "A/B Testing", proficiency: "advanced" },
          { name: "Model Monitoring", proficiency: "advanced" },
          { name: "LangSmith Observability", proficiency: "advanced", highlighted: true },
          { name: "Performance Optimization", proficiency: "expert" },
          { name: "Load Testing", proficiency: "advanced" },
        ],
      },
      {
        title: "NLP & Document Processing",
        items: [
          { name: "PyMuPDF", proficiency: "expert" },
          { name: "Sentence Transformers", proficiency: "expert" },
          { name: "Named Entity Recognition", proficiency: "advanced" },
          { name: "Text Classification", proficiency: "expert" },
          { name: "Semantic Search", proficiency: "expert" },
          { name: "Document Understanding", proficiency: "expert" },
        ],
      },
    ],
  },
  {
    id: 2,
    category: "System Architecture & Design",
    icon: "🏗️",
    subcategories: [
      {
        title: "Microservices & API Design",
        items: [
          { name: "FastAPI", proficiency: "expert", highlighted: true },
          { name: "RESTful APIs", proficiency: "expert" },
          { name: "GraphQL", proficiency: "advanced" },
          { name: "Microservices Architecture", proficiency: "expert", highlighted: true },
          { name: "Event-Driven Architecture", proficiency: "expert" },
          { name: "API Gateway Patterns", proficiency: "advanced" },
        ],
      },
      {
        title: "Databases & Data Storage",
        items: [
          { name: "PostgreSQL", proficiency: "expert", highlighted: true },
          { name: "MongoDB", proficiency: "advanced" },
          { name: "Redis", proficiency: "expert", highlighted: true },
          { name: "BigQuery", proficiency: "expert" },
          { name: "Database Design", proficiency: "expert" },
          { name: "Query Optimization", proficiency: "advanced" },
        ],
      },
      {
        title: "Backend Development",
        items: [
          { name: "Python (Advanced)", proficiency: "expert", highlighted: true },
          { name: "Async/Await", proficiency: "expert" },
          { name: "Asyncio", proficiency: "expert" },
          { name: "Type Hints & Pydantic", proficiency: "expert" },
          { name: "Testing (Pytest)", proficiency: "expert" },
          { name: "Code Quality & Linting", proficiency: "expert" },
        ],
      },
    ],
  },
  {
    id: 3,
    category: "Cloud, DevOps & Leadership",
    icon: "☁️",
    subcategories: [
      {
        title: "Cloud Platforms",
        items: [
          { name: "Google Cloud Platform (GCP)", proficiency: "expert", highlighted: true },
          { name: "AWS", proficiency: "advanced" },
          { name: "Cloud Architecture", proficiency: "expert" },
          { name: "Serverless (Cloud Functions)", proficiency: "advanced" },
          { name: "Cloud Storage", proficiency: "expert" },
          { name: "IAM & Security", proficiency: "advanced" },
        ],
      },
      {
        title: "DevOps & Infrastructure",
        items: [
          { name: "Docker", proficiency: "expert", highlighted: true },
          { name: "Kubernetes", proficiency: "advanced" },
          { name: "CI/CD Pipelines", proficiency: "expert", highlighted: true },
          { name: "GitHub Actions", proficiency: "expert" },
          { name: "Infrastructure as Code", proficiency: "advanced" },
          { name: "Monitoring & Logging", proficiency: "advanced" },
        ],
      },
      {
        title: "Frontend & Full-Stack",
        items: [
          { name: "React", proficiency: "advanced" },
          { name: "TypeScript", proficiency: "advanced" },
          { name: "Next.js", proficiency: "advanced" },
          { name: "Tailwind CSS", proficiency: "proficient" },
          { name: "Responsive Design", proficiency: "advanced" },
          { name: "Web Performance", proficiency: "advanced" },
        ],
      },
      {
        title: "Data Engineering & ETL",
        items: [
          { name: "Pandas", proficiency: "expert" },
          { name: "NumPy", proficiency: "expert" },
          { name: "ETL Pipelines", proficiency: "expert", highlighted: true },
          { name: "Data Modeling", proficiency: "expert" },
          { name: "Geospatial Analysis", proficiency: "advanced" },
          { name: "Data Validation", proficiency: "expert" },
        ],
      },
      {
        title: "Leadership & Collaboration",
        items: [
          { name: "Technical Mentoring", proficiency: "expert", highlighted: true },
          { name: "Code Review", proficiency: "expert" },
          { name: "Team Leadership", proficiency: "expert" },
          { name: "Stakeholder Communication", proficiency: "expert" },
          { name: "Agile/Scrum", proficiency: "advanced" },
          { name: "Technical Writing", proficiency: "expert" },
        ],
      },
    ],
  },
];

// Skill tag types for color coding
export type SkillTagType = 
  | 'framework'      // Agentic frameworks, orchestration tools
  | 'database'       // Databases, vector stores
  | 'model'          // LLMs, ML models
  | 'language'       // Programming languages
  | 'cloud'          // Cloud platforms, infrastructure
  | 'tool'           // Development tools, libraries
  | 'concept'        // Patterns, architectures
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

// New structured format with type information
export const skillsDataTyped: SkillWithTypes[] = [
  {
    id: 1,
    title: "agentic_systems.py",
    progress: 95,
    details: [
      { name: "LangGraph", type: "framework" },
      { name: "LangChain", type: "framework" },
      { name: "MCP", type: "framework" },
      { name: "Multi-Agent", type: "concept" },
      { name: "ReAct", type: "concept" },
    ],
    highlight: { text: "Agentic Architect", type: "metric" },
  },
  {
    id: 2,
    title: "rag_pipelines.py",
    progress: 95,
    details: [
      { name: "ChromaDB", type: "database" },
      { name: "LlamaIndex", type: "framework" },
      { name: "Hybrid Search", type: "concept" },
      { name: "Chunking", type: "concept" },
    ],
    highlight: { text: "95% Precision", type: "metric" },
  },
  {
    id: 3,
    title: "llm_engineering.py",
    progress: 90,
    details: [
      { name: "Gemini API", type: "model" },
      { name: "GPT-4", type: "model" },
      { name: "Prompt Engineering", type: "concept" },
      { name: "Fine-tuning", type: "concept" },
    ],
    highlight: { text: "Production LLMs", type: "metric" },
  },
  {
    id: 4,
    title: "pytorch_deep_learning.py",
    progress: 88,
    details: [
      { name: "PyTorch", type: "framework" },
      { name: "Transformers", type: "model" },
      { name: "Custom Architectures", type: "concept" },
    ],
    highlight: { text: ">90% F1", type: "metric" },
  },
  {
    id: 5,
    title: "fastapi_microservices.py",
    progress: 92,
    details: [
      { name: "FastAPI", type: "framework" },
      { name: "PostgreSQL", type: "database" },
      { name: "Redis", type: "database" },
      { name: "Event-Driven", type: "concept" },
      { name: "Microservices", type: "concept" },
    ],
    highlight: { text: "High-Throughput APIs", type: "metric" },
  },
  {
    id: 6,
    title: "cloud_native_gcp.sh",
    progress: 90,
    details: [
      { name: "GCP", type: "cloud" },
      { name: "BigQuery", type: "database" },
      { name: "Cloud Functions", type: "cloud" },
      { name: "Docker", type: "tool" },
      { name: "Kubernetes", type: "tool" },
    ],
    highlight: { text: "×50 Faster", type: "metric" },
  },
  {
    id: 7,
    title: "mlops_cicd.yaml",
    progress: 82,
    details: [
      { name: "CI/CD", type: "concept" },
      { name: "GitHub Actions", type: "tool" },
      { name: "Model Monitoring", type: "concept" },
      { name: "LangSmith", type: "tool" },
    ],
    highlight: { text: "Production MLOps", type: "metric" },
  },
  {
    id: 8,
    title: "data_engineering.py",
    progress: 88,
    details: [
      { name: "Pandas", type: "tool" },
      { name: "ETL", type: "concept" },
      { name: "BigQuery", type: "database" },
      { name: "Data Modeling", type: "concept" },
      { name: "Geospatial", type: "concept" },
    ],
    highlight: { text: "100M+ Records", type: "metric" },
  },
  {
    id: 9,
    title: "full_stack_dev.tsx",
    progress: 78,
    details: [
      { name: "React", type: "framework" },
      { name: "TypeScript", type: "language" },
      { name: "Next.js", type: "framework" },
      { name: "Tailwind CSS", type: "tool" },
    ],
    highlight: { text: "Modern Web Apps", type: "metric" },
  },
  {
    id: 10,
    title: "leadership_mentoring.md",
    progress: 95,
    details: [
      { name: "Technical Mentoring", type: "concept" },
      { name: "Code Review", type: "concept" },
      { name: "Team Leadership", type: "concept" },
      { name: "Teaching", type: "concept" },
    ],
    highlight: { text: "1000+ Students", type: "metric" },
  },
];

// Legacy format for backward compatibility with existing components
export const skillsData: Skill[] = [
  {
    id: 1,
    title: "agentic_systems.py",
    level: "EXPERT",
    progress: 95,
    details: ["LangGraph", "LangChain", "MCP", "Multi-Agent", "ReAct"],
    highlight: "Agentic Architect",
  },
  {
    id: 2,
    title: "rag_pipelines.py",
    level: "EXPERT",
    progress: 95,
    details: ["ChromaDB", "LlamaIndex", "Hybrid Search", "Chunking"],
    highlight: "95% Precision",
  },
  {
    id: 3,
    title: "llm_engineering.py",
    level: "EXPERT",
    progress: 90,
    details: ["Gemini API", "GPT-4", "Prompt Engineering", "Fine-tuning"],
    highlight: "Production LLMs",
  },
  {
    id: 4,
    title: "pytorch_deep_learning.py",
    level: "EXPERT",
    progress: 88,
    details: ["PyTorch", "Transformers", "Custom Architectures"],
    highlight: ">90% F1",
  },
  {
    id: 5,
    title: "fastapi_microservices.py",
    level: "EXPERT",
    progress: 92,
    details: ["FastAPI", "PostgreSQL", "Redis", "Event-Driven", "Microservices"],
    highlight: "High-Throughput APIs",
  },
  {
    id: 6,
    title: "cloud_native_gcp.sh",
    level: "EXPERT",
    progress: 90,
    details: ["GCP", "BigQuery", "Cloud Functions", "Docker", "Kubernetes"],
    highlight: "×50 Faster",
  },
  {
    id: 7,
    title: "mlops_cicd.yaml",
    level: "ADVANCED",
    progress: 82,
    details: ["CI/CD", "GitHub Actions", "Model Monitoring", "LangSmith"],
    highlight: "Production MLOps",
  },
  {
    id: 8,
    title: "data_engineering.py",
    level: "EXPERT",
    progress: 88,
    details: ["Pandas", "ETL", "BigQuery", "Data Modeling", "Geospatial"],
    highlight: "100M+ Records",
  },
  {
    id: 9,
    title: "full_stack_dev.tsx",
    level: "ADVANCED",
    progress: 78,
    details: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    highlight: "Modern Web Apps",
  },
  {
    id: 10,
    title: "leadership_mentoring.md",
    level: "EXPERT",
    progress: 95,
    details: ["Technical Mentoring", "Code Review", "Team Leadership", "Teaching"],
    highlight: "1000+ Students",
  },
];

/**
 * Get all skills flattened into a single array
 */
export const getAllSkills = (): SkillItem[] => {
  const allSkills: SkillItem[] = [];
  skillsCategories.forEach((category) => {
    category.subcategories.forEach((subcategory) => {
      allSkills.push(...subcategory.items);
    });
  });
  return allSkills;
};

/**
 * Get skills by proficiency level
 */
export const getSkillsByProficiency = (level: ProficiencyLevel): SkillItem[] => {
  return getAllSkills().filter((skill) => skill.proficiency === level);
};

/**
 * Get highlighted/featured skills
 */
export const getHighlightedSkills = (): SkillItem[] => {
  return getAllSkills().filter((skill) => skill.highlighted);
};

/**
 * Get skills count by category
 */
export const getSkillsCountByCategory = (): Record<string, number> => {
  const counts: Record<string, number> = {};
  skillsCategories.forEach((category) => {
    let count = 0;
    category.subcategories.forEach((subcategory) => {
      count += subcategory.items.length;
    });
    counts[category.category] = count;
  });
  return counts;
};
