import React from 'react'
import "./Timer.css"

const Timer = ({currentDate}) => {
  return (
    <div className='timer'>
      <h1>Current Time</h1>
    <h2>{currentDate.toLocaleTimeString()}</h2>
  </div>
  )
}

export default Timer