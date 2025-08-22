import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import DownloadSection from "./components/DownloadSection";
import PlansSection from "./components/PlansSection";
import Footer from "./components/Footer";
import YouTubeVideo from "./components/YouTubeVideo";
import AppScreenshots from "./components/AppScreenshots";
import Contact from "./components/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Shipping from "./pages/Shipping";
import Refunds from "./pages/Refunds";
import SEOHead from "./components/SEOHead";
import WhatsAppButton from "./components/WhatsAppButton";
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
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <AppScreenshots />
                <DownloadSection />
                <YouTubeVideo videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
                <PlansSection />
                <Contact />
              </>
            }
          />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/refunds" element={<Refunds />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
