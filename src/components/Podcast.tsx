import { ExternalLink, Headphones } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import SpotifyMock from './SpotifyMock'
import styles from './Podcast.module.css'

export default function Podcast() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="podcast" className={styles.section} aria-label="Podcast">
      <div className={styles.bg} />
      <div className="container" ref={ref}>
        <div className={styles.grid}>
          <div className={`${styles.embedSide} ${isVisible ? 'visible' : ''} slide-left`}>
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/episode/6GteExLQCYb3yLKYk69d8t?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Snacks Psicoemocionales SIN FILTRO - Episodio destacado"
            />
          </div>

          <div className={`${styles.content} ${isVisible ? 'visible' : ''} slide-right`}>
            <h2 className={styles.headline}>
              Te mereces
            </h2>
            <p className={styles.minutes}>5 minutos</p>
            <p className={styles.description}>
              Snacks psicoemocionales sin filtro. Conversaciones reales sobre
              emociones, relaciones y crecimiento personal. Porque la terapia
              también puede llegar a tus auriculares.
            </p>

            <div className={styles.ctas}>
              <a
                href="https://anchor.fm/eyasprograma"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaPrimary}
              >
                Podcast para EYAS
              </a>
              <a
                href="https://anchor.fm/eyasprograma"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaSecondary}
              >
                <Headphones size={16} />
                Ver todos los episodios
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Mock show list — el show embed real no carga en localhost */}
        <div className={`${styles.showEmbed} ${isVisible ? 'visible' : ''} fade-up`} style={{ transitionDelay: '0.3s' }}>
          <SpotifyMock variant="show" />
        </div>
      </div>
    </section>
  )
}
