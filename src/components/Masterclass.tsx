import { ArrowRight, Play } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from './Masterclass.module.css'

export default function Masterclass() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="masterclass" className={styles.section} aria-label="Masterclass Gratuita">
      <div className={styles.bg}>
        <div className={styles.shape1} />
        <div className={styles.shape2} />
      </div>
      <div className="container" ref={ref}>
        <div className={styles.grid}>
          <div className={`${styles.visual} ${isVisible ? 'visible' : ''} slide-left`}>
            <div className={styles.imageWrap}>
              <img
                src="/images/coffee.png"
                alt="Coffee & healing"
                className={styles.image}
                loading="lazy"
              />
              <div className={styles.playBadge}>
                <Play size={20} fill="white" />
              </div>
            </div>
          </div>

          <div className={`${styles.content} ${isVisible ? 'visible' : ''} slide-right`}>
            <div className={styles.iconWrap}>
              <Play size={18} />
            </div>
            <span className={styles.label}>Masterclass gratuita</span>
            <h2 className={styles.title}>
              ¿Qué te detiene de tener las relaciones
              <em> de tus sueños?</em>
            </h2>
            <p className={styles.subtitle}>
              Encuentra tips para entender qué patrones te limitan y cómo transformarlos.
              Una masterclass que puede cambiar tu perspectiva.
            </p>
            <a
              href="https://www.masterclasseyas.com/registro-masterclass"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
            >
              Quiero verla gratis
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
