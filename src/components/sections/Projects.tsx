import React, { useState } from 'react';
import { projects } from '../../data/projects';
import { Modal, ProjectDetail, Button, Card, Image } from '../ui';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import type { Project } from '../../types';
import './Projects.css';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { elementRef: projectsRef, isVisible: projectsVisible } = useScrollAnimation();

  // Sort projects to show featured ones first
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="projects">
      <div className="projects__container">
        <div className="projects__header">
          <h2 className="projects__title">Featured Projects</h2>
          <p className="projects__subtitle">
            A showcase of my recent work and technical projects
          </p>
        </div>



        {/* Projects Grid */}
        <div
          ref={projectsRef}
          className={`projects__grid ${projectsVisible ? 'scroll-animate animate-in' : 'scroll-animate'}`}
        >
          {sortedProjects.map((project, index) => (
            <Card
              key={project.id}
              variant="elevated"
              hover={true}
              clickable={true}
              padding="none"
              className={`projects__card ${project.featured ? 'featured' : ''} ${projectsVisible ? 'animate-fade-in-up hover-lift' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleProjectClick(project)}
            >
              <div className="projects__card-image">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fallbackSrc={`${import.meta.env.BASE_URL}images/placeholder-project.svg`}
                  lazy={true}
                  aspectRatio="16/9"
                  className="project-image"
                />
              </div>

              <div className="projects__card-content">
                <div className="projects__card-header">
                  <h3 className="projects__card-title">{project.title}</h3>
                  {project.featured && (
                    <span className="projects__featured-badge">Featured</span>
                  )}
                </div>

                <p className="projects__card-description">
                  {project.description}
                </p>

                <div className="projects__card-technologies">
                  {project.technologies.map(tech => (
                    <span key={tech} className="projects__tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="projects__card-actions">
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="small"
                      className="projects__action-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                      }}
                      aria-label={`View source code of ${project.title}`}
                      leftIcon={
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      }
                    >
                      GitHub
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      variant="primary"
                      size="small"
                      className="projects__action-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                      }}
                      aria-label={`View live demo of ${project.title}`}
                      leftIcon={
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15,3 21,3 21,9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      }
                    >
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {sortedProjects.length === 0 && (
          <div className="projects__empty">
            <p>No projects found.</p>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={selectedProject?.title}
      >
        {selectedProject && <ProjectDetail project={selectedProject} />}
      </Modal>
    </section>
  );
};

export default Projects;