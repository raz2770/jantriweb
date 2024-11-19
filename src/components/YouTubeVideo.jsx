import React from 'react';
import './YouTubeVideo.css';

const YouTubeVideo = ({ videoUrl }) => {
  // Extract the video ID from the YouTube URL
  const videoId = videoUrl.split('v=')[1].split('&')[0];

  return (
    <div className="youtube-video-container">
      <iframe
        width="100%"
        height="400"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
