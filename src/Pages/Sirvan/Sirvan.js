import React from "react";
import { Link } from "react-router-dom";
import "./Sirvan.css";

const Sirvan = () => {
  return (
    <div className="sirvan">
      <Link to="/">Home</Link>
      <section className="left_pane">
        <li></li>
        <li>
          <img
            src="https://i.ibb.co/Yt2hrYJ/IMG-4695.jpg"
            alt="IMG-4695"
            border="0"
          ></img>
        </li>
        <li>
          <h3>Skills:</h3>{" "}
          <p>
            HTML,CSS,JavaScript, Ruby on Rails and currently diving into React
            JS{" "}
          </p>
        </li>
        <li>
          <h3>About me: </h3>{" "}
          <p>
            I am a self driven independent junior web developer who tends to
            enjoy the most implementing ideas from scratch right into browsers.
          </p>
        </li>
      </section>
    </div>
  );
};

export default Sirvan;
