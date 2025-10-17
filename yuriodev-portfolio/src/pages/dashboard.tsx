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
        pageName="dashboard" 
        description="Personalized learning dashboard to track your progress, manage courses, and access exclusive content."
      />
    </ThemeProvider>
  </React.StrictMode>,
);
