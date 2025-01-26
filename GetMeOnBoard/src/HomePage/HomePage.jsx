import React from "react";
import Buttons from "./components/Buttons";
import FirstImage from "./components/FirstImage.png";

const HomePage = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9", // Optional for background color for the second section
      }}
    >
      {/* Full-screen image section */}
      <div
        style={{
          height: "100vh", // Full viewport height
          width: "100%", // Full width
          backgroundImage: `url(${FirstImage})`,
          backgroundSize: "cover", // Ensures the image covers the entire area
          backgroundPosition: "center", // Centers the image
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
        }}
      ></div>

      {/* Existing content section */}
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          
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
    </div>
  );
};

export default HomePage;
