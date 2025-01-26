import { useRef } from 'react';
import React, { useState } from 'react';
import VideoUpload from './components/video';
import StepbyStep from './components/StepbyStep';

function MapSection() {
  const [videoRef, setVideoRef] = useState(null);
  const [commentList, setCommentList] = useState([]);

  const handleAddComment = (newComment) => {
    setCommentList((prev) => [...prev, newComment]);
  };

  return (
    <div
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f3f3f3',
    width: '100%',
  }}
>
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "40px 20px",
      backgroundColor: "#f9f9f9",
      minHeight: "100vh",
      width: "70%",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
      border: "0.5px solid #ccc",
      borderRadius: "10px",
    }}
  >
    {/* Title Section */}
    <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
      Interactive Tour Guide Creator
    </h1>

    {/* Help Section */}
    <p
      style={{
        fontSize: "18px",
        marginTop: "0",
        marginBottom: "30px",
        width: "80%",
        lineHeight: "1.6", // Better spacing between lines
        color: "#555", // Softer text color
        backgroundColor: "#f9f9f9", // Light background for contrast
        padding: "20px", // Add padding for spacing
        borderRadius: "8px", // Rounded corners for a modern look
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
      }}
    >
      <strong>Welcome to the Interactive Tour Guide Creator!</strong> This tool allows you to create a step-by-step interactive guide for employees to follow. <br /> <br />
      Here’s what you can do on this page:
      <ul style={{ textAlign: "left", marginTop: "10px" }}>
        <li><strong>Upload a Video:</strong> Drag and drop or select a video file to serve as the primary content of your tour guide.</li>
        <li><strong>Add Timestamped Comments:</strong> Annotate the video with comments or notes at specific timestamps to guide employees as they watch the video.</li>
        <li><strong>Preview the Experience:</strong> Once done, preview the interactive tour to see how it will appear to employees.</li>
      </ul>
      Use the controls below to upload your video and begin adding annotations.
    </p>

    {/* Video Upload Section */}
    <VideoUpload setVideoRef={setVideoRef} />
  </div>
</div>
  );
}

export default MapSection;
