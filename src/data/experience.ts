import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'VisionCore',
    position: 'AI Engineer, Computer Vision Specialist',
    location: 'Turkey',
    startDate: '2024',
    endDate: '2024',
    description: 'Built and deployed production-grade AI systems for computer vision applications on edge devices. Focused on model optimization, low-latency inference, and automated labeling pipelines.',
    achievements: [
      'Built low-latency TFLite/ONNX models for Jetson & Raspberry Pi (60–80 ms inference)',
      'Optimized models (-40–60% size, 2× speed) using quantization, pruning, and clustering',
      'Automated 25% of labeling with Roboflow + VLM-based data augmentation',
      'Developed YOLOv8 PPE detector (85–90% mAP) and anomaly detection system with reduced over-fitting',
      'Implemented robust deployment pipelines for edge AI devices'
    ],
    technologies: [
      'Python',
      'PyTorch',
      'TensorFlow',
      'ONNX',
      'TFLite',
      'YOLOv8',
      'OpenCV',
      'Roboflow',
      'Edge AI',
      'Model Optimization',
      'Quantization',
      'Pruning',
      'Clustering'
    ]
  },
  {
    id: '2',
    company: 'Freelancer',
    position: 'Generative AI & LLM Engineer',
    location: 'Remote',
    startDate: '2023',
    endDate: 'Present',
    description: 'Developed, fine-tuned, and deployed large language models (LLMs) and RAG pipelines. Optimized models for edge inference and enhanced generation quality using advanced prompting techniques and modular frameworks.',
    achievements: [
      'Fine-tuned GPT-2 & LLaMA models (↑15% accuracy, ↓70% cost) using Hugging Face, LoRA, PEFT, and Unsloth',
      'Built scalable RAG pipelines with Qdrant, FastAPI, and MongoDB for context-rich generation and research',
      'Deployed quantized LLMs (gguf, ExLlamaV2) achieving ~3× faster inference on CPU/GPU edge devices',
      'Improved LLM outputs by 20% using Chain-of-Thought (CoT) and Tree-of-Thought (ToT) prompting strategies',
      'Reduced training time by 20% with PyTorch DDP, AMP, and optimized data loaders',
    ],
    technologies: [
      'Python',
      'PyTorch',
      'Hugging Face',
      'LangChain',
      'LoRA',
      'PEFT',
      'RAG',
      'FAISS',
      'MongoDB',
      'FastAPI',
      'Quantization',
      'RLHF',
      'AWS'
    ]
  },
  {
    id: '3',
    company: 'Karabük University',
    position: 'Team Lead & Instructor (Volunteer)',
    location: 'Turkey',
    startDate: '2022',
    endDate: 'Present',
    description: 'Lead and mentor bachelor-level students in AI and robotics projects for Teknofest competitions. Teach specialized engineering courses, oversee project development from concept to product, and provide guidance throughout the process.',
    achievements: [
      'Led teams of software, mechatronics, and electrical students in AI & robotics competitions',
      'Taught specialized courses covering mathematics, programming, and engineering topics',
      'Oversaw full project lifecycle from ideation to deployment, ensuring educational and practical outcomes',
      'Mentored students in research, model development, and engineering best practices'
    ],
    technologies: [
      'Python',
      'C/C++',
      'Robotics',
      'Computer Vision',
      'Machine Learning',
      'Project Management',
      'Teaching',
      'Mentoring',
      'AI & Edge Systems'
    ]
  }
];
