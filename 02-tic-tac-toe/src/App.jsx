import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = isSelected ? 'square is-selected' : 'square'

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function App() {

  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  //null cuando no hay ganador, false cuando hay empate
  const [winner, setWinner] = useState(null)

  const checkEndGame = (newBoard) => {
    console.log(newBoard.every((square)=>square != null))
    return newBoard.every((square)=>(square != null))
    
  }

  const checkWinner = (boardToCheck) => {
    //revisamos todas las combinaciones ganadoras
    //para ver si Xu O ganó
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        //comprobamos que las posiciones no estén vacías
        boardToCheck[a] &&
        //comprobamos que las posiciones sean iguales
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    //si no hay ganadaor
    return null
  }

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
    //comprobamos si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
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
  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }

      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X} >{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      {winner !== null && (
        <section className="winner">
          <div className="text">
            <h2>{winner === false
                    ? 'Empate' 
                    : 'Ganó: '
                }
            </h2>
            <header className='win'>
              {winner && <Square>{winner}</Square>}
            </header>

            <footer>
              <button onClick={resetGame}> Empezar de nuevo</button>
            </footer>
          </div>
        </section>
      )}

    </main>)
}

export default App
