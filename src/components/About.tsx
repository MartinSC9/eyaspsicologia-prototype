import { ArrowRight } from 'lucide-react'
import { useScrollAnimation, useCountUp } from '../hooks/useScrollAnimation'
import FloatingShapes from './decorations/FloatingShapes'
import styles from './About.module.css'

const STATS = [
  { end: 4, label: 'Continentes' },
  { end: 8, label: 'Países' },
  { end: 12, label: 'Años de experiencia' },
  { end: 7, label: 'Países vividos' },
]

function StatItem({ end, label }: { end: number; label: string }) {
  const { ref, count } = useCountUp(end)
  return (
    <div className={styles.stat} ref={ref}>
      <strong>{count}</strong>
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
                src="/images/guada-sonriendo.png"
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
              ¿Por qué te <em>puedo ayudar?</em>
            </h2>
            <p className={styles.lead}>
              Creo que nací con 17 años. Esa fue la primera vez que me conecté
              con mi yo auténtico y me prometí no ignorarlo nunca más.
            </p>
            <p className={styles.description}>
              Ahí empecé mi relación de amor conmigo misma y mi interés por el
              mundo interno de las personas. Entendí que conectarnos con nuestro
              auténtico yo es la manera de enamorarnos de nosotras. Con 17 ya
              tenía la semilla de psicóloga y no lo sabía, pero poco a poco me di
              cuenta de que tenía que compartir con el resto lo que estaba pasando
              dentro de mí…
            </p>
            <p className={styles.description}>
              Hoy, con más de 12 años de experiencia trabajando como investigadora,
              psicóloga y coach en 4 continentes y 8 países, habiendo sido profesora
              y colaborado con universidades y con artículos publicados, quiero
              ayudarte a conectar contigo misma a través de mi programa de
              crecimiento personal.
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
            <StatItem key={s.label} end={s.end} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
