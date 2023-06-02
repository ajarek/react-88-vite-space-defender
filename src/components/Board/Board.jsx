import { React, useState, useContext, useEffect } from 'react'
import { AppContext } from '../../App'
import './Board.css'

import Gun from '../Gun/Gun'
import Divs from '../Divs/Divs'

const Board = () => {
  const {divs, setDivs, start, setStart,setEnd } = useContext(AppContext)
  return (
    
    <div className='board'>
      <button onClick={()=>{setStart(true);setEnd(false)}}>Start</button>
      <button onClick={()=>{setStart(false);setDivs([]);setEnd(false)}}>Pause</button>
       {start?<Divs/>:null}
      <Gun/>
      
    </div>
  )
}

export default Board