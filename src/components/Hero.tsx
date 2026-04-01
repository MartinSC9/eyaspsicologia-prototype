import { useState, useEffect, useRef, useCallback } from 'react'
import { ArrowRight } from 'lucide-react'
import styles from './Hero.module.css'

const VIDEOS = [
  '/images/hero-video-2.mp4',
  '/images/hero-video-3.mp4',
  '/images/hero-video-4.mp4',
  '/images/hero-video-6.mp4',
]

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const [currentVideo, setCurrentVideo] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const handleEnded = useCallback(() => {
    setCurrentVideo((prev) => (prev + 1) % VIDEOS.length)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
      videoRef.current.play()
    }
  }, [currentVideo])

  return (
    <section id="inicio" className={styles.hero} aria-label="Sección principal">
      <video
        ref={videoRef}
        className={styles.bgVideo}
        autoPlay
        muted
        playsInline
        onEnded={handleEnded}
      >
        <source src={VIDEOS[currentVideo]} type="video/mp4" />
      </video>
      <div className={styles.bgOverlay} />
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
                Una comunidad de mujeres creciendo juntas
              </span>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className={styles.imageSide}>
          <div className={styles.imageFrame}>
            <img
              src="/images/guada-sonriendo.png"
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
