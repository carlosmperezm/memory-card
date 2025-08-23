import "../styles/card.css";

export default function Card({ id, imgUrl, onClick, className }) {
  const classNames = className + " card";
  return (
    <button id={id} className={classNames} onClick={onClick}>
      <img src={imgUrl} />
    </button>
  );
}
