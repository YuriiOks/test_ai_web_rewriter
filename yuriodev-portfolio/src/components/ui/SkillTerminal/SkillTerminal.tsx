import React from 'react';
import { Skill } from '../../../services/skillsData';
import styles from './SkillTerminal.module.css';

interface SkillTerminalProps {
  skill: Skill;
}

const SkillTerminal: React.FC<SkillTerminalProps> = ({ skill }) => {
  return (
    <div className={styles.skillTerminal}>
      <div className={styles.skillHeader}>{skill.title}</div>
      <div className={styles.output}>Loading...</div>
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${skill.progress}%` }}
        ></div>
      </div>
      <div className={styles.skillLevel}>{skill.level}</div>
      <div className={styles.skillDetails}>
        {skill.details.map((detail) => (
          <span key={detail} className={styles.skillTagDetail}>{detail}</span>
        ))}
        {skill.highlight && <span className={`${styles.skillTagDetail} ${styles.highlightSkill}`}>{skill.highlight}</span>}
      </div>
    </div>
  );
};

export default SkillTerminal;
