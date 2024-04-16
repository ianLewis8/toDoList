import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

import './index.css';

import App from './App';
import Home from './home';
import TaskList from './TaskList';
import Calendar from './calendar';
import Settings from './Settings';
import Help from './help';
import Account from './account';
import AddTask from './AddTask'
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <>
          <AddTask />
          <Home />
        </>,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "tasklist",
        element: <>
          {/* <AddTask /> */}
          <TaskList />
        </>,
      },
      {
        path: "calendar",
        element: <>
          <AddTask />
          <Calendar />
        </>,
      },
      {
        path: "help", 
        element: <Help />
      },
      {
        path: "account",
        element: <Account />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
