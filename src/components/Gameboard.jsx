import Card from "./Card.jsx";
import { useGlobalContext } from "../context/GlobalContext";
import { useState, useEffect } from "react";
import fetchPokemon from "../services/fetchPokemon.js";
import shuffleArray from "../utilities/shuffleArray.js";
import delayCardFlip from "../utilities/delayCardFlip.js";
import delayCardFlipReverse from "../utilities/delayCardFlipReverse.js";
import sleep from "../utilities/sleep.js";
import Loading from "../ui/Loading.jsx";

function Gameboard() {
  const {
    level,
    cardCount,
    isLevelUpdated,
    setIsLevelUpdated,
    incrementTotal,
    incrementScore,
    resetScore,
    setIsGameOver,
    isGameOver,
    game,
  } = useGlobalContext();
  const [pokemons, setPokemons] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadCards = async () => {
      try {
        setIsLoaded(false);
        setPokemons([]);
        await setPokemons(
          await shuffleArray(await fetchPokemon(level, cardCount))
        );
        setIsLoaded(true);
      } catch (error) {
        throw error;
      }
    };
    loadCards();
    setIsUpdated(true);
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
        setIsLevelUpdated(!isLevelUpdated);
        resetScore();
        game.resetPokemon();
      } else {
        handleLoading();
      }
    } else {
      setIsGameOver(!isGameOver);
      game.resetPokemon();
    }
  };

  return (
    <section className="card-grid">
      {isLoaded ? (
        pokemons &&
        pokemons.map((pokemon) => {
          return (
            <Card
              key={pokemon.id}
              pokemon={pokemon}
              handleClick={handleTurn}
              isUpdated={isUpdated}
            />
          );
        })
      ) : (
        <Loading />
      )}
    </section>
  );
}

export default Gameboard;
