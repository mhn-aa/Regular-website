import React from "react";
import { Link } from "react-router-dom";
import "./Saeed.css";

const Saeed = () => {
  return (
    <div className="saeed">
      <Link to="/">{"<- "} back</Link>
      <h1>This is Saeed's page</h1>
    </div>
  );
};

export default Saeed;
