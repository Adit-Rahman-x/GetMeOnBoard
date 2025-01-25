import React, { useState } from "react";

const EditableText = ({
  defaultText = "Editable Text",
  fontSize = "16px",
  fontWeight = "normal",
  color = "#000",
  onTextChange,
}) => {
  const [text, setText] = useState(defaultText);
  const [isEditing, setIsEditing] = useState(false);

  const handleTextClick = () => {
    setIsEditing(true);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
    if (onTextChange) {
      onTextChange(e.target.value);
    }
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setIsEditing(false);
    }
  };

  return (
    <div style={{ 
        width: "50%",
        position: "relative",
    }}>
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          onBlur={handleBlur}
          onKeyPress={handleKeyPress}
          autoFocus
          style={{
            width: "100%",
            fontSize,
            fontWeight,
            color,
            padding: "5px",
            border: "2px solid #aaa",
            borderRadius: "8px",
            outline: "none",
          }}
        />
      ) : (
        <span
          onClick={handleTextClick}
          style={{
            fontSize,
            fontWeight,
            color,
            cursor: "pointer",
            borderBottom: "1px dashed #ccc",
          }}
          title="Click to edit text"
        >
          {text}
        </span>
      )}
    </div>
  );
};

export default EditableText;
