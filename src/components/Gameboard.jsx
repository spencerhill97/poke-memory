import Card from "./Card.jsx";
import { useGlobalContext } from "../context/GlobalContext";
import { useState, useEffect } from "react";
import fetchPokemon from "../services/fetchPokemon.js";
import shuffleArray from "../utilities/shuffleArray.js";
import delayCardFlip from "../utilities/delayCardFlip.js";
import delayCardFlipReverse from "../utilities/delayCardFlipReverse.js";
import sleep from "../utilities/sleep.js";

function Gameboard() {
  const { level, cardCount } = useGlobalContext();
  const [pokemons, setPokemons] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    const loadCards = async () => {
      await setPokemons(shuffleArray(await fetchPokemon(level, cardCount)));
    };
    loadCards();
  }, [level]);

  const handleLoading = async () => {
    try {
      await delayCardFlip("card__inner", "card__inner--flip");
      await sleep(750);
      setIsUpdated(!isUpdated);
      await setPokemons(shuffleArray(pokemons));
      setIsUpdated(!isUpdated);
      await sleep(750);
      await delayCardFlipReverse("card__inner", "card__inner--flip");
    } catch (error) {
      throw error;
    }
  };

  return (
    <section className="card-grid">
      {pokemons &&
        pokemons.map((pokemon, index) => {
          return (
            <Card
              key={pokemon.id}
              pokemon={pokemon}
              index={index}
              handleClick={handleLoading}
              isUpdated={isUpdated}
            />
          );
        })}
    </section>
  );
}

export default Gameboard;
