import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'MyLLM101: Complete LLM Pipeline',
    description: 'End-to-end LLM development: training, fine-tuning, RLHF, and quantization.',
    longDescription:
      'MyLLM101 is a modular PyTorch LLM framework that supports training, fine-tuning, RLHF, and quantization. Designed for both research and production-ready applications, it demonstrates best practices in model optimization and scalable LLM pipelines.',
    technologies: ['Python', 'PyTorch', 'Transformers', 'CUDA', 'RLHF', 'Quantization'],
    imageUrl: `${import.meta.env.BASE_URL}images/projects/myllm.png`,
    githubUrl: 'https://github.com/silvaxxx1/MyLLM101',
    featured: true,
    category: 'project'
  },
  {
    id: '2',
    title: 'RagApp – Enterprise RAG System',
    description: 'Production-ready Retrieval-Augmented Generation system with vector search and multi-provider support.',
    longDescription:
      'RagApp is a full-stack project designed to build a complete RAG system from scratch. It includes data ingestion, document chunking, vector search, prompt construction, and LLM-based generation. Built with FastAPI, MongoDB, Docker, and optional cloud deployment, it provides a hands-on, modular architecture for both experimentation and production.',
    technologies: ['Python', 'FastAPI', 'Docker', 'MongoDB', 'PostgreSQL', 'Qdrant', 'AWS', 'RAG'],
    imageUrl: `${import.meta.env.BASE_URL}images/projects/ragapp.png`,
    githubUrl: '#', // Closed source for now
    featured: true,
    category: 'project'
  },
  {
    id: '3',
    title: 'SilvaXNet: Educational Deep Learning Framework',
    description: 'Lightweight deep learning library with CPU/GPU support for educational purposes.',
    longDescription:
      'SilvaXNet (formerly SilvaNet) is a NumPy/CuPy-based deep learning framework designed for students, researchers, and educators. It provides CPU-based (SilvaNet) and planned GPU-accelerated (SilvaXNet) support for neural networks, RNNs, LSTMs, GRUs, CNNs, and more. Focuses on educational clarity and hands-on experimentation.',
    technologies: ['Python', 'NumPy', 'CuPy', 'Deep Learning', 'ANNs', 'RNNs', 'LSTMs', 'GRUs', 'CNNs', 'Autograd'],
    imageUrl: `${import.meta.env.BASE_URL}images/projects/silvaxnet.png`,
    githubUrl: 'https://github.com/silvaxxx1/SilvaXNet',
    featured: true,
    category: 'project'
  },
  {
    id: '4',
    title: 'PAPER2CODE: SOTA ML Paper Implementations',
    description: 'Reproductions of state-of-the-art machine learning papers for educational and research purposes.',
    longDescription:
      'PAPER2CODE is a repository that implements influential ML and deep learning research papers from scratch using PyTorch and TensorFlow. It includes subprojects like FCN8_VGG, ResNet50, Vision Transformer, U-Net, GANs, and NLP-Evolution (Bigram, MLP, RNN, LSTM, GRU, Transformer). Designed for reproducibility, education, and hands-on learning.',
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'NumPy', 'ML', 'DL', 'NLP', 'CNN', 'RNN', 'Transformer', 'GANs'],
    imageUrl: `${import.meta.env.BASE_URL}images/projects/P2C.png`,
    githubUrl: 'https://github.com/silvaxxx1/PAPER2CODE',
    featured: false,
    category: 'project'
  },
  {
    id: '5',
    title: 'HandsOnLLM: Practical LLM Pipelines',
    description: 'A modular project suite for hands-on learning with LLMs, including fine-tuning, prompt engineering, and lightweight local RAG.',
    longDescription:
      'HandsOnLLM is a real-world, modular project suite covering practical aspects of working with LLMs. It includes text classification pipelines, offline local RAG with TinyLlama + llama.cpp, prompt engineering workflows, and reusable notebooks for experimentation. Designed for low-resource environments, it emphasizes hands-on learning, modular design, and reproducibility in LLM development.',
    technologies: [
      'Python',
      'Transformers',
      'TRL',
      'PEFT',
      'BitsAndBytes',
      'LangChain',
      'SetFit',
      'FAISS',
      'TinyLlama',
      'llama.cpp',
      'Local RAG',
      'Prompt Engineering',
      'Jupyter',
      'Scikit-Learn',
      'NLP'
    ],
    imageUrl: `${import.meta.env.BASE_URL}images/projects/HOLMM.png`,
    githubUrl: 'https://github.com/silvaxxx1/HandsOnLLM',
    featured: true,
    category: 'project'
  },
  {
    id: '6',
    title: 'Automated TF2 Object Detection Pipeline',
    description: 'Automated inference and fine-tuning pipeline using TensorFlow 2 Object Detection API.',
    longDescription:
      'This project provides an end-to-end automated pipeline for object detection using TensorFlow 2 Object Detection API. It supports image, video, and webcam inference, as well as fine-tuning with custom datasets. The workflow includes model downloading, annotation conversion, TFRecord generation, training loops, and application development for real-world use.',
    technologies: [
      'Python',
      'TensorFlow 2',
      'Object Detection API',
      'TFRecord',
      'OpenCV',
      'NumPy',
      'Data Annotation',
      'Model Fine-Tuning'
    ],
    imageUrl: `${import.meta.env.BASE_URL}images/projects/TF2.png`,
    githubUrl: 'https://github.com/silvaxxx1/Automated-Pipeline-for-Inference-and-Fine-Tuning-Using-TensorFlow-2-Object-Detection-API',
    featured: false,
    category: 'project'
  }
];
