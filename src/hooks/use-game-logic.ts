import { useCallback, useEffect, useState } from "react";
import { useGameBoard } from "./use-game-board";
import { MAX_MOVES } from "../helpers/constants";

export const useGameLogic = (
  board: ReturnType<typeof useGameBoard>["board"],
  handleBoardMutation: ReturnType<typeof useGameBoard>["handleBoardMutation"]
) => {
  const [currentMaxMoves, setCurrentMaxMoves] = useState(0);
  const [turn, setTurn] = useState<"X" | "O">("X");
  const [gameWinner, setGameWinner] = useState<string | undefined>();

  const checkWinner = useCallback((): string | undefined => {
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
  }, [board]);

  const toggleCell = (player: string, rowIndex: number, cellIndex: number) => {
    if (currentMaxMoves >= MAX_MOVES || gameWinner) return;
    if (board[rowIndex][cellIndex].length !== 0) return;

    handleBoardMutation(rowIndex, cellIndex, player === "X" ? "X" : "O");

    setCurrentMaxMoves(currentMaxMoves + 1);
    setTurn(turn === "X" ? "O" : "X");
  };

  const resetScore = () => {
    setCurrentMaxMoves(0);
    setTurn("X");
    setGameWinner(undefined);
  };

  useEffect(() => {
    const winner = checkWinner();

    if (winner) {
      setGameWinner(winner);
      return;
    }
  }, [checkWinner]);

  useEffect(() => {
    if (gameWinner) return;

    if (currentMaxMoves >= MAX_MOVES && !gameWinner) {
      setGameWinner("Draw");
    }
  }, [gameWinner, currentMaxMoves]);

  return { toggleCell, currentMaxMoves, turn, gameWinner, resetScore };
};
