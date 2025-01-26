import React, { useState, useRef, useEffect } from "react";
import Comment from "./comment";

const VideoUpload = ({ setVideoRef }) => {
  const [videoFile, setVideoFile] = useState(null);
  const [fileSelected, setFileSelected] = useState(false);
  const videoRef = useRef(null);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [commentList, setCommentList] = useState([]);
  const [isCommenting, setIsCommenting] = useState(false);
  const [commentText, setCommentText] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("video/")) {
      setVideoFile(URL.createObjectURL(file));
      setFileSelected(true);
      setVideoRef(videoRef);
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const updateTime = () => {
    if (videoRef.current) {
      setTimeElapsed(videoRef.current.currentTime);
    }
  };

  const handleAddComment = () => {
    if (commentText.trim() !== "") {
      const newComment = {
        text: commentText,
        time: parseFloat(timeElapsed.toFixed(0)),
      };
      setCommentList([...commentList, newComment]);
      setCommentText(""); // Clear the input field
      setIsCommenting(false); // Close the input box
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddComment();
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("timeupdate", updateTime);
    }
    return () => {
      if (video) {
        video.removeEventListener("timeupdate", updateTime);
      }
    };
  }, [videoFile]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        height: "100vh",
        gap: "20px",
      }}
    >
      {/* Left Section: Video and Controls */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {!fileSelected && (
          <div
            style={{
              border: "2px dashed #aaa",
              borderRadius: "8px",
              padding: "20px",
              textAlign: "center",
              cursor: "pointer",
              backgroundColor: "#f9f9f9",
            }}
          >
            <input
              type="file"
              accept="video/*"
              onChange={handleFileChange}
              style={{
                display: "block",
                width: "100%",
                cursor: "pointer",
                padding: "10px",
              }}
            />
          </div>
        )}

        {fileSelected && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <video
              ref={videoRef}
              controls
              style={{
                borderRadius: "8px",
                width: "100%",
                height: "auto",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              <source src={videoFile} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                backgroundColor: "#007bff",
                color: "#fff",
              }}
            >
              {isPlaying ? "Pause" : "Play"}
            </button>

            {/* Add Comment Input */}
            {!isPlaying && !isCommenting && (
              <button
                onClick={() => setIsCommenting(true)}
                style={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  backgroundColor: "#28a745",
                  color: "#fff",
                }}
              >
                Add Comment
              </button>
            )}

            {isCommenting && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <input
                  type="text"
                  placeholder="Enter a comment"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  onKeyDown={handleKeyDown}
                  style={{
                    width: "90%",
                    padding: "10px",
                    fontSize: "16px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                  }}
                />
                <button
                  onClick={handleAddComment}
                  style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    backgroundColor: "#28a745",
                    color: "#fff",
                  }}
                >
                  Submit Comment
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Right Section: Chat Box */}
      <div
        style={{
          border: "1px solid #aaa",
          borderRadius: "8px",
          padding: "20px",
          //width: "%",
          overflowY: "auto",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Comment
        videoRef={videoRef}
          timeElapsed={timeElapsed}
          commentList={commentList}
          onAddComment={handleAddComment}
          isPlaying={isPlaying}
        />
      </div>
    </div>
  );
};

export default VideoUpload;
