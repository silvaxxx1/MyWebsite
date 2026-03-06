import { useInView } from '../hooks/useInView'
import s from './Work.module.css'

const projects = [
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
]

function Project({ p, i }: { p: typeof projects[0]; i: number }) {
  const { ref, inView } = useInView()
  return (
    <div ref={ref} className={`${s.project} reveal ${inView ? 'in' : ''} d${(i % 3) + 1}`}>
      <div className={s.projectMeta}>
        <span className={s.projectType}>{p.type}</span>
        <span className={s.projectYear}>{p.year}</span>
      </div>
      <div className={s.projectBody}>
        <div className={s.projectLeft}>
          <h3 className={s.projectTitle}>{p.title}</h3>
          <p className={s.projectSummary}>{p.summary}</p>
          <p className={s.projectStory}>{p.story}</p>
          <div className={s.projectStack}>
            {p.stack.map(t => <span key={t} className={s.tag}>{t}</span>)}
          </div>
        </div>
        <a href={p.link} target="_blank" rel="noopener noreferrer" className={s.projectLink}>
          View ↗
        </a>
      </div>
    </div>
  )
}

export default function Work() {
  const { ref, inView } = useInView()
  return (
    <section id="work">
      <div className="wrap">
        <div ref={ref} className={`reveal ${inView ? 'in' : ''}`}>
          <span className="s-label">Work</span>
          <h2 className="s-title">Selected Projects</h2>
          <p className={s.subtitle}>
            Production systems, research, and open-source tools —
            each one built to understand something more deeply.
          </p>
        </div>
        <div className={s.list}>
          {projects.map((p, i) => <Project key={i} p={p} i={i} />)}
        </div>
      </div>
    </section>
  )
}
