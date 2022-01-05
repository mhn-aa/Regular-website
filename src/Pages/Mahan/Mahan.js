import { Link } from "react-router-dom";
import "./Mahan.css";
import MahanContactForm from "./MahanContactForm";
import { useState } from "react";

const Mahan = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("", fullName, "", email, "", message);
    setFullName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="mahan">
      <div className="mahan__navbar">
        <Link to="/">Home </Link>
      </div>
      <div className="mahan__body">
        <div className="mahan__body__profilepic">
          <img
            className="mahanprofilepic"
            src="https://lh3.googleusercontent.com/a-/AOh14Gix-KOYD2a06hM56DJGULQ7kDmIPHrpZZT8QnMRLw=s576-p-rw-no"
            alt=" Mahan's Image"
          />
        </div>
        <div className="aboutmahan">
          <h2 className="h2_aboutmahan">About Mahan</h2>
          <p className="p_aboutmahan">
            Mahan is a multidimensional individual intrested in variety of
            subjects. Initially started coding in late Auguest 2021 and, now
            expanding his skills in different areas of the industry. Currently
            with the aid of "Web-Devs" learning on collaborative projects.
          </p>
        </div>
      </div>
      <div className="skillsmahan">
        <p className=""></p>
        <img
          className="html"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
        ></img>
        <img
          className="css"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
        ></img>
        <img
          className="js"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
          alt=""
        />
        <img
          className="python"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png"
          alt=""
        />
        <img
          className="react"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
          alt=""
        />
      </div>

      <MahanContactForm
        fullName={fullName}
        email={email}
        message={message}
        submitHandler={submitHandler}
        setFullName={setFullName}
        setEmail={setEmail}
        setMessage={setMessage}
      />
      <hr />
    </div>
  );
};

export default Mahan;
