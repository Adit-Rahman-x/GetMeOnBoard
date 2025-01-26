import React, { useState, useEffect, useRef } from "react";

const EditableText = ({ defaultText, fontSize, fontWeight, color, onTextChange }) => {
  const [text, setText] = useState(defaultText);
  const editableRef = useRef(null);

  // Update the internal state when the defaultText prop changes
  useEffect(() => {
    setText(defaultText);
  }, [defaultText]);

  const handleChange = () => {
    const newText = editableRef.current.innerHTML.replace(/<br>/g, "\n");
    setText(newText);
    onTextChange(newText);
  };

  const handleInput = () => {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const offset = range.endOffset;

    setText(editableRef.current.textContent);

    requestAnimationFrame(() => {
      const textNode = editableRef.current.firstChild;
      if (textNode) {
        const newRange = document.createRange();
        newRange.setStart(textNode, offset);
        newRange.setEnd(textNode, offset);
        selection.removeAllRanges();
        selection.addRange(newRange);
      }
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent the default Enter behavior
      insertNewLine();
    }
  };

  const insertNewLine = () => {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);

    // Insert a line break at the current caret position
    const br = document.createElement("br");
    range.deleteContents(); // Remove selected content (if any)
    range.insertNode(br);

    // Move the caret after the line break
    const newRange = document.createRange();
    newRange.setStartAfter(br);
    newRange.setEndAfter(br);
    selection.removeAllRanges();
    selection.addRange(newRange);
  };

  return (
    <div
      ref={editableRef}
      contentEditable
      suppressContentEditableWarning
      onInput={handleInput}
      onBlur={handleChange}
      onKeyDown={handleKeyDown}
      style={{
        fontSize,
        fontWeight,
        color,
        textAlign: "left",
        padding: "10px",
        width: "80%",
        borderBottom: "1px dashed #ccc",
        outline: "none",
        cursor: "text",
        whiteSpace: "pre-wrap",
      }}
    >
      {text}
    </div>
  );
};

export default EditableText;
