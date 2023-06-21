import { WINNING_COMBINATIONS } from '../constants'

export const checkWinner = (boardToCheck) => {
  console.log('boardToCheck', boardToCheck)
  for (const combo of WINNING_COMBINATIONS) {
    const [a, b, c] = combo

    if (boardToCheck[a] && 
        boardToCheck[a] === boardToCheck[b] && 
        boardToCheck[a] === boardToCheck[c]) {
      return boardToCheck[a]
    }
  }
  return null
}

export const checkEndGame = (boardToCheck) => {
  return boardToCheck.every((square) => square !== null)
}