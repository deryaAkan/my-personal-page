import React from 'react';
import './App.css';
import Projects from './components/Projects';
import Header from './components/Header';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';

function App() {
  return (
      <div className="App">
        <WelcomeMessage />
        <Header />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </div>
  );
}

export default App;
