import React, { useState } from "react";

const DragAndDropBox = () => {
  const [mediaFile, setMediaFile] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && (file.type.startsWith("image/") || file.type.startsWith("video/"))) {
      setMediaFile(file);
    } else {
      alert("Please upload an image or video file.");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file && (file.type.startsWith("image/") || file.type.startsWith("video/"))) {
      setMediaFile(file);
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
        border: "2px dashed #aaa",
        borderRadius: "8px",
        padding: "20px",
        textAlign: "center",
        cursor: "pointer",
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
      ) : (
        <p>Drag & drop an image or video here, or click to upload</p>
      )}
      <input
        type="file"
        accept="image/*,video/*"
        onChange={handleFileInput}
        style={{ display: "none" }}
        id="fileInput"
      />
      <label htmlFor="fileInput" style={{ color: "#007bff", cursor: "pointer" }}>
        Browse
      </label>
    </div>
  );
};

export default DragAndDropBox;
