import React from 'react';
import profileImage from './img/IMG_20200326_193704.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React app</h1>
      <h2>Author: Paranthaman</h2>
      <img src= {profileImage} width="500em" alt="profile"/>
    </div>
  );
}

export default App;
