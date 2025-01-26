import { useRef } from 'react'
import React,{ useState } from 'react'
import './App.css'
import VidMessage from './VidMessage'
import VidTimeStamps from './VidTimeStamp'
import StepbyStep from './StepbyStep'
function App() {
  const [mainpoint, setCount] = useState(0)

  return (
    <>
  <StepbyStep></StepbyStep>
    </>
  )
}

export default App
