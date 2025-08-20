export default function ScoreBoard({ score, bestScore }) {
  return (
    <div>
      <p>best</p>
      <p>{bestScore}</p>
      <p>score</p>
      <p>{score}</p>
    </div>
  );
}
