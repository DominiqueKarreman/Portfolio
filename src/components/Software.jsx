import React, { useState, useEffect } from "react";
import "../App.css";
import group from "../assets/group.png";
import pfp from "../assets/pfp2.svg";
import portfolioPic from "../assets/portfolio.svg";
import contactPic from "../assets/contact.svg";
import skillsPic from "../assets/skills.svg";
import logo from "../assets/logo.svg";
import {useInView} from 'react-intersection-observer'
function screen({ state, setState }) {
  const [active, setActive] = useState("software");
  const [preview, setPreview] = useState("");
  const { ref: myRef, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
  });

  const {myRef2, inView: inView2 } = useInView({
    /* Optional options */
    threshold: 1,
  });
 

  useEffect(() => {
    if (inView) {
      setState("software")
      console.log(inView, "inview", state, "state")
    } 
   
  }, [inView])



  return (
    <div ref={myRef} className={"screen2"} >
      
      <div className={state === "software" ? "screen" : "notVisible"} >

      <img ref={myRef}className="img" src={group} alt="logo" />
      <img className="logo" src={logo} alt="logo" />
      <img className="pfp" src={pfp} alt="logo" />
      {preview === "portfolio" ? (<img className="pfp" src={portfolioPic} alt="logo" />) : null}
      {preview === "contact" ? (<img className="pfp" src={contactPic} alt="logo" />) : null}
      {preview === "skills" ? (<img className="pfp" src={skillsPic} alt="logo" />) : null}
      {/* <img className="pfp" src={portfolioPic} alt="logo" /> */}
      {/* <img className="pfp" src={contactPic} alt="logo" /> */}
      {/* <img className="pfp" src={skillsPic} alt="logo" /> */}
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
        <a onMouseEnter={() => setPreview("portfolio")} onMouseLeave={() => setPreview("")}  href="https://www.linkedin.com/in/abhishek-kumar-0a1b1b1b1/">
          #Portfolio
        </a>
        <a onMouseEnter={() => setPreview("skills")} onMouseLeave={() => setPreview("")} href="https://www.linkedin.com/in/abhishek-kumar-0a1b1b1b1/">
          #Skills
        </a>
        <a onMouseEnter={() => setPreview("contact")} onMouseLeave={() => setPreview("")} href="https://www.linkedin.com/in/abhishek-kumar-0a1b1b1b1/">
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
      <a href="#lower"> 
      <button className="button">Explore</button>
      </a> 
          </div>
    </div>
  );
}

export default screen;
