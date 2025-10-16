import CanvasBackground from './components/ui/CanvasBackground/CanvasBackground';
import CommandPalette from './components/ui/CommandPalette/CommandPalette';
import Header from './components/layout/Header/Header';
import LeftSidebar from './components/layout/LeftSidebar/LeftSidebar';
import HeroSection from './components/sections/HeroSection/HeroSection';
import ProjectsSection from './components/sections/ProjectsSection/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection/SkillsSection';
import InteractiveTerminal from './components/ui/InteractiveTerminal/InteractiveTerminal';

function App() {
  return (
    <>
      <CanvasBackground />
      <CommandPalette />
      <Header />
      <LeftSidebar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <InteractiveTerminal />
      </main>
    </>
  )
}

export default App
