import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import PageLayout from './components/layout/PageLayout/PageLayout';
import Portfolio from './pages/portfolio';
import Community from './pages/community';
import Courses from './pages/courses';
import Dashboard from './pages/dashboard';
import './App.css';

function AppContent() {
  const location = useLocation();
  
  return (
    <PageLayout currentPath={location.pathname}>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/community" element={<Community />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </PageLayout>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App
