import { useState } from 'react'
import './App.css'
import VideoUpload from './MapSection/components/video'

const App = () => {
  const [videoRef, setVideoRef] = useState(null);

  return (
    <>
    <VideoUpload setVideoRef={setVideoRef}/>
    </>
  )
}

export default App
