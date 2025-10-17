/**
 * About Data - Personal Information & Mission
 * Updated from CV (October 2025)
 */

export interface Achievement {
  metric: string;
  label: string;
  description?: string;
}

export interface AboutData {
  headline: string;
  yearsExperience: string;
  summary: string;
  mission: string;
  currentFocus: string[];
  achievements: Achievement[];
  contact: {
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
  };
}

export const aboutData: AboutData = {
  headline: "AI/ML Systems Engineer | Agentic Architect",
  yearsExperience: "8+",
  summary: `AI/ML Systems Engineer with 8+ years of experience designing, deploying, and scaling production-grade intelligent systems. Expert in agentic architectures (MCP, multi-agent workflows), RAG pipelines, and cloud-native ML platforms. Proven track record of improving retrieval precision from 30% to 95%, reducing data latency ×50, and delivering models with >90% F1. Strong collaborator, mentor, and end-to-end problem owner.`,
  
  mission: `Democratizing AI/ML education through hands-on learning platforms and production-grade open-source resources. Bridging the gap between theoretical knowledge and practical implementation to empower the next generation of ML engineers.`,
  
  currentFocus: [
    "Building YuriODev educational platform",
    "Architecting agentic workflows (LangGraph, MCP)",
    "Production RAG pipeline optimization",
    "Multi-agent system design patterns",
    "Open-source ML education resources",
  ],
  
  achievements: [
    {
      metric: "95%",
      label: "Retrieval Precision",
      description: "Improved from 30% baseline through hybrid search optimization",
    },
    {
      metric: "×50",
      label: "Data Latency Reduction",
      description: "Optimized BigQuery pipeline for property valuation platform",
    },
    {
      metric: ">90%",
      label: "F1 Score",
      description: "Production ML models across multiple domains",
    },
    {
      metric: "200%",
      label: "Sales Conversion Increase",
      description: "Multi-agent sales automation platform (SaleSphereAI)",
    },
    {
      metric: "1000+",
      label: "Students Reached",
      description: "Through YuriODev educational initiatives",
    },
    {
      metric: "100M+",
      label: "Records Processed",
      description: "Property valuation system handling UK market data",
    },
  ],
  
  contact: {
    email: "yurii.oksamytnyi@yuriodev.co.uk",
    phone: "+44 7767 336011",
    location: "London, UK",
    linkedin: "https://linkedin.com/in/y-oks",
    github: "https://github.com/YuriiOks",
  },
};
