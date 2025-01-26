import React, { forwardRef, useEffect } from "react";

const EditableText = forwardRef(({ defaultText, fontSize, fontWeight, color, placeholder=""}, ref) => {
  useEffect(() => {
    if (ref?.current) {
      ref.current.innerText = defaultText; // Initialize content with the default text
    }
  }, [defaultText, ref]);

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
        //border: "1px solid #ccc",
        borderBottom: "1px dashed #ccc",
        borderRadius: "4px",
        width: "80%",
        cursor: "text",
        outline: "none",
        whiteSpace: "pre-wrap", // Preserve line breaks
        wordWrap: "break-word", // Wrap long words
      }}
      data-placeholder={placeholder}
    />
  );
});

export default EditableText;
