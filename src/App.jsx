import { createContext, useState } from 'react'
import Board from './components/Board/Board'
export const AppContext = createContext()
function App() {
  const [divs, setDivs] = useState([]);
  return (
    <div>
      <AppContext.Provider value={{divs, setDivs}}>
      <Board />
      </AppContext.Provider>
    </div>
  )
}

export default App
