import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import AnimatedLogo from "./AnimatedLogo";
import { useLanguage } from "../contexts/LanguageContext";
import s from "./Nav.module.css";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`${s.nav} ${scrolled ? s.scrolled : ""}`}>
      <div className={`wrap ${s.inner}`}>
        <a href="#top" aria-label="Mohammed Sedeg - Home">
          <AnimatedLogo className={s.logo} typing={false} />
        </a>

        <nav className={`${s.links} ${open ? s.open : ""}`}>
          <a href="#work" className={s.link} onClick={() => setOpen(false)}>
            {t.nav.work}
          </a>
          <a href="#sair" className={s.link} onClick={() => setOpen(false)}>
            {t.nav.sair}
          </a>
          <a href="#about" className={s.link} onClick={() => setOpen(false)}>
            {t.nav.about}
          </a>
          <a href="#contact" className={s.link} onClick={() => setOpen(false)}>
            {t.nav.contact}
          </a>

          <div className={s.toggleWrapper}>
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </nav>

        <button
          className={`${s.burger} ${open ? s.burgerOpen : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
