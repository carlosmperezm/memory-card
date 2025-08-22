import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Card from "./components/Card.jsx";
import { useState, useEffect } from "react";

const BLEACH_ID = 12;

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [visitedCardIds, setVisitedCardIds] = useState([]);

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    let ignore = false;

    const url = `https://api.jikan.moe/v4/manga/${BLEACH_ID}/characters`;
    const characterNames = [
      "Abarai, Renji",
      "Kuchiki, Rukia",
      "Kurosaki, Ichigo",
      "Aizen, Sousuke",
      "Zaraki, Kenpachi",
      "Urahara, Kisuke",
    ];

    if (!ignore) {
      fetch(url, { mode: "cors" })
        .then((response) => response.json())
        .then((json) => json.data)
        .then((data) =>
          data.filter((character) =>
            characterNames.includes(character.character.name),
          ),
        )
        .then((filteredData) => {
          setCharacters(
            filteredData.map((character) => {
              return {
                id: character.character.mal_id,
                name: character.character.name,
                imgUrls: {
                  jpg: character.character.images.jpg.image_url,
                  webp: character.character.images.webp.image_url,
                },
              };
            }),
          );
        })
        .catch((error) => console.error("Err:", error));

      console.log("FROM EFFECT: ");
    }
    return () => {
      console.log("Disconnecting effect");
      ignore = true;
    };
  }, []);

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
        {characters.map((character) => {
          return (
            <Card
              id={character.id}
              imgUrl={character.imgUrls.webp}
              onClick={handleClick}
            ></Card>
          );
        })}
      </main>
    </>
  );
}

export default App;
