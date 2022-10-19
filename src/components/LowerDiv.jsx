import React, {useState, useRef, useEffect} from 'react'
import '../App.css'
import group from "../assets/pfp2.svg"
import PortfolioGrid from './PortfolioGrid'
import {useInView} from 'react-intersection-observer'
function LowerDiv({stateUpdate}) {
  // const myRef = useRef()
  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }
  async function changeState() {
    await timeout(1000);
    stateUpdate("software")
  }
  const { ref: myRef, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
  });


  console.log(inView)
  useEffect(() => {
    if (inView) {
      stateUpdate("lower")
    } 
  }, [inView])

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
  return (
    <div  ref={myRef} id="lower" className='lowerDiv'>
    <p className='hidden'>p</p>
    <h1 className="portfolioTitle"  >Portfolio</h1>
      <PortfolioGrid stateUpdate={stateUpdate }ref={myRef} data={[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,]}/>
      

    </div>
  )
}

export default LowerDiv