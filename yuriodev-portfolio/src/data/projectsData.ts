export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectTech {
  label: string;
  category?: 'methodology';
}

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  tech: ProjectTech[];
  links: ProjectLink[];
}

export const projectsData: ProjectData[] = [
  {
    id: 'yuriodev_platform',
    title: 'yuriodev_platform',
    description:
      'Comprehensive educational platform for AI/ML learning with interactive coding environments, progress tracking, and hands-on projects. Full-stack application featuring FastAPI backend, Next.js frontend, Docker containerization, and integrated code sandboxes for Python execution.',
    tech: [
      { label: 'FastAPI' },
      { label: 'Next.js' },
      { label: 'PostgreSQL' },
      { label: 'Docker' },
      { label: 'Redis' },
      { label: 'Educational Design', category: 'methodology' },
      { label: 'MLOps', category: 'methodology' },
    ],
    links: [
      { label: '🌐 Platform Info', href: '#platform' },
      { label: '📧 Early Access', href: 'mailto:contact@yuriodev.co.uk?subject=YuriODev%20Platform' },
    ],
  },
  {
    id: 'educational_reform_research',
    title: 'educational_reform_research',
    description:
      'Co-authored research papers on digital transformation in Ukrainian education, developing ML algorithms for grading automation and student performance evaluation. Published findings at international conferences influencing assessment design across multiple educational institutions.',
    tech: [
      { label: 'Scikit-learn' },
      { label: 'Pandas' },
      { label: 'Statistical Analysis' },
      { label: 'Educational Research', category: 'methodology' },
      { label: 'ML in Education', category: 'methodology' },
      { label: 'Publication', category: 'methodology' },
    ],
    links: [
      { label: '📚 Papers', href: '#' },
      { label: '🏛️ Conference', href: '#' },
    ],
  },
  {
    id: 'health_analytics_system',
    title: 'health_analytics_system',
    description:
      'Production ML system processing wearable sensor data (accelerometer, PPG) for actionable health insights. Achieved 87% accuracy in sleep pattern detection and 92% in stress-level identification with real-time streaming architecture and GDPR compliance for sensitive health data.',
    tech: [
      { label: 'PyTorch' },
      { label: 'Asyncio' },
      { label: 'Redis' },
      { label: 'Signal Processing', category: 'methodology' },
      { label: 'Time Series ML', category: 'methodology' },
      { label: 'GDPR Compliance', category: 'methodology' },
    ],
    links: [
      { label: '🔬 Research', href: '#' },
      { label: '📊 Results', href: '#' },
    ],
  },
  {
    id: 'property_price_predictor',
    title: 'property_price_predictor',
    description:
      'Production-ready ML models for UK property valuations with 94% accuracy using historical and geospatial data. Scalable GCP pipeline handling 10+ years of transaction data (2008-2019), improving data processing throughput by 78% with reusable Python modules for feature engineering.',
    tech: [
      { label: 'XGBoost' },
      { label: 'LightGBM' },
      { label: 'BigQuery' },
      { label: 'GCP' },
      { label: 'Geospatial Analysis', category: 'methodology' },
      { label: 'Time Series', category: 'methodology' },
    ],
    links: [
      { label: '📈 Analysis', href: '#' },
      { label: '🔧 Pipeline', href: '#' },
    ],
  },
  {
    id: 'resume_job_matcher',
    title: 'resume_job_matcher',
    description:
      'AI-powered resume parser and job matching system using hybrid methods (layout analysis + LLM via Google Gemini API). Multi-service architecture with 93% F1 score in role classification, utilizing PostgreSQL and MongoDB for comprehensive data storage and retrieval.',
    tech: [
      { label: 'Transformers' },
      { label: 'Gemini API' },
      { label: 'MongoDB' },
      { label: 'PostgreSQL' },
      { label: 'NLP', category: 'methodology' },
      { label: 'Microservices', category: 'methodology' },
    ],
    links: [
      { label: '🤖 Demo', href: '#' },
      { label: '💻 Architecture', href: '#' },
    ],
  },
  {
    id: 'python_interactive_course',
    title: 'python_interactive_course',
    description:
      'Open-source Python course with automated CI/CD testing workflow using GitHub Actions and pytest. Comprehensive curriculum from fundamentals to OOP with real-time feedback for learners. Foundation for the educational methodology used in YuriODev platform development.',
    tech: [
      { label: 'Python' },
      { label: 'GitHub Actions' },
      { label: 'Pytest' },
      { label: 'CI/CD', category: 'methodology' },
      { label: 'Education', category: 'methodology' },
      { label: 'Open Source', category: 'methodology' },
    ],
    links: [
      { label: '📖 Course', href: 'https://github.com/YurioDev/Python-Course' },
      { label: '⭐ GitHub', href: 'https://github.com/YurioDev/Python-Course' },
    ],
  },
];
