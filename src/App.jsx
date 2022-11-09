import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Software from "./components/Software";
import LowerDiv from "./components/LowerDiv";
import Skills from "./components/Skills";

function App() {
  const [state, setState] = useState("software");
  const [state2, setState2] = useState("noSkills");
  const [lastView, setLastView] = useState("software");
  console.log(lastView, "lastView");
 
  const array = ["1"];

  const software = array.map((item) => {
    if (lastView=== "software" || lastView === "projects" ) {
      return <Software state={state} setState={setState} setLastView={setLastView} lastView={lastView} />
    } else {
      return null;
    }
  });
  const projects = array.map((item) => {
    if (lastView === "software" || lastView === "projects" || lastView === "skills") {
      return <LowerDiv
      lastView={lastView}
      setLastView={setLastView}
      stateUpdate={setState}
      state2={setState2}
    />
    } else {
      return null;
    }
  });
  const skills = array.map((item) => {
    if (lastView === "projects" || lastView === "skills") {
      return  <Skills
      state2={setState2}
      setLastView={setLastView}
      lastView={lastView}
    />
    } else {
      return null;
    }
  });


  const visibleDiv = array.map((item) => {
    if (lastView === "software") {
      return (
        <>
          <Software
            state={state}
            setState={setState}
            setLastView={setLastView}
            lastView={lastView}
          />
          <LowerDiv
            lastView={lastView}
            setLastView={setLastView}
            stateUpdate={setState}
            state2={setState2}
          />
        </>
      );
    }
    if (lastView === "projects") {
      return (
        <>
          <Software
            state={state}
            setState={setState}
            setLastView={setLastView}
            lastView={lastView}
          />
         <LowerDiv
            lastView={lastView}
            setLastView={setLastView}
            stateUpdate={setState}
            state2={setState2}
          />
          <Skills
            state2={setState2}
            setLastView={setLastView}
            lastView={lastView}
          />
        </>
      );
    }
    if (lastView === "skills") {
      return (
        <>
           <LowerDiv
            lastView={lastView}
            setLastView={setLastView}
            stateUpdate={setState}
            state2={setState2}
          />
          <Skills
            state2={setState2}
            setLastView={setLastView}
            lastView={lastView}
          />
        </>
      );
    }
  });

  return <div className="App">
    {software}
    {projects}
    {skills}
  </div>;
}

export default App;

// {
//   lastView === "software" ? (
//     <Software
//       state={state}
//       setState={setState}
//       setLastView={setLastView}
//       lastView={lastView}
//     />
//   ) : null;
// }
// {
//   lastView === "projects" ? (
//     <Software
//       state={state}
//       setState={setState}
//       setLastView={setLastView}
//       lastView={lastView}
//     />
//   ) : null;
// }

// {
//   /* <Software  lastView={lastView} setLastView={setLastView} setState={setState}state={state}/> */
// }
// {
//   /* {state === "software" ? <Software state={state}/> : null} */
// }
// <LowerDiv
//   lastView={lastView}
//   setLastView={setLastView}
//   stateUpdate={setState}
//   state2={setState2}
// />;
// {
//   state2 === "Skills" ? (
//     <Skills lastView={lastView} setLastView={setLastView} state2={setState2} />
//   ) : null;
// }
