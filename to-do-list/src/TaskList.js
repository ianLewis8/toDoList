// TaskList.js
import React, { useState } from 'react';
import './taskList.css';
import AddTask from './AddTask'; // Make sure to import AddTask from the correct path

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const dummyTasks = [
    // { name: 'Task 1', dueDate: '2024-04-20', priority: 1, category: 'Work', description: 'Lorem ipsum dolor sit amet' },
    // { name: 'Task 2', dueDate: '2024-04-22', priority: 3, category: 'Personal', description: 'Consectetur adipiscing elit' },
    // { name: 'Task 3', dueDate: '2024-04-25', priority: 5, category: 'Study', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' }
  ];

  // Simulating initial tasks load
  useState(() => {
    setTasks(dummyTasks);
  }, []);

  // Function to add a new task
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <AddTask onAddTask={addTask} /> {/* Pass the onAddTask function as a prop */}
      <div className="taskList">
        <h1>Task List</h1> 
        <div className="taskColumns">
          {tasks.map((task, index) => (
            <div key={index} className={`task priority-${task.priority}`}>
              <h3>{task.name}</h3>
              <p>Due: {task.dueDate}</p>
              <p>Category: {task.category}</p>
              <p>{task.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TaskList;
