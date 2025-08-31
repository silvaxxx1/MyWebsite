import React, { useState } from 'react';
import type { Project } from '../../types';
import './ProjectDetail.css';

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  // Use project images if available, otherwise use the main image
  const images = project.images && project.images.length > 0 
    ? project.images 
    : [project.imageUrl];

  const handleImageError = () => {
    setImageError(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="project-detail">
      {/* Image Gallery */}
      <div className="project-detail__gallery">
        <div className="project-detail__main-image">
          {!imageError ? (
            <img
              src={images[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              onError={handleImageError}
            />
          ) : (
            <div className="project-detail__image-placeholder">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21,15 16,10 5,21"/>
              </svg>
              <p>Image not available</p>
            </div>
          )}
          
          {images.length > 1 && !imageError && (
            <>
              <button
                className="project-detail__nav-btn project-detail__nav-btn--prev"
                onClick={prevImage}
                aria-label="Previous image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15,18 9,12 15,6"></polyline>
                </svg>
              </button>
              <button
                className="project-detail__nav-btn project-detail__nav-btn--next"
                onClick={nextImage}
                aria-label="Next image"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
              </button>
            </>
          )}
        </div>

        {images.length > 1 && !imageError && (
          <div className="project-detail__thumbnails">
            {images.map((image, index) => (
              <button
                key={index}
                className={`project-detail__thumbnail ${
                  index === currentImageIndex ? 'active' : ''
                }`}
                onClick={() => goToImage(index)}
                aria-label={`View image ${index + 1}`}
              >
                <img src={image} alt={`${project.title} thumbnail ${index + 1}`} />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Project Information */}
      <div className="project-detail__content">
        <div className="project-detail__header">
          <div className="project-detail__title-section">
            <h3 className="project-detail__title">{project.title}</h3>
            {project.featured && (
              <span className="project-detail__featured-badge">Featured</span>
            )}
          </div>
        </div>

        <div className="project-detail__description">
          <h4>About This Project</h4>
          <p>{project.longDescription || project.description}</p>
        </div>

        <div className="project-detail__technologies">
          <h4>Technologies Used</h4>
          <div className="project-detail__tech-list">
            {project.technologies.map((tech) => (
              <span key={tech} className="project-detail__tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="project-detail__actions">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-detail__action-btn project-detail__action-btn--primary"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15,3 21,3 21,9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              View Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-detail__action-btn project-detail__action-btn--secondary"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              View Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;