import React, { useState } from "react";

const VidTimeStamp = ({ title,vidLink }) => {
  const [keyNotes, setKeyNotes] = useState([]); // State to store keyNotes dynamically
  const [inputValue, setInputValue] = useState(""); // State for user input
  const [showControls, setShowControls] = useState("False") // state to allow you to edit and add keynotes

  const addKeyNote = () => {
    if (inputValue.trim()) {
      setKeyNotes([...keyNotes, inputValue]); // Add the user input as a keyNote
      setInputValue(""); // Clear the input field after adding
    }
  };

  const removeKeyNote = () => {
    setKeyNotes(keyNotes.slice(0, -1)); // Remove the last keyNote
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Update the input value
  };

  const toggleEditing = () => {
    setShowControls(!showControls);
  }

  return (
    <div style={styles.wrapper}>
      
      <div style={styles.div}>
      <button style={styles.edit} onClick={toggleEditing}>
            {showControls ? "Edit" : "Save"}
          </button>
        <h3>
          Filler Text:{" "}
          <a
            href={vidLink}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            {title}
          </a>
        </h3>

        
        {!showControls &&(<div style={styles.inputContainer}>
          
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter KeyNote text"
            style={styles.input}
          />
          <button onClick={addKeyNote} style={styles.button}>
            Add KeyNote
          </button>
          <button
            onClick={removeKeyNote}
            style={styles.button}
            disabled={keyNotes.length === 0}
          >
            Remove KeyNote
          </button>
        </div>)}

        {/* Render keyNotes */}
        <ul>
          {keyNotes.map((note, index) => (
            <li key={index} style={styles.listItem}>
              {note}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  edit : {
    position: "relative",
    float: "right",
    backgroundColor: "white",
    color: "black",
    borderRadius: 10,
    padding: "10px",
  },
  wrapper: {
    position: "relative",
    padding: "10px",
    margin: "0",
   
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex",
  },
  div: {
    width: "80%",
    backgroundColor: "brown",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  link: {
    color: "blue",
    textDecoration: "underline",
  },
  inputContainer: {
    display: "flex",
    gap: "10px",
    margin: "10px 0",
  },
  input: {
    flex: "1",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "lightgreen",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  listItem: {
    color: "black",
    margin: "5px 0",
  },
};

export default VidTimeStamp;
