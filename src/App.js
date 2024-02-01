import React from 'react';
import './App.css';
import Projects from './components/Projects';
import Header from './components/Header';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
