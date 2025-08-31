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
                Hi, I’m Mohammed Sedeg (my friends call me Silva), an AI Engineer & Researcher currently based in Turkey (and open to relocating). 
                I love turning cutting-edge AI research into real-world solutions that make an impact. 
                From building smart LLMs and computer vision systems to optimizing models for edge devices, 
                I enjoy the challenge of bridging theory and practice.
              </p>
              
              <p>
                I’m endlessly curious about how AI works under the hood, and I find joy in exploring 
                neural architectures, distributed training, and generative AI techniques. Teaching and mentoring 
                fellow engineers is another passion of mine—I believe that sharing knowledge amplifies innovation.
              </p>
              
              <p>
                In my projects, I focus on making AI efficient, reliable, and scalable: whether it’s 
                fine-tuning GPT and LLaMA models, creating fast RAG pipelines, or deploying low-latency 
                models for edge devices. At heart, I’m a problem solver who loves combining research, 
                engineering, and creativity to deliver tangible results.
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
