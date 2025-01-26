import React from "react";
import Buttons from "./components/Buttons";
import Logo from "./components/Logo.png";
import { motion } from "framer-motion";

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
        display: "flex",
        flexDirection: "column", // Stack children vertically
        justifyContent: "center", // Center along the vertical axis
        alignItems: "center", // Center along the horizontal axis
        height: "90vh", // Full viewport height
        width: "100%", // Full width
        backgroundColor: "#d9eef0", // Optional for background color for the second section
      }}
    >
      {/* Animation Variants */}
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Start off-screen (bottom) and invisible
        animate={{ opacity: 1, y: 0 }} // Fade in and move up to its position
        transition={{ duration: 0.8, delay: 0 }} // Adjust duration and delay
        style={{
          height: "40vh", // Full viewport height
          width: "50%", // Full width
          backgroundImage: `url(${Logo})`,
          backgroundSize: "cover", // Ensures the image covers the entire area
          backgroundPosition: "center", // Centers the image
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
        }}
      />

      <motion.div
        initial={{ opacity: 0, x: -50 }} // Start off-screen (bottom) and invisible
        animate={{ opacity: 1, x: 0 }} // Fade in and move up to its position
        transition={{ duration: 0.8, delay: 0.8 }} // Slightly delayed
        style={{
          fontSize: "72px",
          fontWeight: "bold",
          textAlign: "center", // Center the text
          marginBottom: "10px", // Add some space at the bottom
        }}
      >
        <b style={{ color: "#314759" }}>GetM</b>
        <b style={{ color: "#509fcb" }}>eOn</b>
        <b style={{ color: "#314759" }}>Board</b>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }} // Start off-screen (bottom) and invisible
        animate={{ opacity: 1, x: 0 }} // Fade in and move up to its position
        transition={{ duration: 0.8, delay: 1.6 }} // Further delayed
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "#394c61",
          textAlign: "center", // Center the text
        }}
      >
        Employee Onboarding Made Easy
      </motion.div>
    </div>


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
