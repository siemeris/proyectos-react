import { WINNER_COMBOS } from "../constants"

//separamos la lógica en un fichero a parte
//pudiendolo utilizar en otros componentes de react, angular, etc.. 
//siendo agnóstico a la biblioteca

export const checkWinnerFrom = (boardToCheck) => {
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

export const checkEndGame = (newBoard) => {
    console.log(newBoard.every((square)=>square != null))
    return newBoard.every((square)=>(square != null))
    
  }