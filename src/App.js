import React from 'react';
import { useState, useEffect } from 'react'; 
import './App.css';
import Projects from './components/Projects';
import Header from './components/Header';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };
  return (
      <div className= {`App ${theme}`}>
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
