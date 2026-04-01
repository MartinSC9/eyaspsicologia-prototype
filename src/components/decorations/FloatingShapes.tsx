import styles from './FloatingShapes.module.css'

interface Props {
  variant?: 'dots' | 'circles' | 'botanical' | 'stars'
  color?: string
  position?: 'left' | 'right' | 'both'
}

export default function FloatingShapes({ variant = 'dots', color = 'var(--coral)', position = 'right' }: Props) {
  return (
    <div className={`${styles.container} ${styles[position]}`} aria-hidden="true">
      {variant === 'dots' && <DotPattern color={color} />}
      {variant === 'circles' && <CirclePattern color={color} />}
      {variant === 'botanical' && <BotanicalPattern color={color} />}
      {variant === 'stars' && <StarPattern color={color} />}
    </div>
  )
}

function DotPattern({ color }: { color: string }) {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className={styles.shape}>
      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 5 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={12 + col * 24}
            cy={12 + row * 24}
            r="3"
            fill={color}
            opacity={0.15 + Math.random() * 0.15}
          />
        ))
      )}
    </svg>
  )
}

function CirclePattern({ color }: { color: string }) {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" className={styles.shape}>
      <circle cx="100" cy="100" r="90" stroke={color} strokeWidth="1" opacity="0.12" />
      <circle cx="100" cy="100" r="65" stroke={color} strokeWidth="1" opacity="0.1" />
      <circle cx="100" cy="100" r="40" stroke={color} strokeWidth="1" opacity="0.08" />
      <circle cx="140" cy="60" r="20" fill={color} opacity="0.06" />
    </svg>
  )
}

function BotanicalPattern({ color }: { color: string }) {
  return (
    <svg width="160" height="200" viewBox="0 0 160 200" fill="none" className={styles.shapeBotanical}>
      {/* Stem */}
      <path
        d="M80 200 C80 160, 75 120, 80 80 C85 40, 80 20, 80 0"
        stroke={color}
        strokeWidth="1.5"
        opacity="0.15"
        fill="none"
      />
      {/* Leaves */}
      <path
        d="M80 160 C60 145, 30 140, 20 130 C30 150, 55 155, 80 160"
        fill={color}
        opacity="0.08"
      />
      <path
        d="M80 120 C100 105, 130 100, 140 90 C130 110, 105 115, 80 120"
        fill={color}
        opacity="0.08"
      />
      <path
        d="M80 80 C60 65, 35 62, 25 52 C35 72, 58 73, 80 80"
        fill={color}
        opacity="0.06"
      />
      <path
        d="M80 50 C95 38, 115 35, 125 28 C118 45, 98 46, 80 50"
        fill={color}
        opacity="0.06"
      />
      {/* Small circles as berries/buds */}
      <circle cx="20" cy="130" r="4" fill={color} opacity="0.1" />
      <circle cx="140" cy="90" r="4" fill={color} opacity="0.1" />
      <circle cx="25" cy="52" r="3" fill={color} opacity="0.08" />
      <circle cx="125" cy="28" r="3" fill={color} opacity="0.08" />
    </svg>
  )
}

function StarPattern({ color }: { color: string }) {
  return (
    <svg width="140" height="140" viewBox="0 0 140 140" fill="none" className={styles.shape}>
      {[
        { x: 20, y: 30, s: 8 },
        { x: 70, y: 15, s: 12 },
        { x: 120, y: 40, s: 6 },
        { x: 40, y: 80, s: 10 },
        { x: 100, y: 90, s: 8 },
        { x: 60, y: 120, s: 6 },
        { x: 110, y: 120, s: 4 },
      ].map((star, i) => (
        <g key={i} opacity={0.12 + i * 0.02}>
          <line x1={star.x - star.s} y1={star.y} x2={star.x + star.s} y2={star.y} stroke={color} strokeWidth="1.5" />
          <line x1={star.x} y1={star.y - star.s} x2={star.x} y2={star.y + star.s} stroke={color} strokeWidth="1.5" />
          <line x1={star.x - star.s * 0.6} y1={star.y - star.s * 0.6} x2={star.x + star.s * 0.6} y2={star.y + star.s * 0.6} stroke={color} strokeWidth="1" />
          <line x1={star.x + star.s * 0.6} y1={star.y - star.s * 0.6} x2={star.x - star.s * 0.6} y2={star.y + star.s * 0.6} stroke={color} strokeWidth="1" />
        </g>
      ))}
    </svg>
  )
}
