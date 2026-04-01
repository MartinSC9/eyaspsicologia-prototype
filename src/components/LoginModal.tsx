import { useState, useEffect, type FormEvent } from 'react'
import { X, User, Lock, Eye, EyeOff } from 'lucide-react'
import styles from './LoginModal.module.css'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export default function LoginModal({ isOpen, onClose }: Props) {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Placeholder — no backend
  }

  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true" aria-label="Acceder a mi cuenta">
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label="Cerrar">
          <X size={20} />
        </button>

        <div className={styles.header}>
          <img src="/images/logo.png" alt="EYAS Psicología" className={styles.logo} />
          <h2 className={styles.title}>Acceder</h2>
          <p className={styles.subtitle}>Entra a tu espacio de crecimiento personal</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="login-email">Email o nombre de usuario</label>
            <div className={styles.inputWrap}>
              <User size={16} className={styles.inputIcon} />
              <input
                id="login-email"
                type="text"
                placeholder="tu@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                autoComplete="username"
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="login-password">Contraseña</label>
            <div className={styles.inputWrap}>
              <Lock size={16} className={styles.inputIcon} />
              <input
                id="login-password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Tu contraseña"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
              <button
                type="button"
                className={styles.togglePw}
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div className={styles.options}>
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                checked={remember}
                onChange={e => setRemember(e.target.checked)}
              />
              <span className={styles.checkmark} />
              Recuérdame
            </label>
            <a href="#" className={styles.forgot}>¿Olvidaste la contraseña?</a>
          </div>

          <button type="submit" className={styles.submit}>
            Acceder
          </button>
        </form>

        <div className={styles.footer}>
          <p>¿Aún no tienes cuenta?</p>
          <a
            href="https://form.typeform.com/to/ZJgpdsMV"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.register}
          >
            Reserva tu sesión y únete
          </a>
        </div>
      </div>
    </div>
  )
}
