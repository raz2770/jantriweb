import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import DownloadSection from "./components/DownloadSection";
import PlansSection from "./components/PlansSection";
import Footer from "./components/Footer";
import YouTubeVideo from "./components/YouTubeVideo";
import AppScreenshots from "./components/AppScreenshots";
import Contact from "./components/Contact";
import SEOHead from "./components/SEOHead";
import { initAllAnimations } from "./utils/scrollAnimation";

const App = () => {
  useEffect(() => {
    // Initialize all animations after component mounts
    const timer = setTimeout(() => {
      initAllAnimations();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      <SEOHead />
      <Navbar />
      <main className="main-content" role="main">
        <HeroSection />
        <FeaturesSection />
        <AppScreenshots />
        <DownloadSection />
        <YouTubeVideo videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
        <PlansSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
