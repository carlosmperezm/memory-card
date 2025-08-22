import "../styles/card.css";
import reactSvg from "../assets/react.svg";

export default function Card({ id, imgUrl, onClick, className }) {
  const classNames = className + " card";
  console.log("classNames: ", classNames);
  return (
    <button id={id} className={classNames} onClick={onClick}>
      <img src={imgUrl} />
    </button>
  );
}
