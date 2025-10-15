import ProjectCard from '../ui/ProjectCard/ProjectCard';
import { projectsData } from '../../data/projectsData';
import styles from './ProjectsSection.module.css';

const ProjectsSection = () => {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.contentWrapper}>
        <header className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Research &amp; Development</h2>
          <p className={styles.sectionDescription}>
            Production AI/ML systems, educational innovations, and research contributions spanning healthcare, real estate, and educational technology.
          </p>
        </header>
        <div className={styles.projectsGrid}>
          {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
