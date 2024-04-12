import './addTask.css';

function AddTask() {
  return (
    <div className="newTask">
      <div className="topText">
        <a>Add Task</a>
      </div>
      <div className="form">
        <div className="form__group field">
          <input type="input" className="form__field" placeholder="Task Name" name="taskName" id='taskName' required />
          <label htmlFor="taskName" className="form__label">Task Name</label>
        </div>
        <div className="form__group field">
          <input type="date" className="form__field" placeholder="Due Date" name="dueDate" id='dueDate' required />
          <label htmlFor="dueDate" className="form__label">Due Date</label>
        </div>
        <div className="form__group field">
          <select className="form__field" name="priority" id='priority' required>
            <option value="">Select Priority</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <label htmlFor="priority" className="form__label">Priority</label>
        </div>
        <div className="form__group field">
          <input type="text" className="form__field" placeholder="Category" name="category" id='category' />
          <label htmlFor="category" className="form__label">Category</label>
        </div>
        <div className="form__group field description">
          <textarea className="form__field desc-field" id="description" name="description" placeholder="Description" rows="4" required></textarea>
          <label htmlFor="description" className="form__label">Description</label>
        </div>
        <div className="add-button">
          <button className="button-add" role="button">
            <div className='symbol small'>add</div>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTask;