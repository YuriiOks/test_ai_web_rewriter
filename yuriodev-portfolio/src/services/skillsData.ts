export interface Skill {
  id: number;
  title: string;
  level: string;
  progress: number;
  details: string[];
  highlight?: string;
}

export const skillsData: Skill[] = [
  {
    id: 1,
    title: "transformers_nlp.py",
    level: "Expert",
    progress: 90,
    details: ["RAG", "PEFT/LoRA", "LLM APIs", "Sentence Transformers"],
    highlight: "Gemini",
  },
  {
    id: 2,
    title: "pytorch_ecosystem.py",
    level: "Expert",
    progress: 92,
    details: ["Model Dev", "Custom Layers", "GPU Optimization"],
    highlight: "TorchServe",
  },
  {
    id: 3,
    title: "mlx_advanced_dl.py",
    level: "Expert",
    progress: 95,
    details: ["Multi-head Attention", "Mixed Precision"],
    highlight: "Vision Transformers",
  },
  {
    id: 4,
    title: "backend_apis.py",
    level: "Expert",
    progress: 90,
    details: ["PostgreSQL", "Redis", "Microservices", "REST/GraphQL"],
    highlight: "FastAPI",
  },
  {
    id: 5,
    title: "cloud_devops.sh",
    level: "Advanced",
    progress: 85,
    details: ["GCP", "CI/CD", "GitHub Actions"],
    highlight: "Docker, Kubernetes",
  },
  {
    id: 6,
    title: "data_engineering.py",
    level: "Advanced",
    progress: 88,
    details: ["Pandas", "BigQuery", "Feature Engineering", "ETL", "Time Series"],
  },
  {
    id: 7,
    title: "frontend_modern.js",
    level: "Proficient",
    progress: 78,
    details: ["React", "TypeScript", "Tailwind CSS", "Responsive UI"],
    highlight: "Next.js",
  },
  {
    id: 8,
    title: "research_education.py",
    level: "Expert",
    progress: 95,
    details: ["Technical Writing", "Mentoring", "Publications"],
    highlight: "Course Design",
  },
  {
    id: 9,
    title: "computer_vision.py",
    level: "Advanced",
    progress: 82,
    details: ["YOLO", "OpenCV", "Image Processing"],
    highlight: "Vision Transformers",
  },
];
