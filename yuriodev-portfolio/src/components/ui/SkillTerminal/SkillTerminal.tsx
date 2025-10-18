import React from 'react';
import type { Skill, SkillTagType } from '../../../services/skillsData';
import { skillsDataTyped } from '../../../services/skillsData';
import styles from './SkillTerminal.module.css';

interface SkillTerminalProps {
  skill: Skill;
}

const SkillTerminal: React.FC<SkillTerminalProps> = ({ skill }) => {
  // Find the typed version of this skill for color-coded tags
  const typedSkill = skillsDataTyped.find(s => s.id === skill.id);

  const getTagClassName = (type: SkillTagType): string => {
    return `${styles.skillTagDetail} ${styles[`tag_${type}`]}`;
  };

  return (
    <div className={styles.skillTerminal}>
      <div className={styles.skillHeader}>
        <span className={styles.terminalPrompt}>$ {skill.title}</span>
      </div>
      <div className={styles.skillContent}>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${skill.progress}%` }}
          ></div>
        </div>
        <div className={styles.skillDetails}>
        {typedSkill ? (
          <>
            {typedSkill.details.map((detail) => (
              <span key={detail.name} className={getTagClassName(detail.type)}>
                {detail.name}
              </span>
            ))}
            <span className={getTagClassName(typedSkill.highlight.type)}>
              {typedSkill.highlight.text}
            </span>
          </>
        ) : (
          <>
            {skill.details.map((detail) => (
              <span key={detail} className={styles.skillTagDetail}>{detail}</span>
            ))}
            {skill.highlight && (
              <span className={`${styles.skillTagDetail} ${styles.highlightSkill}`}>
                {skill.highlight}
              </span>
            )}
          </>
        )}
        </div>
      </div>
    </div>
  );
};

export default SkillTerminal;
