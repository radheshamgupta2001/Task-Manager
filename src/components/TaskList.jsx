import React, { useState } from 'react';
import TaskItem from './TaskItem';
import PriorityFilter from './PriorityFilter';
import './TaskList.css';

function TaskList({ tasks, deleteTask }) {
  const [filter, setFilter] = useState('All');

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'All') return true;
    if (filter === 'Done') return task.isDone;
    return task.priority === filter;
  });

  return (
    <div className="task-list">
      <PriorityFilter setFilter={setFilter} />
      <div className="card-container">
        {filteredTasks.map((task, index) => (
          <div className="task-card" key={index}>
            <TaskItem task={task} deleteTask={() => deleteTask(index)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
