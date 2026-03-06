import { useState, useEffect } from 'react'
import s from './Nav.module.css'

const links = [
  { href: '#work',    label: 'Work'    },
  { href: '#sair',   label: 'SAiR'   },
  { href: '#about',  label: 'About'  },
  { href: '#contact',label: 'Contact'},
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`${s.nav} ${scrolled ? s.scrolled : ''}`}>
      <div className={`wrap ${s.inner}`}>
        <a href="#top" className={s.logo}>Mohammed Sedeg</a>

        <nav className={`${s.links} ${open ? s.open : ''}`}>
          {links.map(l => (
            <a key={l.href} href={l.href} className={s.link} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="mailto:silvapi1994@gmail.com" className={s.email}>
            silvapi1994@gmail.com
          </a>
        </nav>

        <button className={`${s.burger} ${open ? s.burgerOpen : ''}`} onClick={() => setOpen(!open)} aria-label="menu">
          <span/><span/><span/>
        </button>
      </div>
    </header>
  )
}
