import ComingSoonSection from '../components/sections/ComingSoonSection/ComingSoonSection';

const Community = () => {
  return (
    <ComingSoonSection 
      pageName="community"
      title="Community"
      description="Join our growing community of developers, share knowledge, collaborate on projects, and grow together."
      features={[
        'Community forums and discussion boards',
        'Code collaboration and pair programming sessions',
        'Weekly coding challenges and competitions',
        'Mentorship programs for beginners',
        'Project showcase and feedback platform',
        'Technical blog and knowledge base',
        'Live coding sessions and workshops'
      ]}
    />
  );
};

export default Community;
