import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import s from './WorkWithMe.module.css'

export default function WorkWithMe() {
  const { ref, inView } = useInView()

  return (
    <section id="work-with-me">
      <div className="wrap">
        <div ref={ref} className={`reveal ${inView ? 'in' : ''}`}>
          <span className="s-label">Consulting</span>
          <h2 className="s-title">Work With Me</h2>
          <p className={s.subtitle}>
            Helping individual engineers transition into AI roles, and helping companies ship AI systems that hold up in production.
          </p>
        </div>

        <div className={s.grid}>
          <div className={s.card}>
            <h3 className={s.cardTitle}>For Individuals</h3>
            <p className={s.cardText}>
              Career transitions into AI engineering — from software, data science, or research — plus structured team upskilling.
            </p>
          </div>
          <div className={s.card}>
            <h3 className={s.cardTitle}>For Enterprise</h3>
            <p className={s.cardText}>
              LLM & RAG system design, edge AI deployment, MLOps hardening, technical audits, and end-to-end AI solution development.
            </p>
          </div>
        </div>

        <div className={s.ctaRow}>
          <Link to="/consulting" className={s.ctaButton}>
            View Consulting →
          </Link>
        </div>
      </div>
    </section>
  )
}
