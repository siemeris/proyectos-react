import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkWinnerFrom, checkEndGame } from './logic/board'
import './App.css'
import { WinnerModal } from './components/WinnerModal'
import { saveGameToStorage, resetGameStorage } from './logic/storage'


function App() {

  // const [board, setBoard] = useState(Array(9).fill(null))
  const [board, setBoard] = useState(
    ()=>{
      const boardFromLocalStorage = window.localStorage.getItem('board')
      return boardFromLocalStorage ? JSON.parse(boardFromLocalStorage) : Array(9).fill(null)
    }
  )
  // const [turn, setTurn] = useState(TURNS.X)
  const [turn, setTurn] = useState(
    ()=>{
      const turnFromLocalStorage = window.localStorage.getItem('turn')
      return turnFromLocalStorage ?? TURNS.X // es lo mismo que return turnFromLocalStorage ? turnFromLocalStorage : TURNS.X
    }
  )

  //null cuando no hay ganador, false cuando hay empate
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    //No actualizamos posiciones ya ocupadas
    //o cuando ya hay un ganador
    if (board[index] || winner) return
    //actualizamos el estado del tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    //actualizamos el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    //guardar aquí partida
    // window.localStorage.setItem('board', JSON.stringify(newBoard))
    // window.localStorage.setItem('turn', newTurn)
    saveGameToStorage({
      board: newBoard,
      turn: newTurn})

    //comprobamos si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner) //La actualización del estado en React es asíncrona
    } 
    //comprobamos si el juego ha acabado en empate
    else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    // window.localStorage.removeItem('board')
    // window.localStorage.removeItem('turn')
    resetGameStorage()
  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }

      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X} >{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner}/>

    </main>)
}

export default App
