import React, { useRef, useEffect, useState } from 'react'
import './Gun.css'
const Gun = () => {
  const divRef = useRef(null)
  const [position, setPosition] = useState(270)

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
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div
      className='gun'
      ref={divRef}
      style={{
        position: 'absolute',
        left: `${position}px`,
        bottom: '0px',
      }}
    ></div>
  )
}

export default Gun
