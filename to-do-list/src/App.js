import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './App.css';
import homered from './homered.png';
import tasklist from './bulletred.png';
import calendar from './calendarred.png';
import settings from './gear.png';
import help from './questionmark.jpg';
import account from './personicon.webp';

function App() {
  return (
    <div className="App">
      <div className="page">
        <div id="navbar" className="navbar">
          <nav className="buttons">
            <Link to="/"><img src={homered} height='40' width='40' alt="Home" /></Link>
            <Link to="/tasklist"><img src={tasklist} height='40' width='40' alt="Task List" /></Link>
            <Link to="/calendar"><img src={calendar} height='40' width='40' alt="Calendar" /></Link>
          </nav>

          <div className="searchBar">
            <input type="text" placeholder="Search..." />
            <button type="submit">Search</button>
          </div>

          <nav className="buttons">
            <Link to="/settings"><img src={settings} height='40' width='40' alt="Settings" /></Link>
            <Link to="/help"><img src={help} height='40' width='40' alt="Help" /></Link>
            <Link to="/account"><img src={account} height='40' width='40' alt="Account" /></Link>
          </nav>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;