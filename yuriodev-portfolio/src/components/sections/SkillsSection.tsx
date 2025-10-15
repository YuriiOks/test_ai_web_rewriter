import SkillTerminal from '../ui/SkillTerminal/SkillTerminal';
import { keyTechnologies, skillsData } from '../../data/skillsData';
import styles from './SkillsSection.module.css';

const SkillsSection = () => {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.contentWrapper}>
        <header className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Technical Competency Matrix</h2>
          <p className={styles.sectionDescription}>
            Comprehensive skill set spanning AI/ML engineering, full-stack development, research methodology, and educational design.
          </p>
        </header>
        <div className={styles.skillsGrid}>
          {skillsData.map(skill => (
            <SkillTerminal key={skill.id} skill={skill} />
          ))}
        </div>
        <div className={styles.keyTechnologies}>
          <h3 className={styles.keyTechTitle}>Key Technologies I Master</h3>
          <div className={styles.techCloud}>
            {keyTechnologies.map(tech => (
              <span key={tech} className={styles.techItem}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
