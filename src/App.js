import React from 'react';
import { useState, useEffect } from 'react'; 
import './App.css';
import Projects from './components/Projects';
import Header from './components/Header';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import useThemePreference from './hooks/useThemePreference';

function App() {
  const prefersTheme = useThemePreference();
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || (prefersTheme ? 'dark' : 'light')
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };
  
  return (
    <div className={`App ${theme}`}>
      <WelcomeMessage />
      <Header theme={theme} onToggle={handleThemeSwitch} />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
