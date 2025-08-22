export default function ScoreBoard({ score, bestScore }) {
  const bestScoreClassNames = bestScore >= score ? "green" : "red";
  return (
    <div className="score-board">
      <p className={bestScoreClassNames}>best: {bestScore} </p>
      <p>score: {score}</p>
    </div>
  );
}
