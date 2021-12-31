import React, { useState } from "react";
import _ from "underscore";
import "./Ehsan.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Typist from "react-typist";
const materialStyle = {
  height: "50px",
  width: "50px",
  color: "black",
};
const colors = [
  "blue",
  "green",
  "aliceblue",
  "yellow",
  "red",
  "darkgray",
  "greenyellow",
  "aqua",
  "chocolate",
  "forestgreen",
];

const Ehsan = () => {
  const [styleColor, setStyleColor] = useState("white");
  const colorHandler = () => {
    let selectedColor = _.sample(colors);
    setStyleColor(selectedColor);
  };

  return (
    <div
      style={{ backgroundColor: styleColor }}
      className="ehsan__main__container"
    >
      <div className="ehsan__navbar">
        <div className="ehsan__navbar__left"></div>
        <div className="ehsan__navbar__middle">
          <a href="/" className="ehsan__homeButton">
            <HomeOutlinedIcon style={materialStyle} />
          </a>
        </div>
        <div className="ehsan__navbar__right"></div>
      </div>
      <div className="ehsan__image__round">
        <img
          src="https://www.linkpicture.com/q/IMG_21D74AF90805-1_1.jpeg"
          alt=""
        />
      </div>
      <div className="ehsan__about">
        <Typist className="ehsan__about__typist">
          <p>
            My name is Ehsan and I am a full-Stack developer who wants to join a
            team to share and learn more skills
          </p>
          <p>
            &nbsp;I have been inspired by &nbsp; <a href="/saeed">Saeer ET</a>
          </p>
        </Typist>
      </div>
      <div className="ehsan__skills">
        <img
          onClick={colorHandler}
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png"
          alt=""
        />
        <img
          onClick={colorHandler}
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
          alt=""
        />
        <img
          onClick={colorHandler}
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png"
          alt=""
        />
        <img
          onClick={colorHandler}
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
          alt=""
        />
        <img
          onClick={colorHandler}
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
          alt=""
        />
        <img
          onClick={colorHandler}
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
          alt=""
        />
        <img
          onClick={colorHandler}
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/graphql/graphql.png"
          alt=""
        />
        <img
          onClick={colorHandler}
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
          alt=""
        />
        <img
          onClick={colorHandler}
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
          alt=""
        />
        <img
          onClick={colorHandler}
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Ehsan;
