import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Card from "./components/Card.jsx";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [visitedCardIds, setVisitedCardIds] = useState([]);

  function handleClick(e) {
    const card = e.target.type === "submit" ? e.target : e.target.parentNode;
    const wasCardVisited = visitedCardIds.find((id) => id === card.id);
    if (wasCardVisited) {
      score > bestScore && setBestScore(score);
      setScore(0);
      setVisitedCardIds([]);
    } else {
      setScore(score + 1);
      setVisitedCardIds([...visitedCardIds, card.id]);
    }
  }

  return (
    <>
      <NavBar score={score} bestScore={bestScore}></NavBar>
      <main className="cards-container">
        <Card id={0} onClick={handleClick}></Card>
        <Card id={1} onClick={handleClick}></Card>
        <Card id={2} onClick={handleClick}></Card>
        <Card id={3} onClick={handleClick}></Card>
        <Card id={4} onClick={handleClick}></Card>
      </main>
    </>
  );
}

export default App;
