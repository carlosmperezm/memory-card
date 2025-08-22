import "../styles/card.css";
import reactSvg from "../assets/react.svg";

export default function Card({ id, imgUrl, onClick }) {
  // const imgUrl = reactSvg;
  return (
    <button id={id} className="card" onClick={onClick}>
      <img src={imgUrl} />
    </button>
  );
}
