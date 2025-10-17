import React from 'react';
import ReactDOM from 'react-dom/client';
import PlaceholderPage from '../components/sections/PlaceholderPage/PlaceholderPage';
import { ThemeProvider } from '../context/ThemeContext';
import CanvasBackground from '../components/ui/CanvasBackground/CanvasBackground';
import '../index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <CanvasBackground />
      <PlaceholderPage 
        pageName="courses" 
        description="Interactive AI and programming courses platform with hands-on projects and real-world applications."
      />
    </ThemeProvider>
  </React.StrictMode>,
);
