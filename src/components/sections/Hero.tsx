import React from 'react';
import { Button } from '../ui';
import { useNavigation } from '../../App';
import './Hero.css';

const Hero: React.FC = () => {
  const { scrollToSection } = useNavigation();

  const handleViewWork = () => scrollToSection('projects');
  const handleContact = () => scrollToSection('contact');

  return (
    <div className="hero">
      <div className="hero__background">
        <div className="hero__gradient"></div>
        <div className="hero__pattern"></div>
      </div>

      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title animate-fade-in-up">
              <span className="hero__greeting animate-fade-in-left animate-delay-100">Hi, I'm</span>
              <span className="hero__name animate-fade-in-up animate-delay-300">Mohammed Awad Ahmed</span>
              <span className="hero__role animate-fade-in-right animate-delay-500">
                AI Engineer & Researcher
              </span>
            </h1>

            <p className="hero__description animate-fade-in-up animate-delay-700">
              I love <strong>building AI systems from the ground up</strong>, exploring the nuts and bolts of LLMs, computer vision, and robotics.  
              At the same time, I deliver <strong>robust, production-ready solutions</strong> that scale in the real world.  
              My work bridges <strong>deep research</strong> with <strong>high-impact deployment</strong>, creating AI systems that are both innovative and reliable.
            </p>


            <div className="hero__stats animate-fade-in-up animate-delay-1000">
              <div className="hero__stat hover-lift">
                <span className="hero__stat-number">5+</span>
                <span className="hero__stat-label">AI projects</span>
              </div>
              <div className="hero__stat hover-lift">
                <span className="hero__stat-number">+3</span>
                <span className="hero__stat-label">Years Experience</span>
              </div>
            </div>
          </div>

          <div className="hero__actions animate-fade-in-up animate-delay-1000">
            <Button 
              variant="primary" 
              onClick={handleViewWork}
              className="hero__cta-primary hover-lift"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              onClick={handleContact}
              className="hero__cta-secondary hover-lift"
            >
              Get In Touch
            </Button>
            {/* Resume Download Button */}
            <a 
              href="/Mohammed_Sedeg_Resume.pdf" 
              download 
              className="hero__cta-resume hover-lift"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="hero__visual animate-fade-in-right animate-delay-500">
          <div className="hero__avatar animate-scale-in-bounce animate-delay-700">
            <img 
              src={`${import.meta.env.BASE_URL}images/profile/profile_picture.jpg`}
              alt="Profile picture" 
              className="hero__avatar-image"
              loading="eager"
            />
          </div>

          <div className="hero__floating-elements">
            <div className="hero__floating-element hero__floating-element--1 animate-float animate-delay-1000">
              <span>Data</span>
            </div>
            <div className="hero__floating-element hero__floating-element--2 animate-float-slow animate-delay-700">
              <span>AI/ML</span>
            </div>
            <div className="hero__floating-element hero__floating-element--3 animate-float animate-delay-500">
              <span>Generative AI</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <div className="hero__scroll-arrow">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
          </svg>
        </div>
        <span className="hero__scroll-text">Scroll to explore</span>
      </div>
    </div>
  );
};

export default Hero;
