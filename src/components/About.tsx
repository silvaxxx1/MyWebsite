import { useInView } from '../hooks/useInView'
import s from './About.module.css'

const skills = {
  'Deep Learning':  ['PyTorch', 'TensorFlow', 'JAX', 'Custom Autograd', 'LSTM', 'Transformers', 'CNNs', 'Multimodal'],
  'LLM Systems':    ['Hugging Face', 'LoRA/QLoRA', 'RLHF/DPO', 'RAG', 'vLLM', 'GGUF', 'DeepSpeed', 'FSDP'],
  'Computer Vision':['YOLOv8', 'OpenCV', 'Detectron2', 'SAM', 'TFLite', 'ONNX', 'TensorRT', 'Roboflow'],
  'MLOps':          ['Docker', 'FastAPI', 'MLflow', 'Prefect', 'Prometheus', 'Grafana', 'GitHub Actions', 'AWS SageMaker'],
  'Data & Storage': ['PostgreSQL', 'pgvector', 'MongoDB', 'Qdrant', 'Redis', 'FAISS'],
  'Languages':      ['Python', 'C/C++', 'TypeScript', 'R', 'Bash'],
}

const education = [
  { degree: 'PhD Candidate — Mechatronics & AI', school: 'Karabük University, Turkey', period: '2024 – Present', focus: 'Vision-Language Models · Edge AI' },
  { degree: 'M.Sc. — Mechatronics Engineering', school: 'Karabük University, Turkey', period: '2023', focus: 'Deep Learning · Computer Vision · Embedded ML' },
  { degree: 'B.Sc. — Electrical Engineering', school: 'Sudan University of Science and Technology', period: '2016', focus: 'Control Systems' },
]

export default function About() {
  const { ref, inView } = useInView()
  const { ref: r2, inView: v2 } = useInView()

  return (
    <section id="about">
      <div className="wrap">
        <div ref={ref} className={`reveal ${inView ? 'in' : ''}`}>
          <span className="s-label">About</span>
          <h2 className="s-title">Background</h2>
        </div>

        <div ref={r2} className={`${s.body} reveal ${v2 ? 'in' : ''} d1`}>

          <div className={s.left}>
            <div className={s.bio}>
              <p>I've been building at the intersection of deep learning and systems engineering for 5+ years, backed by 9 years of broader engineering work in industrial automation and renewable energy. That grounding matters — it keeps me honest about what "production" actually means.</p>
              <p>My research interests center on multimodal architectures, efficient inference, and the gap between benchmark performance and real-world behavior. I'm currently a PhD candidate at Karabük University, working on Vision-Language Models and Edge AI.</p>
              <p>Outside of my own work, I spend a lot of time on SAiR. Teaching forces clarity. If I can't explain it simply, I don't understand it well enough.</p>
            </div>

            <div className={s.edu}>
              <p className={s.blockLabel}>Education</p>
              {education.map((e, i) => (
                <div key={i} className={s.eduItem}>
                  <div className={s.eduDegree}>{e.degree}</div>
                  <div className={s.eduSchool}>{e.school} · <span className={s.eduPeriod}>{e.period}</span></div>
                  <div className={s.eduFocus}>{e.focus}</div>
                  {i < education.length - 1 && <div className={s.eduDivider} />}
                </div>
              ))}
            </div>
          </div>

          <div className={s.right}>
            <p className={s.blockLabel}>Technical stack</p>
            {Object.entries(skills).map(([cat, items]) => (
              <div key={cat} className={s.skillRow}>
                <span className={s.skillCat}>{cat}</span>
                <span className={s.skillItems}>{items.join(' · ')}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
