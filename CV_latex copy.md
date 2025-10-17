%%%%%%%%%%%%%%%%%
% CV for Yurii Oksamytnyi using altacv.cls
% Based on v1.7.2 (28 August 2024)
% IMPORTANT: COMPILE WITH XeLaTeX or LuaLaTeX
%%%%%%%%%%%%%%%%

%% Use the "normalphoto" option if you want a normal photo instead of cropped to a circle
% \documentclass[10pt,a4paper,normalphoto]{altacv}

\documentclass[10pt,a4paper,ragged2e,withhyper]{altacv}

% Layout and Packages
\geometry{left=1cm,right=1cm,top=1.5cm,bottom=1.5cm,columnsep=1cm}
\usepackage{paracol} % For columns

% Fonts (Requires XeLaTeX/LuaLaTeX)
\iftutex
  \setmainfont{Roboto Slab} % Or another preferred slab serif
  \setsansfont{Lato}       % Or another preferred sans serif
  \renewcommand{\familydefault}{\sfdefault}
\else
  % Fallback for pdflatex (may have font issues)
  \usepackage[rm]{roboto}
  \usepackage[defaultsans]{lato}
  \renewcommand{\familydefault}{\sfdefault}
\fi

% Colours (Customize as desired)
\definecolor{SlateGrey}{HTML}{2E2E2E}
\definecolor{LightGrey}{HTML}{666666}
\definecolor{DarkBlue}{HTML}{00008B} % Example color
\definecolor{MediumBlue}{HTML}{4169E1} % Example color
\definecolor{LightSteelBlue}{HTML}{B0C4DE} % Example color

\colorlet{name}{black}
\colorlet{tagline}{MediumBlue} % Changed tagline color
\colorlet{heading}{DarkBlue} % Changed heading color
\colorlet{headingrule}{LightSteelBlue} % Changed rule color
\colorlet{subheading}{MediumBlue} % Changed subheading color
\colorlet{accent}{MediumBlue} % Changed accent color
\colorlet{emphasis}{SlateGrey}
\colorlet{body}{LightGrey}

% Font Styles (Customize as desired)
\renewcommand{\namefont}{\Huge\rmfamily\bfseries}
\renewcommand{\personalinfofont}{\footnotesize}
\renewcommand{\cvsectionfont}{\LARGE\rmfamily\bfseries}
\renewcommand{\cvsubsectionfont}{\large\bfseries}

% Markers (Customize as desired)
\renewcommand{\cvItemMarker}{{\small\textbullet}}
\renewcommand{\cvRatingMarker}{\faCircle}
% \renewcommand{\cvDateMarker}{\faCalendar*[regular]}
% \renewcommand{\cvLocationMarker}{\faMapMarker*}

%% Bib Resource (Remove if not using publications)
% \addbibresource{sample.bib}

\begin{document}

%=========================================================
% HEADER
%=========================================================
\name{Yurii Oksamytnyi}
\tagline{AI/ML Systems Engineer | Agentic Architect}
% \photoR{2.8cm}{Globe_High} % Replace Globe_High.jpg with your photo file, or remove

\personalinfo{%
  % Required!
  \email{yurii.oksamytnyi@yuriodev.co.uk} % From Profile PDF
  \phone{+447767336011} % From Profile PDF
  \location{London, England, United Kingdom} % Added Location
  \linkedin{y-oks} % From Profile PDF
  \github{YuriiOks} % Use primary GitHub ID? Confirm correct ID. Was 'sansquoi' before.
  % Optional
  % \homepage{your_portfolio_website.com}
  % \printinfo{\faRocket}{Your Portfolio URL}[https://...] % Example for portfolio link
}

\makecvheader

%=========================================================
% TWO COLUMN LAYOUT START
%=========================================================
\columnratio{0.703} % Left column wider
\begin{paracol}{2}

%=========================================================
% LEFT COLUMN
%=========================================================

% --- SUMMARY ---
\cvsection{Summary}
\begin{quote}
AI/ML Systems Engineer with 8+ years of experience designing, deploying, and scaling production-grade intelligent systems. Expert in \textbf{agentic architectures (MCP, multi-agent workflows)}, \textbf{RAG pipelines}, and \textbf{cloud-native ML platforms}. Proven track record of improving retrieval precision from 30\% to 95\%, reducing data latency ×50, and delivering models with >90\% F1. Strong collaborator, mentor, and end-to-end problem owner.
\end{quote}

% --- EXPERIENCE ---
\cvsection{Experience}

\cvevent{Lead AI Engineer \& Systems Designer (Consultant)}{Independent}{Apr 2022 -- Present}{London, UK (Hybrid)}
Architecting and delivering end-to-end, production-grade AI systems for a portfolio of clients, from high-growth startups to global financial institutions. Specializing in custom \textbf{agentic workflows}, \textbf{retrieval-augmented generation (RAG) pipelines}, and the full-stack, cloud-native infrastructure required to support them.

\vspace{0.1cm}
\begin{itemize}

    \item \textbf{Architected a flagship RAG-enhanced "Proactive AI Agent" prototype} to showcase advanced agentic capabilities to prospective clients. The agent synthesizes multi-modal user data to deliver personalized daily optimizations.
    \begin{itemize}[leftmargin=0.5em, itemsep=0pt, label=$\circ$]
        \item \textbf{Architecture:} Built a two-stage reasoning pipeline (Gemini Flash + Gemini Pro) with \textbf{ChromaDB} vector store, \textbf{FastAPI} backend, and 3 custom \textbf{Anthropic MCP servers} (Calendar, Health, Tasks) for standardized tool integration following Model Context Protocol.
        \item \textbf{Deployment:} Built a real-time UI in \textbf{Next.js/TypeScript/Tailwind}. Containerized with \textbf{Docker} and deployed via \textbf{NGINX}, with an architecture designed for high-availability scaling on \textbf{Google Cloud Run}.
        \item \textbf{Performance:} Achieved 95\% retrieval precision (RAGAS), 92\% 
answer correctness (GPT-4 judge), <1.2s p95 latency (100 concurrent users).
    \end{itemize}
    
    \item \textbf{Founding AI Architect for a stealth-mode startup (SaleSphereAI)}, designing a multi-agent system to automate sales communications across platforms like Avito and Telegram.
    \begin{itemize}[leftmargin=0.5em, itemsep=0pt, label=$\circ$]
        \item \textbf{Architecture:} Designed a \textbf{multi-agent microservices platform} using FastAPI, PostgreSQL, and Redis. Implemented a central \textbf{Router Agent} for intent classification that delegates tasks to specialized \textbf{Response Agents}, ensuring a modular and scalable design.
        \item \textbf{Performance \& Reliability:} Reduced latency from 90s to <2s  via Redis queue decoupling. Resolved 80\% of inquiries autonomously with  circuit breakers and fallback logic maintaining 99\% uptime.
        \item \textbf{Business Impact:} The core agentic logic of the MVP directly led to a \textbf{200\% increase in sales conversion} for the initial beta clients.
        
    \end{itemize}

    \item \textbf{Delivered an enterprise-grade resume parsing \& job matching platform} for an HR Tech client, architecting an AI-powered engine that automated candidate screening and led to a \textbf{75\% reduction in time-to-hire}.
    \begin{itemize}[leftmargin=0.5em, itemsep=0pt, label=$\circ$]
        \item \textbf{AI \& Backend:} Built a modular, microservices-based pipeline (FastAPI, Docker). Implemented a fine-tuned \textbf{Sentence-Transformer (PyTorch)} for classification and semantic matching agents using \textbf{LlamaIndex} and the \textbf{Google Gemini API}.
        \item \textbf{Data \& Frontend:} Designed a \textbf{hybrid database backend} — \textbf{PostgreSQL} for structured queries and \textbf{MongoDB} for unstructured data. Built the corresponding responsive frontend with \textbf{Next.js/React}.
        \item \textbf{Performance:} Achieved a \textbf{93\% F1 score} on role classification, processed new CVs end-to-end in \textbf{<3 seconds}, and supported a tested throughput of 50k documents/day.
    \end{itemize}

    \item \textbf{Architected and delivered a production-grade property valuation platform} for a UK PropTech firm, leading a 6-month engagement to process \textbf{100M+ records} on \textbf{Google Cloud Platform (GCP)}.
    \begin{itemize}[leftmargin=0.5em, itemsep=0pt, label=$\circ$]
        \item \textbf{Architecture:} Designed a scalable data pipeline with \textbf{BigQuery} for high-volume joins and aggregations across 60GB+ datasets. Implemented a multi-layered asynchronous caching system that \textbf{reduced data loading times by ~×50}, enabling rapid, iterative experimentation.
        \item \textbf{Modeling:} Systematically benchmarked five ML models (Linear Regression, XGBoost, LightGBM, RNN, Decision Trees) to identify the optimal balance of predictive accuracy and efficiency.
        \item \textbf{Performance:} The final Decision Tree model achieved a \textbf{Mean Absolute Error of £8.7k}, with \textbf{94\% of predictions falling within 10\% of the actual sale price}, demonstrating production-ready reliability.
    \end{itemize}


    \item \textbf{Delivered specialized consulting for top-tier financial institutions (JPMorgan, Bloomberg, Houlihan Lokey)}, working directly with their internal teams to build Python-based AI training modules and R-based financial analysis scripts. Automated repetitive workflows, reducing manual reporting time by \textbf{~30\%} and delivering reusable tooling adopted by internal quant and risk teams.

\end{itemize}


\divider
\divider
\cvevent{Lead Data Scientist (Indirect Contract)}{Ministry of Health of Ukraine}{Mar 2022 -- Oct 2022}{Kyiv, Ukraine (Remote)}
\begin{itemize}
    % Shortened by removing the parenthetical example, which saves a full line.
    \item \textbf{Architected secure data pipelines} to process real-time signals from remote health monitors at a national scale.
    % Slightly rephrased for conciseness.
    \item \textbf{Developed predictive ML models} (Scikit-learn, Python) to identify patients at high risk of diabetes complications, enabling earlier interventions and guiding public health strategy.
    % This one is already very tight. No change needed.
    \item \textbf{Generated key public health insights} by performing large-scale EDA on anonymized electronic health records (EHRs) to uncover novel correlations between biomarkers and disease progression.
    % This one is also very tight and important. No change.
    \item \textbf{Engineered the end-to-end system for full compliance with GDPR} and healthcare data privacy standards, ensuring the ethical and secure handling of sensitive patient information.
\end{itemize}

\divider

\cvevent{Senior Machine learning Engineer}{Forecsys}{Jan 2021 -- Feb 2022}{Moscow, Russia (Remote)}
\begin{itemize}
    % No change, this is already perfect.
    \item \textbf{Led the end-to-end design and deployment of a real-time anti-fraud system} for a top-3 insurance provider, taking the product from concept to production in under 6 months.
    % Slightly tightened the phrasing.
    \item \textbf{Architected high-throughput backend services and APIs} (Flask/FastAPI) to serve ML models with sub-second latency and high reliability under heavy load.
    % More direct phrasing, likely saves a line break.
    \item \textbf{Championed new software engineering standards} (design patterns, automated testing), which reduced production bugs by ~30\%.
    % Replaced "which directly improved" with a more direct "to improve". Saves space.
    \item \textbf{Mentored and upskilled a team of 3 junior data scientists}, leading code reviews and training in production best practices to improve team velocity and model quality.
\end{itemize}

\cvevent{Data Scientist}{Forecsys}{Apr 2019 -- Jan 2021}{Moscow, Russia (Remote)}
\begin{itemize}
    % No change, already concise.
    \item \textbf{Developed and deployed machine learning models for financial sector clients}, improving predictive capabilities for risk assessment and enabling better data-driven decisions.
    % Rephrased to be more active and slightly shorter.
    \item \textbf{Achieved a >60\% reduction in analysis time} by engineering and optimizing data pipelines, accelerating model iteration cycles.
\end{itemize}

\newpage

\cvevent{Technical Lead \& Mentor (Advanced Maths, Programming \& AI/ML)}{Independent}{Sep 2014 -- Present}{London, UK (Global Remote)}
\begin{itemize}
    \item \textbf{Provided principal-level technical leadership to 100+ individuals globally} (students, researchers, professionals), guiding the development of complex projects in AI/ML and Data Science.
    \item \textbf{Acted as a fractional Tech Lead for R\&D projects}, including MSc dissertations and industry prototypes, driving architecture design while enforcing best practices through rigorous code reviews.
    \item \textbf{Outcomes:} Enabled mentees to secure admissions to Oxbridge/Russell Group/Ivy universities, win international Olympiads, and launch successful careers at leading tech companies (including FAANG).
\end{itemize}



\cvsection{Earlier Experience}

\small
\cvevent{Freelance iOS Developer}{Upwork}{2016 -- 2019}{Remote}
\begin{itemize}
    \item Delivered multiple native iOS apps (Swift, UIKit/SwiftUI, Core Data) for global clients, including early adoption of \textbf{CoreML for on-device intelligence}, marking the start of my transition from app development into AI/ML systems engineering.
\end{itemize}

\divider

\small
\cvevent{Instructor \& Department Lead}{Moscow Institute of Physics and Technology (MIPT)}{Sep 2014 -- July 2016}{Moscow, Russia}
Designed Olympiad-level STEM curricula and led a team of technical instructors; established content standards and delivery frameworks.
\normalsize



% --- PROJECTS ---
\cvsection{Projects}

\cvevent{Agentic Research Assistant for Scientific Literature}{Personal R\&D Project}{Jan 2025}{London, UK}
\begin{itemize}
    \item \textbf{Architected a multi-agent RAG system to analyze 200+ scientific papers}, identifying reproducible experiments based on custom laboratory equipment constraints.
    \begin{itemize}[leftmargin=0.5em, itemsep=0pt, label=$\circ$]
        \item \textbf{Orchestration:} Implemented 5-node \textbf{LangGraph StateGraph} (Ingest → Triage → Extract → Synthesize → Rank) with conditional routing and auto-retry on failures, reducing manual intervention 85\%.
        \item \textbf{Architecture:} Built a document ingestion pipeline (PyMuPDF, ChromaDB) and a hierarchical agentic workflow that performed a sequential triage, extraction, and synthesis process to generate a final feasibility report.
        \item \textbf{Impact:} Reduced manual literature review from an estimated \textbf{200+ hours to under 30 minutes}, producing a ranked list of actionable experiments that significantly accelerated the client's research planning phase.
    \end{itemize}
\end{itemize}

\divider

\cvevent{Automated Python Course \& Grading System}{Personal Project}{Dec 2023 -- Present}{London, UK}
\github{YurioDev/Python-Course}
\begin{itemize}
    \item Developed a comprehensive open-source Python course used to mentor aspiring developers.
    \item \textbf{Engineered a complete CI/CD pipeline using GitHub Actions} to create an automated grading system, providing learners with instant, detailed feedback on their code submissions via pytest.
\end{itemize}




%=========================================================
% RIGHT COLUMN
%=========================================================
\switchcolumn


% --- SKILLS ---
\cvsection{Skills}

\cvsubsection{System Architecture \& Design}
\begin{itemize}[leftmargin=0.5em, itemsep=0pt]
    \item \textbf{High-Level Design:} Cloud-native architecture, microservices, event-driven systems, scalability, and fault tolerance.
    \item \textbf{API \& Data:} High-throughput API design (REST), real-time and batch data pipelines, hybrid data modeling (SQL/NoSQL).
    \item \textbf{Real-Time Systems:} Event-driven architectures (\textbf{Kafka, RabbitMQ}), streaming protocols (\textbf{SSE, WebSockets}) for low-latency LLM responses.
\end{itemize}

\divider

\cvsubsection{AI \& Agentic Engineering}
\begin{itemize}[leftmargin=0.5em, itemsep=0pt]
    \item \textbf{Agentic Frameworks:} \textbf{LangGraph} (multi-agent orchestration), \textbf{LangChain} (tool chains, memory),  \textbf{MCP} (Model Context Protocol), custom \textbf{MCP servers}.
    \item \textbf{Agentic Patterns:} \textbf{ReAct}, \textbf{Reflexion}, \textbf{Tree of Thoughts (ToT)}, Plan-and-Solve, Router/Worker, Self-Refine.
    \item \textbf{RAG \& Retrieval:} Advanced chunking, semantic and hybrid search, query expansion, reranking, evaluation (\textbf{LLM-as-a-Judge}, RAGAS), \textbf{LlamaIndex}.
    \item \textbf{Vector Databases:} \textbf{ChromaDB}, \textbf{Pinecone}, \textbf{Weaviate}, \textbf{pgvector}, \textbf{Qdrant}.
    \item \textbf{Memory Systems:} Semantic and episodic memory architectures, conversation compression, persistent memory patterns (\textbf{Mem0}).
    \item \textbf{LLM Operations:} Production integration (\textbf{Gemini, OpenAI, Anthropic}), fine-tuning (\textbf{PEFT/LoRA}), structured outputs (\textbf{Instructor}), validation and guardrails (\textbf{Guardrails AI}).
    \item \textbf{Core ML:} Deep Learning (\textbf{PyTorch}), NLP (Transformers, Sentence-Transformers), Computer Vision (ViT, CNNs), Predictive Modeling (\textbf{Scikit-learn}, \textbf{XGBoost}, LightGBM), Time-Series Forecasting.
\end{itemize}

\divider

\newpage

\cvsubsection{Cloud, DevOps \& Leadership}
\begin{itemize}[leftmargin=0.5em, itemsep=0pt]
    \item \textbf{Leadership:} Technical leadership, mentoring, architectural design docs, stakeholder communication, cross-functional collaboration.
    \item \textbf{Cloud Platforms:} \textbf{GCP} (BigQuery, Cloud Run, Vertex AI), \textbf{AWS} (Bedrock, Lambda, SageMaker, S3).
    \item \textbf{DevOps \& Observability:} CI/CD (\textbf{GitHub Actions}), containerization (\textbf{Docker, Docker Compose}), tracing (\textbf{LangSmith}), observability (\textbf{Arize Phoenix}, \textbf{Weights \& Biases}).
    \item \textbf{Tooling \& Testing:} Git/GitHub, Linux Shell, \textbf{NGINX}, sandboxed execution \textbf{(E2B)}; \textbf{Agent Testing} (unit tests for tools, integration tests for workflows, tracing with \textbf{LangSmith}, regression testing with golden datasets), \textbf{pytest}.`
    \item \textbf{Frontend Prototyping:} \textbf{Next.js}, \textbf{React}, \textbf{TypeScript}, \textbf{Tailwind CSS}, \textbf{Streamlit}.
\end{itemize}




% --- EDUCATION ---
\cvsection{Education}
\cvevent{Professional Certificate, Applied Machine Learning}{The Machine Learning Institute (MLX)}{Apr -- May 2025}{London, UK}
\textit{Intensive program covering Feature Fusion, Two-Tower Models, Transformers, Multimodality, PEFT/LoRA, RAG.}

\divider

\cvevent{Bachelor's degree, Applied Mathematics}{Cherkasy State University 'Bohdan Hmelnycky'}{2016 -- 2018}{Cherkasy, Ukraine}
%\textit{Relevant coursework: [...]} % Optional

\divider

\cvevent{Bachelor's degree, Applied Mathematics and Physics}{Moscow Institute of Physics and Technology (MIPT)}{2013 -- 2016}{Moscow, Russia}
%\textit{Relevant coursework: [...]} % Optional

\newpage

% --- VOLUNTEER EXPERIENCE ---
\cvsection{Volunteer Experience}
\cvevent{Content Creator \& Instructor - AQA GCSE Computer Science Course}{Independent (YouTube \& GitHub Project)}{Sep 2024 -- Present}{London, UK}
\begin{itemize}
    \item Created comprehensive free online course (videos/repo) covering the AQA GCSE CS syllabus (Algorithms, Python, Systems, Networks, etc.).
    \item Developed extensive learning materials (notes, code examples, exercises) across 25 modules.
\end{itemize}


% --- CERTIFICATIONS ---
\cvsection{Certifications}
\cvevent{Mathematics for Machine Learning Specialization}{Coursera / Imperial College London}{Mar 2021}{Online}
\divider
\cvevent{iOS \& Swift - The Complete iOS App Development Bootcamp}{Udemy / Dr. Angela Yu}{Dec 2018}{Online}

% --- LANGUAGES ---
\cvsection{Languages}
\cvskill{English}{5} \par
\cvskill{Ukrainian}{5} \par
\cvskill{Russian}{5}

\end{paracol}
%=========================================================
% END TWO COLUMN LAYOUT
%=========================================================

\end{document}