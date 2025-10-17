import React from 'react';
import styles from './HeroSection.module.css';
import useTypewriter from '../../../hooks/useTypewriter';

const messages = [
  "Architecting agentic AI systems (LangGraph, MCP)...",
  "Building production RAG pipelines (95% precision)...",
  "Deploying multi-agent workflows (200% conversion)...",
  "Engineering cloud-native ML platforms (×50 faster)...",
  "Mentoring 1000+ students in AI/ML...",
  "Democratizing AI education through YuriODev..."
];

const HeroSection: React.FC = () => {
  const typedMessage = useTypewriter(messages);

  return (
    <section className={styles.heroSection} id="hero" role="banner">
      <h1 className={styles.heroTitle}>YURII OKSAMYTNYI</h1>
      <p className={styles.heroSubtitle}>AI/ML Systems Engineer | Agentic Architect</p>
      <div className={styles.typewriter} id="typewriter" aria-live="polite">{typedMessage}</div>
      <div className={styles.codeBlock} role="region" aria-label="Profile information">
        <div className={styles.commandLine}>$ cat ./engineer_profile.json</div>
        <div className={styles.output}>{'{'}</div>
        <div className={styles.output}>  <span className={styles.jsonKey}>"name"</span>: <span className={styles.jsonString}>"Yurii Oksamytnyi"</span>,</div>
        <div className={styles.output}>  <span className={styles.jsonKey}>"role"</span>: <span className={styles.jsonString}>"AI/ML Systems Engineer | Agentic Architect"</span>,</div>
        <div className={styles.output}>  <span className={styles.jsonKey}>"experience"</span>: <span className={styles.jsonString}>"8+ years building production AI systems"</span>,</div>
        <div className={styles.output}>  <span className={styles.jsonKey}>"platform"</span>: <span className={styles.jsonString}>"YuriODev.co.uk"</span>,</div>
        <div className={styles.output}>  <span className={styles.jsonKey}>"mission"</span>: <span className={styles.jsonString}>"Democratizing AI/ML education through hands-on learning"</span>,</div>
        <div className={styles.output}>  <span className={styles.jsonKey}>"specialization"</span>: [<span className={styles.jsonString}>"Agentic Workflows"</span>, <span className={styles.jsonString}>"RAG Pipelines"</span>, <span className={styles.jsonString}>"Multi-Agent Systems"</span>, <span className={styles.jsonString}>"Production MLOps"</span>],</div>
        <div className={styles.output}>  <span className={styles.jsonKey}>"education"</span>: <span className={styles.jsonString}>"MSc AI (Queen Mary) | BSc CS (MIPT) | MLX Graduate"</span>,</div>
        <div className={styles.output}>  <span className={styles.jsonKey}>"track_record"</span>: <span className={styles.jsonString}>"95% RAG precision | ×50 latency reduction | &gt;90% F1"</span>,</div>
        <div className={styles.output}>  <span className={styles.jsonKey}>"status"</span>: <span className={`${styles.success} ${styles.jsonValue}`}>"building_production_ai_systems"</span>,</div>
        <div className={styles.output}>  <span className={styles.jsonKey}>"location"</span>: <span className={styles.jsonString}>"London, UK"</span></div>
        <div className={styles.output}>{'}'}</div>
        <div className={styles.commandLine}>$ ./deploy_ai_systems.sh --mode=production --scale=enterprise</div>
        <div className={`${styles.output} ${styles.success}`}>✓ Agentic frameworks initialized (LangGraph, MCP)...</div>
        <div className={`${styles.output} ${styles.success}`}>✓ RAG pipelines optimized (95% precision)...</div>
        <div className={`${styles.output} ${styles.success}`}>✓ Multi-agent systems deployed...</div>
        <div className={styles.output}>Ready to architect your next AI breakthrough.</div>
      </div>
      <div className={styles.ctaButtons}>
        <a href="#platform" className={styles.ctaButton}>Explore YuriODev Vision</a>
        <a href="#projects" className={styles.ctaButton}>View Research & Projects</a>
        <a href="mailto:contact@yuriodev.co.uk" className={styles.ctaButton}>Collaborate with Me</a>
      </div>
    </section>
  );
};

export default HeroSection;
