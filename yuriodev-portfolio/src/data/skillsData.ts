export interface SkillTag {
  label: string;
  highlight?: boolean;
}

export interface SkillData {
  id: string;
  filename: string;
  status: string;
  progress: number;
  level: 'Expert' | 'Advanced' | 'Proficient';
  tags: SkillTag[];
}

export const skillsData: SkillData[] = [
  {
    id: 'transformers_nlp',
    filename: 'transformers_nlp.py',
    status: 'Loading language models...',
    progress: 90,
    level: 'Expert',
    tags: [
      { label: 'RAG' },
      { label: 'PEFT/LoRA' },
      { label: 'LLM APIs' },
      { label: 'Sentence Transformers' },
      { label: 'Gemini', highlight: true },
    ],
  },
  {
    id: 'pytorch_ecosystem',
    filename: 'pytorch_ecosystem.py',
    status: 'Neural networks initialized...',
    progress: 92,
    level: 'Expert',
    tags: [
      { label: 'Model Dev' },
      { label: 'Custom Layers' },
      { label: 'TorchServe', highlight: true },
      { label: 'GPU Optimization' },
    ],
  },
  {
    id: 'mlx_advanced_dl',
    filename: 'mlx_advanced_dl.py',
    status: 'MLX Applied ML certified...',
    progress: 95,
    level: 'Expert',
    tags: [
      { label: 'Vision Transformers', highlight: true },
      { label: 'Multi-head Attention' },
      { label: 'Mixed Precision' },
    ],
  },
  {
    id: 'backend_apis',
    filename: 'backend_apis.py',
    status: 'FastAPI services deployed...',
    progress: 90,
    level: 'Expert',
    tags: [
      { label: 'FastAPI', highlight: true },
      { label: 'PostgreSQL' },
      { label: 'Redis' },
      { label: 'Microservices' },
      { label: 'REST/GraphQL' },
    ],
  },
  {
    id: 'cloud_devops',
    filename: 'cloud_devops.sh',
    status: 'Container orchestration active...',
    progress: 85,
    level: 'Advanced',
    tags: [
      { label: 'Docker', highlight: true },
      { label: 'Kubernetes', highlight: true },
      { label: 'GCP' },
      { label: 'CI/CD' },
      { label: 'GitHub Actions' },
    ],
  },
  {
    id: 'data_engineering',
    filename: 'data_engineering.py',
    status: 'Data pipelines optimized...',
    progress: 88,
    level: 'Advanced',
    tags: [
      { label: 'Pandas' },
      { label: 'BigQuery' },
      { label: 'Feature Engineering' },
      { label: 'ETL' },
      { label: 'Time Series' },
    ],
  },
  {
    id: 'frontend_modern',
    filename: 'frontend_modern.js',
    status: 'React components rendered...',
    progress: 78,
    level: 'Proficient',
    tags: [
      { label: 'Next.js', highlight: true },
      { label: 'React' },
      { label: 'TypeScript' },
      { label: 'Tailwind CSS' },
      { label: 'Responsive UI' },
    ],
  },
  {
    id: 'research_education',
    filename: 'research_education.py',
    status: 'Knowledge transfer optimized...',
    progress: 95,
    level: 'Expert',
    tags: [
      { label: 'Technical Writing' },
      { label: 'Course Design', highlight: true },
      { label: 'Mentoring' },
      { label: 'Publications' },
    ],
  },
  {
    id: 'computer_vision',
    filename: 'computer_vision.py',
    status: 'Image models loaded...',
    progress: 82,
    level: 'Advanced',
    tags: [
      { label: 'YOLO' },
      { label: 'Vision Transformers', highlight: true },
      { label: 'OpenCV' },
      { label: 'Image Processing' },
    ],
  },
];

export const keyTechnologies = [
  'PyTorch',
  'Transformers',
  'RAG Systems',
  'FastAPI',
  'Docker/Kubernetes',
  'PEFT/LoRA',
  'PostgreSQL',
  'Next.js',
  'LLM APIs',
  'GCP/BigQuery',
  'Redis',
  'Vision Transformers',
];
