import React, { useState, useRef, useEffect } from 'react';
import Stop from '../stop';

const VideoUpload = ( {setVideoRef} ) => {
    const [videoFile, setVideoFile] = useState(null);
    const [fileSelected, setFileSelected] = useState(false);
    const videoRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('video/')) {
      setVideoFile(URL.createObjectURL(file)); 
      setFileSelected(true);  
      setVideoRef(videoRef);
    }
  };

  return (
    <div>
      {!fileSelected && (
        <input
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          style={{
        border: "2px dashed #aaa",
        borderRadius: "8px",
        padding: "20px",
        textAlign: "center",
        cursor: "pointer",
        marginBottom: "20px",
        backgroundColor: "#f9f9f9",
      }}
        />
      )}

      {fileSelected && (
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        border: '1px solid #ddd',
        borderRadius: '16px',
        maxWidth: '600px',
        margin: '20px auto',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}>
          <video ref={videoRef} controls autoPlay style={{
          borderRadius: '12px',
          maxWidth: '100%',
          height: 'auto',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}>
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {videoRef && <Stop videoRef={videoRef}/>}
        </div>
      )}
    </div>
  );
};

export default VideoUpload;
