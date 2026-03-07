import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import s from './EmailCopyButton.module.css'

export default function EmailCopyButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  return (
    <motion.button
      className={s.button}
      onClick={handleCopy}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className={s.email}>{email}</span>
      <motion.span
        className={s.icon}
        animate={{ rotate: copied ? 360 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {copied ? '✓' : '📋'}
      </motion.span>
      <AnimatePresence>
        {copied && (
          <motion.span
            className={s.tooltip}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            Copied!
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  )
}
