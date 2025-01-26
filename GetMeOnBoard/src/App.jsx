import { useState } from 'react'
import './App.css'
import Navbar from './SectionUI/components/NavBar'
import HomePage from "./HomePage/HomePage"
import VideoUpload from './MapSection/components/video'
import SectionPage from './SectionUI/SectionPage'
import Quiz from './Quiz/Quiz'

const App = () => {
  const [videoRef, setVideoRef] = useState(null);

  return (
    <>
      <Navbar />
      <SectionPage />
      <HomePage />
      <Quiz />
    </>
  )
}

export default App
