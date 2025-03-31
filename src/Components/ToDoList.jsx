import React, { useState, useContext } from 'react';
import { TaskForm } from './TaskForm';
import { FilterButtons } from './FilterButtons';
import { TaskList } from './TaskList';
import { ContextTask } from '../context/context';
import './ToDoList.css';

export const ToDoList = () => {
  const { tasks, setTasks } = useContext(ContextTask);
  const [newTask, setNewTask] = useState({ title: '', description: '' });
  const [filter, setFilter] = useState('all');
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (e) => {
    e.preventDefault();
    if (!newTask.title.trim()) return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: newTask.title,
        description: newTask.description,
        completed: false
      }
    ]);
    setNewTask({ title: '', description: '' });
  };

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const startEditing = (task) => {
    setEditingTask({ ...task });
  };

  const saveEdit = () => {
    if (!editingTask.title.trim()) return;
    
    setTasks(tasks.map(task =>
      task.id === editingTask.id ? editingTask : task
    ));
    setEditingTask(null);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      
      <TaskForm 
        newTask={newTask}
        setNewTask={setNewTask}
        addTask={addTask}
      />

      <FilterButtons 
        filter={filter}
        setFilter={setFilter}
      />

      <TaskList 
        filteredTasks={filteredTasks}
        toggleTask={toggleTask}
        startEditing={startEditing}
        editingTask={editingTask}
        setEditingTask={setEditingTask}
        saveEdit={saveEdit}
      />
    </div>
  );
};


