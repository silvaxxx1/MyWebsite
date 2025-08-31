import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './About.css';

const About: React.FC = () => {
  const { elementRef: aboutRef, isVisible: aboutVisible } = useScrollAnimation();

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div 
          ref={aboutRef}
          className={`about-content ${aboutVisible ? 'scroll-animate animate-in' : 'scroll-animate'}`}
        >
          <div className="about-text">
            <h2 className="about-title">About Me</h2>
            <div className="about-summary">
              <p>
                Hi, I’m Mohammed Sedeg (Silva), an AI Engineer & Researcher based in Turkey (open to relocating). 
                I specialize in translating advanced AI research into real-world solutions that create impact. 
                From building smart LLMs and computer vision systems to deploying models on edge devices, 
                I love bridging theory and practice.
              </p>
              
              <p>
                My background in Mechatronics and Robotics has shaped how I approach AI: I design and optimize 
                deep learning models specifically for autonomous systems, robotics perception, and control. 
                Leveraging Edge AI, I ensure that these models run efficiently on low-power devices while maintaining 
                high performance—bringing intelligence directly to the robot's hardware.
              </p>

              <p>
                I’m endlessly curious about neural architectures, distributed training, and generative AI. 
                Mentoring and sharing knowledge is also a passion, as I believe it amplifies innovation. 
                Ultimately, I combine research, engineering, and creativity to deliver practical, high-impact solutions.
              </p>
            </div>
          </div>
          
          <div className="about-photo">
            <div className="photo-container hover-scale">
              <img 
                src={`${import.meta.env.BASE_URL}images/profile/profile_picture.jpg`}
                alt="Professional headshot" 
                className="profile-image"
                loading="lazy"
              />
              <div className="photo-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
