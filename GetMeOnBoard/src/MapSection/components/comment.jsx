import React from "react";

function Comment({ timeElapsed, commentList, onAddComment, isPlaying, videoRef }) {

  const handleJumpToTimeStamp = (time) => {
    if (videoRef && videoRef.current) {
      videoRef.current.currentTime = time; // Change the video time
      videoRef.current.play(); // Optionally play the video
    }
  }

  return (
    <div>
      <h3>Chat</h3>
      <div style={{ maxHeight: "300px", overflowY: "auto" }}>
        {commentList.length > 0 ? (
          commentList.map((comment, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <p>
              <button onClick={() => handleJumpToTimeStamp(comment.time)}
                        style={{
                          color: "blue",
                          background: "none",
                          border: "none",
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}>
                  {Math.floor(comment.time / 60)}:
                  {Math.floor(comment.time % 60).toString().padStart(2, "0")}

                </button>
                {" "}
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
