/**
 * Project Data - Portfolio Projects
 * Updated from CV (October 2025)
 */

export interface Metric {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface Project {
  id: number;
  title: string;
  subtitle?: string;
  period: string;
  client?: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string;
  techStack: string[];
  methodologies: string[];
  metrics: Metric[];
  links: {
    name: string;
    url: string;
  }[];
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Proactive AI Agent",
    subtitle: "RAG-Powered Knowledge Assistant",
    period: "Sep 2024 - Present",
    client: "Stealth Startup",
    description: "Built production-grade RAG system transforming static knowledge bases into proactive AI agents capable of answering complex user queries with high precision and low latency.",
    challenge: "Initial system suffered from 30% retrieval precision and 3.5s p95 latency, making it unsuitable for production use with real users expecting instant, accurate responses.",
    solution: "Architected hybrid search combining semantic (ChromaDB) and keyword retrieval, implemented optimal chunking strategies, and integrated Gemini 2.0 for answer generation. Built FastAPI backend with MCP servers for tool integration.",
    impact: "Improved retrieval precision from 30% to 95%, reduced p95 latency to <1.2s, achieved 92% answer correctness (GPT-4 judge), and successfully handled 100 concurrent users without degradation.",
    techStack: ["LangChain", "ChromaDB", "Gemini 2.0", "FastAPI", "MCP Servers", "Python"],
    methodologies: ["RAG Architecture", "Hybrid Search", "Performance Optimization", "Load Testing"],
    metrics: [
      { label: "Retrieval Precision", value: "95%", highlight: true },
      { label: "Latency (p95)", value: "<1.2s", highlight: true },
      { label: "Answer Correctness", value: "92%" },
      { label: "Concurrent Users", value: "100+" },
    ],
    links: [
      { name: "🔬 Technical Deep Dive", url: "#" },
      { name: "📊 Performance Metrics", url: "#" }
    ],
    featured: true,
  },
  {
    id: 2,
    title: "SaleSphereAI",
    subtitle: "Multi-Agent Sales Automation Platform",
    period: "Jun 2024 - Dec 2024",
    client: "High-Growth SaaS Startup",
    description: "Architected autonomous multi-agent system automating end-to-end B2B sales workflows from lead qualification through deal closure, leveraging LangGraph for sophisticated agent orchestration.",
    challenge: "Manual sales processes were consuming 80% of sales team's time on repetitive tasks, limiting ability to scale customer acquisition while maintaining personalization and conversion quality.",
    solution: "Designed 5-agent system (Lead Qualifier, Researcher, Outreach Specialist, Objection Handler, Deal Closer) coordinated via LangGraph state machines. Built FastAPI backend with PostgreSQL for customer data and Redis for real-time state management.",
    impact: "Achieved 200% increase in sales conversion rates, reduced manual sales workload by 60%, and enabled sales team to handle 3x lead volume with same headcount.",
    techStack: ["LangGraph", "LangChain", "FastAPI", "PostgreSQL", "Redis", "LLMs"],
    methodologies: ["Multi-Agent Systems", "State Machines", "Microservices", "A/B Testing"],
    metrics: [
      { label: "Sales Conversion", value: "+200%", highlight: true },
      { label: "Manual Workload", value: "-60%", highlight: true },
      { label: "Lead Capacity", value: "3x" },
      { label: "Agent Count", value: "5" },
    ],
    links: [
      { name: "🤖 Architecture", url: "#" },
      { name: "📈 Case Study", url: "#" }
    ],
    featured: true,
  },
  {
    id: 3,
    title: "Resume Parsing Platform",
    subtitle: "AI-Powered Talent Matching System",
    period: "Mar 2024 - Aug 2024",
    client: "HR Tech Company",
    description: "Developed intelligent resume parsing and job matching system combining traditional layout analysis with LLM-powered understanding to extract and classify candidate information at scale.",
    challenge: "Traditional regex-based parsers achieved only 65% accuracy on diverse resume formats, causing significant manual review overhead and poor candidate experience in job matching.",
    solution: "Built hybrid parsing pipeline using PyMuPDF for layout analysis + Google Gemini API for semantic understanding. Implemented microservices architecture with PostgreSQL for structured data and MongoDB for document storage. Created LlamaIndex pipeline for similarity matching.",
    impact: "Achieved 93% F1 score in role classification, reduced time-to-hire by 75% through automated screening, and processed 10,000+ resumes monthly with 98% uptime.",
    techStack: ["PyTorch", "Gemini API", "LlamaIndex", "PostgreSQL", "MongoDB", "Next.js"],
    methodologies: ["NLP", "Hybrid ML", "Microservices", "Document Processing"],
    metrics: [
      { label: "F1 Score", value: "93%", highlight: true },
      { label: "Time-to-Hire", value: "-75%", highlight: true },
      { label: "Monthly Volume", value: "10K+" },
      { label: "System Uptime", value: "98%" },
    ],
    links: [
      { name: "� Tech Stack", url: "#" },
      { name: "📊 Performance", url: "#" }
    ],
    featured: true,
  },
  {
    id: 4,
    title: "Property Valuation Platform",
    subtitle: "ML-Powered Real Estate Analytics",
    period: "Jan 2024 - Jun 2024",
    client: "PropTech Startup",
    description: "Engineered cloud-native ML platform for automated property valuations across UK market, processing over 100M historical transactions with advanced geospatial and temporal feature engineering.",
    challenge: "Existing valuation models had 78% accuracy and took 15+ minutes to process new data batches, making real-time pricing impossible for competitive market conditions.",
    solution: "Built scalable GCP pipeline with BigQuery for data warehousing, implemented ensemble models (XGBoost + LightGBM), and designed geospatial clustering for neighborhood effects. Created Python SDK for feature engineering reusability.",
    impact: "Achieved 94% valuation accuracy, reduced data loading time by ×50 through optimized BigQuery schemas, and enabled real-time pricing updates for 500K+ properties.",
    techStack: ["XGBoost", "LightGBM", "BigQuery", "GCP", "Geospatial Libraries", "Python"],
    methodologies: ["Ensemble Learning", "Geospatial Analysis", "Cloud-Native", "ETL Pipelines"],
    metrics: [
      { label: "Accuracy", value: "94%", highlight: true },
      { label: "Data Loading", value: "×50 faster", highlight: true },
      { label: "Records Processed", value: "100M+" },
      { label: "Properties Covered", value: "500K+" },
    ],
    links: [
      { name: "🏠 Platform", url: "#" },
      { name: "🔧 Pipeline", url: "#" }
    ],
    featured: false,
  },
  {
    id: 5,
    title: "Financial Institutions Consulting",
    subtitle: "Python/R AI Tooling for Finance",
    period: "2022 - 2024",
    client: "JPMorgan, Bloomberg, Houlihan Lokey",
    description: "Delivered specialized consulting for top-tier financial institutions, building custom Python-based AI training modules and R-based financial analysis scripts to automate workflows and enhance quantitative capabilities.",
    challenge: "Internal teams lacked standardized tooling for AI/ML workflows, resulting in duplicated effort across departments and 30% of analyst time spent on repetitive manual reporting tasks.",
    solution: "Developed reusable Python libraries for common ML patterns, created R packages for financial modeling, and delivered hands-on training workshops for quant and risk teams. Automated report generation pipelines.",
    impact: "Reduced manual reporting time by ~30%, created tooling adopted by 100+ internal users across divisions, and trained 50+ analysts in production ML best practices.",
    techStack: ["Python", "R", "Pandas", "NumPy", "Scikit-learn", "Financial APIs"],
    methodologies: ["Financial Modeling", "Training & Enablement", "Workflow Automation"],
    metrics: [
      { label: "Time Savings", value: "~30%", highlight: true },
      { label: "Internal Adoption", value: "100+ users" },
      { label: "Analysts Trained", value: "50+" },
      { label: "Institutions", value: "3" },
    ],
    links: [
      { name: "🏦 Case Studies", url: "#" },
      { name: "📚 Training Materials", url: "#" }
    ],
    featured: false,
  },
  {
    id: 6,
    title: "Agentic Research Assistant",
    subtitle: "Scientific Literature Analysis",
    period: "Nov 2023 - Feb 2024",
    client: "Research Lab",
    description: "Built intelligent research assistant using agentic workflows to automatically discover, analyze, and synthesize findings from scientific literature, dramatically accelerating research cycles.",
    challenge: "Researchers spent weeks manually reviewing 200+ papers per project, struggling to identify key insights and connections across large bodies of literature efficiently.",
    solution: "Implemented LangGraph-based agent system for paper retrieval (ArXiv API), PDF parsing (PyMuPDF), semantic chunking (ChromaDB), and synthesis. Created recursive summarization pipeline for multi-document analysis.",
    impact: "Analyzed 200+ papers in <30 minutes (vs. weeks manually), achieved 88% accuracy in key finding extraction, and generated structured literature reviews saving 40+ hours per project.",
    techStack: ["LangGraph", "ChromaDB", "PyMuPDF", "ArXiv API", "LLMs", "Python"],
    methodologies: ["Agentic Workflows", "Document Processing", "Semantic Search", "Synthesis"],
    metrics: [
      { label: "Analysis Speed", value: "200+ papers in 30min", highlight: true },
      { label: "Extraction Accuracy", value: "88%" },
      { label: "Time Saved", value: "40+ hours/project" },
      { label: "Papers Processed", value: "1000+" },
    ],
    links: [
      { name: "🔬 Demo", url: "#" },
      { name: "� Documentation", url: "#" }
    ],
    featured: false,
  },
  {
    id: 7,
    title: "Automated Python Course",
    subtitle: "CI/CD-Powered Learning Platform",
    period: "Jan 2023 - Present",
    client: "YuriODev Educational Initiative",
    description: "Created comprehensive open-source Python programming course with automated grading system, covering AQA GCSE CS syllabus through 25+ interactive modules with instant feedback.",
    challenge: "Traditional programming courses lack immediate feedback and scalability, requiring manual code review which limits instructor availability and slows student progress.",
    solution: "Built GitHub Actions-based CI/CD pipeline for automated test execution, designed progressive curriculum from fundamentals to OOP, and published YouTube tutorials. Open-sourced entire platform for community contributions.",
    impact: "Reached 1000+ students across 20+ countries, achieved 95%+ satisfaction rating, reduced grading overhead to zero, and enabled self-paced learning at scale.",
    techStack: ["Python", "GitHub Actions", "Pytest", "Git", "YouTube", "Markdown"],
    methodologies: ["Educational Design", "CI/CD", "Open Source", "Community Building"],
    metrics: [
      { label: "Students Reached", value: "1000+", highlight: true },
      { label: "Course Modules", value: "25+" },
      { label: "Satisfaction Rating", value: "95%+" },
      { label: "Countries", value: "20+" },
    ],
    links: [
      { name: "📖 Course", url: "https://github.com/YurioDev/Python-Course" },
      { name: "⭐ GitHub", url: "https://github.com/YurioDev/Python-Course" },
      { name: "🎥 YouTube", url: "#" }
    ],
    featured: false,
  }
];
