import React, { useState } from 'react';

function Comment() {
  const [comments, setComments] = useState([]); // Array to store all comments
  const [commentInput, setCommentInput] = useState('');
  const [isAddingComment, setIsAddingComment] = useState(false);

  const addComment = () => {
    setIsAddingComment(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && commentInput.trim()) {
      // Add the comment to the list
      setComments([...comments, commentInput]);
      setCommentInput(''); // Clear input field
      setIsAddingComment(false); // Hide input box after adding
    }
  };

  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#f4f4f9',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        width: '300px',
        margin: '50px auto'}}>
      {!isAddingComment && <button onClick={addComment} style={{
          padding: '12px 20px',
          fontSize: '16px',
          color: '#fff',
          backgroundColor: '#007BFF',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease, transform 0.2s ease',
        }}>Add a comment</button>}

      {isAddingComment && (
        <input
          type="text"
          placeholder="Enter a comment"
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{
          width: '100%',
          padding: '12px',
          margin: '10px 0',
          fontSize: '16px',
          border: '1px solid #ddd',
          borderRadius: '8px',
          boxSizing: 'border-box',
          outline: 'none',
          transition: 'border-color 0.3s ease',
        }}
        />
      )}

      {/* Render all comments */}
      <div>
        {comments.map((comment, index) => (
          <p key={index} style={{
            fontSize: '18px',
            lineHeight: '1.6',
            color: '#333',
            fontFamily: 'Arial, sans-serif',
            margin: '15px 0',
            textAlign: 'justify',
            letterSpacing: '0.5px',
            wordWrap: 'break-word',
            maxWidth: '700px',
            backgroundColor: '#f9f9f9',
            padding: '12px 20px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',    // Smooth transition for hover effect
}}>{comment}</p>
        ))}
      </div>
    </div>
  );
}

export default Comment;
