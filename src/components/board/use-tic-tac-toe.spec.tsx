import {renderHook} from "@testing-library/react";
import {useTicTacToe} from "./use-tic-tac-toe";


describe("use-tic-tac-toe", () => {
  describe("diagonal wins are possible when", () => {
    it("the same player fills cells left to right", async () => {
      const {result, rerender} = renderHook(useTicTacToe);

      result.current.toggleCell("X", 0, 0);
      rerender();
      result.current.toggleCell("O", 0, 2);
      rerender();
      result.current.toggleCell("X", 1, 1);
      rerender();
      result.current.toggleCell("O", 0, 1);
      rerender();
      result.current.toggleCell("X", 2, 2);
      rerender();

      expect(result.current.currentMaxMoves).toBe(5);
      expect(result.current.turn).toBe("O");
      expect(result.current.gameWinner).toBe("X");
    });

    it("the same player fills cells right to left", () => {
      const {result, rerender} = renderHook(useTicTacToe);

      result.current.toggleCell("X", 0, 2);
      rerender();
      result.current.toggleCell("O", 0, 0);
      rerender();
      result.current.toggleCell("X", 1, 1);
      rerender();
      result.current.toggleCell("O", 0, 1);
      rerender();
      result.current.toggleCell("X", 2, 0);
      rerender();

      expect(result.current.currentMaxMoves).toBe(5);
      expect(result.current.turn).toBe("O");
      expect(result.current.gameWinner).toBe("X");
    });
  });

  describe("vertical wins are possible when", () => {
    it("the same player fills column 1 and rows 1,2 and 3", () => {
      const {result, rerender} = renderHook(useTicTacToe);

      result.current.toggleCell("X", 1, 2);
      rerender();
      result.current.toggleCell("O", 0, 0);
      rerender();
      result.current.toggleCell("X", 1, 0);
      rerender();
      result.current.toggleCell("O", 0, 1);
      rerender();
      result.current.toggleCell("X", 2, 1);
      rerender();
      result.current.toggleCell("O", 0, 2);
      rerender();

      expect(result.current.currentMaxMoves).toBe(6);
      expect(result.current.gameWinner).toBe("O");
    });

    it("the same player fills column 2 and rows 1,2 and 3", () => {
      const {result, rerender} = renderHook(useTicTacToe);
      // row column
      result.current.toggleCell("X", 1, 0);
      rerender();
      result.current.toggleCell("O", 0, 1);
      rerender();
      result.current.toggleCell("X", 0, 0);
      rerender();
      result.current.toggleCell("O", 1, 1);
      rerender();
      result.current.toggleCell("X", 1, 2);
      rerender();
      result.current.toggleCell("O", 2, 1);
      rerender();

      expect(result.current.currentMaxMoves).toBe(6);
      expect(result.current.gameWinner).toBe("O");
    });

    it("the same player fills column 3 and rows 1,2 and 3", () => {
      const {result, rerender} = renderHook(useTicTacToe);
      // row column
      result.current.toggleCell("X", 2, 1);
      rerender();
      result.current.toggleCell("O", 0, 2);
      rerender();
      result.current.toggleCell("X", 0, 0);
      rerender();
      result.current.toggleCell("O", 1, 2);
      rerender();
      result.current.toggleCell("X", 1, 1);
      rerender();
      result.current.toggleCell("O", 2, 2);
      rerender();

      expect(result.current.currentMaxMoves).toBe(6);
      expect(result.current.gameWinner).toBe("O");
    });
  });

  describe("horizontal wins are possible when", () => {
    it("the same player fills rows 1 and column 1,2 and 3", () => {
      const {result, rerender} = renderHook(useTicTacToe);

      result.current.toggleCell("X", 1, 2);
      rerender();
      result.current.toggleCell("O", 0, 0);
      rerender();
      result.current.toggleCell("X", 1, 0);
      rerender();
      result.current.toggleCell("O", 0, 1);
      rerender();
      result.current.toggleCell("X", 2, 1);
      rerender();
      result.current.toggleCell("O", 0, 2);
      rerender();

      expect(result.current.currentMaxMoves).toBe(6);
      expect(result.current.gameWinner).toBe("O");
    });

    it("the same player fills row 2 and column 1,2 and 3", () => {
      const {result, rerender} = renderHook(useTicTacToe);
      // row column
      result.current.toggleCell("X", 2, 0);
      rerender();
      result.current.toggleCell("O", 1, 0);
      rerender();
      result.current.toggleCell("X", 0, 0);
      rerender();
      result.current.toggleCell("O", 1, 1);
      rerender();
      result.current.toggleCell("X", 0, 2);
      rerender();
      result.current.toggleCell("O", 1, 2);
      rerender();

      expect(result.current.currentMaxMoves).toBe(6);
      expect(result.current.gameWinner).toBe("O");
    });

    it("the same player fills column 3 and rows 1,2 and 3", () => {
      const {result, rerender} = renderHook(useTicTacToe);
      // row column
      result.current.toggleCell("X", 1, 0);
      rerender();
      result.current.toggleCell("O", 2, 0);
      rerender();
      result.current.toggleCell("X", 0, 0);
      rerender();
      result.current.toggleCell("O", 2, 1);
      rerender();
      result.current.toggleCell("X", 1, 1);
      rerender();
      result.current.toggleCell("O", 2, 2);
      rerender();

      expect(result.current.currentMaxMoves).toBe(6);
      expect(result.current.gameWinner).toBe("O");
    });
  });

  it("Result show be a draw", () => {
    const {result, rerender} = renderHook(useTicTacToe);

    result.current.toggleCell("X", 0, 0);
    rerender();
    result.current.toggleCell("O", 0, 1);
    rerender();
    result.current.toggleCell("X", 0, 2);
    rerender();
    result.current.toggleCell("O", 1, 1);
    rerender();
    result.current.toggleCell("X", 1, 0);
    rerender();
    result.current.toggleCell("O", 1, 2);
    rerender();
    result.current.toggleCell("X", 2, 1);
    rerender();
    result.current.toggleCell("O", 2, 0);
    rerender();
    result.current.toggleCell("X", 2, 2);
    rerender();

    expect(result.current.currentMaxMoves).toBe(9);
    expect(result.current.gameWinner).toBe("Draw");
  });

  it("Scores resets correctly", () => {
    const {result, rerender} = renderHook(useTicTacToe);

    result.current.toggleCell("X", 0, 0);
    rerender();
    result.current.toggleCell("O", 0, 1);
    rerender();
    result.current.toggleCell("X", 0, 2);
    rerender();

    expect(result.current.currentMaxMoves).toBe(3);

    result.current.handleResetBoard();
    rerender();

    expect(result.current.currentMaxMoves).toBe(0);
  });
});
