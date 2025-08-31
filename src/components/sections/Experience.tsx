import React, { useState } from 'react';
import { experiences } from '../../data/experience';
import { Card } from '../ui';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Experience.css';

const Experience: React.FC = () => {
  const { elementRef: experienceRef, isVisible: experienceVisible } = useScrollAnimation();
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpanded = (experienceId: string) => {
    const newExpandedItems = new Set(expandedItems);
    if (newExpandedItems.has(experienceId)) {
      newExpandedItems.delete(experienceId);
    } else {
      newExpandedItems.add(experienceId);
    }
    setExpandedItems(newExpandedItems);
  };

  const isExpanded = (experienceId: string) => expandedItems.has(experienceId);

  const formatDateRange = (startDate: string, endDate: string) => {
    return `${startDate} - ${endDate}`;
  };

  const renderTechnologyTags = (technologies: string[]) => {
    return technologies.map((tech) => (
      <span key={tech} className="tech-tag">
        {tech}
      </span>
    ));
  };

  const renderAchievements = (achievements: string[]) => {
    return achievements.map((achievement, index) => (
      <li key={index} className="achievement-item">
        <span className="achievement-icon">🚀</span>
        <span className="achievement-text">{achievement}</span>
      </li>
    ));
  };

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            Building expertise through hands-on experience in AI and software development
          </p>
        </div>

        <div 
          ref={experienceRef}
          className={`experience-timeline ${experienceVisible ? 'scroll-animate animate-in' : 'scroll-animate'}`}
        >
          {experiences.map((experience, index) => (
            <div 
              key={experience.id} 
              className={`experience-card ${experienceVisible ? 'animate-fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-marker">
                <button
                  className={`timeline-toggle ${isExpanded(experience.id) ? 'expanded' : ''}`}
                  onClick={() => toggleExpanded(experience.id)}
                  aria-label={`${isExpanded(experience.id) ? 'Collapse' : 'Expand'} ${experience.position} details`}
                >
                  <svg 
                    className="triangle-icon" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                </button>
                {index < experiences.length - 1 && <div className="timeline-line"></div>}
              </div>
              
              <Card 
                variant="elevated" 
                hover={true} 
                className="experience-content hover-lift"
              >
                <div 
                  className="experience-header"
                  onClick={() => toggleExpanded(experience.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleExpanded(experience.id);
                    }
                  }}
                >
                  <div className="experience-title-group">
                    <h3 className="experience-position">{experience.position}</h3>
                    <h4 className="experience-company">{experience.company}</h4>
                  </div>
                  <div className="experience-meta">
                    <span className="experience-date">
                      {formatDateRange(experience.startDate, experience.endDate)}
                    </span>
                    <span className="experience-location">{experience.location}</span>
                  </div>
                </div>

                <div className="experience-description">
                  <p>{experience.description}</p>
                </div>

                <div className={`experience-details ${isExpanded(experience.id) ? 'expanded' : 'collapsed'}`}>
                  {experience.achievements.length > 0 && (
                    <div className="experience-achievements">
                      <h5 className="achievements-title">Key Achievements</h5>
                      <ul className="achievements-list">
                        {renderAchievements(experience.achievements)}
                      </ul>
                    </div>
                  )}

                  {experience.technologies.length > 0 && (
                    <div className="experience-technologies">
                      <h5 className="technologies-title">Technologies Used</h5>
                      <div className="technologies-list">
                        {renderTechnologyTags(experience.technologies)}
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;