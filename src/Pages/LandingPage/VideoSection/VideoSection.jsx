import React from "react";
const VideoSection = () => {
  return (
    <div className="">
      <div className="  px-2 py-2 lg:py-32  lg:flex justify-center items-center">
        <video
          className="border-4 border-black rounded-lg"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          controls
          autoplay
          width="1000"
          height="450"
        />
      </div>
    </div>
  );
};
//this is video section
export default VideoSection;
