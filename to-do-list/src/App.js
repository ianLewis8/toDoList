import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './App.css';
import AddTask from './AddTask';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <div id="navbar" className="navbar">
        <nav className="buttons">
          <Link to="/"><div className='symbol'>home</div></Link>
          <Link to="/tasklist"><div className='symbol'>format_list_bulleted</div></Link>
          <Link to="/calendar"><div className='symbol'>calendar_month</div></Link>
        </nav>
        <div className="searchContainer">
          <input type="text" className="search" placeholder="Search..." />
          <button type="submit">
            <div className='symbol searchRed'>search</div>
          </button>
        </div>
        <nav className="buttons">
          <Link to="/settings"><div className='symbol'>settings</div></Link>
          <Link to="/help"><div className='symbol'>help</div></Link>
          <Link to="/account"><div className='symbol'>account_circle</div></Link>
        </nav>
      </div>

      {/* Content */}
      <div className="page">
        <AddTask />
      </div>
      <Outlet />
    </div>
  );
}

export default App;