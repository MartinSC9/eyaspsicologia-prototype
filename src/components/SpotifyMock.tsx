import { Play, SkipForward, SkipBack, Shuffle } from 'lucide-react'
import styles from './SpotifyMock.module.css'

interface Props {
  variant: 'episode' | 'show'
  title?: string
  subtitle?: string
}

const EPISODES = [
  { title: '34. ¿Es lícito decidir estar soltera?', date: 'Nov 2022', duration: '15:37' },
  { title: '33. Cuando te ENCANTA y no te da lo que quieres', date: 'Oct 2022', duration: '18:22' },
  { title: '32. Estilos de apego: ¿cuál es el tuyo?', date: 'Sep 2022', duration: '21:05' },
  { title: '31. Red flags en relaciones que ignoramos', date: 'Ago 2022', duration: '16:48' },
]

export default function SpotifyMock({ variant, title, subtitle }: Props) {
  if (variant === 'episode') {
    return (
      <div className={styles.episode}>
        <div className={styles.epCover}>
          <img src="/images/podcast-cover.png" alt="Podcast cover" className={styles.epCoverImg} />
          <div className={styles.epOverlay}>
            <div className={styles.spotifyLogo}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.epContent}>
          <div className={styles.epInfo}>
            <strong className={styles.epTitle}>{title || 'Estilos de apego'}</strong>
            <span className={styles.epMeta}>{subtitle || 'jun · El podcast de EYAS'}</span>
            <span className={styles.epSave}>+ Guardar en Spo...</span>
          </div>
          <div className={styles.epPlayer}>
            <div className={styles.epProgress}>
              <div className={styles.epProgressBar}>
                <div className={styles.epProgressFill} />
              </div>
              <div className={styles.epTimes}>
                <span>4:23</span>
                <span>15:37</span>
              </div>
            </div>
            <div className={styles.epControls}>
              <SkipBack size={18} />
              <button className={styles.playBtn}>
                <Play size={20} fill="white" />
              </button>
              <SkipForward size={18} />
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Show variant - list of episodes
  return (
    <div className={styles.show}>
      <div className={styles.showHeader}>
        <img src="/images/podcast-cover.png" alt="Podcast cover" className={styles.showCover} />
        <div className={styles.showInfo}>
          <span className={styles.showType}>PODCAST</span>
          <strong className={styles.showTitle}>Snacks Psicoemocionales SIN FILTRO</strong>
          <span className={styles.showAuthor}>Guada Sánchez · EYAS Psicología</span>
        </div>
        <div className={styles.showActions}>
          <button className={styles.showPlay}>
            <Play size={18} fill="white" />
          </button>
          <Shuffle size={16} className={styles.showIcon} />
        </div>
      </div>
      <div className={styles.showEpisodes}>
        {EPISODES.map((ep, i) => (
          <div key={i} className={styles.showEp}>
            <div className={styles.showEpInfo}>
              <strong>{ep.title}</strong>
              <span>{ep.date} · {ep.duration}</span>
            </div>
            <Play size={14} className={styles.showEpPlay} />
          </div>
        ))}
      </div>
    </div>
  )
}
