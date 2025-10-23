import React from "react";
import "./Videoicon.css";
import img2 from "../Assets/video-icon.png";

const Videoicon = () => {
  return (
    <div className="video-icon-container">
      <img src={img2} alt="video-icon" className="video-icon" />
      <p className="text">Watch</p>
    </div>
  );
};

export default Videoicon;
