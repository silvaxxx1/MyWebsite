import { motion } from 'framer-motion'
import s from './TechBadge.module.css'

interface TechBadgeProps {
  tech: string
  category?: 'LLM' | 'CV' | 'MLOps' | 'Data' | 'Language'
}

const categoryColors: Record<string, string> = {
  LLM: '#F59E0B',
  CV: '#10B981',
  MLOps: '#3B82F6',
  Data: '#8B5CF6',
  Language: '#EC4899'
}

export default function TechBadge({ tech, category = 'Language' }: TechBadgeProps) {
  const color = categoryColors[category] || 'var(--accent)'

  return (
    <motion.span
      className={s.badge}
      style={{ '--badge-color': color } as React.CSSProperties}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {tech}
    </motion.span>
  )
}
