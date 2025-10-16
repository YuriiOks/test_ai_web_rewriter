import React from 'react';
import { Project } from '../../../services/projectsData';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={styles.projectCard}>
      <h3 className={styles.projectTitle}>{project.title}</h3>
      <p className={styles.projectDescription}>{project.description}</p>
      <div className={styles.techStack}>
        {project.techStack.map((tech) => (
          <span key={tech} className={styles.techTag}>{tech}</span>
        ))}
        {project.methodologies.map((method) => (
          <span key={method} className={`${styles.techTag} ${styles.methodology}`}>{method}</span>
        ))}
      </div>
      <div className={styles.projectLinks}>
        {project.links.map((link) => (
          <a key={link.name} href={link.url} className={styles.projectLink}>{link.name}</a>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
