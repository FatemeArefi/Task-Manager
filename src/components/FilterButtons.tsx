import React from "react";

const FilterButtons = (props) => {
  return (
    <div className="flex gap-3 mb-4">
      <button
        onClick={() => {
          props.setFilter("all");
        }}
        className={`py-2 px-4 rounded-lg font-medium ${
          props.filter === "all"
            ? "bg-blue-500 text-white shadow-md"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        All
      </button>
      <button
        onClick={() => {
          props.setFilter("active");
        }}
        className={`py-2 px-4 rounded-lg font-medium ${
          props.filter === "active"
            ? "bg-blue-500 text-white shadow-md"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        Active
      </button>
      <button
        onClick={() => {
          props.setFilter("completed");
        }}
        className={`py-2 px-4 rounded-lg font-medium ${
          props.filter === "completed"
            ? "bg-blue-500 text-white shadow-md"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterButtons;
