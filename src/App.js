import React, { Fragment } from 'react';
import './App.css';
import Menu from './composants/Menu';
import Calendrier from './composants/Calendrier';
function App() {
  return (
    // <Fragment className="bg-warning">
    //   <div className="container">
    //     <Calendrier/>
    //   </div>
    // </Fragment>
    <div className="App">
      <Menu/>
      <header className="App-header">
        <Calendrier/>
      </header>
      
    </div>
  );
}

export default App;