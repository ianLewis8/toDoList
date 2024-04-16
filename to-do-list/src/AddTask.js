// AddTask.js
import './addTask.css';
import React, { useState } from 'react';

function AddTask({ onAddTask }) {
  const [newTask, setNewTask] = useState({
    taskName: '',
    dueDate: '',
    priority: null,
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handlePriorityClick = (priority) => {
    setNewTask({ ...newTask, priority });
  };

  const handleAddTask = () => {
    // Call the onAddTask function with the new task object
    onAddTask(newTask);
    // Clear input fields after adding task
    setNewTask({
      taskName: '',
      dueDate: '',
      priority: null,
      description: ''
    });
  };

  return (
    <div className="newTask">
      <div className="topText">
        <a>Add Task</a>
      </div>
      <div className="title">
        <div class="form__group">
          <input type="input" class="form__field" placeholder="Task Name" name="taskName" id='taskName' required onChange={handleChange} value={newTask.taskName} />
          <label for="taskName" class="form__label">Task Name</label>
        </div>
      </div>
      <div className="duedate-and-time">
        <div class="due-date">
          <input type="date" class="date-field" placeholder="&nbsp" name="dueDate" id="due-date" onChange={handleChange} value={newTask.dueDate}></input>
          <label for="due-date" class="due-label"></label>
        </div>
        <div class="time">
          <input type="time" class="time-field" placeholder="Due Time" name="dueTime" id="due-time" onChange={handleChange} value={newTask.dueTime}></input>
          <label for="due-time" class="time-label"></label>
        </div>
      </div>
      <div className="priority">
        <a>Priority</a>
        <div className="priority-buttons">
          <button className={`b1 ${newTask.priority === 1 ? 'selected' : ''}`} onClick={() => handlePriorityClick(1)}> 1 </button>
          <button className={`b2 ${newTask.priority === 2 ? 'selected' : ''}`} onClick={() => handlePriorityClick(2)}> 2 </button>
          <button className={`b3 ${newTask.priority === 3 ? 'selected' : ''}`} onClick={() => handlePriorityClick(3)}> 3 </button>
          <button className={`b4 ${newTask.priority === 4 ? 'selected' : ''}`} onClick={() => handlePriorityClick(4)}> 4 </button>
          <button className={`b5 ${newTask.priority === 5 ? 'selected' : ''}`} onClick={() => handlePriorityClick(5)}> 5 </button>
        </div>
      </div>
      <div className="description">
        <label for="desc" class="desc-label">Description</label>
        <textarea class="desc-field" id="desc" name="description" cols="40" rows="10" onChange={handleChange} value={newTask.description}></textarea>
      </div>
      <div className="add-button">
        {/* Update the onClick event to call handleAddTask */}
        <button class="button-add" role="button" onClick={handleAddTask}><div className='symbol small'>add</div>Add</button>
      </div>
    </div>
  );
}

export default AddTask;
