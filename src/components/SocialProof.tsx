import { Quote, Heart, ArrowRight } from 'lucide-react'
import { useScrollAnimation, useCountUp } from '../hooks/useScrollAnimation'
import styles from './SocialProof.module.css'

const TESTIMONIALS = [
  {
    name: 'Diana',
    role: 'Participante del programa',
    text: 'Descubrí taaaantas cosas de mí. Aprendí a verme, comprenderme, aceptarme y a quererme, por lo que soy, ni más ni menos. Amé lo estructurado que es el curso, como te lleva de la mano por este proceso.',
    avatar: '/images/diana.jpg',
  },
  {
    name: 'Kim',
    role: 'Participante del programa',
    text: 'Conecta contigo, llegó a mi vida, para darme las herramientas que necesitaba para gestionar mis emociones. Encontrar mujeres fuertes, valientes, que muestran su vulnerabilidad y trabajar juntas es maravilloso.',
    avatar: '/images/kim.jpg',
  },
  {
    name: 'Mamen',
    role: 'Participante grupal',
    text: 'Las sesiones eran un chute de vitamina, energía, de apoyo y herramientas. En cada sesión me sentí libre de decir y contar lo que pasaba por mi cabeza y me ayudó mucho el hecho de no sentirme juzgada.',
    avatar: '/images/mamen.jpg',
  },
]

export default function SocialProof() {
  const { ref, isVisible } = useScrollAnimation()
  const { ref: countRef, count } = useCountUp(150)

  return (
    <section id="testimonios" className={styles.section} aria-label="Testimonios y comunidad">
      {/* ── Testimonials ── */}
      <div className={styles.testimonialsBlock}>
        <div className="container" ref={ref}>
          <div className={`${styles.header} ${isVisible ? 'visible' : ''} fade-up`}>
            <span className={styles.label}>Testimonios</span>
            <h2 className={styles.title}>
              Lo que dicen nuestras{' '}
              <em>mujeres</em>
            </h2>
          </div>

          <div className={styles.testimonialGrid}>
            {TESTIMONIALS.map((t, i) => (
              <article
                key={t.name}
                className={`${styles.card} ${isVisible ? 'visible' : ''} fade-up`}
                style={{ transitionDelay: `${0.15 + i * 0.12}s` }}
              >
                <Quote size={32} className={styles.quoteIcon} />
                <p className={styles.text}>{t.text}</p>
                <div className={styles.author}>
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className={styles.avatar}
                    loading="lazy"
                  />
                  <div>
                    <strong className={styles.name}>{t.name}</strong>
                    <span className={styles.role}>{t.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* ── Community Band ── */}
      <div className={styles.communityBand}>
        <div className={styles.communityBg}>
          <div className={styles.shape1} />
          <div className={styles.shape2} />
        </div>
        <div className="container">
          <div className={`${styles.communityGrid} ${isVisible ? 'visible' : ''} fade-up`}>
            <div className={styles.communityContent}>
              <Heart size={28} className={styles.heartIcon} />
              <p className={styles.stat} ref={countRef}>
                Somos más de <strong>{count}k</strong> mujeres queriendo conectar
              </p>
              <h3 className={styles.communityTitle}>
                Conecta hoy con{' '}
                <br />
                mujeres <em>power</em>
              </h3>
              <a
                href="https://7r2zvg0u2tj.typeform.com/comunidadeyas"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.communityCta}
              >
                Unirme a la comunidad
                <ArrowRight size={16} />
              </a>
            </div>

            <div className={styles.avatars}>
              <div className={styles.avatarGrid}>
                <img src="/images/diana.jpg" alt="" className={styles.communityAvatar} loading="lazy" />
                <img src="/images/kim.jpg" alt="" className={styles.communityAvatar} loading="lazy" />
                <img src="/images/mamen.jpg" alt="" className={styles.communityAvatar} loading="lazy" />
                <img src="/images/hero-guada.jpg" alt="" className={styles.communityAvatar} loading="lazy" />
              </div>
              <img
                src="/images/eyas-2.png"
                alt="EYAS"
                className={styles.eyasLogo}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
