import Header from './components/layout/Header/Header';
import LeftSidebar from './components/layout/LeftSidebar/LeftSidebar';
import HeroSection from './components/sections/HeroSection/HeroSection';
import ProjectsSection from './components/sections/ProjectsSection/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection/SkillsSection';

function App() {
  return (
    <>
      <Header />
      <LeftSidebar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
      </main>
    </>
  )
}

export default App
