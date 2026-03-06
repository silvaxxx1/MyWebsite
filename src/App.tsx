import './styles/globals.css'
import Nav     from './components/Nav'
import Hero    from './components/Hero'
import Work    from './components/Work'
import SAiR    from './components/SAiR'
import About   from './components/About'
import Contact from './components/Contact'
import Footer  from './components/Footer'

export default function App() {
  return (
    <>
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
    </>
  )
}
