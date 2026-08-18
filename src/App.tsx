import { useEffect } from 'react'
import './styles/globals.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'
import Nav        from './components/Nav'
import Hero       from './components/Hero'
import Work       from './components/Work'
import Experience from './components/Experience'
import SAiR       from './components/SAiR'
import Consulting from './components/Consulting'
import About      from './components/About'
import Contact    from './components/Contact'
import Footer     from './components/Footer'
import WorkWithMe from './components/WorkWithMe'

function ScrollToHash() {
  const { hash, pathname } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50)
      }
    } else if (pathname === '/') {
      window.scrollTo({ top: 0 })
    }
  }, [hash, pathname])
  return null
}

function HomePage() {
  return (
    <main>
      <Hero />
      <hr />
      <Work />
      <hr />
      <Experience />
      <hr />
      <SAiR />
      <hr />
      <WorkWithMe />
      <hr />
      <About />
      <hr />
      <Contact />
    </main>
  )
}

function ConsultingPage() {
  return (
    <main>
      <Consulting />
    </main>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <BrowserRouter basename="/MyWebsite">
          
          <Nav />
          <ScrollToHash />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/consulting" element={<ConsultingPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </LanguageProvider>
  )
}
