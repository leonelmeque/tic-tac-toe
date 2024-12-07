import React from "react";
import "./Board.css";
import {RowProps} from "../row/Row";
import {CellProps} from "../cell/Cell";
import {GameStatus} from "../game-status/GameStatus";
import {useTicTacToe} from "./use-tic-tac-toe";

type BoardProps = {
  Cell: React.FunctionComponent<CellProps>;
  Row: React.FunctionComponent<RowProps>;
};

export default function Board({Cell, Row}: BoardProps) {
  const {
    board,
    handleResetBoard,
    disabledGameIfPlayerHasWonOrMaxMoves,
    currentMaxMoves,
    turn,
    gameWinner,
    toggleCell
  } = useTicTacToe();

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
                  disabled={disabledGameIfPlayerHasWonOrMaxMoves}
                  onToggle={() => toggleCell(turn, rowIndex, cellIndex)}></Cell>
              ))}
            </Row>
          ))}
        </div>
        <button className="reset" onClick={handleResetBoard}>
          RESET
        </button>
      </div>
    </main>
  );
}
