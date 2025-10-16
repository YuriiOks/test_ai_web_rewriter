export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  methodologies: string[];
  links: {
    name: string;
    url: string;
  }[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "yuriodev_platform",
    description: "Comprehensive educational platform for AI/ML learning with interactive coding environments, progress tracking, and hands-on projects. Full-stack application featuring FastAPI backend, Next.js frontend, Docker containerization, and integrated code sandboxes for Python execution.",
    techStack: ["FastAPI", "Next.js", "PostgreSQL", "Docker", "Redis"],
    methodologies: ["Educational Design", "MLOps"],
    links: [
      { name: "🌐 Platform Info", url: "#platform" },
      { name: "📧 Early Access", url: "mailto:contact@yuriodev.co.uk?subject=YuriODev%20Platform" }
    ]
  },
  {
    id: 2,
    title: "educational_reform_research",
    description: "Co-authored research papers on digital transformation in Ukrainian education, developing ML algorithms for grading automation and student performance evaluation. Published findings at international conference influencing assessment design across multiple educational institutions.",
    techStack: ["Scikit-learn", "Pandas", "Statistical Analysis"],
    methodologies: ["Educational Research", "ML in Education", "Publication"],
    links: [
      { name: "📚 Papers", url: "#" },
      { name: "🏛️ Conference", url: "#" }
    ]
  },
  {
    id: 3,
    title: "health_analytics_system",
    description: "Production ML system processing wearable sensor data (accelerometer, PPG) for actionable health insights. Achieved 87% accuracy in sleep pattern detection and 92% in stress-level identification. Real-time streaming architecture with GDPR compliance for sensitive health data.",
    techStack: ["PyTorch", "Asyncio", "Redis"],
    methodologies: ["Signal Processing", "Time Series ML", "GDPR Compliance"],
    links: [
      { name: "🔬 Research", url: "#" },
      { name: "📊 Results", url: "#" }
    ]
  },
  {
    id: 4,
    title: "property_price_predictor",
    description: "Production-ready ML models for UK property valuations with 94% accuracy using historical and geospatial data. Scalable GCP pipeline handling 10+ years of transaction data (2008-2019), improving data processing throughput by 78% with reusable Python modules for feature engineering.",
    techStack: ["XGBoost", "LightGBM", "BigQuery", "GCP"],
    methodologies: ["Geospatial Analysis", "Time Series"],
    links: [
      { name: "📈 Analysis", url: "#" },
      { name: "🔧 Pipeline", url: "#" }
    ]
  },
  {
    id: 5,
    title: "resume_job_matcher",
    description: "AI-powered resume parser and job matching system using hybrid methods (layout analysis + LLM via Google Gemini API). Multi-service architecture with 93% F1 score in role classification, utilizing PostgreSQL and MongoDB for comprehensive data storage and retrieval.",
    techStack: ["Transformers", "Gemini API", "MongoDB", "PostgreSQL"],
    methodologies: ["NLP", "Microservices"],
    links: [
      { name: "🤖 Demo", url: "#" },
      { name: "💻 Architecture", url: "#" }
    ]
  },
  {
    id: 6,
    title: "python_interactive_course",
    description: "Open-source Python course with automated CI/CD testing workflow using GitHub Actions and pytest. Comprehensive curriculum from fundamentals to OOP with real-time feedback for learners. Foundation for the educational methodology used in YuriODev platform development.",
    techStack: ["Python", "GitHub Actions", "Pytest"],
    methodologies: ["CI/CD", "Education", "Open Source"],
    links: [
      { name: "📖 Course", url: "https://github.com/YurioDev/Python-Course" },
      { name: "⭐ GitHub", url: "https://github.com/YurioDev/Python-Course" }
    ]
  }
];
