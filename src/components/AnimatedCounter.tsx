import { useEffect, useState, useRef } from 'react'
import s from './AnimatedCounter.module.css'

interface AnimatedCounterProps {
  value: number
  duration?: number
  suffix?: string
  prefix?: string
}

export default function AnimatedCounter({
  value,
  duration = 2,
  suffix = '',
  prefix = ''
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const nodeRef = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (hasAnimated.current) return

    const stepDuration = (duration * 1000) / value
    let current = 0

    const timer = setInterval(() => {
      current += Math.ceil(value / 50)
      if (current >= value) {
        current = value
        clearInterval(timer)
        hasAnimated.current = true
      }
      setDisplayValue(current)
    }, stepDuration)

    return () => clearInterval(timer)
  }, [value, duration])

  return (
    <span ref={nodeRef} className={s.counter}>
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  )
}
