import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete }) {
  const handleDelete = id => {
    // Filter out the task with the specified id
    const updatedTasks = tasks.filter(task => task.id !== id);
    // Call onDelete function with the updated tasks list
    onDelete(updatedTasks);
  };

  return (
    <div className="tasks">
      {tasks.map(task => (
        <Task
          key={task.id}
          id={task.id}
          text={task.text}
          category={task.category}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;
