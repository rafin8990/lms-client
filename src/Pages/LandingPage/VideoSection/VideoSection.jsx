import React from "react";
import "./VideoSection.css";

const VideoSection = () => {
  const videoId = "iir3tMlmiWg&list";
  return (
    <div className="video-container">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/vtG1jwJRGzU"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoSection;
