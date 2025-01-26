import React from "react";

const Buttons = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <button
        style={{
          margin: "10px",
          padding: "10px 20px",
          border: "2px solid black",
          borderRadius: "10px",
          fontSize: "1em",
          cursor: "pointer",
        }}
      >
        Section
      </button>
      <button
        style={{
          margin: "10px",
          padding: "10px 20px",
          border: "2px solid black",
          borderRadius: "10px",
          fontSize: "1em",
          cursor: "pointer",
        }}
      >
        Tour
      </button>
      <button
        style={{
          margin: "10px",
          padding: "10px 20px",
          border: "2px solid black",
          borderRadius: "10px",
          fontSize: "1em",
          cursor: "pointer",
        }}
      >
        Quiz
      </button>
    </div>
  );
};

export default Buttons;
