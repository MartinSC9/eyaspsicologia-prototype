import { Heart, Users, BookOpen, Mic, Video, Calendar } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from './Services.module.css'

const SERVICES = [
  {
    icon: Heart,
    title: 'Sesión Individual',
    description: 'Espacio seguro y confidencial para trabajar tus emociones, relaciones y crecimiento personal.',
    accent: 'var(--coral)',
  },
  {
    icon: Users,
    title: 'Terapia Grupal',
    description: 'Conecta con otras mujeres en un proceso de transformación compartido y poderoso.',
    accent: 'var(--teal-400)',
  },
  {
    icon: Video,
    title: 'Programa Conecta Contigo',
    description: 'Programa estructurado para reconectarte con tu esencia y sanar relaciones.',
    accent: 'var(--purple-400)',
  },
  {
    icon: BookOpen,
    title: 'Libro: Yo Me Transformo',
    description: 'Terapia sin filtro para mujeres. Herramientas prácticas para tu día a día.',
    accent: 'var(--coral)',
  },
  {
    icon: Mic,
    title: 'Podcast',
    description: 'Snacks psicoemocionales sin filtro. Contenido gratuito cada semana.',
    accent: 'var(--teal-400)',
  },
  {
    icon: Calendar,
    title: 'Masterclass Gratuita',
    description: '¿Qué te detiene de tener las relaciones de tus sueños? Descúbrelo gratis.',
    accent: 'var(--purple-400)',
  },
]

export default function Services() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="servicios" className={styles.section} aria-label="Servicios">
      <div className="container" ref={ref}>
        <div className={`${styles.header} ${isVisible ? 'visible' : ''} fade-up`}>
          <span className={styles.label}>Servicios</span>
          <h2 className={styles.title}>
            Todo lo que necesitas para tu{' '}
            <em>bienestar</em>
          </h2>
        </div>

        <div className={styles.grid}>
          {SERVICES.map((service, i) => (
            <article
              key={service.title}
              className={`${styles.card} ${isVisible ? 'visible' : ''} fade-up`}
              style={{ transitionDelay: `${0.1 + i * 0.08}s` }}
            >
              <div
                className={styles.iconWrap}
                style={{ background: service.accent }}
              >
                <service.icon size={22} />
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
              <div className={styles.cardLine} style={{ background: service.accent }} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
