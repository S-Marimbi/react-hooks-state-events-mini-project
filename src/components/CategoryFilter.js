import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  const handleCategoryClick = category => {
    // Call onSelectCategory function with the selected category
    onSelectCategory(category);
  };

  return (
    <div className="category-filter">
      <button
        key="All"
        className={selectedCategory === "All" ? "selected" : ""}
        onClick={() => handleCategoryClick("All")}
      >
        All
      </button>
      {categories.map(category => (
        <button
          key={category}
          className={selectedCategory === category ? "selected" : ""}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
