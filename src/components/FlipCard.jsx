import React, {useState} from 'react'
import { useInView } from "react-intersection-observer";

export default function FlipCard({name, description, img, languages}) {
 const [visible, setVisible] = useState(true)
 
 
 const {
  ref: myRef,
  inView,
  entry,
} = useInView({
  /* Optional options */
  threshold: 0.1,
});

let languages2 = languages.map((language, index) => {
  return (
    <img
      className={"languageIcon"}
      src={language.icon}
      alt={language.name}
    />
  );
});

  return (
    <div className={"gridItem"} ref={myRef}>
        <div className="cardborder"></div>
        <div className="gridItemInner">
          <div className="frontside">
            <div className="gradient"></div>
            <h1>{name}</h1>
            <img className="portfolioIMG" src={img} alt="img" />

            <p className="description">{name}</p>
            <div className="languageIcons">{languages2}</div>
          </div>
          <div className="backside">
           <h1>{name}</h1>
            <p className="descriptionbackside">{description}</p>
            <button className="button2">Go to {name}</button>
          </div>
        </div>
      </div>
  )
}
