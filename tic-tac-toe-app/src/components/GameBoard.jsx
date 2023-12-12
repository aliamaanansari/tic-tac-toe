const initialGameBoard = [[null, "X"], [], []];

export default function GameBoard() {
  return (
    <ol id="game-board">
      {initialGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}></li>
      ))}
    </ol>
  );
}
