import { React, useContext, useEffect } from 'react'
import { AppContext } from '../../App'
import './Divs.css'
const Divs = () => {
  const { divs, setDivs } = useContext(AppContext)

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newDiv = {
        id: Date.now(),
        bottom: 400,
        left: Math.floor(Math.random() * 400),
      }

      setDivs((prevDivs) => [...prevDivs, newDiv])
    }, 5000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])
  useEffect(() => {
    setDivs([])
    const divIntervalId = setInterval(() => {
      setDivs((prevDivs) =>
        prevDivs.map((div) => ({
          ...div,
          bottom: div.bottom - 10,
        }))
      )
    }, 100)
    return () => {
      clearInterval(divIntervalId)
    }
  }, [])

  return (
    <>
      {divs.map((div) => (
        <div
          key={div.id}
          className='falling-div'
          style={{ bottom: div.bottom, left: div.left }}
        >
          <img
            src='/ufo.png'
            alt='ufo'
          />
        </div>
      ))}
    </>
  )
}

export default Divs
