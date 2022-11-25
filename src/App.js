import React, { Fragment } from 'react';
import './App.css';
import Menu from './composants/Menu';
import Calendrier from './composants/Calendrier';
function App() {
  return (
    <div className="App">
      <Menu/>
      <header className="App-header">
        <Calendrier/>
      </header>
      
    </div>
  );
}

export default App;