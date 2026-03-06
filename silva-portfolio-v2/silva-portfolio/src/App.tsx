import './styles/globals.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Systems from './components/Systems';
import SAiR from './components/SAiR';
import Stack from './components/Stack';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="divider" />
        <Experience />
        <div className="divider" />
        <Systems />
        <div className="divider" />
        <SAiR />
        <div className="divider" />
        <Stack />
        <div className="divider" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
