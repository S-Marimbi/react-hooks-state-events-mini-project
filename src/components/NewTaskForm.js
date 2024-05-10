import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  const handleTextChange = event => {
    setText(event.target.value);
  };

  const handleCategoryChange = event => {
    setCategory(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Check if text is not empty
    if (text.trim() !== "") {
      // Call onTaskFormSubmit with task object
      onTaskFormSubmit({ text, category });
      // Clear form inputs
      setText("");
      setCategory("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label htmlFor="text">Task:</label>
      <input type="text" id="text" value={text} onChange={handleTextChange} required />
      
      <label htmlFor="category">Category:</label>
      <select id="category" value={category} onChange={handleCategoryChange} required>
        <option value="" disabled>Select a category</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>

      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;