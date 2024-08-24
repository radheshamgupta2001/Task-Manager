import React, { useState } from 'react';
import Header from '../src/components/Header';
import TaskList from '../src/components/TaskList';
import TaskForm from '../src/components/TaskForm';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleThemeToggle = (darkMode) => {
    setIsDarkMode(darkMode);
    document.body.className = darkMode ? 'dark-mode' : '';
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <Header toggleTheme={handleThemeToggle} />
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
