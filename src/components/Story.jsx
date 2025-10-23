import React from "react";
import "./Story.css";
import img1 from "../Assets/story-img.png";
import img2 from "../Assets/story-user.png";

const Story = () => {
  return (
    <div className="Story-container">
      <img src={img1} alt="Story-img" className="Story-img" />
      <div className="Story-user-details">
        <img src={img2} alt="Story-user" className="Story-user" />
        <p className="text">Islam Ali</p>
      </div>
    </div>
  );
};

export default Story;
