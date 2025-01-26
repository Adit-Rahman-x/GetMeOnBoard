import { useRef } from 'react'
import React,{ useState } from 'react'
import './App.css'
import VideoUpload from './MapSection/components/video'
import StepbyStep from './StepbyStep'

function App() {
  const [videoRef, setVideoRef] = useState(null);
  const [commentList, setCommentList] = useState([]);

  const handleAddComment = (newComment) => {
    setCommentList((prev) => [...prev, newComment]);
  };

  return (
    <>
    <VideoUpload setVideoRef={setVideoRef}/>
    <StepbyStep/>
    </>
  )
}

export default App
