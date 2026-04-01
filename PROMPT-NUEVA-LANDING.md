# Prompt para nuevo chat — Rediseño Landing EYAS Psicología

Pegá todo esto en un nuevo chat de Claude Code:

---

## CONTEXTO DEL PROYECTO

Tengo un prototipo de landing page para **EYAS Psicología** (eyaspsicologia.com), una marca de psicoterapia online para mujeres fundada por **Guada** (psicóloga argentina). La landing actual de ella tiene 4 años, fue hecha con WordPress + Enfold theme, y está completamente abandonada. Sin embargo, tiene muy buen contenido e imágenes profesionales hechas por una diseñadora.

Mi objetivo es **crear una landing moderna y profesional desde cero** que mejore por mil lo que tiene actualmente, para **vendérsela como servicio**.

## PROYECTO EXISTENTE

El proyecto ya existe en `D:\Projects\eyaspsicologia-prototype` con:
- **Stack**: React 19 + Vite 8 + TypeScript + CSS Modules + lucide-react
- **Package manager**: pnpm
- **Google Fonts**: Cormorant Garamond, DM Sans, Dancing Script

### Estructura actual de componentes:
```
src/App.tsx — Composición principal
src/index.css — Variables globales, reset, utilidades
src/hooks/useScrollAnimation.ts — Hook IntersectionObserver para fade-up
src/components/
  Navbar.tsx + .module.css — Header fijo con menú mobile
  Hero.tsx + .module.css — Hero split (foto Guada | fondo coral + programa)
  Book.tsx + .module.css — Libro "Yo Me Transformo" con link Amazon
  Masterclass.tsx + .module.css — Masterclass gratuita (fondo púrpura)
  Services.tsx + .module.css — 6 cards de servicios
  Program.tsx + .module.css — Programa Conecta Contigo
  Testimonials.tsx + .module.css — Carousel con testimonios reales
  About.tsx + .module.css — Sobre Guada con foto y stats
  Podcast.tsx + .module.css — Con Spotify embed real
  Community.tsx + .module.css — +150k mujeres (fondo teal)
  Newsletter.tsx + .module.css — Suscripción email (fondo coral)
  Contact.tsx + .module.css — Formulario + info de contacto
  Footer.tsx + .module.css — Links, legal, redes sociales
```

### Paleta actual (CSS variables en index.css):
- Coral: `#f06b56` (hero background)
- Verde neón: `#3DFF4F` (highlights)
- Púrpura: `#d994ee` (sección masterclass)
- Teal: `#03bfac` (sección comunidad)
- Crema: `#ece5dc` (fondos alternados)
- Negro: `#1a1a1a` (texto, CTAs)

### Imágenes reales ya descargadas en `public/images/`:
- `logo.png` — Logo EYAS negro (1000x580)
- `hero-guada.jpg` — Foto de Guada hero (1000x1000)
- `guada.png` — Guada retrato (1000x1000)
- `programa-conecta.png` — Logo texto del programa (655x276)
- `programa.jpeg` — Foto programa (1000x1000)
- `libro.png` — Portada libro (1600x1600)
- `diana.jpg`, `kim.jpg`, `mamen.jpg` — Fotos testimonios (225x300)
- `coffee.png` — Imagen decorativa coffee & healing
- `podcast-cover.png` — Banner podcast (1026x101)
- `eyas-2.png` — Logo secundario

### Textos REALES del sitio (usar estos, no inventar):

**Hero**: "Mejora tus relaciones, empezando por la más importante, la tuya, con nuestra psicoterapia online para mujeres, un espacio único para tu crecimiento personal y bienestar emocional."

**Libro**: Nuevo libro «Yo me transformo»: Terapia sin filtro para mujeres. Link Amazon: https://www.amazon.es/Yo-transformo-Terapia-mujeres-Vergara/dp/8419248886

**Masterclass**: "Encuentra tips para entender: ¿Qué te detiene de tener las relaciones de tus sueños?" Link: https://www.masterclasseyas.com/registro-masterclass

**Testimonios REALES**:
- **Diana**: "Descubrí taaaantas cosas de mí. Aprendí a verme, comprenderme, aceptarme y a quererme, por lo que soy, ni más ni menos. Tenía un poco de pena porque fuera grupal, pero considero que es parte de lo que hace irreal esta experiencia, porque te sientes acompañada y comprendida. Amé lo estructurado que es el curso, como te lleva de la mano por este proceso."
- **Kim**: "Conecta contigo, llegó a mi vida, para darme las herramientas que necesitaba para gestionar mis emociones. Encontrar mujeres fuertes, valientes, pero que muestran su vulnerabilidad y empatía y trabajar juntas y ver la evolución del primer día, al último es maravilloso."
- **Mamen**: "La experiencia haciendo terapia con mujeres normales me ha encantado. Las sesiones eran un chute de vitamina, energía, de apoyo y herramientas. En cada sesión me sentí libre de decir y contar lo que pasaba por mi cabeza y me ayudó mucho el hecho de no sentirme juzgada."

**Sobre Guada**: "Creo que nací con 17 años, esa fue la primera vez que me conecté con mi yo auténtico y me prometí no ignorarlo nunca más. Hoy ya he trabajado como investigadora, psicóloga y coach en 4 continentes y 8 países en 12 años."

**Comunidad**: "Somos más de 150 mil mujeres queriendo conectar"

**Podcast**: "Snacks Psicoemocionales SIN FILTRO" — Spotify embed show ID: 4NMVgqPxDEOMN2t1K0bGGK

**Links externos reales**:
- Reservar sesión (Typeform): https://form.typeform.com/to/ZJgpdsMV
- Comunidad (Typeform): https://7r2zvg0u2tj.typeform.com/comunidadeyas
- Instagram: https://www.instagram.com/eyaspsicologia/
- TikTok: http://www.tiktok.com/@eyaspsicologia
- Email: eyaspsicologia@gmail.com
- Podcast Anchor: https://anchor.fm/eyasprograma

## QUÉ NECESITO QUE HAGAS

**Rediseñar completamente la landing para que sea moderna, profesional y de alta conversión.** El prototipo actual es funcional pero básico. Necesito que quede a nivel de una landing premium que pueda vender como servicio profesional.

### Mejoras específicas que quiero:

1. **Diseño visual premium**: Animaciones suaves (scroll-triggered, hover effects, parallax sutil), transiciones fluidas, micro-interacciones. Que se sienta viva y profesional, no estática.

2. **Hero impactante**: El hero actual es un split simple. Hacelo más impactante — puede ser fullscreen con overlay, texto animado, o un layout más creativo. Mantené la foto de Guada y el concepto "Conecta Contigo" pero con mucho más punch visual.

3. **Tipografía editorial**: Usá las Google Fonts que ya están (Cormorant Garamond para display, DM Sans para body, Dancing Script para acentos decorativos) pero con jerarquía más marcada, tamaños más dramáticos en headings, y mejor spacing.

4. **Secciones con personalidad**: Cada sección debería tener un tratamiento visual único. Variá layouts (full-bleed, overlapping elements, asymmetric grids), fondos (gradients, texturas sutiles, colores de marca), y composiciones.

5. **Social proof potente**: Los testimonios con fotos reales son oro — sacales el máximo provecho. Podría ser un layout de masonry, cards grandes con foto prominente, o un slider más elaborado.

6. **CTA strategy**: Múltiples puntos de conversión claros. El CTA principal "Reservar Sesión" debería ser imposible de ignorar. Usá urgencia, beneficio claro, y diseño que destaque.

7. **Podcast interactivo**: Ya tengo el Spotify embed. Pero hacé la sección más atractiva — podría tener waveform decorativo, lista de episodios destacados, o un diseño que invite a escuchar.

8. **Mobile-first**: Todo responsive impecable. El sitio original se ve mal en mobile — esta tiene que ser perfecta.

9. **Performance**: Lazy loading de imágenes, CSS optimizado, animaciones con GPU acceleration (transform/opacity).

10. **NO agregar dependencias nuevas** salvo que sea realmente necesario. Mantené React + Vite + CSS Modules + lucide-react. Si necesitás animaciones, usá CSS puro o un hook custom, no instales framer-motion ni similares.

### Cosas que NO quiero:
- No quiero diseño genérico/template. Tiene que sentirse hecho a medida para una psicóloga.
- No quiero colores random. Mantené la paleta coral/verde/púrpura/teal pero con mejor aplicación.
- No inventes textos. Usá los textos reales que te di arriba.
- No borres las imágenes descargadas ni cambies sus paths.

### El objetivo final:
Que cuando Guada vea esta landing diga "wow, esto es exactamente lo que necesito" y quiera contratarme para implementarla en su dominio real. Tiene que ser tan superior a su WordPress actual que la decisión sea obvia.

Empezá leyendo el código actual del proyecto (leé App.tsx, index.css, y cada componente) y luego hacé el rediseño completo sección por sección.
