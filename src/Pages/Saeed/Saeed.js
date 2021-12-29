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
          {/* 5 */}
          <div className="saeed__colorBox saeed__topRow">
            <img
              alt="SQL"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png"
            />
          </div>
          {/* 6 */}
          <div className="saeed__colorBox saeed__topRow">
            <img
              alt="CSS3"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
            />
          </div>
          {/* 7 */}
          <div className="saeed__colorBox saeed__topRow">
            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png"
              alt="html5"
            />
          </div>
        </div>
        <div className="saeed__colorsContainer__row__2">
          {/* 4 */}
          <div className="saeed__colorBox ">
            <img
              alt="JavaScript"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
            />
          </div>
          {/* 8 */}
          <div className="saeed__colorBox ">
            <img
              alt="Typescript"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
            />
          </div>
        </div>
        <div className="saeed__colorsContainer__row__2">
          {/* 3 */}
          <div className="saeed__colorBox">
            <img
              alt="React"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
            />
          </div>
          {/* 9 */}
          <div className="saeed__colorBox ">
            <img
              alt="GraphQL"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/graphql/graphql.png"
            />
          </div>
        </div>
        <div className="saeed__colorsContainer__row__1">
          {/* 2 */}
          <div className="saeed__colorBox saeed__bottomRow">
            <img
              alt="Node"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
            />
          </div>
          {/* 1 */}
          <div className="saeed__colorBox saeed__bottomRow ">
            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
              alt="html5"
            />
          </div>
          {/* 10 */}
          <div className="saeed__colorBox saeed__bottomRow ">
            <img
              alt="postgresql"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png"
            />
          </div>
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
