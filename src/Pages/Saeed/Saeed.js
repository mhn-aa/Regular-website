import React from "react";
import { Link } from "react-router-dom";
import "./Saeed.css";

const Saeed = () => {
  return (
    <div className="saeed">
      <div className="saeed__link">
        <Link to="/">🔙 &#128281;</Link>
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
