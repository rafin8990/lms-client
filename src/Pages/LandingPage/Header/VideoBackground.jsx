import React from "react";
import background from "../../../assets/header/VIDEO-2023-07-13-17-38-10.mp4";

const VideoBackground = () => {
  return (
    <div>
      <div className="videoBG">
        <video src={background} autoPlay loop muted />
      </div>
    </div>
  );
};

export default VideoBackground;
