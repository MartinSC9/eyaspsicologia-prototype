import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import styles from './Hero.module.css'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="inicio" className={styles.hero} aria-label="Sección principal">
      <div className={`${styles.content} ${loaded ? styles.loaded : ''}`}>
        {/* Left: Text */}
        <div className={styles.textSide}>
          <div className={styles.textInner}>
            <span className={styles.eyebrow}>Psicoterapia online exclusiva para mujeres</span>
            <h1 className={styles.title}>
              Tu relación más importante
              <em> eres tú</em>
            </h1>
            <p className={styles.subtitle}>
              Mejora tus relaciones empezando por la tuya. Un espacio
              terapéutico creado por y para mujeres que quieren conectar
              con su yo auténtico.
            </p>
            <div className={styles.ctas}>
              <a
                href="https://form.typeform.com/to/ZJgpdsMV"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaPrimary}
              >
                Reservar mi sesión
                <ArrowRight size={18} />
              </a>
              <a href="#programa" className={styles.ctaSecondary}>
                Conocer el programa
              </a>
            </div>
            <div className={styles.trust}>
              <div className={styles.avatarStack}>
                <img src="/images/diana.jpg" alt="" className={styles.miniAvatar} />
                <img src="/images/kim.jpg" alt="" className={styles.miniAvatar} />
                <img src="/images/mamen.jpg" alt="" className={styles.miniAvatar} />
              </div>
              <span className={styles.trustText}>
                +150k mujeres ya conectaron
              </span>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className={styles.imageSide}>
          <div className={styles.imageFrame}>
            <img
              src="/images/hero-guada.jpg"
              alt="Guada - Fundadora de EYAS Psicología"
              className={styles.heroImage}
            />
          </div>
          <div className={styles.floatingBadge}>
            <img src="/images/eyas-2.png" alt="" className={styles.badgeLogo} />
          </div>
        </div>
      </div>
    </section>
  )
}
