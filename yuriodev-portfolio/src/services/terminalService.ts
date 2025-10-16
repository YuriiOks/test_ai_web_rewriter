export const terminalCommands = {
    help: () => `Available commands:
help       - Show this help message
skills     - Display technical skills and expertise
contact    - Show contact information
projects   - List recent projects and research
about      - Display information about me
clear      - Clear terminal output
surprise   - Easter egg command
ls         - List all sections (alias for help)
whoami     - Display current user info`,

    skills: () => `Technical Skills Matrix:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🤖 AI/ML Engineering:
   • Transformers & RAG Systems    [████████████] Expert
   • PyTorch & Deep Learning       [████████████] Expert
   • PEFT/LoRA Fine-tuning        [███████████░] Expert
   • Computer Vision & NLP         [██████████░░] Advanced

🛠️  Development & Infrastructure:
   • FastAPI & Backend Systems    [████████████] Expert
   • Docker/Kubernetes            [██████████░░] Advanced
   • PostgreSQL & Redis           [████████████] Expert
   • Next.js & Frontend          [████████░░░░] Proficient

📚 Research & Education:
   • Technical Writing            [████████████] Expert
   • Course Design & Mentoring    [████████████] Expert
   • Educational Technology       [████████████] Expert
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,

    contact: () => `Contact Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📧 Email:    contact@yuriodev.co.uk
🔗 LinkedIn: linkedin.com/in/y-oks
💻 GitHub:   github.com/YuriiOks
📝 Medium:   medium.com/@yurii
🌐 Website:  yuriodev.co.uk
📍 Location: London, UK

Available for:
• AI/ML consultancy and development
• Educational platform collaboration
• Research partnerships
• Speaking engagements`,

    projects: () => `Recent Projects & Research:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 yuriodev_platform
   Comprehensive AI/ML educational platform
   FastAPI • Next.js • Docker • Redis

🏥 health_analytics_system
   Production ML for wearable sensor data
   87% accuracy • Real-time streaming • GDPR

🏠 property_price_predictor
   UK property valuations with 94% accuracy
   GCP • BigQuery • 10+ years of data

📚 educational_reform_research
   Published research on ML in education
   Conference presentation • Algorithm design

🤖 resume_job_matcher
   AI-powered matching with Gemini API
   93% F1 score • Microservices architecture`,

    about: () => `About Yurii Oksamytnyi:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👨‍💻 AI/ML Engineer & Educational Platform Creator
🎓 MLX Applied Machine Learning Graduate
🏛️  Former MIPT Faculty & Research Lead
📍 Based in London, UK

Mission: Democratizing AI/ML education through
hands-on learning platforms and production systems.

Current Focus: Building YuriODev platform to bridge
the gap between theory and practical ML implementation.

Background: 10+ years in education, published research
in grading automation, production ML systems across
healthcare and real estate sectors.`,

    clear: () => 'CLEAR_TERMINAL',

    surprise: () => `
    ╔══════════════════════════════════════╗
    ║        🎉 EASTER EGG UNLOCKED! 🎉     ║
    ╠══════════════════════════════════════╣
    ║                                      ║
    ║  You've discovered the secret menu!  ║
    ║                                      ║
    ║  🤖 AI Fact: The first neural        ║
    ║     network was created in 1943      ║
    ║     by McCulloch & Pitts             ║
    ║                                      ║
    ║  🧠 Fun Fact: I modeled chaos        ║
    ║     theory at age 14 and attended    ║
    ║     CERN's summer program            ║
    ║                                      ║
    ║  🚀 Secret: YuriODev will have       ║
    ║     AI-powered coding assistants     ║
    ║     for personalized learning        ║
    ║                                      ║
    ╚══════════════════════════════════════╝

    Type 'help' to return to normal commands.`,

    ls: () => terminalCommands.help(),

    whoami: () => `visitor@yuriodev
Current session: Guest user exploring YuriODev
Access level: Public portfolio viewer
Interested in: AI/ML education and collaboration
Type 'contact' to upgrade to collaborator status! 🚀`
};
