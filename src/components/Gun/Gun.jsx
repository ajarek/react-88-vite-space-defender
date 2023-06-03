import { React, useState, useContext, useEffect, useRef } from 'react'
import { AppContext } from '../../App'
import './Gun.css'
const Gun = () => {
  const { divs, setDivs, start, setStart,setEnd, score, setScore } = useContext(AppContext)
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

  bullets.filter((bullet) => {
    divs.find((div, index, arr) => {
                 
        if(
          div.bottom===bullet.bottom  &&
              bullet.left >= div.left &&
              bullet.left <= div.left + 60
          ){
          arr.splice(index, 1)
          setScore(prevScore => prevScore + 1);
        }
       

    })
  })
  useEffect(() =>{
  divs.forEach((div, index, arr) => {
     if (div.bottom <= 0) {
      setDivs([])
      setStart(false)
      setEnd(true)
       
     }
  })
})

  useEffect(() => {
    const bulletIntervalId = setInterval(() => {
      setBullets((prevBullets) =>
        prevBullets.map((bullet, index, arr) => ({
          ...bullet,
          bottom:
            bullet.bottom > 350 ? arr.splice(index, 1) : bullet.bottom + 10,
        }))
      )
    }, 50)

    return () => {
      clearInterval(bulletIntervalId)
    }
  }, [bullets, divs])

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
