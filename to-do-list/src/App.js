import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <body>
        <div id="page home">

          <div id="navbar" className="navbar">
            <nav className="buttons">
              <a href="#">Home</a>
              <a href="#">Task List</a>
              <a href="#">Calendar</a>
            </nav>

            <div className="searchBar">
              <input type="text" placeholder="Search..." />
              <button type="submit">Search</button>
            </div>

            <nav className="buttons">
              <a href="#">Settings</a>
              <a href="#">Help</a>
              <a href="#">Account</a>
            </nav>
          </div>

          <div id="app">
            <div top>
              <button id="newTask">
                <p>
                  + Add Task
                </p>
              </button>
            </div>
            <div mid>

            </div>
            <div bottom>

            </div>
          </div>

        </div>
      </body>
    </div>
  );
}

export default App;