import { useInView } from '../hooks/useInView'
import { useLanguage } from '../contexts/LanguageContext'
import s from './Work.module.css'

function Project({ p, i }: { p: any; i: number }) {
  const { ref, inView } = useInView()
  const { t } = useLanguage()
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
            {p.stack.map((tech: string) => <span key={tech} className={s.tag}>{tech}</span>)}
          </div>
        </div>
        <a href={p.link} target="_blank" rel="noopener noreferrer" className={s.projectLink}>
          {t.work.view}
        </a>
      </div>
    </div>
  )
}

export default function Work() {
  const { ref, inView } = useInView()
  const { t } = useLanguage()
  const projects = (t.work as any).projects

  return (
    <section id="work">
      <div className="wrap">
        <div ref={ref} className={`reveal ${inView ? 'in' : ''}`}>
          <span className="s-label">{t.work.label}</span>
          <h2 className="s-title">{t.work.title}</h2>
          <p className={s.subtitle}>
            {t.work.subtitle}
          </p>
        </div>
        <div className={s.list}>
          {projects.map((p: any, i: number) => <Project key={i} p={p} i={i} />)}
        </div>
      </div>
    </section>
  )
}
