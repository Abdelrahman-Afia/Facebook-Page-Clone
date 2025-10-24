import React from "react";
import "./Createpost.css";
import img1 from "../Assets/post-profile.png";
import img2 from "../Assets/live-icon.png";
import img3 from "../Assets/photo-icon.png";
import img4 from "../Assets/smile-face.png";

const Createpost = () => {
  return (
    <div className="Post-container">
      <div className="Post-top">
        <img src={img1} alt="Post-profile" className="Post-profile" />
        <div className="Type">What’s on your mind, Jenny</div>
      </div>

      <div className="Line"></div>

      <div className="Post-bottom">
        <div className="Live">
          <img src={img2} alt="Live-icon" className="Live-icon" />
          <p className="text">Live video</p>
        </div>

        <div className="Photo">
          <img src={img3} alt="Live-icon" className="Photo-icon" />
          <p className="text">Photo/video</p>
        </div>

        <div className="Smile">
          <img src={img4} alt="Live-icon" className="Smile-icon" />
          <p className="text">Feeling/activity</p>
        </div>
      </div>
    </div>
  );
};

export default Createpost;
