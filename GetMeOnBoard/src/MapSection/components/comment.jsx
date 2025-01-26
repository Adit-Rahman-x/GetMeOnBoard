import React from "react";

function Comment({ timeElapsed, commentList, onAddComment, isPlaying }) {
  return (
    <div>
      <h3>Chat</h3>
      <div style={{ maxHeight: "300px", overflowY: "auto" }}>
        {commentList.length > 0 ? (
          commentList.map((comment, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <p>
                <strong>
                  {Math.floor(comment.time / 60)}:
                  {Math.floor(comment.time % 60).toString().padStart(2, "0")}
                </strong>{" "}
                {comment.text}
              </p>
            </div>
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </div>
  );
}

export default Comment;
