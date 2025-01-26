import { useRef } from 'react'
import React,{ useState } from 'react'
import './App.css'
import VideoUpload from './MapSection/components/video'

import StepbyStep from './StepbyStep'

function App() {
  const [videoRef, setVideoRef] = useState(null);

  const [mainpoint, setCount] = useState(0)

  return (
    <>
    <VideoUpload setVideoRef={setVideoRef}/>
  <StepbyStep></StepbyStep>
    </>
  )
}

export default App
