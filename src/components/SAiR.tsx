import { useInView } from '../hooks/useInView'
import { useLanguage } from '../contexts/LanguageContext'
import s from './SAiR.module.css'

export default function SAiR() {
  const { ref, inView } = useInView()
  const { ref: r2, inView: v2 } = useInView()
  const { t } = useLanguage()

  const modules = t.sair.modulesList
  const outcomes = t.sair.outcomesList

  return (
    <section id="sair" className={s.section}>
      <div className="wrap">
        <div ref={ref} className={`reveal ${inView ? 'in' : ''}`}>
          <span className="s-label">{t.sair.label}</span>
          <h2 className="s-title">{t.sair.title}</h2>
        </div>

        <div ref={r2} className={`${s.body} reveal ${v2 ? 'in' : ''} d1`}>

          <div className={s.left}>
            <blockquote className={s.quote}>
              {t.sair.quote}
            </blockquote>

            <div className={s.story}>
              <p>
                {t.sair.story1}
              </p>
              <p>
                {t.sair.story2}
              </p>
            </div>

            <div className={s.numbers}>
              <div className={s.stat}>
                <span className={s.statVal}>300+</span>
                <span className={s.statLabel}>{t.sair.stats.engineers}</span>
              </div>
              <div className={s.stat}>
                <span className={s.statVal}>5</span>
                <span className={s.statLabel}>{t.sair.stats.countries}</span>
              </div>
              <div className={s.stat}>
                <span className={s.statVal}>6</span>
                <span className={s.statLabel}>{t.sair.stats.modules}</span>
              </div>
            </div>

            <div className={s.links}>
              <a href="https://github.com/SAIR-Org" target="_blank" rel="noopener noreferrer" className={s.link}>
                {t.sair.githubOrg}
              </a>
              <a href="https://t.me/+jPPlO6ZFDbtlYzU0" target="_blank" rel="noopener noreferrer" className={s.link}>
                {t.sair.joinTelegram}
              </a>
            </div>
          </div>

          <div className={s.right}>
            <p className={s.colLabel}>{t.sair.curriculum}</p>
            {modules.map((m, i) => (
              <div key={i} className={s.module}>
                <span className={s.moduleNum}>0{i + 1}</span>
                <span className={s.moduleName}>{m}</span>
              </div>
            ))}

            <p className={s.colLabel} style={{ marginTop: 28 }}>{t.sair.studentProjects}</p>
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
