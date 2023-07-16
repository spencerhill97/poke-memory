import { useEffect, useState } from "react";
import Pokeball from "../ui/Pokeball";

function Card({ pokemon, handleClick }) {
  const { name, id, image } = pokemon;
  return (
    <article className="card" onClick={handleClick}>
      <div className="card__inner" style={{ transformStyle: "preserve-3d" }}>
        <div className="card__front">
          <h2 className="card__front__name">{name}</h2>
          {image && (
            <img className="card__front__image" src={image} alt={name} />
          )}
        </div>
        <div className="card__back">
          <Pokeball />
        </div>
      </div>
    </article>
  );
}

export default Card;
