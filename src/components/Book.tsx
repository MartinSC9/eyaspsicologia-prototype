import { ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import FloatingShapes from './decorations/FloatingShapes'
import styles from './Book.module.css'

export default function Book() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="libro" className={styles.section} aria-label="Libro Yo Me Transformo">
      <FloatingShapes variant="botanical" color="var(--coral)" position="left" />
      <div className="container" ref={ref}>
        <div className={styles.grid}>
          <div className={`${styles.visual} ${isVisible ? 'visible' : ''} scale-in`}>
            <div className={styles.bookScene}>
              <div className={styles.bookShadow} />
              <img
                src="/images/libro.png"
                alt="Libro Yo Me Transformo"
                className={styles.bookImage}
                loading="lazy"
              />
            </div>
          </div>

          <div className={`${styles.content} ${isVisible ? 'visible' : ''} slide-right`}>
            <span className={styles.badge}>Nuevo libro</span>
            <h2 className={styles.title}>
              Yo me <br />transformo
            </h2>
            <p className={styles.tagline}>Terapia sin filtro para mujeres</p>
            <p className={styles.description}>
              Herramientas prácticas de psicología emocional para tu día a día.
              Descubre cómo transformar tu relación contigo misma y con los demás.
            </p>

            <a
              href="https://www.amazon.es/Yo-transformo-Terapia-mujeres-Vergara/dp/8419248886"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
            >
              Conseguir en Amazon
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
