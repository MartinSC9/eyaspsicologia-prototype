import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight, User } from 'lucide-react'
import LoginModal from './LoginModal'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Programa', href: '#programa' },
  { label: 'Sobre Guada', href: '#guada' },
  { label: 'Podcast', href: '#podcast' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} role="banner">
        <nav className={`${styles.nav} container`} aria-label="Navegación principal">
          <a href="#inicio" className={styles.logo} aria-label="EYAS Psicología - Inicio">
            <img src="/images/logo.png" alt="EYAS Psicología" className={styles.logoImg} />
          </a>

          <ul
            id="nav-menu"
            className={`${styles.links} ${isOpen ? styles.open : ''}`}
            role="list"
          >
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={styles.link}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className={styles.accountItem}>
              <button
                className={styles.accountLink}
                onClick={() => { setIsOpen(false); setLoginOpen(true) }}
              >
                <User size={15} />
                Mi Cuenta
              </button>
            </li>
            <li className={styles.ctaItem}>
              <a
                href="https://form.typeform.com/to/ZJgpdsMV"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaLink}
                onClick={() => setIsOpen(false)}
              >
                Reservar sesión
                <ArrowRight size={14} />
              </a>
            </li>
          </ul>

          <button
            className={styles.menuToggle}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="nav-menu"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  )
}
