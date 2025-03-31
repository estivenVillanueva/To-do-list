import React from 'react';
import { TaskItem } from './TaskItem';

export const TaskList = ({ filteredTasks, toggleTask, startEditing, editingTask, setEditingTask, saveEdit }) => {
  return (
    <div className="tasks-list">
      {filteredTasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          startEditing={startEditing}
          editingTask={editingTask}
          setEditingTask={setEditingTask}
          saveEdit={saveEdit}
        />
      ))}
    </div>
  );
}; 