import React from 'react';

export const TaskItem = ({ task, toggleTask, startEditing, editingTask, setEditingTask, saveEdit, deleteTask }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      {editingTask && editingTask.id === task.id ? (
        <div className="edit-form">
          <input
            type="text"
            value={editingTask.title}
            onChange={(e) => setEditingTask({ ...editingTask, title: e.target.value })}
            className="edit-input"
          />
          <textarea
            value={editingTask.description}
            onChange={(e) => setEditingTask({ ...editingTask, description: e.target.value })}
            className="edit-textarea"
          />
          <button onClick={saveEdit} className="save-button">Save</button>
          <button onClick={() => setEditingTask(null)} className="cancel-button">Cancel</button>
        </div>
      ) : (
        <>
          <div className="task-header">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="task-checkbox"
            />
            <h3>{task.title}</h3>
            <div className="task-actions">
              <button onClick={() => startEditing(task)} className="edit-button">Edit</button>
              <button onClick={() => deleteTask(task.id)} className="delete-button">Delete</button>
            </div>
          </div>
          <p className="task-description">{task.description}</p>
        </>
      )}
    </div>
  );
}; 