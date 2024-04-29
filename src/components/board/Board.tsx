import React from "react";
import { useGameBoard } from "../../hooks/use-game-board";
import "./Board.css";
import { RowProps } from "../row/Row";
import { CellProps } from "../cell/Cell";
import { useGameLogic } from "../../hooks/use-game-logic";
import { GameStatus } from "../game-status/GameStatus";

type BoardProps = {
  Cell: React.FunctionComponent<CellProps>;
  Row: React.FunctionComponent<RowProps>;
};

export default function Board({ Cell, Row }: BoardProps) {
  const { board, handleBoardMutation, handleResetBoard } = useGameBoard();
  const { toggleCell, currentMaxMoves, turn, gameWinner, resetScore } =
    useGameLogic(board, handleBoardMutation);

  const resetGame = () => {
    handleResetBoard();
    resetScore();
  };

  return (
    <main>
      <div className="container">
        <h1 className="title">
          Tic Tac Toe Game In <span>React</span>
        </h1>
        <GameStatus
          currentMaxMoves={currentMaxMoves}
          gameWinner={gameWinner}
          turn={turn}
        />
        <div className="board">
          {board.map((cells, rowIndex) => (
            <Row key={rowIndex}>
              {cells.map((cellState, cellIndex) => (
                <Cell
                  key={cellIndex}
                  state={cellState}
                  onToggle={() => toggleCell(turn, rowIndex, cellIndex)}></Cell>
              ))}
            </Row>
          ))}
        </div>
        <button className="reset" onClick={resetGame}>
          RESET
        </button>
      </div>
    </main>
  );
}
