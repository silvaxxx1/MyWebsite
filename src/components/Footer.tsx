import s from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={`wrap ${s.inner}`}>
        <span className={s.name}>Mohammed Sedeg</span>
        <span className={s.copy}>
          © {new Date().getFullYear()} ·{' '}
          <a href="https://github.com/SAIR-Org" target="_blank" rel="noopener noreferrer">
            🇸🇩 SAiR Organization
          </a>
        </span>
      </div>
    </footer>
  )
}
