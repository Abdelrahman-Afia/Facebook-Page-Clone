import React, { Component } from "react";
import "./Home.css";
import Nav from "../components/nav.jsx";
import Confirmbutton from "../components/confirmbutton.jsx";
import Videoicon from "../components/Videoicon.jsx";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="page-container">
        <div className="left-sidebar">
          <Confirmbutton />
          <div className="video-icon-components">
            <Videoicon />
            <Videoicon />
            <Videoicon />
            <Videoicon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
