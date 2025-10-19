import React from 'react';
import { skillsData } from '../../../services/skillsData';
import SkillTerminal from '../../ui/SkillTerminal/SkillTerminal';
import styles from './SkillsSection.module.css';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className={styles.sectionFullwidthShaded}>
      <div className={styles.sectionContentWrapper}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Technical Competency Matrix</h2>
          <p>
            Comprehensive skill set spanning AI/ML engineering, full-stack development, research methodology, and educational design.
          </p>
        </div>
        <div className={styles.skillsMatrix}>
          {skillsData.map((skill) => (
            <SkillTerminal key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
