import { useState } from "react";
import { board_factory } from "../helpers/constants";

// Althought we didn't need this hook
// the idea was to add more functionality in the future
// such as players names and scores for each player
export function useGameBoard() {
  const [board, setBoard] = useState(board_factory());

  const handleBoardMutation = (
    rowIndex: number,
    cellIndex: number,
    value: string
  ) => {
    const newBoard = [...board];
    newBoard[rowIndex][cellIndex] = value;
    setBoard(newBoard);
  };

  const handleResetBoard = () => {
    setBoard(board_factory());
  };

  return {
    board,
    handleBoardMutation,
    handleResetBoard,
  };
}
