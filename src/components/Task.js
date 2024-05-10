import React from "react";

function Task({ id, text, category, onDelete }) {
  const handleDelete = () => {
    // Call onDelete function with the task id to delete the task
    onDelete(id);
  };

  return (
    <div className="task">
      <div>
        <strong>Task:</strong> {text}
      </div>
      <div>
        <strong>Category:</strong> {category}
      </div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Task;
