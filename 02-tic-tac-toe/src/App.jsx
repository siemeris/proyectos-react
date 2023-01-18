import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}

const Square = ({ value, onClick }) => {}

function App() {

  const [board, setBoard] = useState (Array(9).fill(null))

  return (
  <main className="board">
  <h1>Tic tac toe</h1>
  <section>
    {
      board.map((square, index) => {
        return <button key={index}>{square}</button>
      })
    }
    
  </section>
  </main>)
}

export default App
