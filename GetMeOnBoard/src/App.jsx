import { useState } from 'react'
import './App.css'
import Navbar from './SectionUI/components/NavBar'
import HomePage from "./HomePage/HomePage"
import VideoUpload from './MapSection/components/video'
import SectionPage from './SectionUI/SectionPage'

const App = () => {
  const [videoRef, setVideoRef] = useState(null);

  return (
    <>
      <Navbar />
      <SectionPage />
      <HomePage />
      <VideoUpload />
    </>
  )
}

export default App
