import { useInView } from '../hooks/useInView'
import { useLanguage } from '../contexts/LanguageContext'
import s from './Experience.module.css'

export default function Experience() {
  const { ref, inView } = useInView()
  const { ref: r2, inView: v2 } = useInView()
  const { t } = useLanguage()

  const roles = t.experience.rolesList as any

  return (
    <section id="experience">
      <div className="wrap">
        <div ref={ref} className={`reveal ${inView ? 'in' : ''}`}>
          <span className="s-label">{t.experience.label}</span>
          <h2 className="s-title">{t.experience.title}</h2>
        </div>

        <div ref={r2} className={`${s.body} reveal ${v2 ? 'in' : ''} d1`}>
          {roles.map((role: any, i: number) => (
            <div key={i} className={s.role}>
              <div className={s.roleHead}>
                <div className={s.roleTitleWrap}>
                  <span className={s.roleTitle}>{role.title}</span>
                  <span className={s.roleOrg}>{role.org}</span>
                </div>
                <span className={s.rolePeriod}>{role.period}</span>
              </div>
              <ul className={s.bullets}>
                {role.bullets.map((b: string, j: number) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
              {i < roles.length - 1 && <div className={s.divider} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
