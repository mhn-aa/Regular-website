import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

const profile = () => {
  return (
    <div className="profile">
      <Link to="/">Home</Link>
      <h1>This is Profile page</h1>
    </div>
  );
};

export default profile;
