import { motion } from 'framer-motion'
import s from './Button.module.css'

type ButtonVariant = 'primary' | 'ghost' | 'cv'

interface ButtonProps {
  children: React.ReactNode
  variant?: ButtonVariant
  href?: string
  onClick?: () => void
  download?: string
  className?: string
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  download,
  className = ''
}: ButtonProps) {
  const baseClass = `${s.button} ${s[variant]} ${className}`

  const buttonContent = (
    <>
      {children}
      {variant === 'cv' && ' ↓'}
    </>
  )

  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 }
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClass}
        download={download}
        {...motionProps}
      >
        {buttonContent}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={baseClass}
      onClick={onClick}
      {...motionProps}
    >
      {buttonContent}
    </motion.button>
  )
}
