import { ArrowRight } from 'lucide-react'
import { useScrollAnimation, useCountUp } from '../hooks/useScrollAnimation'
import FloatingShapes from './decorations/FloatingShapes'
import styles from './About.module.css'

const STATS = [
  { end: 4, label: 'Continentes' },
  { end: 8, label: 'Países' },
  { end: 12, label: 'Años' },
  { end: 150, label: 'Mil mujeres', suffix: 'k+' },
]

function StatItem({ end, label, suffix }: { end: number; label: string; suffix?: string }) {
  const { ref, count } = useCountUp(end)
  return (
    <div className={styles.stat} ref={ref}>
      <strong>{count}{suffix}</strong>
      <span>{label}</span>
    </div>
  )
}

const JOURNEY = [
  { place: 'Italia', code: 'IT' },
  { place: 'México', code: 'MX' },
  { place: 'Alemania', code: 'DE' },
  { place: 'Inglaterra', code: 'GB' },
  { place: 'EEUU', code: 'US' },
  { place: 'Australia', code: 'AU' },
  { place: 'Vietnam', code: 'VN' },
]

export default function About() {
  const { ref, isVisible } = useScrollAnimation()
  const { ref: ref2, isVisible: isVisible2 } = useScrollAnimation()
  const { ref: ref3, isVisible: isVisible3 } = useScrollAnimation()

  return (
    <section id="guada" className={styles.section} aria-label="Sobre Guada">
      <FloatingShapes variant="stars" color="var(--coral)" position="right" />

      {/* Intro */}
      <div className="container" ref={ref}>
        <div className={styles.introGrid}>
          <div className={`${styles.visual} ${isVisible ? 'visible' : ''} slide-left`}>
            <div className={styles.imageWrap}>
              <img
                src="/images/guada.png"
                alt="Guada - Psicóloga y fundadora de EYAS"
                className={styles.photo}
                loading="lazy"
              />
              <div className={styles.accentShape} />
            </div>
          </div>

          <div className={`${styles.content} ${isVisible ? 'visible' : ''} slide-right`}>
            <span className={styles.label}>Conóceme</span>
            <h2 className={styles.title}>
              Hola, soy <em>Guada</em>
            </h2>
            <p className={styles.lead}>
              Recuerdo en el último año de instituto, un día mirándome al espejo,
              me prometí que no me iba a mentir más a mí misma en la vida. Fue la
              primera vez que me conecté con mi yo real y la primera vez que empecé
              a realizar un trabajo interno de reconexión.
            </p>
            <p className={styles.description}>
              Me interesaba tanto entenderme a mí y al mundo que empecé a estudiar
              filosofía, y después del primer año me di cuenta de que tenía que compartir
              eso. Que necesitaba hacerle saber al mundo lo increíble que era entenderse
              a una misma, quererse, validarse y trabajar en mejorarte cada día.
            </p>
            <p className={styles.description}>
              Así que decidí estudiar psicología, y ahí empezó todo.
            </p>
          </div>
        </div>
      </div>

      {/* Journey */}
      <div className={styles.journeyBand} ref={ref2}>
        <div className="container">
          <div className={`${styles.journeyContent} ${isVisible2 ? 'visible' : ''} fade-up`}>
            <span className={styles.journeyLabel}>Mi trayectoria</span>
            <p className={styles.journeyText}>
              Conseguí becas para estudiar en Italia, México y Alemania. Me paré dos años
              en Inglaterra para aprender inglés. Hice mi investigación final en Berlín.
              Luego otra beca a San Francisco para coaching e inteligencia emocional.
              En México, daba clases de inteligencia emocional a niños en colaboración
              con Save the Children. En Australia trabajé como psicóloga y asistente de
              investigación junto a Lea Waters, una de las investigadoras con más prestigio
              en Psicología Positiva, con quien co-escribí el capítulo de un libro.
              Después volé a Vietnam como profesora universitaria.
            </p>

            <div className={styles.flags}>
              {JOURNEY.map(j => (
                <div key={j.place} className={styles.flag}>
                  <span className={styles.flagCode}>{j.code}</span>
                  <span className={styles.flagLabel}>{j.place}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Closing + Stats */}
      <div className="container" ref={ref3}>
        <div className={`${styles.closingGrid} ${isVisible3 ? 'visible' : ''} fade-up`}>
          <div className={styles.closingContent}>
            <blockquote className={styles.quote}>
              Con todos mis aprendizajes en 4 continentes durante más de 10 años
              he creado Conecta Contigo. Esta terapia grupal recoge las técnicas más
              potentes que he aprendido a lo largo de mi carrera y las he metido en
              una cajita, para ti. Para que florezcas. Para que te conectes y brilles.
            </blockquote>
            <p className={styles.signoff}>
              Encantada de verte por aquí, sister. Bienvenida.
            </p>
          </div>

          <div className={styles.approach}>
            <h3 className={styles.approachTitle}>
              Acompañamiento real para una transformación auténtica
            </h3>
            <p className={styles.approachDesc}>
              Mi enfoque combina psicología, coaching y psicoeducación para que
              transformes tu bienestar emocional de manera práctica y profunda.
            </p>
            <a
              href="https://form.typeform.com/to/ZJgpdsMV"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
            >
              Empieza hoy
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className={styles.stats}>
          {STATS.map(s => (
            <StatItem key={s.label} end={s.end} label={s.label} suffix={s.suffix} />
          ))}
        </div>
      </div>
    </section>
  )
}
