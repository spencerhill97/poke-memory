import Navbar from "./components/Navbar";
import Scoreboard from "./components/Scoreboard";
import Gameboard from "./components/Gameboard";
import { useState } from "react";

function App() {
  return (
    <main>
      <Navbar />
      <Scoreboard />
      <Gameboard />
    </main>
  );
}

export default App;
