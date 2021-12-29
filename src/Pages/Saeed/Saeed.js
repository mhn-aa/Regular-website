import React from "react";
import { Link } from "react-router-dom";
import "./Saeed.css";

const Saeed = () => {
  return (
    <div className="saeed">
      <div className="saeed__link">
        <Link to="/">🔙 &#128281;</Link>
      </div>
      <div className="saeed__colorsContainer">
        <div className="saeed__colorsContainer__row__1 ">
          <div className="saeed__colorBox saeed__topRow saeed_color5"></div>
          <div className="saeed__colorBox saeed__topRow saeed_color6"></div>
          <div className="saeed__colorBox saeed__topRow saeed_color7"></div>
        </div>
        <div className="saeed__colorsContainer__row__2">
          <div className="saeed__colorBox saeed_color4"></div>
          <div className="saeed__colorBox saeed_color8"></div>
        </div>
        <div className="saeed__colorsContainer__row__2">
          <div className="saeed__colorBox saeed_color3"></div>
          <div className="saeed__colorBox saeed_color9"></div>
        </div>
        <div className="saeed__colorsContainer__row__1">
          <div className="saeed__colorBox saeed__bottomRow saeed_color2"></div>
          <div className="saeed__colorBox saeed__bottomRow saeed_color1"></div>
          <div className="saeed__colorBox saeed__bottomRow saeed_color10"></div>
        </div>
      </div>
      <div className="saeed__container">
        <img
          src="https://avatars.githubusercontent.com/u/39290832?v=4"
          alt="saeed_pic"
        />
      </div>
    </div>
  );
};

export default Saeed;
