import React from "react";

const FilterButtons = (props) => {
  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
      <button
        onClick={() => {
          props.setFilter("all");
        }}
        style={{
          padding: "10px",
          borderRadius: "10px",
          fontWeight: "500",
          backgroundColor: props.filter === "all" ? "blue" : "lightgray",
          color: props.filter === "all" ? "white" : "black",
          boxShadow:
            props.filter === "all" ? "0 2px 5px rgba(0, 0, 0, 0.3)" : "none",
        }}
      >
        All
      </button>
      <button
        onClick={() => {
          props.setFilter("active");
        }}
        style={{
          padding: "10px",
          borderRadius: "10px",
          fontWeight: "500",
          backgroundColor: props.filter === "active" ? "blue" : "lightgray",
          color: props.filter === "active" ? "white" : "black",
          boxShadow:
            props.filter === "active" ? "0 2px 5px rgba(0, 0, 0, 0.3)" : "none",
        }}
      >
        Active
      </button>
      <button
        onClick={() => {
          props.setFilter("completed");
        }}
        style={{
          padding: "10px",
          borderRadius: "10px",
          fontWeight: "500",
          backgroundColor: props.filter === "completed" ? "blue" : "lightgray",
          color: props.filter === "completed" ? "white" : "black",
          boxShadow:
            props.filter === "completed"
              ? "0 2px 5px rgba(0, 0, 0, 0.3)"
              : "none",
        }}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterButtons;
