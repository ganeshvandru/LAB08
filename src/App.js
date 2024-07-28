import React, { useState } from 'react';

const ToDoList = () => {
  // Define state for tasks and new task input
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Handle input change
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  // Handle task completion toggle
  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Handle task deletion
  const handleTaskDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a new task"
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <span onClick={() => toggleTaskCompletion(index)}>{task.text}</span>
            <button onClick={() => handleTaskDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;

