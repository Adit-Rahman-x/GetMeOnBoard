import React, { useState } from "react";
import DragAndDropBox from "./components/DragAndDropBox";
import EditableText from "./components/EditableText";

const SectionPage = () => {
  const [title, setTitle] = useState("Editable Title");
  const [explanation, setExplanation] = useState("Explain your process here...");

  // Save progress as JSON
  const saveProgress = () => {
    const data = {
      title,
      explanation,
    };

    const jsonString = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "progress.json";
    link.click();

    URL.revokeObjectURL(link.href); // Cleanup the URL object
  };

  // Handle uploading a JSON file
  const handleFileUpload = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            const jsonData = JSON.parse(e.target.result);
            if (jsonData.title && jsonData.explanation) {
              setTitle(jsonData.title);
              setExplanation(jsonData.explanation);
              alert("Progress successfully loaded!");
            } else {
              alert("Invalid JSON structure. Ensure it has 'title' and 'explanation' fields.");
            }
          } catch (err) {
            alert("Error parsing JSON file. Please upload a valid JSON.");
          }
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 20px",
        backgroundColor: "#f3f3f3",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>GetMeOnBoard Panel</h1>
      <DragAndDropBox />
      {/* Editable Title */}
      <EditableText
        defaultText={title}
        fontSize="24px"
        fontWeight="bold"
        color="#000"
        onTextChange={setTitle}
      />

      {/* Explanation Section */}
      <EditableText
        defaultText={explanation}
        fontSize="16px"
        fontWeight="normal"
        color="#333"
        onTextChange={setExplanation}
      />

      {/* Buttons */}
      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        {/* Save Progress Button */}
        <button
          onClick={saveProgress}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Save Progress
        </button>

        {/* Upload Progress Button */}
        <button
          onClick={handleFileUpload}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007BFF", // Different color for distinction
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Upload Progress
        </button>
      </div>
    </div>
  );
};

export default SectionPage;
