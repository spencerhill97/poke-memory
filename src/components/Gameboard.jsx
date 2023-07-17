import Card from "./Card.jsx";
import { useGlobalContext } from "../context/GlobalContext";
import { useState, useEffect } from "react";
import fetchPokemon from "../services/fetchPokemon.js";
import shuffleArray from "../utilities/shuffleArray.js";
import delayCardFlip from "../utilities/delayCardFlip.js";
import delayCardFlipReverse from "../utilities/delayCardFlipReverse.js";
import sleep from "../utilities/sleep.js";

function Gameboard() {
  const {
    level,
    score,
    total,
    cardCount,
    incrementLevel,
    incrementTotal,
    incrementScore,
    resetScore,
    restartGame,
    game,
  } = useGlobalContext();
  const [pokemons, setPokemons] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    const loadCards = async () => {
      setPokemons([]);
      await setPokemons(shuffleArray(await fetchPokemon(level, cardCount)));
    };
    loadCards();
  }, [level]);

  const handleLoading = async () => {
    try {
      await delayCardFlip("card__inner", "card__inner--flip");
      await sleep(250);
      setIsUpdated(!isUpdated);
      await setPokemons(shuffleArray(pokemons));
      setIsUpdated(!isUpdated);
      await sleep(250);
      await delayCardFlipReverse("card__inner", "card__inner--flip");
    } catch (error) {
      throw error;
    }
  };

  const handleTurn = (name) => {
    if (game.checkMove(name)) {
      game.addPokemon(name);
      incrementTotal();
      incrementScore();
      if (game.checkLevel(cardCount)) {
        console.log("next level");
        incrementLevel();
        resetScore();
        game.resetPokemon();
      } else {
        console.log("next turn");
        handleLoading();
      }
    } else {
      restartGame();
      game.resetPokemon();
    }
  };

  return (
    <section className="card-grid">
      {pokemons &&
        pokemons.map((pokemon) => {
          return (
            <Card
              key={pokemon.id}
              pokemon={pokemon}
              handleClick={handleTurn}
              isUpdated={isUpdated}
            />
          );
        })}
    </section>
  );
}

export default Gameboard;
