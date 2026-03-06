import { useIntersection } from '../hooks/useIntersection';
import { siteData } from '../data/site';
import './Stack.css';

const categoryColors: Record<string, string> = {
  'LLMs & GenAI': 'var(--cyan)',
  'Computer Vision': 'var(--amber)',
  'ML & Deep Learning': 'var(--green)',
  'MLOps & Infra': '#A78BFA',
  'Data & Storage': '#F87171',
  'Languages': 'var(--text-secondary)',
};

export default function Stack() {
  const { ref, visible } = useIntersection();

  return (
    <section id="stack" className="section stack">
      <div className="container">
        <div ref={ref} className={`fade-in ${visible ? 'visible' : ''}`}>
          <p className="section-label">Technical Stack</p>
          <h2 className="section-title">Tools & Technologies</h2>
          <p className="section-subtitle">
            Production-tested stack spanning LLMs, computer vision, distributed training, and MLOps.
          </p>
        </div>

        <div className="stack__grid">
          {Object.entries(siteData.skills).map(([category, items], i) => (
            <SkillCategory
              key={category}
              category={category}
              items={items}
              color={categoryColors[category] || 'var(--cyan)'}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ category, items, color, index }: {
  category: string;
  items: string[];
  color: string;
  index: number;
}) {
  const { ref, visible } = useIntersection();

  return (
    <div
      ref={ref}
      className={`skill-cat card fade-in ${visible ? 'visible' : ''} fade-in-delay-${(index % 4) + 1}`}
      style={{ '--cat-color': color } as React.CSSProperties}
    >
      <div className="skill-cat__header">
        <div className="skill-cat__dot" />
        <h3 className="skill-cat__title">{category}</h3>
      </div>
      <div className="skill-cat__items">
        {items.map((item, i) => (
          <span key={i} className="skill-chip">{item}</span>
        ))}
      </div>
    </div>
  );
}
