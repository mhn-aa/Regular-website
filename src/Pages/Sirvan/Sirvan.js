import React from "react";
import { Link } from "react-router-dom";
import "./Sirvan.css";

const Sirvan = () => {
  return (
    <div className="sirvan">
      <Link to="/">Home</Link>
      <h1>This is Sirvan's page</h1>
    </div>
  );
};

export default Sirvan;
