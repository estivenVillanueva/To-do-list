import React from 'react';
import { useContext } from 'react';
import { ContextTask } from '../context/context';

export const TaskForm = ({ newTask, setNewTask, addTask }) => {
  return (
    <form onSubmit={addTask} className="task-form">
      <input
        type="text"
        value={newTask.title}
        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        placeholder="Título de la tarea"
        className="task-input"
      />
      <textarea
        value={newTask.description}
        onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
        placeholder="Descripción"
        className="task-textarea"
      />
      <button type="submit" className="add-button">Add Task</button>
    </form>
  );
}; 