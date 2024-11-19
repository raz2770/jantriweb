import React from "react";
import "./DownloadSection.css";
import googlePlay from "../assets/google-play-icon.png";
import appStore from "../assets/app-store-icon.png";

const DownloadSection = () => {
  return (
    <section className="download-section" id="download">
      <h2>Download Now</h2>
      <p>Get started with our app today. Available on Google Play and the App Store.</p>
      <div className="download-buttons">
        <button className="download-button">
          <img src={googlePlay} alt="Google Play" />
          <span>Google Play</span>
        </button>
        <button className="download-button">
          <img src={appStore} alt="App Store" />
          <span>App Store</span>
        </button>
      </div>
    </section>
  );
};

export default DownloadSection;
