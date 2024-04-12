import React, { useState } from 'react';
import './taskList.css';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      name: taskName,
      dueDate,
      priority,
      category,
      description,
    };
    setTasks([...tasks, newTask]);
    setTaskName('');
    setDueDate('');
    setPriority('');
    setCategory('');
    setDescription('');
  };

  const priorityColumns = {
    high: tasks.filter((task) => task.priority === 'high'),
    medium: tasks.filter((task) => task.priority === 'medium'),
    low: tasks.filter((task) => task.priority === 'low'),
  };

  return (
    <div className="taskList">
      <h1>Task List</h1>
      <div className="taskColumns">
        <div className="column">
          <h2>High Priority</h2>
          {priorityColumns.high.map((task, index) => (
            <div key={index} className="task">
              <h3>{task.name}</h3>
              <p>Due: {task.dueDate}</p>
              <p>Category: {task.category}</p>
              <p>{task.description}</p>
            </div>
          ))}
        </div>
        <div className="column">
          <h2>Medium Priority</h2>
          {priorityColumns.medium.map((task, index) => (
            <div key={index} className="task">
              <h3>{task.name}</h3>
              <p>Due: {task.dueDate}</p>
              <p>Category: {task.category}</p>
              <p>{task.description}</p>
            </div>
          ))}
        </div>
        <div className="column">
          <h2>Low Priority</h2>
          {priorityColumns.low.map((task, index) => (
            <div key={index} className="task">
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