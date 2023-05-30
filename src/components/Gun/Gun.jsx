import React, { useRef, useEffect, useState } from 'react'
import './Gun.css'
const Gun = () => {
  const divRef = useRef(null)
  const bulletsRef = useRef(null)
  const [position, setPosition] = useState(270)
  const [range, setRange] = useState(-10)
  const [showDiv, setShowDiv] = useState(false)
  const [array, setArray] = useState([1,1,1,1,1])


  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        // Sterowanie w lewo
        divRef.current.offsetLeft === 0
          ? setPosition((prevPosition) => (prevPosition = 0))
          : setPosition((prevPosition) => prevPosition - 10)
      } else if (event.key === 'ArrowRight') {
        // Sterowanie w prawo
        divRef.current.offsetLeft === 560
          ? setPosition((prevPosition) => (prevPosition = 560))
          : setPosition((prevPosition) => prevPosition + 10) 
      } else if (event.key === ' ') {
        
        const intervalId = setInterval(() => {
          
         
            setRange((prevPosition) => prevPosition - 10)
        }, 200)

        setShowDiv(true)
        return () => {
          clearInterval(intervalId)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
   
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
  range === -320
  ? setRange((prevPosition) => (prevPosition = -10)):null
  return (
    <div
      className='gun'
      ref={divRef}
      style={{
        position: 'absolute',
        left: `${position}px`,
        bottom: '0px',
      }}
    >
      {showDiv && (
        array.map((item,index) =>
        <div
          key={index}
          className='bullets'
          ref={bulletsRef}
          style={{
            position: 'absolute',
            top: `${range*index}px`,
            left: '50%',
          }}
        >
         <img src="/rocket.png" alt="" />
        </div>)
      )}
    </div>
  )
}

export default Gun
