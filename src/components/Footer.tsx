import { AtSign, Music, Mail, Headphones } from 'lucide-react'
import styles from './Footer.module.css'

const SOCIALS = [
  { icon: AtSign, href: 'https://www.instagram.com/eyaspsicologia/', label: 'Instagram' },
  { icon: Music, href: 'http://www.tiktok.com/@eyaspsicologia', label: 'TikTok' },
  { icon: Headphones, href: 'https://anchor.fm/eyasprograma', label: 'Podcast' },
  { icon: Mail, href: 'mailto:eyaspsicologia@gmail.com', label: 'Email' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <img src="/images/logo.png" alt="EYAS Psicología" className={styles.logoImg} />
            <p className={styles.tagline}>
              Psicoterapia online para mujeres.<br />
              Tu bienestar emocional, nuestra prioridad.
            </p>
            <div className={styles.socials}>
              {SOCIALS.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={s.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  aria-label={s.label}
                  className={styles.social}
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className={styles.columns}>
            <div className={styles.column}>
              <h4 className={styles.colTitle}>Servicios</h4>
              <nav aria-label="Servicios">
                <a href="#servicios">Sesión Individual</a>
                <a href="#programa">Programa Conecta Contigo</a>
                <a href="#libro">Libro: Yo Me Transformo</a>
                <a href="#masterclass">Masterclass Gratuita</a>
              </nav>
            </div>

            <div className={styles.column}>
              <h4 className={styles.colTitle}>Recursos</h4>
              <nav aria-label="Recursos">
                <a href="#podcast">Podcast</a>
                <a href="https://www.masterclasseyas.com/registro-masterclass" target="_blank" rel="noopener noreferrer">Masterclass</a>
                <a href="#comunidad">Comunidad</a>
                <a href="#contacto">Contacto</a>
              </nav>
            </div>

            <div className={styles.column}>
              <h4 className={styles.colTitle}>Legal</h4>
              <nav aria-label="Legal">
                <a href="#">Aviso Legal</a>
                <a href="#">Política de Privacidad</a>
                <a href="#">Política de Cookies</a>
              </nav>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {year} EYAS Psicología. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
