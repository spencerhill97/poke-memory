import Card from "./Card.jsx";
import { useGlobalContext } from "../context/GlobalContext";
import { useState, useEffect } from "react";
import fetchPokemon from "../services/fetchPokemon.jsx";
import shuffleArray from "../utilities/shuffleArray.jsx";

function Gameboard() {
  const { level, cardCount } = useGlobalContext();
  const [isLoading, setIsLoading] = useState(false);
  const [pokemons, setPokemons] = useState(null);

  // useEffect(() => {
  //   const loadCards = async () => {
  //     setPokemons(shuffleArray(await fetchPokemon(level, cardCount)));
  //   };

  //   loadCards();
  // }, [level]);

  useEffect(() => {
    setPokemons([
      { id: 1, name: 1, image: null },
      { id: 2, name: 2, image: null },
      { id: 3, name: 3, image: null },
      { id: 4, name: 4, image: null },
      { id: 5, name: 5, image: null },
      { id: 6, name: 6, image: null },
      { id: 7, name: 7, image: null },
      { id: 8, name: 8, image: null },
      { id: 9, name: 9, image: null },
      { id: 10, name: 10, image: null },
    ]);
  }, []);

  const handleShuffle = async () => {
    try {
      await setIsLoading(true);
      await setPokemons(shuffleArray(pokemons));
      await setIsLoading(false);
    } catch (error) {
      throw error;
    }
  };

  return (
    <section className="card-grid">
      {!isLoading &&
        pokemons &&
        pokemons.map((pokemon) => {
          return (
            <Card
              key={pokemon.id}
              pokemon={pokemon}
              handleClick={handleShuffle}
            />
          );
        })}
    </section>
  );
}

export default Gameboard;
