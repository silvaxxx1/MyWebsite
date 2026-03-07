import { useInView } from '../hooks/useInView'
import { useLanguage } from '../contexts/LanguageContext'
import s from './About.module.css'

export default function About() {
  const { ref, inView } = useInView()
  const { ref: r2, inView: v2 } = useInView()
  const { t } = useLanguage()

  const skills = t.about.skills as any
  const education = t.about.educationList as any

  return (
    <section id="about">
      <div className="wrap">
        <div ref={ref} className={`reveal ${inView ? 'in' : ''}`}>
          <span className="s-label">{t.about.label}</span>
          <h2 className="s-title">{t.about.title}</h2>
        </div>

        <div ref={r2} className={`${s.body} reveal ${v2 ? 'in' : ''} d1`}>

          <div className={s.left}>
            <div className={s.bio}>
              <p>{t.about.bio1}</p>
              <p>{t.about.bio2}</p>
              <p>{t.about.bio3}</p>
            </div>

            <div className={s.edu}>
              <p className={s.blockLabel}>{t.about.education}</p>
              {education.map((e: any, i: number) => (
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
            <p className={s.blockLabel}>{t.about.technicalStack}</p>
            {skills.map((skill: any, i: number) => (
              <div key={i} className={s.skillRow}>
                <span className={s.skillCat}>{skill.category}</span>
                <span className={s.skillItems}>{skill.items}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
