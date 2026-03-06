import { useInView } from '../hooks/useInView'
import s from './Contact.module.css'

export default function Contact() {
  const { ref, inView } = useInView()

  return (
    <section id="contact" className={s.section}>
      <div className="wrap">
        <div ref={ref} className={`reveal ${inView ? 'in' : ''}`}>
          <span className="s-label">Contact</span>
          <h2 className={`s-title ${s.title}`}>Get in touch</h2>
          <p className={s.sub}>
            Open to senior engineering roles, research collaborations, consulting, and SAiR partnerships.
            The best way to reach me is directly.
          </p>
        </div>

        <div className={`${s.body} reveal ${inView ? 'in' : ''} d2`}>
          <a href="mailto:silvapi1994@gmail.com" className={s.email}>
            silvapi1994@gmail.com
          </a>

          <div className={s.links}>
            <a href="https://github.com/silvaxxx1" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/mohammed-sedeg-67444b307/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href="https://github.com/SAIR-Org" target="_blank" rel="noopener noreferrer">SAiR Organization ↗</a>
            <a href="https://t.me/+jPPlO6ZFDbtlYzU0" target="_blank" rel="noopener noreferrer">Telegram ↗</a>
          </div>
        </div>
      </div>
    </section>
  )
}
