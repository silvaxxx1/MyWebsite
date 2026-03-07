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
    eyebrow: 'AI Engineer & Researcher',
    firstName: 'Mohammed',
    lastName: 'Sedeg',
    lead: 'I study how machines learn — and build systems that actually do.',
    bio1: 'I have a deep obsession with intelligence itself — how it emerges, how it scales, and how to build systems that genuinely reason rather than just pattern-match. Five years in AI, nine in engineering. My work spans LLM systems, computer vision, and edge AI, always starting from the fundamentals.',
    bio2: 'I also founded',
    bio2Link: 'SAiR',
    bio2After: '— because I believe understanding shouldn\'t be gated. If you can learn it, you should be able to teach it.',
    pill1: '🎓 PhD Candidate',
    pill2: '💻 Karabük University',
    pill3: '🌍 Khartoum · Turkey · Remote',
    viewWork: 'View my work',
    getInTouch: 'Get in touch',
    downloadCV: 'Download CV',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    sairOrg: 'SAiR Org',
  },

  // Work
  work: {
    label: 'Work',
    title: 'Selected Projects',
    subtitle: 'Production systems, research, and open-source tools — each one built to understand something more deeply.',
    view: 'View ↗',
    projects: [
      {
        type: 'Production System',
        year: '2023 – Present',
        title: 'Enterprise RAG Platform',
        summary: 'Multi-provider LLM retrieval system for enterprise clients — modular retriever-generator architecture over pgvector, Qdrant, and MongoDB, served via FastAPI with full observability.',
        story: "The real problem was latency and cost at scale. By rethinking the retrieval pipeline and switching to GGUF-quantized models, query latency dropped ~40% and inference ran 3× faster. The hard part wasn't the architecture — it was making it debuggable in production.",
        stack: ['LangChain', 'FastAPI', 'pgvector', 'Qdrant', 'Docker', 'Prometheus', 'Grafana'],
        link: 'https://github.com/silvaxxx1/RagApp',
      },
      {
        type: 'Open Source Research',
        year: '2023 – Present',
        title: 'MyLLM101 — LLM Training Framework',
        summary: 'A modular PyTorch framework covering the full LLM lifecycle from pretraining through alignment — used to teach 300+ engineers how language models actually work from the inside.',
        story: "Most tutorials treat LLMs as black boxes. I built this because I wanted to expose every layer: pretraining, SFT, RLHF, DPO, quantization, distributed training. If you can implement it from scratch, you understand it. That became the philosophy of SAiR.",
        stack: ['PyTorch', 'DeepSpeed', 'FSDP', 'LoRA', 'QLoRA', 'RLHF', 'GGUF'],
        link: 'https://github.com/silvaxxx1/MyLLM101',
      },
      {
        type: 'Production Deployment',
        year: '2024 – 2025',
        title: 'Real-Time Edge Vision System',
        summary: 'Low-latency computer vision on constrained hardware — TFLite and ONNX on devices with under 4GB RAM, 60–80ms end-to-end inference. YOLOv8 PPE detection at 85–90% mAP in production.',
        story: "Research papers benchmark on GPUs. Real factories run on cheap hardware. Closing that gap meant rethinking the whole pipeline — quantization, pruning, automated labeling with VLM augmentation. The system that shipped looked nothing like the prototype.",
        stack: ['YOLOv8', 'TFLite', 'ONNX', 'TensorRT', 'OpenCV', 'Roboflow'],
        link: 'https://github.com/silvaxxx1',
      },
      {
        type: 'Published Research',
        year: '2021 – 2023',
        title: 'Multimodal Solar Forecasting System',
        summary: 'A deep learning system fusing LSTM, Transformer, and CNN branches with cross-modal attention over NOAA satellite imagery — state-of-the-art accuracy across all benchmarks.',
        story: "This was pure research depth: designing cross-modal attention for heterogeneous data, validating against published SOTA models, pairing with a V2G microgrid optimization pipeline. The kind of problem where you live inside the math for months.",
        stack: ['PyTorch', 'LSTM', 'Transformers', 'CNN', 'NOAA Data', 'Monte Carlo'],
        link: 'https://github.com/silvaxxx1',
      },
      {
        type: 'Educational Research',
        year: '2022 – Present',
        title: 'SilvaXNet — Deep Learning From Scratch',
        summary: 'A complete deep learning framework in pure NumPy/CuPy, including a custom autograd engine. No PyTorch, no shortcuts. Built to truly understand what backpropagation actually does.',
        story: "I kept using .backward() without being certain I could derive it by hand. So I stopped using it. Three months later I had a working autograd engine. It's now how SAiR introduces neural networks — you implement it first, then you're allowed to use the framework.",
        stack: ['NumPy', 'CuPy', 'Python', 'Autograd'],
        link: 'https://github.com/silvaxxx1/SilvaNet',
      },
    ],
  },

  // SAiR
  sair: {
    label: 'SAiR Initiative',
    title: 'Sudanese AI Research Organization',
    quote: '"Knowledge is only powerful when it moves."',
    story1: 'I founded SAiR because I kept meeting brilliant people in Sudan and across Africa who had the curiosity but not the access. The resources exist. The talent exists. The gap is structural, not intellectual.',
    story2: 'SAiR is free, open-source, and built around one idea: if you understand something deeply enough to teach it, you understand it.',
    stats: {
      engineers: 'engineers trained',
      countries: 'countries',
      modules: 'modules · free',
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
  },

  // About
  about: {
    label: 'About',
    title: 'Background',
    bio1: "I've been building at the intersection of deep learning and systems engineering for 5+ years, backed by 9 years of broader engineering work in industrial automation and renewable energy. That grounding matters — it keeps me honest about what \"production\" actually means.",
    bio2: 'My research interests center on multimodal architectures, efficient inference, and the gap between benchmark performance and real-world behavior. I\'m currently a PhD candidate at Karabük University, working on Vision-Language Models and Edge AI.',
    bio3: 'Outside of my own work, I spend a lot of time on SAiR. Teaching forces clarity. If I can\'t explain it simply, I don\'t understand it well enough.',
    education: 'Education',
    technicalStack: 'Technical stack',
    skills: [
      { category: 'Deep Learning', items: 'PyTorch · TensorFlow · JAX · Custom Autograd · LSTM · Transformers · CNNs · Multimodal' },
      { category: 'LLM Systems', items: 'Hugging Face · LoRA/QLoRA · RLHF/DPO · RAG · vLLM · GGUF · DeepSpeed · FSDP' },
      { category: 'Computer Vision', items: 'YOLOv8 · OpenCV · Detectron2 · SAM · TFLite · ONNX · TensorRT · Roboflow' },
      { category: 'MLOps', items: 'Docker · FastAPI · MLflow · Prefect · Prometheus · Grafana · GitHub Actions · AWS SageMaker' },
      { category: 'Data & Storage', items: 'PostgreSQL · pgvector · MongoDB · Qdrant · Redis · FAISS' },
      { category: 'Languages', items: 'Python · C/C++ · TypeScript · R · Bash' },
    ],
    educationList: [
      {
        degree: 'PhD Candidate — Mechatronics & AI',
        school: 'Karabük University, Turkey',
        period: '2024 – Present',
        focus: 'Vision-Language Models · Edge AI',
      },
      {
        degree: 'M.Sc. — Mechatronics Engineering',
        school: 'Karabük University, Turkey',
        period: '2023',
        focus: 'Deep Learning · Computer Vision · Embedded ML',
      },
      {
        degree: 'B.Sc. — Electrical Engineering',
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
    subtitle: 'Open to senior engineering roles, research collaborations, consulting, and SAiR partnerships. The best way to reach me is directly.',
    email: 'silvapi1994@gmail.com',
    github: 'GitHub ↗',
    linkedin: 'LinkedIn ↗',
    sair: 'SAiR Organization ↗',
    telegram: 'Telegram ↗',
    scheduleButton: 'Schedule Free Consultation',
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
