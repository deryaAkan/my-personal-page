import React from 'react';
import './App.css';
import Projects from './components/Projects';
import Header from './components/Header';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
}

export default App;
