import React, { useState } from "react";
import "../App.css";
import group from "../assets/group.png";
import pfp from "../assets/Group.svg";
function screen() {
  const [active, setActive] = useState("software");

  return (
    <div className="screen">
      <img className="img" src={group} alt="logo" />
      <img className="pfp" src={pfp} alt="logo" />
      <div className="topnav">
        <a
          className={active === "software" ? "active" : "inactive"}
          href="#home"
        >
          //Software Developer
        </a>
        <a className={active === "photo" ? "active" : "inactive"} href="#news">
          //Photo & Videography
        </a>
        <div className="nameDiv">
          <h1 className="firstName">Dominique</h1>
          <p className="software">//Software Developer</p>
          <p>//Photo / Videographer</p>
          <h1 className="lastName">Karreman</h1>
        </div>
      </div>
      <div className="links">
        <a href="https://www.linkedin.com/in/abhishek-kumar-0a1b1b1b1/">
          #Portfolio
        </a>
        <a href="https://www.linkedin.com/in/abhishek-kumar-0a1b1b1b1/">
          #Skills
        </a>
        <a href="https://www.linkedin.com/in/abhishek-kumar-0a1b1b1b1/">
          #Contact
        </a>
      </div>
      <section className="code">
        <span className="red">{"<div"}</span>
        <span className="orange">{" id={“about”} className={“header”} "}</span>
        <span className="red">{">"}</span>
        <div className="div">
          <span className="red">{"<h1>"}</span>
          <span className="white">{"About me"}</span>
          <span className="red">{"<h1>"}</span>
        </div>
        <div className="text">
          <span className="red">{"<p>"}</span>
          <p className="abouttext">
            Hello, I am Dominique Karreman, <br /> A second year IT student at
            Windesheim Flevoland based in the Netherlands. I like to program a
            lot in my spare time I am learning new stuff all the time!{" "}
          </p>
          <span id="lastP" className="red">{"<p>"}</span>
        </div>
          <span id="lastdiv" className="red">{"</div>"}</span>
      </section>
      <button className="button">Explore</button>
    </div>
  );
}

export default screen;
