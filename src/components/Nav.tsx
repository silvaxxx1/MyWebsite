import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
        <Link to="/" aria-label="Mohammed Sedeg - Home">
          <AnimatedLogo className={s.logo} typing={false} />
        </Link>
        <nav className={`${s.links} ${open ? s.open : ""}`}>
          <Link to="/#work" className={s.link} onClick={() => setOpen(false)}>
            {t.nav.work}
          </Link>
          <Link to="/#sair" className={s.link} onClick={() => setOpen(false)}>
            {t.nav.sair}
          </Link>
          <Link to="/consulting" className={`${s.link} ${s.consultCta}`} onClick={() => setOpen(false)}>
            Consulting
          </Link>
          <Link to="/#about" className={s.link} onClick={() => setOpen(false)}>
            {t.nav.about}
          </Link>
          <Link to="/#contact" className={s.link} onClick={() => setOpen(false)}>
            {t.nav.contact}
          </Link>
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