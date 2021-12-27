import React from "react";
import { Link } from "react-router-dom";
import "./Mahan.css";

const Mahan = () => {
  return (
    <div className="mahan">
      <Link to="/">Home</Link>
      <h1>This is Mahan's Page</h1>
    </div>
  );
};

export default Mahan;
