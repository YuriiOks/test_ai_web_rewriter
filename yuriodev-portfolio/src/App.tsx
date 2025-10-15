import Header from './components/layout/Header/Header';
import LeftSidebar from './components/layout/LeftSidebar/LeftSidebar';
import HeroSection from './components/sections/HeroSection/HeroSection';

function App() {
  return (
    <>
      <Header />
      <LeftSidebar />
      <main>
        <HeroSection />
      </main>
    </>
  )
}

export default App
