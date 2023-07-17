import axios from "axios";

async function fetchPokemon(level, amount) {
  const offset = level ? level * amount + 1 : 1;
  const result = [];
  try {
    for (let i = offset; i < offset + amount; i++) {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${i}`
      );
      const pokemon = await response.data;
      const id = pokemon.id;
      const name = pokemon.name;
      const image = pokemon.sprites.front_default;
      const type = pokemon.types[0].type.name;
      result.push({ id, name, image, type });
    }
    return result;
  } catch (error) {
    throw error;
  }
}

export default fetchPokemon;
