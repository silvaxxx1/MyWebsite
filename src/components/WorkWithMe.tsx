import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import { useLanguage } from '../contexts/LanguageContext'
import s from './WorkWithMe.module.css'

export default function WorkWithMe() {
  const { ref, inView } = useInView()
  const { t } = useLanguage()

  return (
    <section id="work-with-me">
      <div className="wrap">
        <div ref={ref} className={`reveal ${inView ? 'in' : ''}`}>
          <span className="s-label">{t.workWithMe.label}</span>
          <h2 className="s-title">{t.workWithMe.title}</h2>
          <p className={s.subtitle}>
            {t.workWithMe.subtitle}
          </p>
        </div>

        <div className={s.grid}>
          <div className={s.card}>
            <h3 className={s.cardTitle}>{t.workWithMe.individualsTitle}</h3>
            <p className={s.cardText}>
              {t.workWithMe.individualsText}
            </p>
          </div>
          <div className={s.card}>
            <h3 className={s.cardTitle}>{t.workWithMe.enterpriseTitle}</h3>
            <p className={s.cardText}>
              {t.workWithMe.enterpriseText}
            </p>
          </div>
        </div>

        <div className={s.ctaRow}>
          <Link to="/consulting" className={s.ctaButton}>
            {t.workWithMe.ctaButton}
          </Link>
        </div>
      </div>
    </section>
  )
}
