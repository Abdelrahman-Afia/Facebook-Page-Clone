import React from "react";
import "./Friendrequest.css";
import Confirmbutton from "../components/confirmbutton.jsx";
import img1 from "../Assets/friend-request.png";

const Friendrequest = () => {
  return (
    <div className="friendrequest-container">
      <div className="friendrequest-top">
        <div className="friendrequest-profile-container">
          <img
            src={img1}
            alt="Friend-request"
            className="friendrequest-profile"
          />
          <p className="friend-name">Guy Hawkins</p>
        </div>
        <p className="time">4H</p>
      </div>
      <div className="friendrequest-buttons">
        <button className="confirm-button">Confirm</button>
        <button className="delete-button">Delete</button>
      </div>
    </div>
  );
};

export default Friendrequest;
