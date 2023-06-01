import { React, useState, useContext, useEffect } from 'react'
import { AppContext } from '../../App'
import './Divs.css'
const Divs = () => {
  
  const { divs, setDivs } = useContext(AppContext)

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newDiv = {
        id: Date.now(),
        top: 0,
        left: Math.floor(Math.random() * 400),
      };

      setDivs(prevDivs => [...prevDivs, newDiv]);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  useEffect(() => {
  const divIntervalId = setInterval(() => {
    setDivs(prevDivs =>
      prevDivs.map(div => ({
        ...div,
        top: div.top + 10,
      }))
    );
  }, 100);
  return () => {
    clearInterval(divIntervalId);
  };
}, []);
  return (
    <>
      {divs.map(div => (
          <div
            key={div.id}
            className="falling-div"
            style={{ top: div.top, left: div.left }}
          >
            <img src="/ufo.png" alt="" />
          </div>
        ))}
    </>
  )
}

export default Divs