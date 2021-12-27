import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <h3>People</h3>
        <div className="home__links">
          <Link to="mahan">Mahan</Link>
          <Link to="sirvan">Sirvan</Link>
          <Link to="saeed">Saeed</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
