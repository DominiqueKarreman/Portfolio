import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Software from './components/Software'
import LowerDiv from './components/LowerDiv'


function App() {
  const [state, setState] = useState('software')

  var oldScrollY = window.scrollY;
  


  return (
    <div className="App">
        <Software setState={setState}state={state}/>
      {/* {state === "software" ? <Software state={state}/> : null} */}
      <LowerDiv stateUpdate={setState} />
      
    </div>
  )
}

export default App
