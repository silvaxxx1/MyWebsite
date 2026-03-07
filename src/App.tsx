import './styles/globals.css'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'
import AnimatedBackground from './components/AnimatedBackground'
import Nav     from './components/Nav'
import Hero    from './components/Hero'
import Work    from './components/Work'
import SAiR    from './components/SAiR'
import About   from './components/About'
import Contact from './components/Contact'
import Footer  from './components/Footer'

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AnimatedBackground />
        <Nav />
        <main>
          <Hero />
          <hr />
          <Work />
          <hr />
          <SAiR />
          <hr />
          <About />
          <hr />
          <Contact />
        </main>
        <Footer />
      </ThemeProvider>
    </LanguageProvider>
  )
}
