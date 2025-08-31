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
                Hi, I’m <strong>Mohammed Sedeg (Silva)</strong>, an AI Engineer & Researcher based in Turkey (open to relocation). 
                I specialize in building <strong>production-ready AI systems</strong> across <strong>LLMs, computer vision, and robotics</strong>. 
                I enjoy bridging advanced research with real-world deployment—from training generative LLMs to optimizing low-latency models for edge devices.
              </p>
              
              <p>
                My academic foundation in <strong>Mechatronics and Electrical Engineering</strong> shapes my approach to AI: 
                I design and optimize deep learning models for <strong>robotics perception, autonomous control, and Edge AI</strong>. 
                By combining <strong>hardware-aware design</strong> with <strong>model compression and quantization</strong>, 
                I ensure high performance on embedded systems like Jetson and Raspberry Pi.
              </p>

              <p>
                On the generative AI side, I fine-tune <strong>GPT-2, LLaMA, and other LLMs</strong> using Hugging Face & LoRA, 
                and build <strong>scalable NLP pipelines</strong> with LangChain, RAG, and FAISS for context-rich generation. 
                I also focus on <strong>training efficiency and production-readiness</strong>, using PyTorch DDP, AMP, and optimized data loaders to reduce time and cost.
              </p>

              <p>
                I am passionate about pushing AI from concept to production: combining <strong>robotics, edge optimization, and generative AI</strong> 
                to deliver high-impact, scalable solutions. Sharing knowledge, mentoring, and contributing to <strong>open-source projects</strong> 
                are also central to my work philosophy.
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
