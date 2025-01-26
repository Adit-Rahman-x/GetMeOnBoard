import React, { useState } from "react";

const DragAndDropBox = ({ isEmployeeView }) => {
  const [mediaFile, setMediaFile] = useState(null);
  const [browseText, setBrowseText] = useState("Browse");

  const handleDrop = (e) => {
    e.preventDefault();
    if (isEmployeeView) return;
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileInput = (e) => {
    if (isEmployeeView) return;
    const file = e.target.files[0];
    handleFile(file);
  };

  const handleFile = (file) => {
    if (file && (file.type.startsWith("image/") || file.type.startsWith("video/"))) {
      setMediaFile(file);
      setBrowseText("File Added: " + file.name);
    } else {
      alert("Please upload an image or video file.");
    }
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="drop-zone"
      style={{
        border: isEmployeeView ? "none" : "2px dashed #aaa",
        borderRadius: "8px",
        padding: "20px",
        textAlign: "center",
        cursor: isEmployeeView ? "default" : "pointer",
        marginBottom: "20px",
        backgroundColor: "#f9f9f9",
      }}
    >
      {mediaFile ? (
        mediaFile.type.startsWith("image/") ? (
          <img
            src={URL.createObjectURL(mediaFile)}
            alt="Uploaded"
            style={{ maxWidth: "100%", maxHeight: "200px", borderRadius: "8px" }}
          />
        ) : (
          <video
            controls
            src={URL.createObjectURL(mediaFile)}
            style={{ maxWidth: "100%", maxHeight: "200px", borderRadius: "8px" }}
          />
        )
      ) : isEmployeeView ? (
        <p>No media file available</p>
      ) : (
        <p>Drag & drop an image or video here, or click to upload</p>
      )}
      {!isEmployeeView && (
        <>
          <input
            type="file"
            accept="image/*,video/*"
            onChange={handleFileInput}
            style={{ display: "none" }}
            id="fileInput"
          />
          <label
            htmlFor="fileInput"
            style={{
              display: "block",
              color: "#007bff",
              cursor: "pointer",
              marginTop: "10px",
              fontSize: "16px",
            }}
          >
            Browse
          </label>
        </>
      )}
      {mediaFile && (
        <p style={{ marginTop: "10px", color: "#555" }}>
          {browseText}
        </p>
      )}
    </div>
  );
};

export default DragAndDropBox;
