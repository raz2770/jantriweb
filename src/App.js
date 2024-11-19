import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import DownloadSection from "./components/DownloadSection";
import PlansSection from "./components/PlansSection";
import Footer from "./components/Footer";
import YouTubeVideo from "./components/YouTubeVideo";
import AppScreenshots from "./components/AppScreenshots";
import Contact from "./components/Contact";  // Import the Contact component
const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AppScreenshots />
      <DownloadSection />
      <YouTubeVideo videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ" /> {/* Example YouTube video */}
      <PlansSection />
      <Contact /> {/* Render the Contact component */}
      <Footer />
    </div>
  );
};

export default App;
