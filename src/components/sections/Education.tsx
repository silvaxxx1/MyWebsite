import React, { useState } from 'react';
import { educations } from '../../data/education';// create this data file
import { Card } from '../ui';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Education.css';

const Education: React.FC = () => {
  const { elementRef: educationRef, isVisible: educationVisible } = useScrollAnimation();
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpanded = (id: string) => {
    const newSet = new Set(expandedItems);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setExpandedItems(newSet);
  };

  const isExpanded = (id: string) => expandedItems.has(id);

  return (
    <section className="education-section" id="education">
      <div className="education-container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">Formal education and specializations in AI and engineering</p>
        </div>

        <div 
          ref={educationRef} 
          className={`education-timeline ${educationVisible ? 'scroll-animate animate-in' : 'scroll-animate'}`}
        >
          {educations.map((edu, index) => (
            <div 
              key={edu.id} 
              className={`education-card ${educationVisible ? 'animate-fade-in-up' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-marker">
                <button
                  className={`timeline-toggle ${isExpanded(edu.id) ? 'expanded' : ''}`}
                  onClick={() => toggleExpanded(edu.id)}
                  aria-label={`${isExpanded(edu.id) ? 'Collapse' : 'Expand'} education details`}
                >
                  <svg className="triangle-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                </button>
                {index < educations.length - 1 && <div className="timeline-line"></div>}
              </div>

              <Card variant="elevated" hover className="education-content hover-lift">
                <div 
                  className="education-header"
                  onClick={() => toggleExpanded(edu.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleExpanded(edu.id);
                    }
                  }}
                >
                  <div className="education-title-group">
                    <h3 className="education-degree">{edu.degree}</h3>
                    <h4 className="education-school">{edu.school}</h4>
                  </div>
                  <div className="education-meta">
                    <span className="education-year">{edu.year}</span>
                    <span className="education-specialization">{edu.specialization}</span>
                  </div>
                </div>

                <div className={`education-details ${isExpanded(edu.id) ? 'expanded' : 'collapsed'}`}>
                  {edu.description && <p>{edu.description}</p>}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
