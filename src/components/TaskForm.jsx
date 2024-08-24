import React, { useState } from 'react';
import './TaskForm.css';

function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('High');
  const [isDone, setIsDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && dueDate) {
      addTask({ title, description, dueDate, priority, isDone });
      setTitle('');
      setDescription('');
      setDueDate('');
      setPriority('High');
      setIsDone(false);
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>Add New Task</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
        required
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        required
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <div className="button-group">
        <button type="submit">Save Changes</button>
        <button type="button" onClick={() => setIsDone(!isDone)}>
          {isDone ? 'Undo' : 'Mark as done'}
        </button>
        <button type="button" onClick={() => {
          setTitle('');
          setDescription('');
          setDueDate('');
          setPriority('High');
        }}>Cancel</button>
      </div>
    </form>
  );
}

export default TaskForm;
