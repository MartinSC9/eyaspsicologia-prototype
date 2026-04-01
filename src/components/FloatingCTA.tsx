import { useState, useEffect } from 'react'
import { Calendar } from 'lucide-react'
import styles from './FloatingCTA.module.css'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href="https://form.typeform.com/to/ZJgpdsMV"
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.fab} ${visible ? styles.visible : ''}`}
      aria-label="Reservar sesión"
    >
      <Calendar size={18} />
      <span className={styles.text}>Reservar</span>
    </a>
  )
}
