import React, { useState } from 'react'
import Comment from './components/comment';

function Stop({videoRef}) {
  const [comment, setComment] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true);
  const [commentDup, setCommentDup] = useState(false);
  
  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause(); 
      setComment(true);
      setCommentDup(true);
    } else {
      videoRef.current.play(); 
      setCommentDup(true);
      setComment(false);
    }
    setIsPlaying(!isPlaying); 
  };

  return (
    <div style={{
       display: 'flex',
        flexDirection: 'column',  // Arrange elements vertically
        alignItems: 'center',  // Center elements horizontally
        justifyContent: 'center',
        padding: '20px',
      }}>
      <button onClick={togglePlayPause} style={{
        padding: '12px 20px',
          fontSize: '16px',
          color: '#fff',
          backgroundColor: '#007BFF',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease, transform 0.2s ease',}}>{isPlaying ? 'stop video' : 'play video'}</button>
      {comment && <Comment/>}
    </div>
  );
};

export default Stop