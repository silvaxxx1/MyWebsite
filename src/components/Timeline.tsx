import { motion } from 'framer-motion'
import { useFramerInView } from '../hooks/useFramerInView'
import s from './Timeline.module.css'

interface TimelineItem {
  year: string
  title: string
  institution: string
  description?: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export default function Timeline({ items }: TimelineProps) {
  const { ref, controls } = useFramerInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      className={s.timeline}
    >
      <div className={s.line} />
      {items.map((item, index) => (
        <motion.div
          key={index}
          className={s.item}
          custom={index}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 }
          }}
          transition={{ delay: index * 0.1 }}
        >
          <div className={s.marker} />
          <div className={s.content}>
            <span className={s.year}>{item.year}</span>
            <h4 className={s.title}>{item.title}</h4>
            <p className={s.institution}>{item.institution}</p>
            {item.description && (
              <p className={s.description}>{item.description}</p>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
