import { React, useState, useContext, useEffect } from 'react'
import { AppContext } from '../../App'
import './Board.css'

import Gun from '../Gun/Gun'
import Divs from '../Divs/Divs'

const Board = () => {
  const {divs, setDivs, start, setStart,setEnd,score, setScore } = useContext(AppContext)
  return (
    
    <div className='board'>
      <div className="wrapper-board">
      <div className="wrapper-button">
      <button onClick={()=>{setStart(true);setEnd(false)}}>Start</button>
      <button onClick={()=>{setStart(false);setDivs([]);setEnd(false);setScore(0)}}>Stop</button>
      </div>
      <div className="score">Score: {score}</div>
      </div>
       {start?<Divs/>:null}
      <Gun/>
      
    </div>
  )
}

export default Board