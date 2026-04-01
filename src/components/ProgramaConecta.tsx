import { Users, ClipboardList, Video, UserCheck, ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import FloatingShapes from './decorations/FloatingShapes'
import styles from './ProgramaConecta.module.css'

const PILLARS = [
  { image: '/images/eyas-amor-propio.png', title: 'Amor propio' },
  { image: '/images/eyas-emociones.png', title: 'Emociones' },
  { image: '/images/eyas-pensamiento.png', title: 'Pensamientos' },
  { image: '/images/eyas-relaciones.png', title: 'Relaciones' },
]

const STRUCTURE = [
  {
    icon: Users,
    image: '/images/eyas-sesion.png',
    title: 'Terapia grupal semanal',
    description: 'Sesiones en grupo reducido con tu psicóloga especializada. La parte más vertebral del programa.',
    accent: 'var(--coral)',
  },
  {
    icon: ClipboardList,
    image: '/images/eyas-libro.png',
    title: 'Ejercicios paso a paso',
    description: 'Prácticas basadas en investigación psicológica para desarrollar habilidades clave.',
    accent: 'var(--purple-400)',
  },
  {
    icon: Video,
    image: '/images/eyas-video.png',
    title: 'Vídeos psico-educativos',
    description: 'Cada semana una habilidad crítica con videos que aceleran tu cambio interno.',
    accent: 'var(--teal-400)',
  },
  {
    icon: UserCheck,
    image: '/images/eyas-sisters.png',
    title: 'Coaching por parejas',
    description: 'Sesión semanal con una sister para comunicación asertiva y profundización.',
    accent: 'var(--coral)',
  },
]

const TIMELINE_STEPS = ['Amor propio', 'Emociones', 'Pensamientos', 'Relaciones', 'Integración']

export default function ProgramaConecta() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="programa" className={styles.section} aria-label="Programa Conecta Contigo">
      <FloatingShapes variant="dots" color="var(--coral)" position="right" />
      <div className="container" ref={ref}>

        {/* ── Header + Pillars ── */}
        <div className={`${styles.header} ${isVisible ? 'visible' : ''} fade-up`}>
          <span className={styles.label}>Programa insignia</span>
          <h2 className={styles.mainTitle}>
            Conecta <em>contigo</em>
          </h2>
          <p className={styles.mainSubtitle}>
            Un programa integral de transformación diseñado para que no
            dependas de una psicóloga por años y puedas conectar con tu interior rápidamente.
          </p>
        </div>

        <div className={`${styles.pillarsRow} ${isVisible ? 'visible' : ''} fade-up`} style={{ transitionDelay: '0.15s' }}>
          {PILLARS.map((p) => (
            <div key={p.title} className={styles.pillar}>
              <img src={p.image} alt={p.title} className={styles.pillarImage} />
              <span className={styles.pillarTitle}>{p.title}</span>
            </div>
          ))}
        </div>

        {/* ── Program overview with image ── */}
        <div className={styles.overviewGrid}>
          <div className={`${styles.visual} ${isVisible ? 'visible' : ''} slide-left`}>
            <div className={styles.imageWrap}>
              <img
                src="/images/programa-llamada.png"
                alt="Sesión grupal online - Programa Conecta Contigo"
                className={styles.programImage}
                loading="lazy"
              />
              <div className={styles.floatingCard}>
                <img
                  src="/images/programa-conecta.png"
                  alt="Conecta Contigo"
                  className={styles.programLogo}
                />
              </div>
            </div>
          </div>

          <div className={`${styles.overviewContent} ${isVisible ? 'visible' : ''} slide-right`}>
            <p className={styles.philosophy}>
              A menudo, la terapia se centra en contarle a nuestro terapeuta el día a día.
              Pero el desarrollo personal puede ser mucho más.
            </p>
            <p className={styles.philosophy}>
              Con <strong>"Conecta Contigo"</strong> el crecimiento y desarrollo de habilidades
              emocionales y comunicativas es constante. Cada día aprenderás información clave
              que te ayudará a conectar con la raíz de ti misma.
            </p>

            <div className={styles.timelineRow}>
              <div className={styles.timelineLineH} />
              {TIMELINE_STEPS.map((step) => (
                <div key={step} className={styles.stepH}>
                  <div className={styles.stepDotH} />
                  <span className={styles.stepLabelH}>{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Structure cards ── */}
        <div className={`${styles.structureHeader} ${isVisible ? 'visible' : ''} fade-up`}>
          <span className={styles.label}>Cómo funciona</span>
          <h3 className={styles.structureTitle}>
            Cada semana, 4 herramientas para tu <em>transformación</em>
          </h3>
        </div>

        <div className={styles.structureGrid}>
          {STRUCTURE.map((c, i) => (
            <article
              key={c.title}
              className={`${styles.card} ${isVisible ? 'visible' : ''} fade-up`}
              style={{ transitionDelay: `${0.3 + i * 0.1}s` }}
            >
              <img src={c.image} alt={c.title} className={styles.cardImage} />
              <div className={styles.cardNumber} style={{ color: c.accent }}>
                0{i + 1}
              </div>
              <h4 className={styles.cardTitle}>{c.title}</h4>
              <p className={styles.cardDesc}>{c.description}</p>
            </article>
          ))}
        </div>

        {/* Single CTA */}
        <div className={`${styles.ctaWrap} ${isVisible ? 'visible' : ''} fade-up`} style={{ transitionDelay: '0.7s' }}>
          <a
            href="https://form.typeform.com/to/ZJgpdsMV"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            Lo necesito
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
