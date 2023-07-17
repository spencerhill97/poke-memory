export default class GameController {
  constructor() {
    this.pokemon = [];
  }

  resetPokemon() {
    this.pokemon = [];
  }

  addPokemon(name) {
    this.pokemon.push(name);
  }

  checkMove(name) {
    return this.pokemon.includes(name) === false;
  }

  checkLevel(cardCount) {
    return this.pokemon.length === cardCount;
  }
}
