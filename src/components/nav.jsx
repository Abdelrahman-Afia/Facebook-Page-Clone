import React from "react";
import "./nav.css";
import img1 from "../Assets/facebook-logo.png";
import img2 from "../Assets/menu-icon.png";
import Homeicon from "./Homeicon.jsx";

const Nav = () => {
  return (
    <div className="nav-bar">
      <img src={img1} alt="facebook-icon" className="facebook-icon" />
      <div className="home-icons">
        <Homeicon />
        <Homeicon />
        <Homeicon />
        <Homeicon />
      </div>
      <img src={img2} alt="facebook-icon" className="facebook-icon" />
    </div>
  );
};

export default Nav;
