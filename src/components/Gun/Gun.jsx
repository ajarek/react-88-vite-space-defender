import React, { useRef, useEffect, useState } from 'react'
import './Gun.css'
const Gun = () => {
  const divRef = useRef(null)

  const [position, setPosition] = useState(270)

  const [bullets, setBullets] = useState([])

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
        fire() 
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const fire = () => {
    const newBullet = {
      id: Date.now(),
      bottom: 80,
      left: divRef.current.offsetLeft,
    }
    setBullets((prevBullets) => [...prevBullets, newBullet])
  } 

  useEffect(() => {
    const bulletIntervalId = setInterval(() => {
      setBullets((prevBullets) =>
        prevBullets.map((bullet,index,arr) => ({
          ...bullet,
          bottom:bullet.bottom>350?arr.splice(index,1): bullet.bottom + 10,
        }))
      )
    }, 50)
    return () => {
      clearInterval(bulletIntervalId)
    }
  }, [bullets])

  return (
    <>
      {bullets.map((bullet) => (
        <div
          key={bullet.id}
          className='bullet'
          style={{ bottom: bullet.bottom, left: bullet.left }}
        >
          {' '}
          <img
            src='/rocket.png'
            alt=''
          />
        </div>
      ))}
      <div
        className='gun'
        ref={divRef}
        style={{
          position: 'absolute',
          left: `${position}px`,
          bottom: '0px',
        }}
      />
    </>
  )
}

export default Gun
