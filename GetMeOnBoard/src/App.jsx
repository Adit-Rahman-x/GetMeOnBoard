import { useState } from "react";
import "./App.css";
import Navbar from "./SectionUI/components/NavBar";
import HomePage from "./HomePage/HomePage";
import VideoUpload from "./MapSection/components/video";
import SectionPage from "./SectionUI/SectionPage";
import Quiz from "./Quiz/Quiz";

const App = () => {
  const [currentView, setCurrentView] = useState("Home"); // Track the current view

  // Function to render the component based on the selected view
  const renderView = () => {
    switch (currentView) {
      case "Home":
        return <HomePage />;
      case "Section Maker":
        return <SectionPage />;
      case "Interactive Tour Guide":
        return <VideoUpload />;
      case "Section Quiz":
        return <Quiz />;
      default:
        return <HomePage />; // Default view
    }
  };

  return (
    <>
      <Navbar setCurrentView={setCurrentView} /> {/* Pass setCurrentView to Navbar */}
      {renderView()} {/* Render the selected component */}
    </>
  );
};

export default App;
