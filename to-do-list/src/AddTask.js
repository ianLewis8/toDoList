<<<<<<< HEAD
import './addTask.css';

/* Add: Title, Due date, priority, category/tags, description, subtasks, attachments, status */

function AddTask() {
  return (
    <div className="newTask">
      <div className="topText">
        <a>Add Task</a>
      </div>
      <div className="title">
        <div class="form__group field">
          <input type="input" class="form__field" placeholder="Task Name" name="taskName" id='taskName' required />
          <label for="taskName" class="form__label">Task Name</label>
        </div>
      </div>
      <div className="dueDate">
        <a>Due Date(Make only dates accepted)</a>
      </div>
      <div className="priority">
      <a>Priority(Make selectable from 1-5 or something)</a>
      </div>
      <div className="tags">
      <a>Category(Add a few generic categories to pick from and then custom)</a>
      </div>
      <div className="description">
      <a>Description(Add text field to input description)</a>
      </div>
      <div className="add-button">
        <button class="button-add" role="button"><div className='symbol small'>add</div>Add</button>
      </div>
    </div>
  );
}

=======
import './addTask.css';

/* Add: Title, Due date, priority, category/tags, description, subtasks, attachments, status */

function AddTask() {
  return (
    <div className="newTask">
      <div className="topText">
        <a>Add Task</a>
      </div>
      <div className="title">
        <div class="form__group field">
          <input type="input" class="form__field" placeholder="Task Name" name="taskName" id='taskName' required />
          <label for="taskName" class="form__label">Task Name</label>
        </div>
      </div>
      <div className="dueDate">
        <a>Due Date(Make only dates accepted)</a>
      </div>
      <div className="priority">
        <a>Priority(Make selectable from 1-5 or something)</a>
      </div>
      <div className="tags">
        <a>Category(Add a few generic categories to pick from and then custom)</a>
      </div>
      <div className="description">
        <label for="desc" class="desc-label">Description</label>
        <textarea class="desc-field" id="desc" name="desc" cols="40" rows="10"></textarea>
      </div>
      <div className="add-button">
        <button class="button-add" role="button"><div className='symbol small'>add</div>Add</button>
      </div>
    </div>
  );
}

>>>>>>> 3e78c4f31785a127498af418173bc4ab375ca513
export default AddTask;