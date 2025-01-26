import React from "react";

const Buttons = ({ setCurrentView }) => {
  return (
    <div style={{ marginTop: "20px", display: "flex", justifyContent: "center"}}>  
      <button
        style={{
          margin: "10px 20px",
          padding: "10px 20px",
          backgroundColor: "#4b9bc2",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
          transition: "transform 0.3s ease, background-color 0.35s ease",
      }}
      onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#007BFF";
          e.target.style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
          e.target.style.backgroundColor = "#4b9bc2";
          e.target.style.transform = "scale(1)";
      }}
        onClick={() => setCurrentView("Section Maker")} // Change view to "Section Maker"
      >
        Section
      </button>
      <button
        style={{
          margin: "10px 20px",
          padding: "10px 20px",
          backgroundColor: "#4b9bc2",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
          transition: "transform 0.3s ease, background-color 0.35s ease",
      }}
      onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#007BFF";
          e.target.style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
          e.target.style.backgroundColor = "#4b9bc2";
          e.target.style.transform = "scale(1)";
      }}
        onClick={() => setCurrentView("Interactive Tour Guide")} // Change view to "Interactive Tour Guide"
      >
        Tour
      </button>
      <button
        style={{
          margin: "10px 20px",
          padding: "10px 20px",
          backgroundColor: "#4b9bc2",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
          transition: "transform 0.3s ease, background-color 0.35s ease",
      }}
      onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#007BFF";
          e.target.style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
          e.target.style.backgroundColor = "#4b9bc2";
          e.target.style.transform = "scale(1)";
      }}
        onClick={() => setCurrentView("Section Quiz")} // Change view to "Section Quiz"
      >
        Quiz
      </button>
    </div>
  );
};

export default Buttons;
