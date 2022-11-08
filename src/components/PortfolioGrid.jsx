import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

function PortfolioGrid({ data, stateUpdate }) {
  const gridRef = useRef();
  const [visible, setVisible] = useState(false);
  const {
    ref: myRef,
    inView,
    entry,
  } = useInView({
    /* Optional options */
    threshold: 0.1,
  });
  useEffect(() => {

   

    if (inView) {
      stateUpdate("lower");
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [inView]);

  // const languages = data.map((item, index) => {
  //     return (
  //         <div className="language" key={index}>
  //             <img className={"languageIcon"}src={item.img} alt={item.name} />
  //             <h3>{item.name}</h3>
  //         </div>
  //     )
  // })

  const {
    ref: grid2Ref,
    inView2,
  } = useInView({
    /* Optional options */
    threshold: 0.1,
  });


  const grid = data.map((item, index) => {
    


    const {
      ref: myRef,
      inView,
      entry,
    } = useInView({
      /* Optional options */
      threshold: 0.1,
    });

    useEffect(() => {
      let timing = 0;
      for (const card of document.getElementsByClassName("gridItem")) {
        
        
        card.style.transition =  `1s ease-in-out ${1 + timing}s`;
        timing = timing + 0.1;
      }
      for (const card of document.getElementsByClassName("gridItemOff")) {
        
        
        
        card.style.transition = `1s ease-in-out ${0}s`
        timing = timing + 0.1;
      }

     console.log(inView, index,"yes")
      if (inView) {
        setVisible(true);
      }
      
    }, [inView]);
    console.log(visible, "visible")
    let languages = item.languages.map((language, index) => {
      return (
        <img
          className={"languageIcon"}
          src={language.icon}
          alt={language.name}
        />
      );
    });
   

    return (
      <div className={visible ? "gridItem" : "gridItemOff"} ref={myRef}key={index}>
        <div className="cardborder"></div>
        <div className="gridItemInner">
          <div className="frontside">
            <div className="gradient"></div>
            <h1>{item.name}</h1>
            <img className="portfolioIMG" src={item.img} alt="img" />

            <p className="description">{item.name}</p>
            <div className="languageIcons">{languages}</div>
          </div>
          <div className="backside">
           <h1>{item.name}</h1>
            <p className="descriptionbackside">{item.description}</p>
            <button className="button2">Go to {item.name}</button>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div ref={myRef} className="portfolioGrid">
      {
        (document.getElementsByClassName("portfolioGrid").onmousemove = (e) => {
          for (const card of document.getElementsByClassName("gridItem")) {
            const rect = card.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
          }
        })
      }

      {grid}
    </div>
  );
}

export default PortfolioGrid;
