import React from 'react';
import './TaskItem.css';

function TaskItem({ task, deleteTask }) {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
      <div className={`priority ${task.priority.toLowerCase()}`}>
        {task.priority}
      </div>
      <button className="delete-button" onClick={deleteTask}>Delete</button>
    </div>
  );
}

export default TaskItem;
