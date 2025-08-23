export default function ScoreBoard({ score, bestScore }) {
  const bestScoreClassNames = bestScore >= score && "green";
  const scoreClassNames = bestScore < score && "green";
  return (
    <div className="score-board">
      <p className={bestScoreClassNames}>best: {bestScore} </p>
      <p className={scoreClassNames}>score: {score}</p>
    </div>
  );
}
