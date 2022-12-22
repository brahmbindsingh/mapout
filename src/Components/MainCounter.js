import React, { useState } from 'react'
import './Counter.css'

const MainCounter = ({ count, onReset }) => {
  return (
    <div style={{width: "fit-content"}}>
        <p>Main Box</p>
        <div className='main counter'>
            <p>Total</p>
            <p className='count'>{count}</p>
            <button onClick={() => onReset()}>Reset Button</button>
        </div>
    </div>
  )
}

export default MainCounter