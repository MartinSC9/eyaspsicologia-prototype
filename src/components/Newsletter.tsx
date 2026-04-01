import { useState, type FormEvent } from 'react'
import { Send, Sparkles } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from './Newsletter.module.css'

export default function Newsletter() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const { ref, isVisible } = useScrollAnimation()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (email && name) setSubmitted(true)
  }

  return (
    <section className={styles.section} aria-label="Newsletter">
      <div className="container" ref={ref}>
        <div className={`${styles.card} ${isVisible ? 'visible' : ''} scale-in`}>
          <div className={styles.inner}>
            <Sparkles size={24} className={styles.icon} />
            <h2 className={styles.title}>
              Contenido con intención
            </h2>
            <p className={styles.subtitle}>
              Una carta y un pasito terapéutico cada semana. Un email que no da
              pereza abrir: un momento para ti, para entenderte, para avanzar.
            </p>

            {submitted ? (
              <div className={styles.success}>
                <Sparkles size={20} />
                ¡Gracias! Revisa tu correo para confirmar.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.fields}>
                  <div className={styles.field}>
                    <label htmlFor="newsletter-name" className="sr-only">Tu nombre</label>
                    <input
                      id="newsletter-name"
                      type="text"
                      placeholder="¿Cómo te llamas?"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      required
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="newsletter-email" className="sr-only">Tu email</label>
                    <input
                      id="newsletter-email"
                      type="email"
                      placeholder="tu@email.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                      className={styles.input}
                    />
                  </div>
                </div>
                <button type="submit" className={styles.submit}>
                  <Send size={14} />
                  Suscribirme
                </button>
              </form>
            )}

            <p className={styles.privacy}>
              Sin spam. Puedes darte de baja cuando quieras.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
