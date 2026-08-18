export const en = {
  // Navigation
  nav: {
    work: 'Work',
    sair: 'SAiR',
    about: 'About',
    contact: 'Contact',
    email: 'silvapi1994@gmail.com',
  },

  // Hero
  hero: {
    eyebrow: 'Senior AI Engineer',
    firstName: 'Mohammed',
    lastName: 'Sedeg',
    lead: 'I study how machines learn. I build systems that actually do.',
    bio1: 'I have a deep obsession with intelligence itself: how it emerges, how it scales, and how to build systems that genuinely reason rather than just pattern-match. Five years in AI, nine in engineering. My work spans LLM systems, computer vision, and edge AI, always starting from the fundamentals.',
    bio2: 'I also founded',
    bio2Link: 'SAiR',
    bio2After: 'because I believe understanding shouldn\'t be gated. If you can learn it, you should be able to teach it.',
    pill1: '🎓 PhD Candidate',
    pill2: '💻 Karabük University',
    pill3: '🌍 Khartoum · Turkey · Remote',
    viewWork: 'View my work',
    getInTouch: 'Get in touch',
    downloadCV: 'Download CV',
    certificates: 'Certificates & Courses',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    sairOrg: 'SAiR Org',
  },

  // Work
  work: {
    label: 'Work',
    title: 'Selected Projects',
    subtitle: 'Production systems, research, and open-source tools: each one built to understand something more deeply.',
    view: 'View ↗',
    projects: [
      {
        type: 'Open Source Research',
        year: '2023 – Present',
        title: 'MyLLM: Transparent LLM Framework',
        summary: 'Installable pure-PyTorch framework covering the full LLM pipeline: tokenization → attention → training → RLHF → inference, with first-class support for GPT-2, LLaMA-2, and LLaMA-3. 128 passing tests, 21 learning notebooks, 5 Colab demos.',
        story: "Most tutorials treat LLMs as black boxes. I built this because I wanted to expose every layer: pretraining, SFT, RLHF, DPO, quantization, distributed training. One-line LLM.from_pretrained(), configurable trainers, single-GPU/DDP/DeepSpeed/FSDP accelerators, and a CLI. If you can implement it from scratch, you understand it. That became the philosophy of SAiR.",
        stack: ['PyTorch', 'DeepSpeed', 'FSDP', 'LoRA', 'QLoRA', 'RLHF', 'GGUF'],
        link: 'https://github.com/silvaxxx1/MyLLM101',
      },
      {
        type: 'Production System',
        year: '2023 – Present',
        title: 'Enterprise RAG Platform',
        summary: 'Multi-provider LLM retrieval system for enterprise clients: a modular retriever-generator architecture over pgvector, Qdrant, and MongoDB, served via FastAPI with full observability.',
        story: "The real problem was latency and cost at scale. By rethinking the retrieval pipeline and switching to GGUF-quantized models, query latency dropped ~40% and inference ran 3× faster. The hard part wasn't the architecture. It was making it debuggable in production.",
        stack: ['LangChain', 'FastAPI', 'pgvector', 'Qdrant', 'Docker', 'Prometheus', 'Grafana'],
        link: 'https://github.com/silvaxxx1/RagApp',
      },
      {
        type: 'Production System',
        year: '2024 – 2025',
        title: 'Fero Cafe (Cafe.AI): Multi-Agent Commerce System',
        summary: 'Full-stack 5-agent async pipeline for conversational commerce: Guard → Classification → Details/Order/Recommendation, with RAG over ChromaDB, SSE streaming, SQLite session persistence, and a live observability dashboard. Shipped with 160 passing tests and 80% LLM eval pass-rate gating CI/CD.',
        story: "Most chatbots are one prompt and a reply. I wanted to build what a real production multi-agent system actually looks like: strict agent routing, session persistence, streaming responses, and evals that gate the build. Llama-3.3-70B via Groq keeps it provider-agnostic. The eval gate is what made it feel like a real production system: if the model regresses, the deploy fails.",
        stack: ['FastAPI', 'React Native', 'ChromaDB', 'Groq', 'Llama-3.3-70B', 'SSE', 'GitHub Actions'],
        link: 'https://github.com/silvaxxx1/Cafe.AI',
      },
      {
        type: 'Production System',
        year: '2025',
        title: 'Kashif: Tabular ML Agent',
        summary: 'A production tabular ML system that combines a deterministic sklearn pipeline with an LLM-driven feature engineering loop. The LLM writes engineer_features(df) → df; cross-validation decides whether those changes survive. Ships with a CLI, FastAPI server, and Streamlit UI.',
        story: "Most 'AI-assisted' data tools blur the line between what should be deterministic and what benefits from reasoning. Kashif enforces that boundary in code: the training harness is fixed, the LLM only touches feature logic, and every suggestion is scored before it persists. That constraint is what makes it trustworthy: the model can't silently corrupt your pipeline.",
        stack: ['Python', 'sklearn', 'FastAPI', 'Streamlit', 'Groq', 'Claude', 'Ollama'],
        link: 'https://github.com/silvaxxx1/Kashif_Agent',
      },
      {
        type: 'Production Deployment',
        year: '2024 – 2025',
        title: 'Real-Time Edge Vision System',
        summary: 'Low-latency computer vision on constrained hardware: TFLite and ONNX on devices with under 4GB RAM, 60–80ms end-to-end inference. YOLOv8 PPE detection at 85–90% mAP in production.',
        story: "Research papers benchmark on GPUs. Real factories run on cheap hardware. Closing that gap meant rethinking the whole pipeline: quantization, pruning, automated labeling with VLM augmentation. The system that shipped looked nothing like the prototype.",
        stack: ['YOLOv8', 'TFLite', 'ONNX', 'TensorRT', 'OpenCV', 'Roboflow'],
        link: 'https://github.com/silvaxxx1/Automated-Pipeline-for-Inference-and-Fine-Tuning-Using-TensorFlow-2-Object-Detection-API',
      },
      {
        type: 'Published Research',
        year: '2021 – 2023',
        title: 'Solaris: Multimodal Solar Forecasting',
        summary: 'A deep learning system fusing LSTM, Transformer, and CNN branches with cross-modal attention over NOAA satellite imagery, achieving state-of-the-art accuracy across all benchmarks. Paired with a V2G microgrid optimization pipeline.',
        story: "This was pure research depth: designing cross-modal attention for heterogeneous data, validating against published SOTA models, pairing with a V2G microgrid optimization pipeline (Improved Antlion Optimizer + PSO + Monte Carlo). The kind of problem where you live inside the math for months.",
        stack: ['PyTorch', 'LSTM', 'Transformers', 'CNN', 'NOAA Data', 'Monte Carlo'],
        link: 'https://github.com/silvaxxx1/Solaris',
      },
      {
        type: 'Systems Research',
        year: '2022 – Present',
        title: 'MyTorch: Beating PyTorch From Scratch',
        summary: 'A deep learning framework built from NumPy up, with a custom autograd engine, and an active Triton kernel implementation track aimed at matching and beating PyTorch performance on core ops. No black boxes, no shortcuts.',
        story: "It started as an exercise: implement backprop by hand or stop using .backward(). Three months later I had a working autograd engine. Now the ambition is bigger: writing custom Triton GPU kernels to beat PyTorch's own implementations on attention, matmul, and activation fusions. If you can outperform the framework, you truly understand it.",
        stack: ['NumPy', 'CuPy', 'Triton', 'Python', 'CUDA'],
        link: 'https://github.com/silvaxxx1/MyTorch',
      },
    ],
  },

  // Experience
  experience: {
    label: 'Experience',
    title: 'Where I\'ve Worked',
    rolesList: [
      {
        title: 'AI Engineer & LLM Consultant',
        org: 'Independent / Contract',
        period: '2023 – Present',
        bullets: [
          'Shipped multi-provider enterprise RAG systems (OpenAI, Cohere, Hugging Face, Ollama) over pgvector, Qdrant, and MongoDB via FastAPI, cutting query latency 40% on production workloads.',
          'Cut client fine-tuning costs 70% via LoRA/QLoRA on 7B–13B models; accelerated distributed training 20–30% with DeepSpeed, DDP, and AMP.',
          'Deployed GGUF/ExLlamaV2 quantized models at 3× faster inference; built a Prometheus + Grafana observability stack and Prefect pipelines, cutting deployment cycle time 35%.',
          'Redesigned a fintech KYC pipeline that was projected at ~$100K/month and sent raw PII to a third-party API with no compliance guardrails — rebuilt as a self-hosted complexity-classification router, cutting cost to ~$30/month (>99.9% reduction), keeping all data on-premises, reducing manual processing 60%, and improving extraction reasoning 20% via Chain-of-Thought/Tree-of-Thought prompting.',
        ],
      },
      {
        title: 'AI Engineer, Computer Vision Specialist',
        org: 'VisionCore',
        period: '2024 – 2025',
        bullets: [
          'Deployed low-latency edge AI (TFLite, ONNX) on <4GB RAM hardware, achieving 60–80ms end-to-end inference.',
          'Built a YOLOv8 PPE detection system reaching 85–90% mAP across 8 categories, deployed via NVIDIA DeepStream as a multi-stream pipeline processing 30 concurrent camera feeds on a 4×RTX 4070 server; cut overfitting 15% via Mosaic, MixUp, and Albumentations augmentation.',
          'Automated annotation via Roboflow and VLM-assisted labeling, cutting manual effort 25% and doubling dataset iteration speed.',
        ],
      },
      {
        title: 'R&D Engineer, AI & Deep Learning',
        org: 'Karabük University',
        period: '2021 – 2023',
        bullets: [
          'Designed a multimodal solar forecasting system (LSTM + Transformer + CNN with cross-modal attention) over NOAA GOES-16/17 imagery, state-of-the-art across all benchmarks.',
          'Built a V2G microgrid optimization pipeline using Improved Antlion Optimizer + PSO + Monte Carlo simulation — published.',
        ],
      },
      {
        title: 'Industrial Automation & Renewable Energy',
        org: 'Early Engineering Roles',
        period: '2017 – 2021',
        bullets: [
          'Managed 24/7 PLC/HMI/SCADA systems, improving uptime ~18%.',
          'Designed a dual-axis solar tracker achieving +35% energy capture.',
          'Led hybrid solar-EV R&D from concept to prototype.',
        ],
      },
    ],
  },

  // SAiR
  sair: {
    label: 'SAiR Initiative',
    title: 'Sudanese AI Research Organization',
    quote: '"Knowledge is only powerful when it moves."',
    story1: 'I founded SAiR because I kept meeting brilliant people in Sudan and across Africa who had the curiosity but not the access. The resources exist. The talent exists. The gap is structural, not intellectual. Today it\'s a 500+ member community.',
    story2: 'SAiR is free, open-source, and built around one idea: if you understand something deeply enough to teach it, you understand it.',
    stats: {
      engineers: 'engineers trained',
      completion: 'completion rate',
      timeToOffer: 'avg. time to offer',
    },
    githubOrg: 'GitHub Organization ↗',
    joinTelegram: 'Join on Telegram ↗',
    curriculum: 'Curriculum',
    studentProjects: 'Student projects shipped',
    modulesList: [
      'Python & Mathematical Foundations',
      'Machine Learning Essentials',
      'Deep Learning & Neural Networks',
      'Computer Vision',
      'NLP & Large Language Models',
      'MLOps & Production Deployment',
    ],
    outcomesList: [
      'Healthcare diagnostic systems',
      'Crop disease detection (CNN)',
      'Arabic NLP pipelines',
      'Production ML deployments',
    ],
    capstoneLabel: 'Flagship Capstone',
    capstoneTitle: 'miniGPT — Built by a Top SAiR Student',
    capstoneTagline: 'A full-stack, hackable GPT playground — from raw text to a live web UI.',
    capstoneDesc: 'A from-scratch GPT-2 implementation with a full training pipeline: tokenizer, multi-head attention, configurable model sizes (10M–163M+ params), DDP training, and cloud training on Modal A100 — shipped with 39 passing tests. Built by a top SAiR graduate now nearing job offers.',
    capstoneLink: 'View on GitHub ↗',
  },

consulting: {
    label: 'Consulting',
    title: 'Work With Me',
    intro: 'I work at the point where AI moves from research and prototypes into production. I help engineers transition into AI engineering, and I help companies design, build, and harden AI systems that have to work under real-world constraints.',
    individualsLabel: 'For Individuals',
    individualsIntro: 'Structured guidance for engineers moving into AI — focused on the technical skills, systems thinking, and production practices required to make the transition successfully.',
    liveStatusLabel: 'Currently Working With',
    liveStatusText: '5 Senior Engineers · 1 Data Scientist · 1 Researcher',
    pillars: [
  {
    title: 'Software Engineer → AI Engineer',
    desc: 'Translate existing software engineering skills into AI systems: model serving, data pipelines, inference, evaluation, and production architecture.',
  },
  {
    title: 'Data Scientist → AI Engineer',
    desc: 'Move beyond notebooks into production: reproducible pipelines, model serving, monitoring, deployment, and reliable AI infrastructure.',
  },
  {
    title: 'Researcher → Production',
    desc: 'Bridge the gap between research and production by turning experimental models and code into reproducible, deployable systems.',
  },
  {
    title: 'Team Upskilling',
    tag: '3× Shipped in Production',
    desc: 'Hands-on technical training for teams adopting AI — from model deployment and computer vision to automated experimentation and production tooling.',
  },
],

    enterpriseLabel: 'For Enterprise',
    enterpriseIntro: 'Hands-on AI engineering for teams that need to design, deploy, or improve production systems. I work directly with your stack, from architecture through deployment and operational hardening.',    
    offerings: [
  {
    title: 'LLM & RAG Systems',
    desc: 'Architecture and implementation of production LLM applications, retrieval pipelines, evaluation systems, and scalable RAG infrastructure.',
  },
  {
    title: 'Edge AI & Computer Vision',
    desc: 'Low-latency AI deployment on constrained hardware using Jetson, ONNX, TensorRT, and optimized inference pipelines.',
  },
  {
    title: 'MLOps & Production Hardening',
    desc: 'Build and improve the infrastructure around AI systems: training pipelines, deployment, observability, monitoring, reproducibility, and reliability.',
  },
  {
    title: 'AI Architecture & Technical Audits',
    desc: 'Independent technical review of AI architectures, infrastructure, models, and deployment pipelines to identify bottlenecks, risks, and opportunities for improvement.',
  },
  {
    title: 'Custom AI Systems',
    desc: 'End-to-end AI engineering for problems that require a combination of machine learning, software engineering, data infrastructure, and deployment.',
  },
],

    sairNote: 'Outside client work, I run SAiR — a free AI engineering curriculum that has trained 300+ engineers across 5 countries.',
    ctaHeading: 'Let\'s talk about what you\'re building.',
    ctaSubtext: 'A short conversation to understand the problem, assess the fit, and determine the right way to work together.',
    ctaButton: 'Book a Call',
  },

  workWithMe: {
    label: 'Consulting',
    title: 'Work With Me',
    subtitle: 'I help engineers transition into AI engineering and help companies design, build, and harden AI systems for production.',
    individualsTitle: 'For Individuals',
    individualsText: 'Technical guidance for software engineers, data scientists, and researchers moving into AI engineering — plus hands-on team upskilling.',
    enterpriseTitle: 'For Enterprise',
    enterpriseText: 'LLM & RAG systems, edge AI, computer vision, MLOps, AI architecture, technical audits, and custom AI systems.',
    ctaButton: 'View Consulting →',
  },

  // About
  about: {
    label: 'About',
    title: 'Background',
    bio1: "I've been building at the intersection of deep learning and systems engineering for 5+ years, backed by 9 years of broader engineering work in industrial automation and renewable energy. That grounding matters: it keeps me honest about what \"production\" actually means.",
    bio2: 'My research interests center on multimodal architectures, efficient inference, and the gap between benchmark performance and real-world behavior. I\'m currently a PhD candidate at Karabük University, working on Vision-Language Models and Edge AI. My multimodal solar forecasting work (an LSTM-Transformer-CNN fusion over NOAA GOES-16/17 satellite imagery) is currently under peer review.',
    bio3: 'Outside of my own work, I spend a lot of time on SAiR. Teaching forces clarity. If I can\'t explain it simply, I don\'t understand it well enough.',
    education: 'Education',
    technicalStack: 'Technical stack',
    skills: [
      { category: 'Deep Learning', items: 'PyTorch · TensorFlow · JAX · Custom Autograd · LSTM · Transformers · CNNs · Multimodal' },
      { category: 'LLM Systems', items: 'Hugging Face · LangChain · LoRA/QLoRA · RLHF/DPO · RAG · vLLM · GGUF · ExLlamaV2 · DeepSpeed · FSDP · Multi-agent pipelines · LLM evals' },
      { category: 'Computer Vision', items: 'LLaVA · Qwen-VL · YOLOv8 · OpenCV · Detectron2 · SAM · TFLite · ONNX · TensorRT · Roboflow · Jetson/Raspberry Pi' },
      { category: 'MLOps', items: 'Docker · FastAPI · MLflow · Prefect · Prometheus · Grafana · GitHub Actions · AWS SageMaker' },
      { category: 'Data & Storage', items: 'PostgreSQL · pgvector · MongoDB · Qdrant · Weaviate · ChromaDB · Redis · FAISS · SQLAlchemy · PySpark · Alembic' },
      { category: 'Languages', items: 'Python (advanced) · C/C++ · TypeScript · R · Bash · SQL' },
      { category: 'Spoken Languages', items: 'Arabic: Native · English: C1 · Turkish: B2' },
    ],
    educationList: [
      {
        degree: 'PhD Candidate, Mechatronics & AI',
        school: 'Karabük University, Turkey',
        period: '2024 – Present',
        focus: 'Vision-Language Models · Edge AI',
      },
      {
        degree: 'M.Sc., Mechatronics Engineering',
        school: 'Karabük University, Turkey',
        period: '2023',
        focus: 'Deep Learning · Computer Vision · Embedded ML',
      },
      {
        degree: 'B.Sc., Electrical Engineering',
        school: 'Sudan University of Science and Technology',
        period: '2016',
        focus: 'Control Systems',
      },
    ],
  },

  // Contact
  contact: {
    label: 'Contact',
    title: 'Get in touch',
    subtitle: 'Open to senior AI engineering roles, consulting engagements, and research collaborations — across LLM systems, computer vision, edge AI, and production ML. The best way to reach me is directly.',
    email: 'silvapi1994@gmail.com',
    github: 'GitHub ↗',
    linkedin: 'LinkedIn ↗',
    sair: 'SAiR Organization ↗',
    telegram: 'Telegram ↗',
    scheduleButton: 'Schedule a Call',
  },

  // Footer
  footer: {
    copyright: '© {year} ·',
    organization: '🇸🇩 SAiR Organization',
  },

  // Language Toggle
  language: {
    en: 'English',
    ar: 'العربية',
  },
}
