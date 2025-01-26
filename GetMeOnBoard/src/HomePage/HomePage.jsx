import React from "react";
import Buttons from "./components/Buttons";
import Logo from "./components/Logo.png";
import { motion } from "framer-motion";

const HomePage = ({ setCurrentView }) => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
          width: "100%",
          backgroundColor: "#d9eef0",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0 }}
          style={{
            height: "40vh",
            width: "50%",
            backgroundImage: `url(${Logo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            fontSize: "72px",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          <b style={{ color: "#314759" }}>GetM</b>
          <b style={{ color: "#509fcb" }}>eOn</b>
          <b style={{ color: "#314759" }}>Board</b>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#394c61",
            textAlign: "center",
          }}
        >
          Employee Onboarding Made Easy
        </motion.div>
      </div>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "70%",
            margin: "0 auto",
            padding: "20px",
            backgroundColor: "#fff",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1
            style={{
              margin: "40px 0 20px",
              fontSize: "2em",
              fontWeight: "bold",
            }}
          >
            Wanna Get On Board?
          </h1>
          <p style={{ fontSize: "1em", lineHeight: "1.5" }}>
            With our on-boarding platform, the process of recruiting could not
            be easier. <br />
            With GetMeOnBoard, new employees can start working from the get-go.
          </p>
          <p style={{ marginTop: "20px", fontSize: "1em" }}>
            To explore our Prototype, feel free to click any of the links above
            or below.
          </p>
          {/* Pass setCurrentView to Buttons */}
          <Buttons setCurrentView={setCurrentView} />
          <p style={{ marginTop: "40px", fontSize: "0.9em" }}>
            For business inquiries please feel free to contact XXX-XXX-XXXX.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
