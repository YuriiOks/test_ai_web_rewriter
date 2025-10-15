import type { ProjectData } from '../../../data/projectsData';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: ProjectData;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      <div className={styles.techStack}>
        {project.tech.map(tech => (
          <span
            key={`${project.id}-${tech.label}`}
            className={`${styles.techTag} ${tech.category === 'methodology' ? styles.methodology : ''}`.trim()}
          >
            {tech.label}
          </span>
        ))}
      </div>
      <div className={styles.links}>
        {project.links.map(link => (
          <a key={link.label} className={styles.link} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
