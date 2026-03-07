import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import s from './TypingAnimation.module.css'

interface TypingAnimationProps {
  text: string
  speed?: number
  delay?: number
  className?: string
}

export default function TypingAnimation({
  text,
  speed = 50,
  delay = 0,
  className = ''
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      let index = 0
      const interval = setInterval(() => {
        if (index <= text.length) {
          setDisplayedText(text.slice(0, index))
          index++
        } else {
          clearInterval(interval)
          setIsComplete(true)
        }
      }, speed)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, speed, delay])

  return (
    <span className={`${s.typing} ${className}`}>
      {displayedText}
      <motion.span
        className={s.cursor}
        animate={{ opacity: isComplete ? [1, 0, 1] : 1 }}
        transition={{
          duration: 0.8,
          repeat: isComplete ? Infinity : 0,
          ease: 'easeInOut'
        }}
      >
        |
      </motion.span>
    </span>
  )
}
