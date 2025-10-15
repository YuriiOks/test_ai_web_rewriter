import { useEffect, useState } from 'react';
import type { SkillData } from '../../../data/skillsData';
import styles from './SkillTerminal.module.css';

interface SkillTerminalProps {
  skill: SkillData;
}

const SkillTerminal = ({ skill }: SkillTerminalProps) => {
  const [fillWidth, setFillWidth] = useState(0);

  useEffect(() => {
    const timeout = window.setTimeout(() => setFillWidth(skill.progress), 150);
    return () => window.clearTimeout(timeout);
  }, [skill.progress]);

  return (
    <article className={styles.terminal}>
      <div className={styles.header}>{skill.filename}</div>
      <div className={styles.output}>{skill.status}</div>
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: `${fillWidth}%` }} />
        <span className={styles.progressLevel}>{skill.level}</span>
      </div>
      <div className={styles.tags}>
        {skill.tags.map(tag => (
          <span
            key={`${skill.id}-${tag.label}`}
            className={`${styles.tag} ${tag.highlight ? styles.highlight : ''}`.trim()}
          >
            {tag.label}
          </span>
        ))}
      </div>
    </article>
  );
};

export default SkillTerminal;
