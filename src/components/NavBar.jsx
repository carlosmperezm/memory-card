import ScoreBoard from "./ScoreBoard.jsx";

export default function NavBar(props) {
  return (
    <nav>
      <h1>Memory Game</h1>
      <ScoreBoard {...props}></ScoreBoard>
    </nav>
  );
}
