import { useState } from 'react'
import './App.css'
import VideoUpload from './MapSection/components/video'
import HomePage from "./HomePage/HomePage"

const App = () => {
  const [videoRef, setVideoRef] = useState(null);

  return (
    
    <>
    <HomePage/>
    <VideoUpload setVideoRef={setVideoRef}/>
    </>
  )
}

export default App
