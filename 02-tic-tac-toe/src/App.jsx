import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = isSelected ? 'square is-selected' : 'square'
  return (
    <div className={className}>
      {children}
    </div>
  )
 }

function App() {

  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square key={index}> {board[index]} </Square>
              )
          })
        }

      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X } >{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O }>{TURNS.O}</Square>
      </section>
    </main>)
}

export default App
