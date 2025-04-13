import React from "react";

interface FilterButtonsProps {
  filter: string;
  setFilter: (filter: string) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ filter, setFilter }) => {
  return (
    <div className="flex gap-2 mb-4">
      <button
        onClick={() => setFilter("all")}
        className={`p-2 px-4 rounded-full font-medium transition ${
          filter === "all"
            ? "bg-blue-500 text-white shadow-lg"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        All
      </button>
      <button
        onClick={() => setFilter("active")}
        className={`p-2 px-4 rounded-full font-medium transition ${
          filter === "active"
            ? "bg-blue-500 text-white shadow-lg"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        Active
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={`p-2 px-4 rounded-full font-medium transition ${
          filter === "completed"
            ? "bg-blue-500 text-white shadow-lg"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterButtons;
