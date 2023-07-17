import Pokeball from "../ui/Pokeball";

function Card({ pokemon, handleClick }) {
  const { name, id, image, type } = pokemon;

  return (
    <article className="card" onClick={() => handleClick(name)}>
      <div className="card__inner card__inner">
        <div className={`card__front card__front--${type}`}>
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
