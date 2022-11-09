import React, { useState, useEffect } from "react";
import htmlcssjs from "../assets/htmlcssjs.svg";
import node from "../assets/node.svg";
import react2 from "../assets/react2.svg";
import python from "../assets/python.svg";
import { useInView } from "react-intersection-observer";

export default function Skills({ state2, setLastView, lastView }) {
  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const {
    ref: myRef,
    inView,
    entry,
  } = useInView({
    /* Optional options */
    threshold: 0.1,
  });

  async function updateOpacity(mode) {
    if (mode) {
      await timeout(1000);
      console.log(myRef.current, "mode");
      document.getElementById("skillsDiv").style.opacity = 1;

      let cards = document.getElementsByClassName("skillIMG");
      let timing = 0.1;
      let lineTiming = 0;
      let lines = document.getElementsByClassName("line1");
      for (const card of lines) {
        card.style.opacity = 1;
        card.style.transition = `opacity 1s ease-in-out ${lineTiming}s`;
        lineTiming += 0.5;
      }

      for (const card of cards) {
        card.style.opacity = 1;
        card.style.transition = `opacity 1s ease-in-out ${timing}s`;
        timing += 0.5;
      }
    } else {
      document.getElementById("skillsDiv").style.opacity = 0;
    }
  }

  useEffect(() => {
    if (inView) {
      setLastView("skills");
      console.log("Skills in view");
      updateOpacity(true);
    } else {
      updateOpacity(false);
      if (lastView === "skills") {
        state2("noSkills");
        console.log("Skills not in view");
      }
    }
  }, [inView]);

  return (
    <div id="skillsDiv" ref={myRef} className={"skillsDiv"}>
      <div className="skills">
        <div className="skill">
          <img className="skillIMG" src={htmlcssjs} alt="img" />
          <h1 className="year">2021</h1>
          <h1 className="month">September</h1>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
          <h1 id="titleFix2" className="skillTitle">
            HTML Css Javascript
          </h1>
        </div>

        <div className="skill">
          <img className="skillIMG" src={node} alt="img" />
          <h1 className="year">2021</h1>
          <h1 className="month">November</h1>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
          <h1 id="titleFix2" className="skillTitle">
            Node + ExpressJS
          </h1>
        </div>
        <div className="skill">
          <img className="skillIMG" src={react2} alt="img" />
          <h1 className="year">2022</h1>
          <h1 className="month">January</h1>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
          <h1 className="skillTitle">React</h1>
        </div>
        <div className="skill">
          <img src={python} className="skillIMG" alt="img" />
          <h1 className="month">April</h1>
          <h1 className="year">2022</h1>
          <div id="lineFix" className="line2"></div>
          <div id="lineFix2" className="line3"></div>
          <h1 id="titleFix" className="skillTitle">
            Python
          </h1>
        </div>
      </div>
      <div className="infoSection">
        <div className="infodiv">

        <h1 className="bigInfoTitle">Skills</h1>
        <h1 className="infoTitle">My aquired programming skillset!</h1>
        <p className="infoText">
          I have been learning programming for about 1.5 years now. I have
          experience with HTML, CSS, Javascript, NodeJS, ExpressJS, React and
          Python. I am currently learning React and Python. I am a Fullstack developer
          and i also dable a bit in UI/UX design. I am currently looking for a
          job as a junior developer.
          
        </p>
        </div>
      </div>
    </div>
  );
}
