import { createContext, useState } from 'react'
import Board from './components/Board/Board'
export const AppContext = createContext()
function App() {
  const [divs, setDivs] = useState([])
  const [start, setStart] = useState(false)
  const [end, setEnd] = useState(false)
  const [score, setScore] = useState(0)
  return (
    <div>
      <AppContext.Provider
        value={{ divs, setDivs, start, setStart, end, setEnd, score, setScore }}
      >
        {end ? <h2>Game is over</h2> : null}
        <Board />
      </AppContext.Provider>
    </div>
  )
}

export default App
