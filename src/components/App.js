import React, { useState } from "react";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Task 1", category: "Category 1" },
    { id: 2, text: "Task 2", category: "Category 2" },
    { id: 3, text: "Task 3", category: "Category 1" }
    // Add more tasks as needed
  ]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Category 1", "Category 2"];
  // Extract unique categories from tasks
  // const categories = [...new Set(tasks.map(task => task.category))];

  const handleSelectCategory = category => {
    setSelectedCategory(category);
  };

  const filteredTasks = selectedCategory === "All" ? tasks : tasks.filter(task => task.category === selectedCategory);

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <CategoryFilter categories={categories} selectedCategory={selectedCategory} onSelectCategory={handleSelectCategory} />
      <TaskList tasks={filteredTasks} />
    </div>
  );
}

export default App;