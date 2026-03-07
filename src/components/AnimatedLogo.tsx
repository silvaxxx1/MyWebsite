import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import s from './AnimatedLogo.module.css'

interface AnimatedLogoProps {
  className?: string
  typing?: boolean
}

export default function AnimatedLogo({ className = '', typing = true }: AnimatedLogoProps) {
  const [text, setText] = useState('')
  const { t, language } = useLanguage()
  const firstName = t.hero.firstName
  const lastName = t.hero.lastName
  const fullName = language === 'ar' ? `${firstName} ${lastName}` : `${firstName} ${lastName}`

  useEffect(() => {
    if (!typing) {
      setText(fullName)
      return
    }

    let index = 0
    const typingSpeed = 100

    const timer = setInterval(() => {
      if (index <= fullName.length) {
        setText(fullName.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, typingSpeed)

    return () => clearInterval(timer)
  }, [typing, fullName, language])

  // Split name based on language (Arabic has spaces between first and last name too)
  const nameParts = text.split(' ')
  const displayFirstName = nameParts[0] || firstName
  const displayLastName = nameParts.slice(1).join(' ') || lastName

  return (
    <motion.div
      className={`${s.logoContainer} ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      key={language} // Re-animate when language changes
    >
      <motion.span
        className={s.firstName}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {displayFirstName}
      </motion.span>
      {' '}
      <motion.span
        className={s.lastName}
        animate={{
          y: [0, -3, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {displayLastName}
        {typing && text.length < fullName.length && (
          <motion.span
            className={s.cursor}
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            |
          </motion.span>
        )}
      </motion.span>
    </motion.div>
  )
}
