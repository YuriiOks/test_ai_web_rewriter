import { useTypewriter } from '../../../hooks/useTypewriter';
import styles from './HeroSection.module.css';

const heroMessages = [
  'Building end-to-end AI/ML systems...',
  'Researching Transformers & RAG architectures...',
  'Creating interactive learning experiences...',
  'Bridging theory and practical implementation...',
  'Mentoring the next generation of AI engineers...',
  'Democratizing AI education through code...',
];

const HeroSection = () => {
  const typewriterText = useTypewriter(heroMessages);

  return (
    <section id="hero" className={styles.heroSection} role="banner">
      <h1 className={styles.heroTitle}>YURII OKSAMYTNYI</h1>
      <p className={styles.heroSubtitle}>AI/ML Engineer & Educational Platform Creator</p>
      <div className={styles.typewriter} aria-live="polite">
        {typewriterText}
      </div>
      <div className={styles.codeBlock} role="region" aria-label="Profile information">
        <div className={styles.commandLine}>$ cat ./researcher_profile.json</div>
        <div className={styles.output}>{'{'}</div>
        <div className={styles.output}>
          <span className={styles.jsonKey}>"name"</span>: <span className={styles.jsonString}>"Yurii Oksamytnyi"</span>,
        </div>
        <div className={styles.output}>
          <span className={styles.jsonKey}>"role"</span>: <span className={styles.jsonString}>"AI/ML Engineer & Educational Platform Creator"</span>,
        </div>
        <div className={styles.output}>
          <span className={styles.jsonKey}>"platform"</span>: <span className={styles.jsonString}>"YuriODev.co.uk"</span>,
        </div>
        <div className={styles.output}>
          <span className={styles.jsonKey}>"mission"</span>: <span className={styles.jsonString}>"Democratizing AI/ML education through hands-on learning"</span>,
        </div>
        <div className={styles.output}>
          <span className={styles.jsonKey}>"focus_areas"</span>: [<span className={styles.jsonString}>"Deep Learning"</span>, <span className={styles.jsonString}>"NLP"</span>, <span className={styles.jsonString}>"ML System Design"</span>, <span className={styles.jsonString}>"AI Education"</span>],
        </div>
        <div className={styles.output}>
          <span className={styles.jsonKey}>"current_studies"</span>: <span className={styles.jsonString}>"Alumnus: MLX Applied ML (Transformers, RAG, PEFT)"</span>,
        </div>
        <div className={styles.output}>
          <span className={styles.jsonKey}>"background"</span>: <span className={styles.jsonString}>"MIPT Physics & Mathematics, 10+ years mentoring"</span>,
        </div>
        <div className={`${styles.output} ${styles.success}`}>
          <span className={styles.jsonKey}>"status"</span>: <span className={styles.jsonString}>"launching_yuriodev_phase_0 (Week 5/8)"</span>,
        </div>
        <div className={styles.output}>
          <span className={styles.jsonKey}>"location"</span>: <span className={styles.jsonString}>"London, UK"</span>
        </div>
        <div className={styles.output}>{'}'}</div>
        <div className={styles.commandLine}>$ ./start_yuriodev.sh --mode=production --phase=genesis</div>
        <div className={`${styles.output} ${styles.success}`}>✓ YuriODev platform initializing...</div>
        <div className={`${styles.output} ${styles.success}`}>✓ Neural pathways loading... [100%]</div>
        <div className={`${styles.output} ${styles.success}`}>✓ Educational modules ready...</div>
        <div className={styles.output}>Ready to transform AI/ML education worldwide.</div>
      </div>
      <div className={styles.ctaButtons}>
        <a className={styles.ctaButton} href="#platform">
          Explore YuriODev Vision
        </a>
        <a className={styles.ctaButton} href="#projects">
          View Research & Projects
        </a>
        <a className={styles.ctaButton} href="mailto:contact@yuriodev.co.uk">
          Collaborate with Me
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
