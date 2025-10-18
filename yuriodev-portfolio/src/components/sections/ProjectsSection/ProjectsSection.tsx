import React from 'react';
import { projectsData } from '../../../services/projectsData';
import ProjectCard from '../../ui/ProjectCard/ProjectCard';
import styles from './ProjectsSection.module.css';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className={styles.sectionFullwidthShaded}>
      <div className={styles.sectionContentWrapper}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <p>
            Recent work demonstrating agentic AI systems, educational platform engineering, and 
            production-grade architecture from first principles.
          </p>
        </div>
        <div className={styles.projectsShowcase}>
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
