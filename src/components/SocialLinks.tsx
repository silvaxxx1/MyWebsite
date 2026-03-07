import { motion } from 'framer-motion'
import s from './SocialLinks.module.css'

interface SocialLink {
  name: string
  url: string
  icon: string
}

interface SocialLinksProps {
  links: SocialLink[]
}

export default function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className={s.socials}>
      {links.map((link) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={s.link}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          aria-label={link.name}
        >
          <span className={s.icon}>{link.icon}</span>
          <span className={s.label}>{link.name}</span>
        </motion.a>
      ))}
    </div>
  )
}
