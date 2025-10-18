import ComingSoonSection from '../components/sections/ComingSoonSection/ComingSoonSection';

const Dashboard = () => {
  return (
    <ComingSoonSection 
      pageName="dashboard"
      title="Dashboard"
      description="Your personalized learning dashboard to track progress, manage courses, and monitor your development journey."
      features={[
        'Personal progress tracking and analytics',
        'Course enrollment and management',
        'Assignment submissions and grading',
        'Learning path recommendations',
        'Achievement badges and certificates',
        'Code snippet library and bookmarks',
        'Community activity feed',
        'Direct messaging with instructors'
      ]}
    />
  );
};

export default Dashboard;
