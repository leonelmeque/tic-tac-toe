import {useEffect, useState} from "react";
import {board_factory} from "../../helpers/constants";
import {checkGameWinner, hasWinner, mutateCell} from "./helpers";

export const useTicTacToe = () => {
  const [board, setBoard] = useState(board_factory())
  const [currentMaxMoves, setCurrentMaxMoves] = useState(0);
  const [turn, setTurn] = useState<"X" | "O">("X");
  const [gameWinner, setGameWinner] = useState<string | undefined>();


  const toggleCell = (player: string, rowIndex: number, cellIndex: number) => {
    setBoard(mutateCell({cellIndex, rowIndex, player: player === "X" ? "X" : "O", board}))
    setCurrentMaxMoves(totalMoves => totalMoves + 1)
    setTurn(turn => turn === "X" ? "O" : "X")
  }

  const handleResetBoard = () => {
    setBoard(board_factory());
    setCurrentMaxMoves(0)
    setTurn("X")
    setGameWinner(undefined)
  };

  const disabledGameIfPlayerHasWonOrMaxMoves = hasWinner({currentMoves: currentMaxMoves, gameWinner})

  useEffect(() => {
    if (currentMaxMoves >= 3) {
      const winner = checkGameWinner(board)
      if (winner) setGameWinner(winner)
    }

    if (disabledGameIfPlayerHasWonOrMaxMoves) {
      setGameWinner('Draw')
    }
  }, [currentMaxMoves]);

  return {
    toggleCell,
    currentMaxMoves,
    turn,
    gameWinner,
    board,
    disabledGameIfPlayerHasWonOrMaxMoves,
    handleResetBoard
  }
}
