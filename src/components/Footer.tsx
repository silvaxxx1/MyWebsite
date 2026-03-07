import AnimatedLogo from './AnimatedLogo'
import { useLanguage } from '../contexts/LanguageContext'
import s from './Footer.module.css'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className={s.footer}>
      <div className={`wrap ${s.inner}`}>
        <a href="#top" aria-label="Mohammed Sedeg - Back to top">
          <AnimatedLogo className={s.name} typing={true} />
        </a>
        <span className={s.copy}>
          {t.footer.copyright.replace('{year}', new Date().getFullYear().toString())}{' '}
          <a href="https://github.com/SAIR-Org" target="_blank" rel="noopener noreferrer">
            {t.footer.organization}
          </a>
        </span>
      </div>
    </footer>
  )
}
