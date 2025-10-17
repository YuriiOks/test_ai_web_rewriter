import React, { useState } from 'react';
import type { Project } from '../../../services/projectsData';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`${styles.projectCard} ${project.featured ? styles.featured : ''}`}>
      <div className={styles.projectHeader}>
        <div>
          <h3 className={styles.projectTitle}>
            {project.title}
            {project.featured && <span className={styles.featuredBadge}>Featured</span>}
          </h3>
          {project.subtitle && <p className={styles.projectSubtitle}>{project.subtitle}</p>}
          <div className={styles.projectMeta}>
            <span className={styles.period}>{project.period}</span>
            {project.client && <span className={styles.client}>• {project.client}</span>}
          </div>
        </div>
      </div>

      <p className={styles.projectDescription}>{project.description}</p>

      {/* Metrics Display */}
      {project.metrics && project.metrics.length > 0 && (
        <div className={styles.metricsGrid}>
          {project.metrics.map((metric, index) => (
            <div 
              key={index} 
              className={`${styles.metricItem} ${metric.highlight ? styles.highlighted : ''}`}
            >
              <div className={styles.metricValue}>{metric.value}</div>
              <div className={styles.metricLabel}>{metric.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Expandable Details */}
      {(project.challenge || project.solution || project.impact) && (
        <div className={styles.expandableSection}>
          <button 
            className={styles.expandButton}
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
          >
            {isExpanded ? '▼ Hide Details' : '▶ Show Details'}
          </button>
          
          {isExpanded && (
            <div className={styles.projectDetails}>
              {project.challenge && (
                <div className={styles.detailBlock}>
                  <h4>Challenge</h4>
                  <p>{project.challenge}</p>
                </div>
              )}
              {project.solution && (
                <div className={styles.detailBlock}>
                  <h4>Solution</h4>
                  <p>{project.solution}</p>
                </div>
              )}
              {project.impact && (
                <div className={styles.detailBlock}>
                  <h4>Impact</h4>
                  <p>{project.impact}</p>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Tech Stack */}
      <div className={styles.techStack}>
        {project.techStack.map((tech) => (
          <span key={tech} className={styles.techTag}>{tech}</span>
        ))}
        {project.methodologies.map((method) => (
          <span key={method} className={`${styles.techTag} ${styles.methodology}`}>{method}</span>
        ))}
      </div>

      {/* Links */}
      <div className={styles.projectLinks}>
        {project.links.map((link) => (
          <a 
            key={link.name} 
            href={link.url} 
            className={styles.projectLink}
            target={link.url.startsWith('http') ? '_blank' : undefined}
            rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
