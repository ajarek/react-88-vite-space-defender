import React, {useState, useEffect} from 'react'
import './Divs.css'
const Divs = () => {
  const [divs, setDivs] = useState([]);

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