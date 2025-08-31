import React, { createContext, useContext, useState, useEffect, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header, Footer } from './components/layout';
import { Hero } from './components/sections';
import { 
  LazyAbout, 
  LazyExperience, 
  LazyProjects, 
  LazySkills, 
  LazyContact 
} from './components/LazyComponents';
import { Loading } from './components/ui';
import PerformanceMonitor from './components/PerformanceMonitor';
import './App.css';
import './styles/animations.css';

// NEW: Lazy load Education
const LazyEducation = React.lazy(() => import('./components/sections/Education'));

// Theme context
interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};

// Navigation context
interface NavigationContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
  scrollToSection: (sectionId: string) => void;
}
const NavigationContext = createContext<NavigationContextType | undefined>(undefined);
export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) throw new Error('useNavigation must be used within a NavigationProvider');
  return context;
};

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  // Responsive breakpoints
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
      setIsDesktop(width >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'experience', 'education', 'projects', 'about', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      window.scrollTo({ top: element.offsetTop - headerHeight, behavior: 'smooth' });
      element.style.transform = 'scale(1.01)';
      element.style.transition = 'transform 0.3s ease';
      setTimeout(() => { element.style.transform = 'scale(1)'; }, 300);
    }
  };

  const themeValue: ThemeContextType = { isDarkMode, toggleDarkMode, isMobile, isTablet, isDesktop };
  const navigationValue: NavigationContextType = { activeSection, setActiveSection, scrollToSection };

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ThemeContext.Provider value={themeValue}>
        <NavigationContext.Provider value={navigationValue}>
          <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
            <Header />
            <main>
              <section id="hero">
                <Hero />
              </section>
              <section id="experience">
                <Suspense fallback={<Loading size="large" text="Loading Experience..." />}>
                  <LazyExperience />
                </Suspense>
              </section>
              {/* NEW Education Section */}
              <section id="education">
                <Suspense fallback={<Loading size="large" text="Loading Education..." />}>
                  <LazyEducation />
                </Suspense>
              </section>
              <section id="projects">
                <Suspense fallback={<Loading size="large" text="Loading Projects..." />}>
                  <LazyProjects />
                </Suspense>
              </section>
              <section id="about">
                <Suspense fallback={<Loading size="large" text="Loading About..." />}>
                  <LazyAbout />
                </Suspense>
              </section>
              <section id="skills">
                <Suspense fallback={<Loading size="large" text="Loading Skills..." />}>
                  <LazySkills />
                </Suspense>
              </section>
              <section id="contact">
                <Suspense fallback={<Loading size="large" text="Loading Contact..." />}>
                  <LazyContact />
                </Suspense>
              </section>
            </main>
            <Footer />
            <PerformanceMonitor />
          </div>
        </NavigationContext.Provider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
};

export default App;
