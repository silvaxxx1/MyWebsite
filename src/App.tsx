import './styles/globals.css'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'
import Nav     from './components/Nav'
import Hero    from './components/Hero'
import Work    from './components/Work'
import Experience from './components/Experience'
import SAiR    from './components/SAiR'
import Consulting from './components/Consulting'
import About   from './components/About'
import Contact from './components/Contact'
import Footer  from './components/Footer'

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <a href="#work" className="skip-link">Skip to content</a>
        <Nav />
        <main>
          <Hero />
          <hr />
          <Work />
          <hr />
          <Experience />
          <hr />
          <SAiR />
          <hr />
          <Consulting />
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
