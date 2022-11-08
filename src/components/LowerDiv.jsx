import React, { useState, useRef, useEffect } from "react";
import "../App.css";
import group from "../assets/pfp2.svg";
import pickups from "../assets/248.png";
import rental from "../assets/car.png";
import python from "../assets/python.png";
import reactjs from "../assets/reactjs.png";
import django from "../assets/django.png";
import PortfolioGrid from "./PortfolioGrid";
import { useInView } from "react-intersection-observer";
import FlipCard from "./flipCard";
function LowerDiv({ stateUpdate }) {
  const [counter, setCounter] = useState(0);
  const [portfolio, showPortfolio] = useState(false);
  const gridRef = useRef();
  const overlayRef= useRef();
  const buttonRef = useRef();
  const portTitle = useRef();
  const titleRef = useRef();
  const pRef = useRef();
  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }
  async function changeState() {
    await timeout(1000);
    stateUpdate("software");
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
    console.log(document.getElementsByClassName('gridItem'))
    let gridItems = document.getElementsByClassName('gridItem')
    let timing = 0;
    for (const card of gridItems) {
      if (mode) {
        card.style.opacity = 1;
        card.style.transition = `opacity 1s ease-in-out ${timing}s`;
        timing += 0.05;
      } else {
        card.style.opacity = 0;
      }
    }
    if(mode){
    portTitle.current.style.opacity = 1;
    overlayRef.current.style.opacity = 1;
    await timeout(1000);
    titleRef.current.style.opacity = 1;
    await timeout(800);
    pRef.current.style.opacity = 1;
    await timeout(800);
    buttonRef.current.style.opacity = 1;
  }
    else{
      portTitle.current.style.opacity = 0;
      overlayRef.current.style.opacity = 0;
      buttonRef.current.style.opacity = 0;
      titleRef.current.style.opacity = 0;
      pRef.current.style.opacity = 0;
  }
  }

  console.log(inView);
  useEffect(() => {
    if (inView) {
      stateUpdate("lower");
     updateOpacity(true);
    } else {
      updateOpacity(false);
      
    }
  }, [inView]);

  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }
  // useEffect(() => {
  //   console.log(myRef.current)
  //   const observer = new IntersectionObserver(entries => {
  //   const entry = entries[0]
  //   if (entry.isIntersecting) {
  //     console.log('in view')
  //     stateUpdate("lower")

  //   } else {
  //     console.log('out of view')
  //     stateUpdate('software')
  //   }
  //     // entries.forEach(entry => {
  //     //   if (entry.isVisible) {
  //     //     console.log(entry)
  //     //   }
  //     // })
  //   })
  //   observer.observe(myRef.current)
  // }, [])

  // const handleOnMouseMove = (e) => {
  //   const { currentTarget: target } = e;
  //   const rect = target.getBoundingClientRect(),
  //     x = e.clientX - rect.left,
  //     y = e.clientY - rect.top;

  //   target.style.setProperty("--mouse-x", `${x}px`);
  //   target.style.setProperty("--mouse-y", `${y}px`);
  // };

  // for (const item of document.querySelectorAll(".gridItem")) {
  //   item.onmousemove = (e) => handleOnMouseMove(e);
  // }

  // useEffect(() => {
  //   console.log(gridRef.current);
  //   let grid = gridRef.current;
  //   grid.onmousemove = (e) => {
  //     for (const card of document.getElementsByClassName("gridItem")) {
  //       const rect = card.getBoundingClientRect(),
  //         x = e.clientX - rect.left,
  //         y = e.clientY - rect.top;

  //       card.style.setProperty("--mouse-x", `${x}px`);
  //       card.style.setProperty("--mouse-y", `${y}px`);
  //     }
  //   };
  // }, []);
  //
  const column1 = useRef();
  const column2 = useRef();
  const column3 = useRef();
  let counter2 = 0;

  useEffect(() => {
    column1.current.style.top = `${-82}vh`;
    column2.current.style.top = `${82}vh`;
    column3.current.style.top = `${-125}vh`;
    setInterval(() => {
      moveGrid(10);
    }, 500);
  }, []);

  async function moveGrid(pixels) {
    let current = column1.current?.style.top.split("vh")[0];
    let current2 = column2.current?.style.top.split("vh")[0];
    let current3 = column3.current?.style.top.split("vh")[0];
    if (column1.current?.style.top === "127vh") {
      column1.current.style.transition = `top 0s`;
      column1.current.style.top = `${-82}vh`;
      await timeout(60);
      column1.current.style.transition = `all 2s linear`;
    } else {
      if (column1.current?.style.top) {
        column1.current.style.top = `${parseInt(current) + 1}vh`;
      }
    }

    if (column2.current?.style.top === "-128vh") {
      column2.current.style.transition = `top 0s`;
      column2.current.style.top = `${82}vh`;
      await timeout(60);
      column2.current.style.transition = `all 2s linear`;
    } else {
      if (column2.current?.style.top) {
        column2.current.style.top = `${parseInt(current2) - 1}vh`;
     
      }
    }

    if (column3.current?.style.top === "83vh") {
      column3.current.style.transition = `top 0s`;
      column3.current.style.top = `${-125}vh`;
      await timeout(60);
      column3.current.style.transition = `all 2s linear`;
    } else {
      if (column3.current?.style.top) {
        column3.current.style.top = `${parseInt(current3) + 1}vh`;
      }
    }
  }



  const portfolioItems = [
    {
      first: {
        name: "248 Pickups",
        img: pickups,
        description: `A website with a database for a basketball Academy,
      built to keep track of players and their appearances at the pickup games.
        built with Reactjs and a flask python backend`,
        languages: [
          { name: "Python", icon: python },
          { name: "ReactJS", icon: reactjs },
        ],
      },
      second: {
        name: "Car rental",
        img: rental,
        description: `A car rental website built with a
            python backend a django framework frontend, This project was a school project`,
        languages: [
          { name: "Python", icon: python },
          { name: "Django", icon: django },
        ],
      },
      third: {
        name: "248 Pickups",
        img: pickups,
        description: `A website with a database for a basketball Academy,
    built to keep track of players and their appearances at the pickup games.
      built with Reactjs and a flask python backend`,
        languages: [
          { name: "Python", icon: python },
          { name: "ReactJS", icon: reactjs },
        ],
      },
    },
    {
      first: {
        name: "Car rental",
        img: rental,
        description: `A car rental website built with a
            python backend a django framework frontend, This project was a school project`,
        languages: [
          { name: "Python", icon: python },
          { name: "Django", icon: django },
        ],
      },
      second: {
        name: "248 Pickups",
        img: pickups,
        description: `A website with a database for a basketball Academy,
    built to keep track of players and their appearances at the pickup games.
      built with Reactjs and a flask python backend`,
        languages: [
          { name: "Python", icon: python },
          { name: "ReactJS", icon: reactjs },
        ],
      },
      third: {
        name: "Car rental",
        img: rental,
        description: `A car rental website built with a
            python backend a django framework frontend, This project was a school project`,
        languages: [
          { name: "Python", icon: python },
          { name: "Django", icon: django },
        ],
      },
    },
    {
      first: {
        name: "248 Pickups",
        img: pickups,
        description: `A website with a database for a basketball Academy,
      built to keep track of players and their appearances at the pickup games.
        built with Reactjs and a flask python backend`,
        languages: [
          { name: "Python", icon: python },
          { name: "ReactJS", icon: reactjs },
        ],
      },
      second: {
        name: "Car rental",
        img: rental,
        description: `A car rental website built with a
            python backend a django framework frontend, This project was a school project`,
        languages: [
          { name: "Python", icon: python },
          { name: "Django", icon: django },
        ],
      },
      third: {
        name: "248 Pickups",
        img: pickups,
        description: `A website with a database for a basketball Academy,
    built to keep track of players and their appearances at the pickup games.
      built with Reactjs and a flask python backend`,
        languages: [
          { name: "Python", icon: python },
          { name: "ReactJS", icon: reactjs },
        ],
      },
    },
  ];

  const grid = portfolioItems.map((item, index) => {
    console.log(index, "index");
    if (index === 0) {
      return (
        <div ref={column1} id={"firstColumn"} className="column">
          <FlipCard
            name={item.second.name}
            languages={item.second.languages}
            img={item.second.img}
            description={item.second.description}
          />
          <FlipCard
            name={item.first.name}
            languages={item.first.languages}
            img={item.first.img}
            description={item.first.description}
          />
          <FlipCard
            name={item.third.name}
            languages={item.third.languages}
            img={item.third.img}
            description={item.third.description}
          />
          <FlipCard
            name={item.second.name}
            languages={item.second.languages}
            img={item.second.img}
            description={item.second.description}
          />
          <FlipCard
            name={item.first.name}
            languages={item.first.languages}
            img={item.first.img}
            description={item.first.description}
          />
          <div className="item">0</div>
        </div>
      );
    }
    if (index === 1) {
      return (
        <div ref={column2} id={"secondColumn"} className="column">
          <div className="item">0</div>
          <FlipCard
            name={item.first.name}
            languages={item.first.languages}
            img={item.first.img}
            description={item.first.description}
          />
          <FlipCard
            name={item.second.name}
            languages={item.second.languages}
            img={item.second.img}
            description={item.second.description}
          />
          <FlipCard
            name={item.third.name}
            languages={item.third.languages}
            img={item.third.img}
            description={item.third.description}
          />
          <FlipCard
            name={item.first.name}
            languages={item.first.languages}
            img={item.first.img}
            description={item.first.description}
          />
          <FlipCard
            name={item.second.name}
            languages={item.second.languages}
            img={item.second.img}
            description={item.second.description}
          />
        </div>
      );
    }
    if (index === 2) {
      return (
        <div ref={column3} id={"thirdColumn"} className="column">
          <div className="item">2</div>
          <FlipCard
            name={item.first.name}
            languages={item.first.languages}
            img={item.first.img}
            description={item.first.description}
          />
          <FlipCard
            name={item.third.name}
            languages={item.third.languages}
            img={item.third.img}
            description={item.third.description}
          />
          <FlipCard
            name={item.second.name}
            languages={item.second.languages}
            img={item.second.img}
            description={item.second.description}
          />
          <FlipCard
            name={item.first.name}
            languages={item.first.languages}
            img={item.first.img}
            description={item.first.description}
          />
          <FlipCard
            name={item.third.name}
            languages={item.third.languages}
            img={item.third.img}
            description={item.third.description}
          />
        </div>
      );
    }
  });

  return (
    <div ref={myRef} id="lower" className="lowerDiv">

      <h1 ref={portTitle}className="portfolioTitle">Portfolio</h1>
      {/* <div ref={gridRef} className="gridDiv">
        <PortfolioGrid stateUpdate={stateUpdate} ref={myRef} data={data} />
      </div> */}
      <div ref={overlayRef} className="overlay"></div>
      <div className="columnDivs">{grid}</div>
      <h1 ref={titleRef} id={"bigTitle"}>Take a look at my Projects!</h1>
      <p ref={pRef}id={"projectDescription"}>View all of the projects that i have made so far!</p>
      <button ref={buttonRef} id={"projectbutton"}>View Projects</button>
    </div>
  );
}

export default LowerDiv;
