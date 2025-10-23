import React from "react";
import "./Uxside.css";
import img1 from "../Assets/uxgroup-img.png";

const Uxside = () => {
  return (
    <div className="Ux-container">
      <img src={img1} alt="uxgroup-img" className="uxgroup-img" />
      <p className="text">UI / UX Designers & Developers</p>
    </div>
  );
};

export default Uxside;
