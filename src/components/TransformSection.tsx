import { Check, Sparkles, ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from './TransformSection.module.css'

const BENEFITS = [
  'Acelerar tu crecimiento personal',
  'Aprender a quererte de verdad',
  'Frenar tus pensamientos-boicot',
  'Elevar tu estado de ánimo cuando te sientes baja',
  'Relacionarte con otros de manera segura y sana',
]

const REASONS = [
  'Sientes que te cuesta conectar contigo misma',
  'Quieres mejorar tus relaciones pero no sabes por dónde empezar',
  'Te boicoteas con pensamientos negativos constantemente',
  'Necesitas herramientas reales, no solo "respira hondo"',
  'Buscas un espacio seguro con otras mujeres que te entiendan',
  'Estás lista para invertir en tu bienestar emocional',
]

export default function TransformSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className={styles.section} aria-label="Transforma tu vida">
      <div ref={ref}>
        {/* Top: Benefits band */}
        <div className={`${styles.benefitsBand} ${isVisible ? 'visible' : ''} fade-up`}>
          <video
            className={styles.bgVideo}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/images/hero-video-6.mp4" type="video/mp4" />
          </video>
          <div className={styles.bgOverlay} />
          <span className={styles.accent}>descubre cómo...</span>
          <ul className={styles.benefitsList}>
            {BENEFITS.map((b, i) => (
              <li
                key={i}
                className={`${styles.benefitItem} ${isVisible ? 'visible' : ''} fade-up`}
                style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
              >
                <Sparkles size={18} className={styles.sparkle} />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom: "Es para ti si..." */}
        <div className={`container ${styles.reasonsGrid}`}>
          <div className={`${styles.reasonsLeft} ${isVisible ? 'visible' : ''} slide-left`}>
            <div className={styles.imageWrap}>
              <img
                src="/images/hero-guada.jpg"
                alt="Guada - EYAS Psicología"
                className={styles.image}
                loading="lazy"
              />
            </div>
            <div className={styles.heading}>
              <span className={styles.reasonsAccent}>es para ti si...</span>
              <h2 className={styles.title}>
                Creado para
                <em> mujeres como tú</em>
              </h2>
            </div>
          </div>

          <div className={`${styles.reasonsList} ${isVisible ? 'visible' : ''} slide-right`}>
            {REASONS.map((r, i) => (
              <div
                key={i}
                className={`${styles.reasonItem} ${isVisible ? 'visible' : ''} fade-up`}
                style={{ transitionDelay: `${0.3 + i * 0.08}s` }}
              >
                <div className={styles.check}>
                  <Check size={16} />
                </div>
                <p>{r}</p>
              </div>
            ))}

            <a
              href="https://form.typeform.com/to/ZJgpdsMV"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
            >
              Reserva tu sesión gratis
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
