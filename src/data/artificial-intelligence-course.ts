export type AiCourseModule = {
  num: string;
  title: string;
  summary: string;
  topics: string[];
  practical: string[];
  projects: string[];
  tools: string[];
};

export type AiCourseMonth = {
  num: string;
  label: string;
  title: string;
  description: string;
  modules: AiCourseModule[];
};

export const aiCourseMonths: AiCourseMonth[] = [
  {
    num: "01",
    label: "Month 1",
    title: "AI Foundations, Python and Machine Learning",
    description: "Build the practical base for AI: Python, data handling, mathematics, statistics, machine learning workflows, and model evaluation.",
    modules: [
      {
        num: "01",
        title: "Introduction to Artificial Intelligence",
        summary: "Introduces AI concepts, history, categories, industry applications, current trends, career paths, and the essential AI development environment.",
        topics: ["AI evolution", "Types of AI", "Narrow vs general AI", "Industry applications", "AI trends", "AI careers"],
        practical: ["Install Python", "Set up VS Code", "Use Jupyter Notebook", "Use Google Colab", "Configure Git and GitHub"],
        projects: [],
        tools: ["Python", "VS Code", "Jupyter Notebook", "Google Colab", "Git", "GitHub"],
      },
      {
        num: "02",
        title: "Python Programming for AI",
        summary: "Covers Python fundamentals needed for AI development, including data types, control flow, functions, OOP, files, APIs, JSON, modules, and virtual environments.",
        topics: ["Variables", "Data types", "Loops", "Functions", "Object-oriented programming", "Exception handling"],
        practical: ["Python scripting", "File handling", "Modules", "Virtual environments", "APIs", "JSON"],
        projects: ["Python AI Utility Toolkit"],
        tools: ["Python", "Virtual environments", "REST APIs", "JSON"],
      },
      {
        num: "03",
        title: "Mathematics and Statistics for AI",
        summary: "Builds intuition for the math behind models through linear algebra, probability, statistics, vectors, matrices, calculus overview, and feature engineering.",
        topics: ["Linear algebra", "Probability", "Statistics", "Vectors", "Matrices", "Calculus overview"],
        practical: ["NumPy", "Pandas", "Data visualization", "Matplotlib", "Seaborn", "Feature engineering"],
        projects: ["Data Analysis Dashboard"],
        tools: ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
      },
      {
        num: "04",
        title: "Machine Learning",
        summary: "Teaches the end-to-end ML workflow: data collection, feature selection, model training, testing, evaluation, cross validation, and hyperparameter tuning.",
        topics: ["ML workflow", "Feature selection", "Model evaluation", "Cross validation", "Hyperparameter tuning", "Classic ML algorithms"],
        practical: ["Scikit-Learn", "Model training", "Model testing", "Evaluation metrics"],
        projects: ["House Price Prediction", "Customer Churn Prediction", "Spam Email Detection"],
        tools: ["Scikit-Learn", "Pandas", "NumPy"],
      },
    ],
  },
  {
    num: "02",
    label: "Month 2",
    title: "Deep Learning, NLP, Vision and LLM Applications",
    description: "Move from classical ML into neural networks, natural language processing, computer vision, large language models, and prompt engineering.",
    modules: [
      {
        num: "05",
        title: "Deep Learning",
        summary: "Explains neural networks and modern deep learning architectures, including CNNs, RNNs, LSTMs, transformer overview, GPU training, and model optimization.",
        topics: ["Artificial neural networks", "CNN", "RNN", "LSTM", "Transformers overview", "Model optimization"],
        practical: ["TensorFlow", "PyTorch", "GPU training", "Optimization"],
        projects: ["Image Classification", "Handwritten Digit Recognition", "Emotion Detection"],
        tools: ["TensorFlow", "PyTorch"],
      },
      {
        num: "06",
        title: "Natural Language Processing",
        summary: "Covers NLP fundamentals for text-based AI systems, including tokenization, stemming, lemmatization, embeddings, classification, and summarization.",
        topics: ["NLP fundamentals", "Tokenization", "Stemming", "Lemmatization", "Word embeddings", "Text classification"],
        practical: ["Hugging Face", "NLTK", "spaCy"],
        projects: ["Sentiment Analysis", "Text Summarization", "Fake News Detection", "Resume Analyzer"],
        tools: ["Hugging Face", "NLTK", "spaCy"],
      },
      {
        num: "07",
        title: "Computer Vision",
        summary: "Builds practical computer vision skills for image processing, feature extraction, object detection, face recognition, OCR, and image segmentation.",
        topics: ["Image processing", "Feature extraction", "Object detection", "Face recognition", "OCR", "Image segmentation"],
        practical: ["OpenCV", "YOLO", "OCR", "Segmentation"],
        projects: ["Face Detection", "Object Detection", "License Plate Recognition"],
        tools: ["OpenCV", "YOLO"],
      },
      {
        num: "08",
        title: "Large Language Models",
        summary: "Introduces LLM architecture and application development using GPT-style models, Llama, Mistral, Gemini overview, embeddings, OpenAI APIs, and LangChain basics.",
        topics: ["GPT architecture", "Llama", "Mistral", "Gemini overview", "Tokenization", "Embeddings"],
        practical: ["OpenAI APIs", "Ollama", "Hugging Face models", "LangChain basics"],
        projects: ["AI Chatbot", "Document Question Answering", "AI Tutor", "AI Coding Assistant"],
        tools: ["OpenAI API", "Ollama", "Hugging Face", "LangChain"],
      },
      {
        num: "09",
        title: "Prompt Engineering",
        summary: "Develops practical prompting skills for reliable LLM applications, including system prompts, few-shot prompting, tool/function calling, structured outputs, safety, and optimization.",
        topics: ["Prompt design", "System prompts", "Few-shot prompting", "Function calling", "Structured outputs", "AI safety"],
        practical: ["Prompt testing", "Structured output design", "Prompt optimization"],
        projects: ["AI Research Assistant", "Marketing Content Generator", "Prompt Library"],
        tools: ["OpenAI API", "LLM playgrounds", "Prompt libraries"],
      },
    ],
  },
  {
    num: "03",
    label: "Month 3",
    title: "AI Agents, Deployment, Security and Capstone",
    description: "Finish with agentic systems, workflow automation, MLOps, deployment, responsible AI, security testing, and a portfolio-grade capstone project.",
    modules: [
      {
        num: "10",
        title: "AI Agents and Automation",
        summary: "Covers agent architecture, multi-agent systems, memory, tool calling, MCP concepts, and workflow automation for autonomous AI applications.",
        topics: ["AI agents", "Agent architecture", "Multi-agent systems", "Workflow automation", "Memory", "Tool calling"],
        practical: ["LangGraph", "CrewAI", "AutoGen", "MCP concepts"],
        projects: ["Autonomous Research Agent", "Email Assistant", "AI Customer Support Agent", "Web Automation Agent"],
        tools: ["LangGraph", "CrewAI", "AutoGen", "MCP"],
      },
      {
        num: "11",
        title: "AI Deployment and MLOps",
        summary: "Teaches API packaging, containerization, CI/CD overview, cloud deployment, and monitoring for production AI services.",
        topics: ["FastAPI", "REST APIs", "Docker", "Docker Compose", "CI/CD overview", "Model monitoring"],
        practical: ["Build AI APIs", "Dockerize apps", "Deploy AI SaaS", "Monitor models"],
        projects: ["AI API", "Dockerized Chatbot", "AI SaaS Deployment"],
        tools: ["FastAPI", "Docker", "Docker Compose", "Render", "Railway", "AWS/Azure/GCP"],
      },
      {
        num: "12",
        title: "AI Security, Ethics and Responsible AI",
        summary: "Explores responsible AI, privacy, AI bias, explainability, model security, prompt injection, governance, risk management, and compliance.",
        topics: ["Responsible AI", "AI bias", "Explainable AI", "Model security", "Prompt injection", "Data privacy"],
        practical: ["AI security testing", "Secure AI applications", "Risk review", "Governance checklists"],
        projects: [],
        tools: ["AI security testing", "Model evaluation", "Governance frameworks"],
      },
      {
        num: "13",
        title: "Capstone Project",
        summary: "Students design, develop, test, deploy, and present a complete AI solution that becomes the anchor project in their professional portfolio.",
        topics: ["Solution design", "Development", "Testing", "Deployment", "Presentation", "Portfolio documentation"],
        practical: ["Capstone planning", "Implementation", "Code review", "Deployment", "Final presentation"],
        projects: ["Enterprise AI Chatbot", "AI Cybersecurity Assistant", "Smart Document Intelligence Platform", "AI SaaS Application"],
        tools: ["GitHub", "FastAPI", "Docker", "Cloud deployment", "AI frameworks"],
      },
    ],
  },
];

export const aiCourseStats = [
  { label: "Duration", value: "3 Months" },
  { label: "Per Month", value: "PKR 18,000" },
  { label: "Total", value: "PKR 54,000" },
  { label: "International", value: "$249 USD" },
];

export const aiCourseSchedule = [
  { label: "Teaching Weeks", value: "12 Weeks" },
  { label: "Classes", value: "5 Days/Week" },
  { label: "Class Time", value: "2 Hrs/Day" },
  { label: "Format", value: "Live Labs" },
];

export const aiCourseHighlights = [
  "Project-based AI, ML, deep learning, NLP, vision, LLMs, and AI agents",
  "Production-ready apps using Python, FastAPI, Docker, APIs, and cloud deployment",
  "More than 15 portfolio projects plus a final capstone presentation",
  "Responsible AI, privacy, security, prompt injection, governance, and risk awareness",
];

export const aiCourseLabs = [
  "Install and configure Python, VS Code, Jupyter, Colab, Git, and GitHub",
  "Build a Python AI Utility Toolkit",
  "Create a Data Analysis Dashboard",
  "Train a House Price Prediction model",
  "Build a Customer Churn Prediction model",
  "Detect spam emails using ML classification",
  "Train an Image Classifier",
  "Create a Face Recognition System",
  "Build an AI Resume Analyzer",
  "Develop an AI Chatbot",
  "Create a Document Question Answering system",
  "Build an AI Coding Assistant",
  "Develop an Autonomous Research Agent",
  "Build an AI Customer Support Bot",
  "Deploy an AI SaaS Application",
  "Complete a final capstone project",
];

export const aiCourseTools = [
  "Python", "Git", "GitHub", "VS Code", "Google Colab", "Jupyter Notebook",
  "NumPy", "Pandas", "Scikit-Learn", "TensorFlow", "PyTorch", "OpenCV",
  "spaCy", "NLTK", "Hugging Face Transformers", "LangChain", "LangGraph", "CrewAI",
  "AutoGen", "Ollama", "OpenAI API", "FastAPI", "Docker", "Docker Compose",
  "Render", "Railway", "AWS/Azure/GCP overview",
];

export const aiCourseOutcomes = [
  "Explain AI, machine learning, deep learning, generative AI, NLP, computer vision, and LLM concepts",
  "Program practical AI applications using Python and industry-standard libraries",
  "Analyze, clean, preprocess, and visualize structured and unstructured datasets",
  "Train, evaluate, optimize, and deploy machine learning and deep learning models",
  "Develop NLP, computer vision, chatbot, document intelligence, and AI agent applications",
  "Integrate LLMs, prompt engineering patterns, tool calling, and workflow automation into custom apps",
  "Deploy scalable AI services using APIs, Docker, CI/CD concepts, and cloud platforms",
  "Apply responsible AI, privacy, security, and ethical AI practices in real projects",
  "Build an industry-ready GitHub portfolio for employment, freelancing, or entrepreneurship",
  "Present technical AI solutions professionally through demos, reports, and interviews",
];

export const aiTeachingMethodology = [
  "20% conceptual explanation and theory",
  "80% hands-on practical labs and project work",
  "Weekly coding exercises, mini projects, code reviews, and portfolio building",
  "Industry case studies, group discussions, mock interviews, and career mentorship",
];

export const aiCourseProjects = [
  "Mini Projects: AI calculator, data dashboard, house price predictor, spam detector, churn prediction, image classifier, face recognition, resume analyzer, chatbot, document Q&A, coding assistant, research agent, support bot, AI SaaS app, and capstone.",
  "Capstone Options: enterprise AI chatbot, medical diagnosis assistant, AI resume screening system, AI cybersecurity assistant, business analytics dashboard, smart document intelligence platform, voice assistant, recommendation system, support platform, or AI SaaS application.",
  "Graduate Portfolio: students leave with production-ready AI projects, GitHub guidance, CV and LinkedIn optimization, freelancing roadmap, internship preparation, and certificate verification support.",
];

export const aiAssessmentPolicy = [
  "Evaluation includes weekly assignments, coding challenges, practical lab assessments, module quizzes, mini projects, mid-term assessment, final theory exam, final practical exam, viva/technical interview, and capstone evaluation.",
  "Certification Requirements: maintain at least 80% attendance, complete all labs and assignments, successfully finish the capstone project, and pass the final theory and practical examinations with the required minimum score.",
  "Students must demonstrate professional conduct and adherence to ethical AI practices throughout the course.",
  "Two examination attempts are included in the course fee.",
  "Additional Re-attempt Fee: USD $10 per additional attempt or equivalent in PKR.",
  "Certification: successful students receive the UZYNTRA Certified Artificial Intelligence Professional (UCAIP) certification.",
];

export const aiCareerOpportunities = [
  "Artificial Intelligence Engineer",
  "Machine Learning Engineer",
  "Deep Learning Engineer",
  "NLP Engineer",
  "Computer Vision Engineer",
  "AI Agent Developer",
  "Generative AI Engineer",
  "Prompt Engineer",
  "Data Scientist",
  "Junior AI Solutions Architect",
  "AI Automation Developer",
  "AI Consultant",
  "AI Research Assistant",
  "Freelance AI Developer",
];
