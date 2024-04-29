import "./GameStatus.css";

export type GameStatusProps = {
  currentMaxMoves?: number;
  turn?: string;
  gameWinner?: string;
};

export function GameStatus({
  currentMaxMoves,
  gameWinner,
  turn,
}: GameStatusProps) {
  const renderWinner = () => {
    const winnerImage =
      gameWinner === "X" ? "/assets/cross.png" : "/assets/circle.png";

    switch (gameWinner) {
      case "Draw":
        return <span>Draw</span>;
      case "X":
        return (
          <img
            src={winnerImage}
            alt={`Game winner is ${gameWinner}`}
            width={24}
            height={24}
          />
        );
      case "O":
        return (
          <img
            src={winnerImage}
            alt={`Game winner is ${gameWinner}`}
            width={24}
            height={24}
          />
        );
      default:
        return <span>N/A</span>;
    }
  };

  return (
    <div className="game-status">
      <h2>Game Status</h2>
      <p aria-label={`Current Player ${turn}`}>Current Player: {turn}</p>
      <p>Current Max Moves (Max is 9): {currentMaxMoves}</p>
      <div className="game-status__winner">Game Winner: {renderWinner()}</div>
    </div>
  );
}
