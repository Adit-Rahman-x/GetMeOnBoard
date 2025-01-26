import { useRef } from 'react'
import React,{ useState } from 'react'
import './App.css'
import VideoUpload from './MapSection/components/video'

const App = () => {
  const [videoRef, setVideoRef] = useState(null);
import VidMessage from './VidMessage'
import VidTimeStamps from './VidTimeStamp'
import StepbyStep from './StepbyStep'
function App() {
  const [mainpoint, setCount] = useState(0)

  return (
    <>
    <VideoUpload setVideoRef={setVideoRef}/>
  <StepbyStep></StepbyStep>
    </>
  )
}

export default App
