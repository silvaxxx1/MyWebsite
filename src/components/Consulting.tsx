import { useInView } from '../hooks/useInView'
import { useLanguage } from '../contexts/LanguageContext'
import { BOOKING_URL } from '../constants'
import s from './Consulting.module.css'

export default function Consulting() {
  const { ref, inView } = useInView()
  const { ref: r2, inView: v2 } = useInView()
  const { t } = useLanguage()

  const pillars = t.consulting.pillars as any
  const offerings = t.consulting.offerings as any

  return (
    <section id="consulting">
      <div className="wrap">
        <div ref={ref} className={`reveal ${inView ? 'in' : ''}`}>
          <span className="s-label">{t.consulting.label}</span>
          <h2 className="s-title">{t.consulting.title}</h2>
          <p className={s.intro}>{t.consulting.intro}</p>
        </div>

        <div ref={r2} className={`${s.body} reveal ${v2 ? 'in' : ''} d1`}>

          <div className={s.left}>
            <p className={s.blockLabel}>{t.consulting.individualsLabel}</p>
            <p className={s.leadText}>{t.consulting.individualsIntro}</p>

            <div className={s.pillars}>
              {pillars.map((p: any, i: number) => (
                <div key={i} className={s.pillar}>
                  <span className={s.pillarNum}>0{i + 1}</span>
                  <div>
                    <div className={s.pillarTitle}>{p.title}</div>
                    <div className={s.pillarDesc}>{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={s.right}>
            <p className={s.blockLabel}>{t.consulting.enterpriseLabel}</p>
            <p className={s.leadText}>{t.consulting.enterpriseIntro}</p>

            <div className={s.offerings}>
              {offerings.map((o: string, i: number) => (
                <div key={i} className={s.offeringRow}>
                  <span className={s.dot} />
                  <span>{o}</span>
                </div>
              ))}
            </div>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={s.ctaButton}
            >
              {t.consulting.ctaButton}
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
