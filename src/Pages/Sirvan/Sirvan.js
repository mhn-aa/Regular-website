import React from "react";
import { Link } from "react-router-dom";
import "./Sirvan.css";

const Sirvan = () => {
  return (
    <div className="sirvan">
      <Link to="/">Home</Link>
      <h1>This is Sirvan's page</h1>

      <section className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="./profile">Profile</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/about">About me</Link>
        </li>
      </section>
    </div>
  );
};

export default Sirvan;
