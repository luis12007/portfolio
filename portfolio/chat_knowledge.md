# About Alex

- Full name: Luis Alexander Hernández Martínez. Goes by Alex Martínez professionally.
- AI Engineer / Software Engineer, 24 years old. From El Salvador, now living in Germany.
- Specializes in Artificial Intelligence; passionate about turning innovative ideas into functional products, optimizing AI models, and building high-quality products that deliver real value.
- Studied Software Engineering (Bachelor's) at UCA (Universidad Centroamericana "José Simeón Cañas") in El Salvador; graduated in August 2025. Starting an M.Sc. in Artificial Intelligence at IU International University of Applied Sciences (Germany) in April 2027, expected to finish in April 2029.
- Previously worked at TELUS, first as an AI Engineer and then as AI Engineer Lead; he left the role when he moved to Germany.
- Open to work: currently looking for an AI engineering job in Essen or Cologne (Köln), Germany, and about to start his M.Sc. in Artificial Intelligence at IU International University of Applied Sciences (April 2027).
- Founded and ran his own software company in El Salvador, MySoftwareSV, building digital solutions for clients; the portfolio projects other than the TELUS role, the Omdena healthcare project and the AI Language Learning App (a personal project) were built there. Two of its projects are still running but are now maintained by someone else; he is not currently in charge of any of his previous projects.
- 5 years of professional experience in total, at 3 companies (including MySoftwareSV and TELUS), 15+ completed projects. Always state his experience as 5 years in total; do not give how long he spent in each role.
- Experience spans web development, SaaS products, ERP systems, CRM solutions, desktop applications, REST APIs, and mobile applications.
- Career goal: an AI engineering role in Essen or Cologne, Germany, working on cutting-edge AI projects with the latest architectures and techniques.

# Contact

- Email: alexmtzai2002@gmail.com
- LinkedIn: https://www.linkedin.com/in/alexmtzai
- GitHub: https://github.com/luis12007
- Phone: +49 171 4758416
- His CV can be downloaded with the "CV" button at the top of the portfolio home page; a video presentation opens from the "Video" button or the "Presentation" link in the menu.
- The portfolio can be read in English or German with the EN/DE switch in the header (or in the mobile menu).
- The video presentation was generated with AI: motion graphics made with the Claude API, a video avatar made with InfiniteTalk (MeiGen-AI), Alex's own voice for the English audio and ElevenLabs for the German version.

# Projects

## AI Engineer Lead at TELUS (previous job)
Alex worked at TELUS on LLM solutions for a client. He no longer works there: he left when he moved to Germany. Recommendations from his team are on his LinkedIn profile: https://www.linkedin.com/in/alexmtzai/details/recommendations/
- Started as an AI Engineer: prompt engineering, LLM configuration through APIs, and building new tools for the team.
- Quickly promoted to AI Engineer Lead, a more holistic and management-oriented role: tracked the work of 15 AI engineers, ran knowledge transfer (KT) sessions, unblocked engineers, connected people, and reported project status. When the team was reduced to 10 people (3 leads and 7 AI engineers), he ran 101 trainings and catch-up sessions on project news and new technologies, unblocked the team, and reported to senior leadership.
- Designed the team's entire workflow from scratch: CI/CD procedures, best practices, documentation and security compliance.
- Product discovery: helped the Product Owner map new features and requirements and understand the business, since Alex worked very closely with the client; this covered new features for the team's tools and for the LLM configuration.
- LLM evaluation: ran tests on moving from API-based LLMs to self-hosted, on-premise LLMs. Another team handled the deployments, and Alex worked with them in the loop, measuring hallucination, RAG consumption, speed, accuracy and cost with custom formulas and DeepEval, and reporting each finding.
- Integrations: after the foundations of the project were in place, he also supported the integrations development team using his software engineering background: building integrations with the client's systems end to end (requirements, development, adaptation, connection, testing in production), and developing several MCP servers and APIs from scratch, hosted on the team's own GCP infrastructure, to connect the LLM to the tools it needed.
- Gap filler: the go-to person for data source issues, linking people, status reports, unblocking AI engineers, changes to MCP servers or the chatbot's LLM configuration, and bringing business and project knowledge to meetings.
- Observability: set up monitoring and alerting with Dynatrace and PagerDuty for on-call incident response.
- Results: completed 2 AI-first projects at TELUS that are still running today.
- He describes it as a very challenging project where he learned a great deal, above all about the work itself, adaptability, resilience, and working under tight deadlines.

## AI Language Learning App (personal project, prototype)
A personal project, not a MySoftwareSV project: a prototype Alex built in a short time to show how easily a new application can be connected to AI APIs and given new features. It is the personal tool he uses to learn languages.
A personalized, Quizlet-style app for learning Spanish, English and German, integrated with AI: AI image generation for each word, AI fact-checking of translations, and voice handling (words read aloud, reading aloud scored by an AI coach through the microphone, and spoken conversations with an AI tutor that corrects mistakes and grades you). Modes: Learn (flashcards, matching, test), Writing, Reading, Listening and Speaking; a word becomes learned after 4 different days without a miss. Live app: https://vocabulary-app-production-34bb.up.railway.app/

## SaaS Billing System
Full-stack billing system: React frontend and a custom REST API backend integrating multiple APIs. Automated invoice generation and management, payment tracking and notifications, government compliance standards for electronic invoicing, secure authentication and authorization. Deployed on his own web server infrastructure. Live demo: https://cliente-production-e629.up.railway.app/demostration

## Enterprise Digital Billing API
Java Spring Boot enterprise API, a modular extension of the SaaS billing service, letting large companies integrate government-mandated digital billing into their existing systems. Custom authentication token system, NGINX proxy, multi-server architecture with AWS, SMTP integration (worked around SMTP port restrictions on commercial hosts with alternative delivery and failover), direct government API connectivity, audit logging, and full documentation (API specs, integration guides).

## RAG Portfolio Assistant
An AI assistant trained on his portfolio data using LangChain and a RAG architecture: portfolio content vectorized for similarity search, a self-quantized LLM optimized for CPU-only execution, deployed on DigitalOcean, with filtering so it only answers portfolio-related questions.

## Open-Source AI for Healthcare (Omdena)
Collaborative Omdena project ("Leveraging NLP in Medical Prescription") building a model that predicts diseases from symptoms, focused on illnesses prevalent in Africa. His work: data collection, EDA, feature engineering and preprocessing, modeling (Random Forest, Gradient Boosting, neural networks), visualization, and documentation, in a team of 50+ international data scientists. Reported 84% accuracy. App: https://leveraging-nlp-omdena-medical-prescription-app.streamlit.app

## Judge Gymnasts App
Cross-platform app (web, Android, iOS) for gymnastics judges built with React Native and Expo. Custom authentication, file management, MAG and WAG scoring calculators (floor and vault) following FIG guidelines, a digital whiteboard, PDF export; AI-generated competition summaries planned. Repository: https://github.com/luis12007/mobile_app_gymnastics

## Multi-Branch ERP System
ERP for small businesses in El Salvador built with C# .NET and a cloud SQL database: cashier/POS, inventory across three branches, HR and payroll, ingredients and recipe management, sales metrics and business intelligence. Repository: https://github.com/luis12007/La_Lupita_Kika_System

# Skills and technologies

- LLMs: prompt engineering, LLM configuration through APIs, self-hosted on-premise LLMs, RAG, MCP servers (Model Context Protocol), LLM evaluation with DeepEval (hallucination, accuracy, speed, cost).
- Leadership: led a team of up to 15 AI engineers, KT and 101 training sessions, reporting to senior leadership, product discovery with the Product Owner.
- AI/ML: TensorFlow (NLP, computer vision, time series), PyTorch (custom models, data pipelines), Keras (transfer learning, deployment), scikit-learn (classical ML, feature engineering, hyperparameter tuning, ensembles), LangChain and RAG, model quantization and optimization.
- Data: Pandas (wrangling, time series, large datasets), Matplotlib and Seaborn (visualization, reporting).
- Languages and frameworks: Python (AI/ML, automation, backend), React, React Native/Expo, Django, Java Spring Boot (JPA/Hibernate, security, microservices), C# .NET.
- Cloud GPUs: rents GPU servers on a VPS in the cloud to train and run (inference) AI models; used them for the AI video and the chatbot of this portfolio and for the products at MySoftwareSV.
- Cloud and DevOps: AWS (EC2, S3), Google Cloud (Vertex AI, BigQuery, Cloud Functions, hosting MCP servers and APIs), DigitalOcean, Docker and Docker Compose, Jenkins and CI/CD process design, Linux administration and scripting, NGINX, observability and alerting with Dynatrace and PagerDuty, security compliance.

# Education and certificates

- M.Sc. Artificial Intelligence, IU International University of Applied Sciences, Germany (upcoming: April 2027 to April 2029).
- Bachelor in Software Engineering, UCA El Salvador (graduated August 2025).
- Fundamentals of Artificial Intelligence & Machine Learning Program — Zero To Mastery Academy, online (completed June 2024).
- Complete A.I. & Machine Learning, Data Science Course — Zero To Mastery (January 2025).
- Algorithms and Data Structures — Zero To Mastery (December 2024).
- PyTorch for Deep Learning Bootcamp — Zero To Mastery (April 2025).
- TensorFlow for Deep Learning Bootcamp — Zero To Mastery (June 2025).
- Leveraging NLP in Medical Prescription — Omdena Local Chapter (May 2025).
- AWS for Developers, Linux, SQL and more — LinkedIn Learning (December 2024).
- Machine Learning Basics — Omdena Academy (November 2024).
- Data Science and Python Basics — Omdena Academy (December 2024).
