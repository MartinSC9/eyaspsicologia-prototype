import { useState, type FormEvent } from 'react'
import { Mail, AtSign, Clock, Globe, Send, ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from './Contact.module.css'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const { ref, isVisible } = useScrollAnimation()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contacto" className={styles.section} aria-label="Contacto">
      <div className="container" ref={ref}>
        <div className={`${styles.header} ${isVisible ? 'visible' : ''} fade-up`}>
          <span className={styles.label}>Contacto</span>
          <h2 className={styles.title}>
            ¿Lista para dar{' '}
            <em>el primer paso?</em>
          </h2>
          <p className={styles.subtitle}>
            Reserva tu primera sesión o escríbeme para resolver tus dudas
          </p>
        </div>

        <div className={styles.grid}>
          <div className={`${styles.info} ${isVisible ? 'visible' : ''} slide-left`}>
            <a
              href="https://form.typeform.com/to/ZJgpdsMV"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.reservarCard}
            >
              <div>
                <strong className={styles.reservarTitle}>Reservar sesión</strong>
                <span className={styles.reservarDesc}>Da el primer paso hacia tu bienestar</span>
              </div>
              <ArrowRight size={20} />
            </a>

            <div className={styles.infoCards}>
              <div className={styles.infoCard}>
                <Mail size={18} className={styles.infoIcon} />
                <div>
                  <strong>Email</strong>
                  <a href="mailto:eyaspsicologia@gmail.com">eyaspsicologia@gmail.com</a>
                </div>
              </div>
              <div className={styles.infoCard}>
                <AtSign size={18} className={styles.infoIcon} />
                <div>
                  <strong>Instagram</strong>
                  <a href="https://www.instagram.com/eyaspsicologia/" target="_blank" rel="noopener noreferrer">@eyaspsicologia</a>
                </div>
              </div>
              <div className={styles.infoCard}>
                <Clock size={18} className={styles.infoIcon} />
                <div>
                  <strong>Horario</strong>
                  <span>Lun - Vie · Horario flexible</span>
                </div>
              </div>
              <div className={styles.infoCard}>
                <Globe size={18} className={styles.infoIcon} />
                <div>
                  <strong>Modalidad</strong>
                  <span>100% Online</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.formWrap} ${isVisible ? 'visible' : ''} slide-right`} id="reservar">
            {submitted ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>
                  <Send size={24} />
                </div>
                <h3>¡Mensaje enviado!</h3>
                <p>Te responderé en menos de 24 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="contact-name">Nombre</label>
                    <input id="contact-name" type="text" required placeholder="Tu nombre" />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="contact-email">Email</label>
                    <input id="contact-email" type="email" required placeholder="tu@email.com" />
                  </div>
                </div>
                <div className={styles.field}>
                  <label htmlFor="contact-subject">Asunto</label>
                  <select id="contact-subject" required>
                    <option value="">Selecciona una opción</option>
                    <option>Sesión individual</option>
                    <option>Programa Conecta Contigo</option>
                    <option>Terapia grupal</option>
                    <option>Consulta general</option>
                  </select>
                </div>
                <div className={styles.field}>
                  <label htmlFor="contact-message">Mensaje</label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Cuéntame cómo puedo ayudarte..."
                  />
                </div>
                <button type="submit" className={styles.submit}>
                  Enviar mensaje
                  <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
