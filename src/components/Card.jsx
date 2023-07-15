import { useEffect } from "react";

function Card({ pokemon, handleClick }) {
  const { name, id, image } = pokemon;
  return (
    <article className="card" onClick={handleClick}>
      <h2 className="card__name">{name}</h2>
      {image && <img className="card__image" src={image} alt={name} />}
    </article>
  );
}

export default Card;
