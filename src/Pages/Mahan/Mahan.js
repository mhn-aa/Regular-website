import React from "react";
import { Link } from "react-router-dom";
import "./Mahan.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MahanContactForm from "./MahanContactForm";

const Mahan = () => {
  return (
    <div className="mahan">
      <div className="mahan__navbar">
        <Link to="/">Home </Link>
        {/* <HomeOutlinedIcon style={materialStyle} /> */}
      </div>
      {/* <h1>This is Mahan's Page</h1> */}
      {/* <hr /> */}
      <div className="mahan__body">
        <img
          className="mahanprofilepic"
          src="https://lh3.googleusercontent.com/a-/AOh14Gix-KOYD2a06hM56DJGULQ7kDmIPHrpZZT8QnMRLw=s576-p-rw-no"
          alt=" Mahan's Image"
        />
        <div className="aboutmahan">
          <h2>About Mahan</h2>
          <p>
            Mahan is a multidimensional individual intrested in variety of
            subjects. Initially started coding in late Auguest 2021 and, now
            expanding his skills in different areas of the industry. Currently
            with the aid of "ET-Devs" learning on collaborative projects.
          </p>
        </div>
      </div>
      {/* <hr /> */}
      <h2>Skills</h2>
      <p>At this very moment, Mahan is more of a front-end developer.</p>
      <div className="skillsmahan">
        <img
          className="html"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
        ></img>
        <img
          className="css"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
        ></img>
        <img
          className="js"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
          alt=""
        />
        <img
          className="python"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png"
          alt=""
        />
        <img
          className="react"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
          alt=""
        />
      </div>
      <hr />
      <MahanContactForm />
      <hr />
    </div>
  );
};

export default Mahan;
