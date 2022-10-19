import React, { useState, useEffect} from 'react'
import {useInView} from 'react-intersection-observer'


function PortfolioGrid({data, stateUpdate}) {
    const { ref: myRef, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.5,
      });
      useEffect(() => {
        if (inView) {
          stateUpdate("lower")
        } 
      }, [inView])
    
    const grid = data.map((item, index) => {
        return(
            <div  className="gridItem" key={index}>
                <div className="gridItemInner">
                    asdasd
                </div>
            </div>
        )}
        )
  return (
    <div ref={myRef}className='portfolioGrid'>{grid}</div>
  )
}

export default PortfolioGrid