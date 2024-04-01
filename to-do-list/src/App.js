import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="navbar" className="navbar">
        <nav className="buttons"> 
          <Link to="/"><div className='symbol'>home</div></Link>
          <Link to="/tasklist"><div className='symbol'>format_list_bulleted</div></Link>
          <Link to="/calendar"><div className='symbol'>calendar_month</div></Link>
        </nav>

        <div className="searchBar">
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
        </div>

        <nav className="buttons">
          <Link to="/settings"><div className='symbol'>settings</div></Link>
          <Link to="/help"><div className='symbol'>help</div></Link>
          <Link to="/account"><div className='symbol'>account_circle</div></Link>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

export default App;