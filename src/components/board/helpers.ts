import {MAX_MOVES} from "../../helpers/constants";

export const checkGameWinner = (board: any[]): string | undefined => {
  let possibleWinner = undefined;

  // check rows
  for (let row = 0; row < 3; row++) {
    if (
      board[row][0] === board[row][1] &&
      board[row][1] === board[row][2] &&
      board[row][0].length !== 0
    ) {
      possibleWinner = board[row][0];
    }
  }

  // check columns
  for (let column = 0; column < 3; column++) {
    if (
      board[0][column] === board[1][column] &&
      board[1][column] === board[2][column] &&
      board[0][column].length !== 0
    ) {
      possibleWinner = board[0][column];
    }
  }

  // check diagonals
  if (
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2] &&
    board[0][0].length !== 0
  ) {
    possibleWinner = board[0][0];
  }

  if (
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0] &&
    board[0][2].length !== 0
  ) {
    possibleWinner = board[0][2];
  }

  return possibleWinner;
}

type MutateCellParams = {
  player: string
  rowIndex: number
  cellIndex: number
  board: string[][]
}

export const mutateCell = ({cellIndex, rowIndex, player, board}: MutateCellParams) => {
  board[rowIndex][cellIndex] = player
  return board
}

export const hasWinner = ({currentMoves, gameWinner}: {
  currentMoves: number,
  gameWinner: string | undefined
}): boolean => {
  const maxMoves = currentMoves >= MAX_MOVES
  const hasGameWinner = !!gameWinner

  return maxMoves || hasGameWinner
}
