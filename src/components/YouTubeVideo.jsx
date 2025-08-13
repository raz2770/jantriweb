import React, { useState } from 'react';
import './YouTubeVideo.css';

const YouTubeVideo = ({ videoUrl }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Extract the video ID from the YouTube URL
  const videoId = videoUrl.split('v=')[1]?.split('&')[0] || '';

  const handleLoadVideo = () => {
    setIsLoaded(true);
  };

  return (
    <section className="youtube-section" id="video">
      <div className="youtube-container">
        <div className="youtube-header">
          <div className="youtube-badge">
            डेमो देखें
          </div>
          <h2 className="youtube-title">
            ऐप डेमो - Client Management
          </h2>
          <p className="youtube-description">
            देखें कैसे manage करें clients, calculate करें Jantri, aur maintain 
            करें accurate hisab-kitab हमारे professional app के साथ.
          </p>
        </div>

        <div className="youtube-video-wrapper">
          <div className="youtube-video-container">
            {!isLoaded ? (
              <div className="youtube-play-overlay" onClick={handleLoadVideo}>
                <div className="youtube-play-icon"></div>
              </div>
            ) : null}
            
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}${isLoaded ? '?autoplay=1' : ''}`}
              title="Product Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="youtube-features">
          <div className="youtube-feature">Complete walkthrough</div>
          <div className="youtube-feature">Real-time demonstrations</div>
          <div className="youtube-feature">Expert tips & tricks</div>
          <div className="youtube-feature">Best practices</div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeVideo;
