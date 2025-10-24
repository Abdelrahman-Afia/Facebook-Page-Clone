import React from "react";
import "./Post.css";
import img1 from "../Assets/Albert Flores.png";
import img2 from "../Assets/public-icon.png";
import img3 from "../Assets/dots.png";
import img4 from "../Assets/post-img.png";

const Post = () => {
  return (
    <div className="post-container">
      <div className="post-details">
        <img src={img1} alt="Post-profile" className="post-profile" />
        <div className="post-name-time">
          <p className="name">Albert Flores</p>
          <div className="time-public">
            <p className="day">2d . </p>
            <img src={img2} alt="public-icon" className="public-icon" />
          </div>
        </div>
        <img src={img3} alt="dots-icon" className="dots-icon" />
      </div>
      <img src={img4} alt="post-profile" className="post-img" />
    </div>
  );
};

export default Post;
