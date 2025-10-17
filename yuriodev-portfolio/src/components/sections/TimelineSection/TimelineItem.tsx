import React, { useState } from 'react';
import type { TimelineEvent } from '../../../data/timelineData';
import styles from './TimelineItem.module.css';

interface TimelineItemProps {
  event: TimelineEvent;
  index: number;
}

const getTypeIcon = (type: string): string => {
  switch (type) {
    case 'experience':
      return '💼';
    case 'education':
      return '🎓';
    case 'certification':
      return '📜';
    case 'achievement':
      return '🏆';
    default:
      return '📌';
  }
};

const getTypeColor = (type: string): string => {
  switch (type) {
    case 'experience':
      return 'var(--accent-secondary)';
    case 'education':
      return 'var(--accent-primary)';
    case 'certification':
      return 'var(--accent-tertiary)';
    case 'achievement':
      return '#FFD700';
    default:
      return 'var(--text-primary)';
  }
};

const TimelineItem: React.FC<TimelineItemProps> = ({ event, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Get tag category for color coding
  const getTagCategory = (tag: string): string => {
    const tagLower = tag.toLowerCase();
    
    // AI/ML Technologies
    if (['rag', 'langgraph', 'mcp', 'llms', 'ai', 'ml models', 'mlops', 'pytorch', 
         'machine learning', 'deep learning', 'nlp', 'computer vision', 'chromadb',
         'multi-agent systems', 'production ai'].some(term => tagLower.includes(term))) {
      return 'ai';
    }
    
    // Cloud & Infrastructure
    if (['aws', 'gcp', 'cloud', 'etl', 'pipelines', 'real-time systems', 
         'performance optimization'].some(term => tagLower.includes(term))) {
      return 'cloud';
    }
    
    // Programming Languages
    if (['python', 'swift', 'objective-c', 'c++', 'sql', 'fastapi'].some(term => tagLower.includes(term))) {
      return 'language';
    }
    
    // Domain/Industry
    if (['healthcare', 'fintech', 'financial', 'fraud detection', 'privacy engineering',
         'gdpr', 'time series', 'predictive analytics'].some(term => tagLower.includes(term))) {
      return 'domain';
    }
    
    // Development & Tools
    if (['ios', 'uikit', 'core data', 'rest apis', 'github actions', 'ci/cd',
         'open source', 'sales automation'].some(term => tagLower.includes(term))) {
      return 'tools';
    }
    
    // Education & Soft Skills
    if (['education', 'teaching', 'mentoring', 'course design', 'academic',
         'algorithms', 'data structures', 'systems programming', 'competitive programming'].some(term => tagLower.includes(term))) {
      return 'education';
    }
    
    // Default
    return 'default';
  };

  const isLeft = index % 2 === 0;

  return (
    <div className={`${styles.timelineItem} ${isLeft ? styles.left : styles.right}`}>
      <div className={styles.timelineCard}>
        <div className={styles.cardHeader}>
          {/* Timeline Dot - Left side for left cards */}
          {isLeft && (
            <div className={styles.timelineDot} style={{ backgroundColor: getTypeColor(event.type) }}>
              <span className={styles.typeIcon}>{getTypeIcon(event.type)}</span>
            </div>
          )}
          
          {/* Content wrapper for date + badges */}
          <div className={styles.headerContent}>
            <div className={styles.dateRange}>
              <span className={styles.date}>{event.date}</span>
              {event.dateEnd && (
                <>
                  <span className={styles.dateSeparator}>→</span>
                  <span className={styles.date}>{event.dateEnd}</span>
                </>
              )}
              {event.isOngoing && (
                <span className={styles.ongoingBadge}>Ongoing</span>
              )}
            </div>
          </div>
          
          <span className={styles.typeLabel}>{event.type}</span>
          
          {/* Timeline Dot - Right side for right cards */}
          {!isLeft && (
            <div className={styles.timelineDot} style={{ backgroundColor: getTypeColor(event.type) }}>
              <span className={styles.typeIcon}>{getTypeIcon(event.type)}</span>
            </div>
          )}
        </div>

        <div className={styles.cardContent}>
          <h3 className={styles.title}>{event.title}</h3>
          <div className={styles.company}>
            <span className={styles.companyName}>{event.company}</span>
            {event.location && (
              <>
                <span className={styles.separator}>•</span>
                <span className={styles.location}>📍 {event.location}</span>
              </>
            )}
          </div>

          <p className={styles.description}>{event.description}</p>

          {/* Highlights */}
          {event.highlights && event.highlights.length > 0 && (
            <div className={styles.highlightsSection}>
              <button 
                className={styles.expandButton}
                onClick={() => setIsExpanded(!isExpanded)}
                aria-expanded={isExpanded}
              >
                {isExpanded ? '▼ Hide Details' : '▶ Key Highlights'}
              </button>
              
              {isExpanded && (
                <ul className={styles.highlightsList}>
                  {event.highlights.map((highlight, idx) => (
                    <li key={idx} className={styles.highlightItem}>
                      <span className={styles.highlightBullet}>▹</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Tags */}
          {event.tags && event.tags.length > 0 && (
            <div className={styles.tags}>
              {event.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className={`${styles.tag} ${styles[`tag-${getTagCategory(tag)}`]}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Link */}
          {event.link && (
            <a 
              href={event.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${styles.eventLink} ${event.linkText?.includes('Discord') ? styles.discordLink : ''}`}
            >
              {event.linkText?.includes('Discord') && (
                <svg className={styles.linkIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              )}
              {event.linkText || 'View Project'} →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
