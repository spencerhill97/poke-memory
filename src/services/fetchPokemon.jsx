export default function fetchPokemon(startingIndex) {
  return `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${startingIndex}`;
}
