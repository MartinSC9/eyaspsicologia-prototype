import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Book from './components/Book'
import Masterclass from './components/Masterclass'
import TransformSection from './components/TransformSection'
import ProgramaConecta from './components/ProgramaConecta'
import SocialProof from './components/SocialProof'
import About from './components/About'
import Podcast from './components/Podcast'
import Newsletter from './components/Newsletter'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'

export default function App() {
  return (
    <>
      <a href="#main-content" className="sr-only" style={{ position: 'absolute', top: 0, left: 0, zIndex: 9999, padding: '1rem', background: 'white' }}>
        Saltar al contenido principal
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Book />
        <Masterclass />
        <TransformSection />
        <ProgramaConecta />
        <SocialProof />
        <About />
        <Podcast />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
