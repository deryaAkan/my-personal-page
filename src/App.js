import React from 'react';
import './App.css';
import Projects from './components/Projects';
import Header from './components/Header';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <Profile></Profile>
      <Projects></Projects>
    </div>
  );
}

export default App;
