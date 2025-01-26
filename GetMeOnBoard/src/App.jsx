import { useState } from "react";
import "./App.css";
import Navbar from "./SectionUI/components/NavBar";
import HomePage from "./HomePage/HomePage";
//import VideoUpload from "./MapSection/components/video";
import MapSection from "./MapSection/MapSection";
import SectionPage from "./SectionUI/SectionPage";
import Quiz from "./Quiz/Quiz";

const App = () => {
  const [currentView, setCurrentView] = useState("Home");

  const renderView = () => {
    switch (currentView) {
      case "Home":
        return <HomePage setCurrentView={setCurrentView} />;
      case "Section Maker":
        return <SectionPage />;
      case "Interactive Tour Guide":
        return <MapSection />;
      case "Section Quiz":
        return <Quiz />;
      default:
        return <HomePage setCurrentView={setCurrentView} />;
    }
  };

  return (
    <>
      <Navbar setCurrentView={setCurrentView} />
      {renderView()}
    </>
  );
};

export default App;
