import React, { useState, useRef } from "react";
import DragAndDropBox from "./components/DragAndDropBox";
import EditableText from "./components/EditableText";

const SectionPage = () => {
  const [title, setTitle] = useState("Editable Title");
  const [explanation, setExplanation] = useState("Explain your process here...\n\n\n\n\n");
  const [isEmployeeView, setIsEmployeeView] = useState(false);

  const titleRef = useRef(null);
  const explanationRef = useRef(null);

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
              console.log("Progress successfully loaded!");
            } else {
              console.log("Invalid JSON structure. Ensure it has 'title' and 'explanation' fields.");
            }
          } catch (err) {
            console.log("Error parsing JSON file. Please upload a valid JSON.");
          }
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  const saveTitleAndExplanation = () => {
    const updatedTitle = titleRef.current?.innerText || title;
    const updatedExplanation = explanationRef.current?.innerText || explanation;

    setTitle(updatedTitle);
    setExplanation(updatedExplanation);
  };

  const toggleView = () => {
    if (!isEmployeeView) {
      saveTitleAndExplanation(); // Save changes when switching to employee view
    }
    setIsEmployeeView(!isEmployeeView);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
        backgroundColor: "#f3f3f3",
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
          boxShadow: "10px",
          border: "0.5px solid #ccc",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>Information Section Panel Maker</h1>
        <p
            style={{
                textAlign: "center",
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
            This is the panel maker! It allows you to <strong>create</strong> and <strong>save</strong> sections of information new employees need to learn about in a user-friendly way on both ends.<br />
            The page consists of a <strong>title</strong> and an <strong>explanation section</strong>. You can edit the content of these sections by simply tapping on the text and saving your progress. <br />
            You can <strong>create a backup</strong> of your progress and upload it later to continue editing using the buttons found on the bottom. <br />
            To see what the page will look like on the employee's side, click the <strong>"Switch to Employee View"</strong> button below.
            </p>
        
        <hr
            style={{
                width: "75%", // Sets the width to 75% of the screen
                //margin: "20px auto", // Centers the line horizontally
                marginBottom: "20px", // Adds space between the line and the next element
                border: "none", // Removes the default border style
                borderTop: "1px dashed #ccc", // Creates a custom horizontal line
            }}
        />

        <button
          onClick={toggleView}
          style={{
            marginBottom: "20px",
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
        >
          {isEmployeeView ? "Switch to Employer View" : "Switch to Employee View"}
        </button>

        <DragAndDropBox isEmployeeView={isEmployeeView} />

        {isEmployeeView ? (
          <div style={{ textAlign: "left", width: "80%" }}>
            <h1 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "10px" }}>{title}</h1>
            <p style={{ fontSize: "18px", marginBottom: "20px" }}>{explanation}</p>
          </div>
        ) : (
          <>
            <EditableText
              ref={titleRef}
              defaultText={title}
              fontSize="36px"
              fontWeight="bold"
              color="#000"
            />

            <EditableText
              ref={explanationRef}
              defaultText={explanation}
              fontSize="18px"
              fontWeight="normal"
              color="#333"
            />
          </>
        )}
        {!isEmployeeView && (
          <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
            <button
            onClick={saveProgress}
            style={{
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
            >
            Create Backup
            </button>

            <button
              onClick={handleFileUpload}
              style={{
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
            >
              Upload Save
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionPage;
