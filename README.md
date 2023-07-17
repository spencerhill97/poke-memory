
# Pokemon Memory Game

This is a memory game where the user has to remember which pokemon they chose. The game is played in rounds of 10 and if the user picks 10 pokemon in row without any duplicates they beat there current level. If the user picks a duplicate pokemon, then they lose and start from the beginning. This game was really fun to make and I took my learning of Promises and react a step further. The shuffling animation was the biggest hurdle for me and I had to build my own sleep helper to wait for the setTimeout method to complete for each card.
## Demo

https://spencerhill97.github.io/poke-memory/


## Tech Stack

<div align="left">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="50" height="50"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="50" height="50" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="50" height="50">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="50" height="50"/>

          
          
## Docs

### Install

Install poke-memory with npm

```bash
  npm install
  cd poke-memory
```

### Start

Starting the development server

```bash
npm run dev

```

### Build Tailwind CSS

un the CLI tool to scan your template files for classes and build your CSS

```bash
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

```

### Deployment

For deploying your website navigate [here](https://medium.com/@badreddine.boudaoud21/create-a-react-app-with-vite-and-deploy-it-on-github-48b82e19f821)
    
## Screenshots

<img src="https://github.com/spencerhill97/poke-memory/assets/113248092/90969c74-f0c9-40d4-91d7-b5ce0c89e95b" />



## Future Features

- Make a login and leaderboard
- Have the abilitiy to toggle difficulty and randomize Pokedex order
- Multiplayer to play against friend

## Acknowledgements

 - Inspired by [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-memory-card-old)

 - [Poke API](https://pokeapi.co/)


