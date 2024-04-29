import "./App.css";
import Board from "./components/board/Board";
import Cell from "./components/cell/Cell";
import Row from "./components/row/Row";

function App() {
  return (
    <div className="App">
      <Board Cell={Cell} Row={Row}></Board>
    </div>
  );
}

export default App;
