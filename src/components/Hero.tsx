import { motion, Variants } from 'framer-motion'
import { useFramerInView } from '../hooks/useFramerInView'
import { useLanguage } from '../contexts/LanguageContext'
import s from './Hero.module.css'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }
  }
}

const photoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: [0.34, 1.56, 0.64, 1]
    }
  }
}

export default function Hero() {
  const { ref, controls } = useFramerInView({
    threshold: 0.1,
    triggerOnce: true,
    variants: containerVariants
  })
  const { t } = useLanguage()

  return (
    <section id="top" className={s.hero}>
      {/* Animated gradient background */}
      <motion.div
        className={s.gradientBg}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Floating particles */}
      <div className={s.particles}>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={s.particle}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.2,
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
          />
        ))}
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className={`wrap ${s.inner}`}>

        {/* Photo column with enhanced animation */}
        <motion.div variants={photoVariants} className={s.photoCol}>
          <motion.div
            className={s.photoFrame}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            whileHover={{
              scale: 1.02,
              rotate: [0, -2, 2, -2, 0],
              transition: { duration: 0.5 }
            }}
          >
            <div className={s.photoGlow} />
            <img src="/MyWebsite/me.png" alt={`${t.hero.firstName} ${t.hero.lastName}`} className={s.photo} />
            <motion.div
              className={s.flag}
              animate={{
                rotate: [0, -15, 15, -15, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
            >🇸🇩</motion.div>
          </motion.div>
        </motion.div>

        {/* Text column with improved hierarchy */}
        <motion.div variants={itemVariants} className={s.textCol}>
          <motion.span
            className={s.eyebrow}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <span className={s.dot}>●</span>
            {t.hero.eyebrow}
          </motion.span>

          <h1 className={s.name}>
            <motion.span
              className={s.firstName}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {t.hero.firstName}
            </motion.span>
            {' '}
            <motion.em
              className={s.lastName}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              {t.hero.lastName}
            </motion.em>
          </h1>

          <motion.p
            className={s.lead}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {t.hero.lead.split('—')[0]} —<br />
            {t.hero.lead.split('—')[1]}
          </motion.p>

          <motion.div
            className={s.bio}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <p>
              {t.hero.bio1}
            </p>
            <p>
              {t.hero.bio2}{' '}
              <a href="https://github.com/SAIR-Org" target="_blank" rel="noopener noreferrer" className={s.inlineLink}>
                {t.hero.bio2Link}
              </a>
              {' '}{t.hero.bio2After}
            </p>
          </motion.div>

          <motion.div
            className={s.pills}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            <span className={s.pill}>{t.hero.pill1}</span>
            <span className={s.pill}>{t.hero.pill2}</span>
            <span className={s.pill}>{t.hero.pill3}</span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className={s.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <motion.a
              href="#work"
              className={s.btnPrimary}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>{t.hero.viewWork}</span>
              <motion.span
                className={s.arrow}
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >→</motion.span>
            </motion.a>
            <motion.a
              href="mailto:silvapi1994@gmail.com"
              className={s.btnGhost}
              whileHover={{ scale: 1.05, borderColor: 'var(--ink)' }}
              whileTap={{ scale: 0.97 }}
            >{t.hero.getInTouch}</motion.a>
            <motion.a
              href="/MyWebsite/cv.pdf"
              download="Mohammed_Sedeg_CV.pdf"
              className={s.btnCV}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >{t.hero.downloadCV}</motion.a>
          </motion.div>

          <motion.div
            className={s.socials}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <motion.a
              href="https://github.com/silvaxxx1"
              target="_blank"
              rel="noopener noreferrer"
              className={s.socialLink}
              whileHover={{ y: -3, color: 'var(--accent)' }}
              whileTap={{ scale: 0.95 }}
            >{t.hero.github}</motion.a>
            <span className={s.separator}>·</span>
            <motion.a
              href="https://www.linkedin.com/in/mohammed-sedeg-67444b307/"
              target="_blank"
              rel="noopener noreferrer"
              className={s.socialLink}
              whileHover={{ y: -3, color: 'var(--accent)' }}
              whileTap={{ scale: 0.95 }}
            >{t.hero.linkedin}</motion.a>
            <span className={s.separator}>·</span>
            <motion.a
              href="https://github.com/SAIR-Org"
              target="_blank"
              rel="noopener noreferrer"
              className={s.socialLink}
              whileHover={{ y: -3, color: 'var(--accent)' }}
              whileTap={{ scale: 0.95 }}
            >{t.hero.sairOrg}</motion.a>
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  )
}
