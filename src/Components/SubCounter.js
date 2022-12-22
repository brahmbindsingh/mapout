import React, { useState } from 'react'
import './Counter.css'

const SubCounter = ({ value, onIncrement, onReset }) => {

  return (
    <div style={{width: "fit-content"}}>
        <p>Sub Box</p>
        <div className='sub counter'>
            <p>Clicks</p>
            <p className='count'>{value}</p>
            <div className="buttons">
                <button className="inc" onClick={()=>onIncrement()}>Increment</button>
                <button className='reset' onClick={() => onReset()}>Reset</button>
            </div>
        </div>
    </div>
  )
}

export default SubCounter