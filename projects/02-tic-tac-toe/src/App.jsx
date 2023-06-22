import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'
import  {Square}  from './components/Square.jsx'
import { WinnerModal } from './components/WinnerModal.jsx'

import { TURNS } from './constants.js'
import { checkEndGame, checkWinner } from './logic/board.js'
import { resetGameStorage, saveGameToStorage } from './logic/storage/index.js'

function App() {

  const [board, setBoard] = useState( () => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
  const [winner, setWinner] = useState(null)

  

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetGameStorage()
  }

  

  const updateBoard = (index) => {

    if (board[index] || winner ) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    },[board, turn])

    const newWinner = checkWinner(newBoard) 
    if (newWinner) {
      setWinner(newWinner)
      confetti()
    } else if( checkEndGame(newBoard) ) {
      setWinner(false)
    }
  }

  useEffect(() => {

  })

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Restart</button>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >{board[index]}</Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame}/>
    </main>
  )
}

export default App
