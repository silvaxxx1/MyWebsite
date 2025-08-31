import React from 'react';
import { Card } from '../ui';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Skills.css';

interface Skill {
  name: string;
  category: 'ai-ml' | 'librariesAndFrameworks' | 'computerVision' | 'mlops' | 'databases' | 'programming';
}

const Skills: React.FC = () => {
  const { elementRef: skillsRef, isVisible: skillsVisible } = useScrollAnimation();

  const skills: Skill[] = [
    // Core AI & ML
    { name: 'Machine Learning', category: 'ai-ml' },
    { name: 'Deep Learning', category: 'ai-ml' },
    { name: 'Generative AI', category: 'ai-ml' },
    { name: 'LLMs & NLP', category: 'ai-ml' },
    
    // Programming
    { name: 'Python', category: 'programming' },
    { name: 'C', category: 'programming' },
    { name: 'C++', category: 'programming' },
    { name: 'MATLAB', category: 'programming' },

    // Libraries & Frameworks
    { name: 'PyTorch', category: 'librariesAndFrameworks' },
    { name: 'TensorFlow', category: 'librariesAndFrameworks' },
    { name: 'JAX', category: 'librariesAndFrameworks' },
    { name: 'Scikit-learn', category: 'librariesAndFrameworks' },
    { name: 'Hugging Face', category: 'librariesAndFrameworks' },
    { name: 'LangChain', category: 'librariesAndFrameworks' },
    { name: 'PEFT/LoRA', category: 'librariesAndFrameworks' },
    { name: 'FAISS', category: 'librariesAndFrameworks' },
    { name: 'OpenAI API', category: 'librariesAndFrameworks' },
    { name: 'Cohere', category: 'librariesAndFrameworks' },

    // Computer Vision
    { name: 'YOLOv8', category: 'computerVision' },
    { name: 'OpenCV', category: 'computerVision' },
    { name: 'Detectron2', category: 'computerVision' },
    { name: 'Ultralytics', category: 'computerVision' },
    { name: 'Albumentations', category: 'computerVision' },
    { name: 'Roboflow', category: 'computerVision' },

    // MLOps & Deployment
    { name: 'Docker', category: 'mlops' },
    { name: 'FastAPI', category: 'mlops' },
    { name: 'CI/CD', category: 'mlops' },
    { name: 'GitHub Actions', category: 'mlops' },
    { name: 'AWS SageMaker', category: 'mlops' },
    { name: 'MLflow', category: 'mlops' },

    // Databases & Data Handling
    { name: 'SQL & Pandas', category: 'databases' },
    { name: 'PySpark & NumPy', category: 'databases' },
    { name: 'MongoDB', category: 'databases' },
    { name: 'Qdrant', category: 'databases' },
    { name: 'PostgreSQL', category: 'databases' },
    { name: 'SQLAlchemy', category: 'databases' },
    { name: 'Alembic', category: 'databases' },
  ];

  const skillCategories = {
    'ai-ml': 'AI & Machine Learning',
    'librariesAndFrameworks': 'Libraries & Frameworks',
    'computerVision': 'Computer Vision',
    'mlops': 'MLOps & Deployment',
    'databases': 'Databases & Data Handling',
    'programming': 'Programming Languages',
  };

  const getSkillsByCategory = (category: Skill['category']) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div 
          ref={skillsRef}
          className={`skills-content ${skillsVisible ? 'scroll-animate animate-in' : 'scroll-animate'}`}
        >
          <h2 className="skills-title">Technical Skills</h2>
          <p className="skills-description">
            I build production-grade AI systems end-to-end, from research to deployment. 
            My expertise spans large language models, computer vision, generative AI, 
            and scalable infrastructure for real-world applications.
          </p>

          <div className="skills-grid">
            {Object.entries(skillCategories).map(([category, title], index) => (
              <Card 
                key={category} 
                variant="elevated" 
                hover={true} 
                className={`skill-category hover-lift ${skillsVisible ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="category-title">{title}</h4>
                <div className="skills-list">
                  {getSkillsByCategory(category as Skill['category']).map(skill => (
                    <div key={skill.name} className="skill-tag hover-scale">
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
