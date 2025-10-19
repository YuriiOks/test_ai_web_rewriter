export const terminalCommands = {
    help: () => `Available commands:
help       - Show this help message
skills     - Display technical skills and expertise
contact    - Show contact information
projects   - List recent projects and research
about      - Display information about me
experience - Show career highlights
education  - Display education and certifications
clear      - Clear terminal output
surprise   - Easter egg command
ls         - List all sections (alias for help)
whoami     - Display current user info`,

    skills: () => `Technical Skills Matrix:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🤖 AI & Agentic Engineering:
   • LangGraph, LangChain, MCP    [████████████] Expert
   • RAG Pipelines & Retrieval    [████████████] Expert
   • PyTorch & Deep Learning      [████████████] Expert
   • Gemini, GPT-4, LLM APIs      [████████████] Expert
   • Multi-Agent Systems          [████████████] Expert
   • Agentic Patterns (ReAct)     [███████████░] Expert

🏗️  System Architecture:
   • Microservices & Event-Driven [████████████] Expert
   • FastAPI & Backend Systems    [████████████] Expert
   • PostgreSQL, MongoDB, Redis   [████████████] Expert
   • Cloud-Native Architecture    [████████████] Expert

☁️  DevOps & Cloud:
   • Docker/Kubernetes            [████████████] Expert
   • GCP, AWS                     [███████████░] Expert
   • CI/CD (GitHub Actions)       [████████████] Expert
   • BigQuery & Data Engineering  [████████████] Expert

💻 Full-Stack Development:
   • Python (Advanced)            [████████████] Expert
   • React, TypeScript, Next.js   [██████████░░] Advanced
   • ETL Pipelines                [████████████] Expert

�‍🏫 Leadership & Education:
   • Technical Mentoring          [████████████] Expert
   • Course Design                [████████████] Expert
   • Team Leadership              [████████████] Expert
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,

    contact: () => `Contact Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📧 Email:    yurii.oksamytnyi@yuriodev.co.uk
📱 Phone:    +44 7767 336011
🔗 LinkedIn: linkedin.com/in/y-oks
💻 GitHub:   github.com/YuriiOks
🌐 Website:  yuriodev.co.uk
📍 Location: London, UK

Available for:
• AI/ML systems architecture & consulting
• Agentic workflow design & implementation
• Production RAG pipeline development
• Technical leadership & mentoring
• Speaking engagements & workshops`,

    projects: () => `Featured Projects:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🤖 Proactive AI Agent (RAG Prototype)
   95% retrieval precision (from 30%)
   <1.2s latency • 100 concurrent users
   ChromaDB • Gemini 2.0 • MCP Servers

🚀 SaleSphereAI (Multi-Agent Platform)
   200% sales conversion increase
   5-agent system • LangGraph orchestration
   FastAPI • PostgreSQL • Redis

📄 Resume Parsing Platform (HR Tech)
   93% F1 score • 75% time-to-hire reduction
   PyTorch • Gemini API • LlamaIndex
   10K+ resumes processed monthly

🏠 Property Valuation (PropTech)
   94% accuracy • 100M+ records • GCP
   BigQuery • ×50 faster data loading
   500K+ properties valued

📚 Agentic Research Assistant
   200+ papers analyzed in <30 min
   LangGraph • ChromaDB • PyMuPDF
   88% extraction accuracy

🐍 Automated Python Course
   github.com/YurioDev/Python-Course
   1000+ students • 25+ modules
   CI/CD grading • Open source

Type 'projects --details <name>' for more info`,

    about: () => `About Yurii Oksamytnyi:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👨‍💻 AI/ML Systems Engineer | Agentic Architect
🎓 MLX Applied Machine Learning Graduate
📊 8+ years building production AI systems
📍 Based in London, UK

Mission: Democratizing AI/ML education through
hands-on platforms and production-grade systems.

Current Focus: Architecting agentic workflows,
RAG pipelines, and YuriODev educational platform.

Track Record:
• 95% retrieval precision (from 30% baseline)
• ×50 data latency reduction (PropTech)
• >90% F1 on production models
• 200% sales conversion (SaleSphereAI)
• 1000+ students reached globally

Specialization: Agentic systems (LangGraph, MCP),
production RAG pipelines, multi-agent orchestration,
cloud-native ML platforms.`,

    experience: () => `Career Highlights:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💼 Lead AI Engineer & Systems Designer
   Apr 2022 - Present | Independent (Consultant)
   • Built RAG systems with 95% precision
   • Architected multi-agent platforms
   • Deployed HR Tech & PropTech ML systems
   • Consulted for JPMorgan, Bloomberg

💼 Lead Data Scientist
   Mar 2022 - Oct 2022 | Ministry of Health Ukraine
   • Healthcare analytics (>90% F1 score)
   • GDPR-compliant ML pipelines
   • Millions of patient records processed

💼 Senior ML Engineer
   Jan 2021 - Feb 2022 | Forecys (FinTech)
   • Financial forecasting models
   • Real-time fraud detection
   • 60% latency reduction

💼 Technical Lead & Mentor
   Sep 2014 - Present | YuriODev Initiative
   • Created 25+ module Python course
   • 1000+ students across 20+ countries
   • Automated CI/CD grading system

Type 'education' for academic background`,

    education: () => `Education & Certifications:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎓 MLX Applied Machine Learning Certificate
   Apr 2025 - May 2025 | MLX Program
   Advanced ML systems, RAG, multi-agent workflows

🎓 MSc Artificial Intelligence
   2016 - 2018 | Queen Mary, University of London
   Deep Learning, NLP, Computer Vision
   Distinction with published research

🎓 BSc Computer Science
   2012 - 2016 | MIPT (Moscow Institute)
   Honors (GPA: 4.8/5.0)
   ACM ICPC regional medals

📚 Teaching Experience:
   • MIPT Instructor (2014-2016)
   • YuriODev Course Creator (2023-Present)
   • 1000+ students mentored

Type 'about' to see current focus areas`,

    clear: () => 'CLEAR_TERMINAL',

    surprise: () => `
    ╔══════════════════════════════════════╗
    ║        🎉 EASTER EGG UNLOCKED! 🎉     ║
    ╠══════════════════════════════════════╣
    ║                                      ║
    ║  You've discovered the secret menu!  ║
    ║                                      ║
    ║  🤖 AI Fact: RAG systems combine     ║
    ║     retrieval with generation for    ║
    ║     knowledge-grounded responses     ║
    ║                                      ║
    ║  🧠 Fun Fact: I improved retrieval   ║
    ║     precision from 30% to 95% using  ║
    ║     hybrid search strategies         ║
    ║                                      ║
    ║  🚀 Secret: Building agentic AI      ║
    ║     systems with LangGraph & MCP     ║
    ║     for production deployments       ║
    ║                                      ║
    ║  💡 Tip: Multi-agent systems can     ║
    ║     achieve 200%+ conversion gains   ║
    ║     with proper orchestration        ║
    ║                                      ║
    ╚══════════════════════════════════════╝

    Type 'help' to return to normal commands.`,

    ls: () => terminalCommands.help(),

    whoami: () => `visitor@yuriodev
Current session: Guest user exploring YuriODev
Access level: Public portfolio viewer
Interested in: Production AI/ML systems & education
Type 'contact' to discuss collaboration! 🚀`
};
