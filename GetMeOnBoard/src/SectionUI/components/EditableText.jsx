import React, { forwardRef, useEffect } from "react";

const EditableText = forwardRef(
  ({ defaultText, fontSize, fontWeight, color, placeholder = "", onChange }, ref) => {
    useEffect(() => {
      if (ref?.current) {
        ref.current.innerText = defaultText; // Initialize content with the default text
      }
    }, [defaultText, ref]);

    // Function to capture the text with line breaks
    const handleInput = () => {
      if (ref?.current && onChange) {
        // Capture text with \n by replacing line breaks with `\n`
        const text = ref.current.innerText.replace(/\n/g, "\n");
        console.log(text);
        onChange(text); // Trigger onChange callback
      }
    };

    return (
      <div
        ref={ref}
        contentEditable
        suppressContentEditableWarning
        style={{
          fontSize: fontSize || "16px", // Apply font size or default
          fontWeight: fontWeight || "normal", // Apply font weight or default
          color: color || "#000", // Apply text color or default
          padding: "8px",
          borderBottom: "1px dashed #ccc",
          borderRadius: "4px",
          width: "80%",
          cursor: "text",
          outline: "none",
          whiteSpace: "pre-wrap", // Preserve line breaks visually
          wordWrap: "break-word", // Wrap long words
        }}
        data-placeholder={placeholder}
      />
    );
  }
);

export default EditableText;
