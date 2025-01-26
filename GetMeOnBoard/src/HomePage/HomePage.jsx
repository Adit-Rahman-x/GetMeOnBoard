import React from "react";
import Buttons from "./components/Buttons";

const HomePage = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    
        backgroundColor: "#f9f9f9", // Optional for a background color
      }}
    >
      <div
        style={{
          maxWidth: "70%", // Constrain width to 70%
          margin: "0 auto", // Center horizontally
          padding: "20px",
          backgroundColor: "#fff", // Optional for a white background
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Optional for subtle shadow
        }}
      >
        <h1 style={{ margin: "40px 0 20px", fontSize: "2em", fontWeight: "bold" }}>
          Wanna Get On Board?
        </h1>
        <p style={{ fontSize: "1em", lineHeight: "1.5" }}>
          With our on-boarding platform, the process of recruiting could not be easier.
          With GetMeOnBoard, new employees can start working from the get-go.
        </p>
        <p style={{ marginTop: "20px", fontSize: "1em" }}>
          To explore our Prototype, feel free to click any of the links above or below.
        </p>
        <Buttons />
        <p style={{ marginTop: "40px", fontSize: "0.9em" }}>
          For business inquiries please feel free to contact XXX-XXX-XXXX.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
