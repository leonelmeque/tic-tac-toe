import { renderHook } from "@testing-library/react";
import { useGameBoard } from "./use-game-board";
import { board_factory } from "../helpers/constants";

describe("useGameBoard", () => {
  let gameBoard = [
    ["", "X", ""],
    ["", "O", ""],
    ["", "", ""],
  ];
  it("resets the game sucessfuly", () => {
    const { result, rerender } = renderHook(useGameBoard);
    result.current.handleBoardMutation(0, 1, "X");
    result.current.handleBoardMutation(1, 1, "O");

    expect(result.current.board).toEqual(gameBoard);

    result.current.handleResetBoard();

    const defaultBoard = board_factory();
    rerender();

    expect(result.current.board).toEqual(defaultBoard);
  });
});
