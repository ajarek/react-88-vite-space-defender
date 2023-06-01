import './Board.css'

import Gun from '../Gun/Gun'
import Divs from '../Divs/Divs'
import { useState } from 'react'
const Board = () => {
  const [start, setStart]=useState(false)
  return (
    
    <div className='board'>
      <button onClick={()=>setStart(true)}>Start</button>
      <button onClick={()=>setStart(false)}>Pause</button>
       {start?<Divs/>:null}
      <Gun/>
      
    </div>
  )
}

export default Board