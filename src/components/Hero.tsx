import s from './Hero.module.css'

export default function Hero() {
  return (
    <section id="top" className={s.hero}>
      <div className={`wrap ${s.inner}`}>

        {/* Photo column */}
        <div className={s.photoCol}>
          <div className={s.photoFrame}>
            <img src="/MyWebsite/me.png" alt="Mohammed Sedeg" className={s.photo} />
          </div>
          <div className={s.flag}>🇸🇩</div>
        </div>

        {/* Text column */}
        <div className={s.textCol}>
          <span className={`${s.eyebrow} mono`}>AI Engineer & Researcher</span>

          <h1 className={s.name}>Mohammed<br /><em>Sedeg</em></h1>

          <p className={s.lead}>
            I study how machines learn —<br />
            and build systems that actually do.
          </p>

          <div className={s.bio}>
            <p>
              I have a deep obsession with intelligence itself — how it emerges, how it scales,
              and how to build systems that genuinely reason rather than just pattern-match.
              Five years in AI, nine in engineering. My work spans LLM systems,
              computer vision, and edge AI, always starting from the fundamentals.
            </p>
            <p>
              I also founded{' '}
              <a href="https://github.com/SAIR-Org" target="_blank" rel="noopener noreferrer" className={s.inlineLink}>
                SAiR
              </a>
              {' '}— because I believe understanding shouldn't be gated.
              If you can learn it, you should be able to teach it.
            </p>
          </div>

          <div className={s.pills}>
            <span className={s.pill}>PhD Candidate · Karabük University</span>
            <span className={s.pill}>Khartoum · Turkey · Remote</span>
          </div>

          <div className={s.actions}>
            <a href="#work" className={s.btnPrimary}>View my work</a>
            <a href="mailto:silvapi1994@gmail.com" className={s.btnGhost}>Get in touch</a>
            <a href="/MyWebsite/cv.pdf" download="Mohammed_Sedeg_CV.pdf" className={s.btnCV}>Download CV ↓</a>
          </div>

          <div className={s.socials}>
            <a href="https://github.com/silvaxxx1" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span>·</span>
            <a href="https://www.linkedin.com/in/mohammed-sedeg-67444b307/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span>·</span>
            <a href="https://github.com/SAIR-Org" target="_blank" rel="noopener noreferrer">SAiR Org</a>
          </div>
        </div>

      </div>
    </section>
  )
}
