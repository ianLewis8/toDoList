import React from 'react';
import './App.css';

import homered from './homered.png'; 
import tasklist from './bulletred.png';
import calendar from './calendarred.png';
import settings from './gear.png';
import help from './questionmark.jpg';
import account from'./personicon.webp';

function App() {
  return (
    <div className="App">
      <div id="navbar" className="navbar">
        <nav className="buttons">
          <a href="#"><img src={homered} height='40' width='40' alt="Home" /></a>
          <a href="#"><img src={tasklist} height='40' width='40' alt="Task List" /></a>
          <a href="#"><img src={calendar} height='40' width='40' alt="Calendar" /></a>
        </nav>

        <div className="searchBar">
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
        </div>

        <nav className="buttons">
          <a href="#"><img src={settings} height='40' width='40' alt="Settings" /></a>
          <a href="#"><img src={help} height='40' width='40' alt="Help" /></a>
          <a href="#"><img src={account} height='40' width='40' alt="Account" /></a>
        </nav>
      </div>
    </div>
  );
}

export default App;
