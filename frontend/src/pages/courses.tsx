import ComingSoonSection from '../components/sections/ComingSoonSection/ComingSoonSection';

const Courses = () => {
  return (
    <ComingSoonSection 
      pageName="courses"
      title="Courses"
      description="Comprehensive Python and AI/ML courses designed for both beginners and advanced practitioners."
      features={[
        'Comprehensive Python and AI/ML curriculum',
        'Interactive coding exercises with instant feedback',
        'Real-world projects and case studies',
        'Video tutorials and documentation',
        'Progress tracking and certifications',
        'Code quality assessment and best practices',
        'Integration with GitHub for project submissions'
      ]}
    />
  );
};

export default Courses;
