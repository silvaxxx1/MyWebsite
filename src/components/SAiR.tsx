import { useInView } from '../hooks/useInView'
import s from './SAiR.module.css'

const modules = [
  'Python & Mathematical Foundations',
  'Machine Learning Essentials',
  'Deep Learning & Neural Networks',
  'Computer Vision',
  'NLP & Large Language Models',
  'MLOps & Production Deployment',
]

const outcomes = [
  'Healthcare diagnostic systems',
  'Crop disease detection (CNN)',
  'Arabic NLP pipelines',
  'Production ML deployments',
]

export default function SAiR() {
  const { ref, inView } = useInView()
  const { ref: r2, inView: v2 } = useInView()

  return (
    <section id="sair" className={s.section}>
      <div className="wrap">
        <div ref={ref} className={`reveal ${inView ? 'in' : ''}`}>
          <span className="s-label">SAiR Initiative</span>
          <h2 className="s-title">Sudanese AI Research Organization</h2>
        </div>

        <div ref={r2} className={`${s.body} reveal ${v2 ? 'in' : ''} d1`}>

          <div className={s.left}>
            <blockquote className={s.quote}>
              "Knowledge is only powerful when it moves."
            </blockquote>

            <div className={s.story}>
              <p>
                I founded SAiR because I kept meeting brilliant people in Sudan and across Africa
                who had the curiosity but not the access. The resources exist. The talent exists.
                The gap is structural, not intellectual.
              </p>
              <p>
                SAiR is free, open-source, and built around one idea:
                if you understand something deeply enough to teach it, you understand it.
              </p>
            </div>

            <div className={s.numbers}>
              <div className={s.stat}>
                <span className={s.statVal}>300+</span>
                <span className={s.statLabel}>engineers trained</span>
              </div>
              <div className={s.stat}>
                <span className={s.statVal}>5</span>
                <span className={s.statLabel}>countries</span>
              </div>
              <div className={s.stat}>
                <span className={s.statVal}>6</span>
                <span className={s.statLabel}>modules · free</span>
              </div>
            </div>

            <div className={s.links}>
              <a href="https://github.com/SAIR-Org" target="_blank" rel="noopener noreferrer" className={s.link}>
                GitHub Organization ↗
              </a>
              <a href="https://t.me/+jPPlO6ZFDbtlYzU0" target="_blank" rel="noopener noreferrer" className={s.link}>
                Join on Telegram ↗
              </a>
            </div>
          </div>

          <div className={s.right}>
            <p className={s.colLabel}>Curriculum</p>
            {modules.map((m, i) => (
              <div key={i} className={s.module}>
                <span className={s.moduleNum}>0{i + 1}</span>
                <span className={s.moduleName}>{m}</span>
              </div>
            ))}

            <p className={s.colLabel} style={{ marginTop: 28 }}>Student projects shipped</p>
            {outcomes.map((o, i) => (
              <div key={i} className={s.outcome}>
                <span className={s.dot} />
                <span>{o}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
