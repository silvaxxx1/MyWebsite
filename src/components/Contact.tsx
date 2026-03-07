import { useInView } from '../hooks/useInView'
import { useLanguage } from '../contexts/LanguageContext'
import s from './Contact.module.css'

export default function Contact() {
  const { ref, inView } = useInView()
  const { t } = useLanguage()

  return (
    <section id="contact" className={s.section}>
      <div className="wrap">
        <div ref={ref} className={`reveal ${inView ? 'in' : ''}`}>
          <span className="s-label">{t.contact.label}</span>
          <h2 className={`s-title ${s.title}`}>{t.contact.title}</h2>
          <p className={s.sub}>
            {t.contact.subtitle}
          </p>
        </div>

        <div className={`${s.body} reveal ${inView ? 'in' : ''} d2`}>
          <a href="mailto:silvapi1994@gmail.com" className={s.email}>
            {t.contact.email}
          </a>

          <a
            href="https://calendly.com/" // Replace with your actual scheduling link
            target="_blank"
            rel="noopener noreferrer"
            className={s.scheduleButton}
          >
            {t.contact.scheduleButton}
          </a>

          <div className={s.links}>
            <a href="https://github.com/silvaxxx1" target="_blank" rel="noopener noreferrer">{t.contact.github}</a>
            <a href="https://www.linkedin.com/in/mohammed-sedeg-67444b307/" target="_blank" rel="noopener noreferrer">{t.contact.linkedin}</a>
            <a href="https://github.com/SAIR-Org" target="_blank" rel="noopener noreferrer">{t.contact.sair}</a>
            <a href="https://t.me/+jPPlO6ZFDbtlYzU0" target="_blank" rel="noopener noreferrer">{t.contact.telegram}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
