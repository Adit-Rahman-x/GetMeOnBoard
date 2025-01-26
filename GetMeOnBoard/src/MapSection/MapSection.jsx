import { useRef } from 'react';
import React, { useState } from 'react';
import VideoUpload from './components/video';
import StepbyStep from './components/StepbyStep';

function MapSection() {
  const [videoRef, setVideoRef] = useState(null);
  const [commentList, setCommentList] = useState([]);

  const handleAddComment = (newComment) => {
    setCommentList((prev) => [...prev, newComment]);
  };

  return (
    <div
    style={{
      flex: 1,
      background: '#F3F3F3'
    }}>
    <div
      style={{
        boxShadow: '10px',
        
        background: 'white',
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        width: '75%',
        margin: '0 auto', // Center horizontally with even gutters
        padding: '10px', // Optional padding for inner spacing
      }}
    >
      <VideoUpload setVideoRef={setVideoRef} />
    </div>
    </div>
  );
}

export default MapSection;
