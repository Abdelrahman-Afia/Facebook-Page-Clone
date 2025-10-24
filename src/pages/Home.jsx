import React, { Component } from "react";
import "./Home.css";
import Nav from "../components/nav.jsx";
import Confirmbutton from "../components/confirmbutton.jsx";
import Videoicon from "../components/Videoicon.jsx";
import Titleseeall from "../components/Titleseeall.jsx";
import Uxside from "../components/Uxside.jsx";
import Story from "../components/Story.jsx";
import Createpost from "../components/Createpost.jsx";
import Post from "../components/Post.jsx";
import Friendrequest from "../components/Friendrequest.jsx";
import Twitch from "../components/Twitch.jsx";

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
          <div className="uxside-components">
            <Titleseeall />
            <Uxside />
            <Uxside />
            <Uxside />
            <Uxside />
            <Uxside />
            <Uxside />
          </div>
        </div>
        <div className="center">
          <div className="story-container">
            <Story />
            <Story />
            <Story />
            <Story />
          </div>
          <Createpost />
          <Post />
          <Post />
          <Post />
        </div>
        <div className="right-sidebar">
          <Titleseeall />
          <Friendrequest />
          <Friendrequest />
          <Titleseeall />
          <Twitch />
          <Twitch />
          <Twitch />
          <Twitch />
          <Twitch />
          <Twitch />
        </div>
      </div>
    </>
  );
};

export default Home;
