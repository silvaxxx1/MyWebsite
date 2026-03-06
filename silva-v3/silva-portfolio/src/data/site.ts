export const siteData = {
  name: "Mohammed Sedeg",
  alias: "Silva",
  email: "silvapi1994@gmail.com",
  location: "Turkey · Open to relocation",
  links: {
    github: "https://github.com/silvaxxx1",
    linkedin: "https://www.linkedin.com/in/mohammed-sedeg-67444b307/",
    sair: "https://github.com/SAIR-Org",
    telegram: "https://t.me/+jPPlO6ZFDbtlYzU0",
  },

  // Hero — honest, human, no pitch
  headline: "I study how machines learn —\nand build systems that actually do.",
  about: `I'm an AI engineer and researcher with a deep obsession with intelligence itself — 
how it emerges, how it scales, and how to build systems that genuinely reason rather than just pattern-match.
My work spans LLM systems, computer vision, and edge AI, always anchored in the fundamentals.
I also founded SAiR because I believe understanding shouldn't be gated — 
if you can learn it, you should be able to teach it.`,

  // Nav labels
  nav: [
    { href: '#work', label: 'Work' },
    { href: '#research', label: 'Research' },
    { href: '#sair', label: 'SAiR' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ],

  // Work — framed as stories, not cards
  work: [
    {
      title: "Enterprise RAG Platform",
      period: "2023 – Present",
      type: "Production System",
      summary: "Designed and deployed a multi-provider LLM retrieval system for enterprise clients — modular retriever-generator architecture over pgvector, Qdrant, and MongoDB, served via FastAPI.",
      detail: "The core problem was latency and cost at scale. By optimizing the retrieval pipeline and switching to GGUF-quantized models, query latency dropped ~40% and inference ran 3× faster with no accuracy loss. The observability stack (Prometheus + Grafana) made it possible to debug production issues in real time.",
      stack: ["LangChain", "FastAPI", "pgvector", "Qdrant", "Docker", "Prometheus"],
      link: "https://github.com/silvaxxx1/RagApp",
    },
    {
      title: "LLM Training Framework",
      period: "2023 – Present",
      type: "Open Source Research",
      summary: "Built MyLLM101 — a modular PyTorch framework covering the full LLM lifecycle from pretraining through alignment, used to teach 300+ engineers the internals of modern language models.",
      detail: "I built this because most tutorials treat LLMs as black boxes. This framework exposes every layer — pretraining, SFT, RLHF, DPO, PPO, LoRA/QLoRA, GGUF quantization, DeepSpeed distributed training. The goal was always pedagogy: if you can implement it from scratch, you understand it.",
      stack: ["PyTorch", "DeepSpeed", "FSDP", "LoRA", "RLHF", "GGUF"],
      link: "https://github.com/silvaxxx1/MyLLM101",
    },
    {
      title: "Real-Time Edge Vision System",
      period: "2024 – 2025",
      type: "Production Deployment",
      summary: "Deployed low-latency computer vision models on constrained edge hardware — TFLite and ONNX on devices with under 4GB RAM, achieving 60–80ms end-to-end inference.",
      detail: "The challenge was making production-grade CV work on hardware that research papers ignore. YOLOv8 PPE detection at 85–90% mAP, model size reduced 40–60% via quantization and pruning, automated annotation pipeline via Roboflow + VLM augmentation that cut labeling time by 25%.",
      stack: ["YOLOv8", "TFLite", "ONNX", "TensorRT", "OpenCV", "Roboflow"],
      link: "https://github.com/silvaxxx1",
    },
    {
      title: "Solar Forecasting Research System",
      period: "2021 – 2023",
      type: "Published Research",
      summary: "Designed a multimodal deep learning system fusing LSTM, Transformer, and CNN branches with cross-modal attention over NOAA GOES-16/17 satellite imagery for solar irradiance forecasting.",
      detail: "Achieved state-of-the-art accuracy across all benchmark metrics (RMSE, MAE, R²) against published models. Paired with a V2G microgrid optimization pipeline using Improved Antlion Optimizer and PSO with Monte Carlo simulation — results contributed to a published research paper.",
      stack: ["PyTorch", "LSTM", "Transformers", "CNN", "NOAA Data", "PSO"],
      link: "https://github.com/silvaxxx1",
    },
    {
      title: "Deep Learning From Scratch",
      period: "2022 – Present",
      type: "Educational Research",
      summary: "SilvaXNet — a deep learning framework built from first principles in pure NumPy/CuPy, including a custom autograd engine. No PyTorch, no shortcuts.",
      detail: "The motivation was simple: I wanted to truly understand backpropagation, not just call .backward(). Building your own autograd engine forces you to confront every assumption. Now used in SAiR's curriculum to teach the fundamentals before introducing frameworks.",
      stack: ["NumPy", "CuPy", "Autograd", "Python"],
      link: "https://github.com/silvaxxx1/SilvaNet",
    },
  ],

  // SAiR — mission, not stats
  sair: {
    tagline: "Knowledge is only powerful when it moves.",
    description: `I founded SAiR — Sudanese Artificial Intelligence Research Organization — 
because I kept meeting brilliant people in Sudan and across Africa who had the curiosity 
but not the access. The resources exist. The talent exists. The gap is structural, not intellectual.

SAiR is free, open-source, and built around one idea: 
if you understand something deeply enough to teach it, you understand it.`,
    modules: [
      "Python & Mathematical Foundations",
      "Machine Learning Essentials",
      "Deep Learning & Neural Networks",
      "Computer Vision",
      "NLP & Large Language Models",
      "MLOps & Production Deployment",
    ],
    outcomes: [
      "Healthcare diagnostic systems",
      "Crop disease detection (CNN)",
      "Arabic NLP pipelines",
      "Production ML deployments",
    ],
    numbers: { learners: "300+", countries: "5", completion: "65%", modules: "6" },
    links: {
      github: "https://github.com/SAIR-Org",
      telegram: "https://t.me/+jPPlO6ZFDbtlYzU0",
      courses: "https://github.com/SAIR-Org/SAIR_Courses",
    },
  },

  // About — the human behind the work
  bio: {
    short: "AI engineer, researcher, and educator. I care about understanding intelligence at a fundamental level — and about making that understanding accessible.",
    paragraphs: [
      "I've been building at the intersection of deep learning and systems engineering for 5+ years, backed by 9 years of broader engineering work in automation, embedded systems, and renewable energy. That grounding matters to me — it keeps me honest about what 'production' actually means.",
      "My research interests center on multimodal architectures, efficient inference, and the gap between benchmark performance and real-world behavior. I'm currently a PhD candidate at Karabük University, working on Vision-Language Models and Edge AI.",
      "Outside of my own work, I spend a lot of time on SAiR — the AI research organization I founded to build free, rigorous AI education for Sudan and Africa. Teaching forces clarity. If I can't explain it simply, I don't understand it well enough.",
    ],
    currently: "PhD Candidate · Karabük University · Vision-Language Models & Edge AI",
  },

  // Skills — grouped, no fanfare
  skills: {
    "Deep Learning": ["PyTorch", "TensorFlow", "JAX", "Custom Autograd", "LSTM", "Transformers", "CNNs", "Multimodal"],
    "LLM Systems": ["Hugging Face", "LoRA/QLoRA", "RLHF/DPO", "RAG", "vLLM", "GGUF", "DeepSpeed", "FSDP"],
    "Computer Vision": ["YOLOv8", "OpenCV", "Detectron2", "SAM", "TFLite", "ONNX", "TensorRT", "Roboflow"],
    "MLOps": ["Docker", "FastAPI", "MLflow", "Prefect", "Prometheus", "Grafana", "GitHub Actions", "AWS SageMaker"],
    "Data & Storage": ["PostgreSQL", "pgvector", "MongoDB", "Qdrant", "Redis", "FAISS"],
    "Languages": ["Python", "C/C++", "TypeScript", "R", "Bash"],
  },

  education: [
    {
      degree: "PhD Candidate — Mechatronics & AI",
      school: "Karabük University, Turkey",
      period: "2024 – Present",
      focus: "Vision-Language Models · Edge AI · African AI Applications",
    },
    {
      degree: "M.Sc. — Mechatronics Engineering",
      school: "Karabük University, Turkey",
      period: "2023",
      focus: "Deep Learning · Computer Vision · Embedded ML",
    },
    {
      degree: "B.Sc. — Electrical Engineering",
      school: "Sudan University of Science and Technology",
      period: "2016",
      focus: "Control Systems",
    },
  ],
};
