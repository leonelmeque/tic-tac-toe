import { render, screen } from "@testing-library/react";
import { GameStatus } from "./GameStatus";

describe("GameStatus", () => {
  it("Should render component correctly", () => {
    const { container } = render(<GameStatus />);
    expect(container).not.toBeNull();
  });

  it("should render the current player", () => {
    const { rerender } = render(
      <GameStatus turn="X" currentMaxMoves={5} gameWinner="" />
    );
    expect(screen.getByLabelText("Current Player X")).toBeInTheDocument();

    rerender(<GameStatus turn="O" currentMaxMoves={5} gameWinner="" />);
    expect(screen.getByLabelText("Current Player O")).toBeInTheDocument();
  });

  it("should display the winner as O", () => {
    render(<GameStatus turn="O" currentMaxMoves={5} gameWinner="O" />);

    expect(screen.getByText("Game Winner:")).toBeInTheDocument();
    expect(
      screen.getByRole("img", {
        name: "Game winner is O",
      })
    ).toBeInTheDocument();
  });
});
