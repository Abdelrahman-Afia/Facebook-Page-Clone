import React from "react";
import "./Twitch.css";
import img1 from "../Assets/twitchgroup-img.png";

const Twitch = () => {
  return (
    <div className="twitch-container">
      <img src={img1} alt="Friend-request" className="twitch-img" />
      <div className="twitch-text">
        <p className="twitch-title">Twitch apologises as streamers</p>
        <p className="twich-detail">
          Twitch has apologised, after a backlash over new, advertising rules.
        </p>
        <p className="twitch-seemore">See more</p>
      </div>
    </div>
  );
};

export default Twitch;
