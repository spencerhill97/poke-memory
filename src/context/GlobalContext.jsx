import { useContext, createContext, useState, useEffect } from "react";
import GameController from "../controllers/GameController";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [game, setGame] = useState(null);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [level, setLevel] = useState(0);
  const [cardCount, setCardCount] = useState(10);

  const [isLevelUpdated, setIsLevelUpdated] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    setGame(new GameController());
  }, []);

  function incrementScore() {
    setScore(score + 1);
  }

  function resetScore() {
    setScore(0);
  }

  function incrementTotal() {
    setTotal(total + 1);
  }

  function incrementLevel() {
    setLevel(level + 1);
    setIsLevelUpdated(!isLevelUpdated);
  }

  function restartGame() {
    console.log("ran");
    setScore(0);
    setTotal(0);
    setLevel(0);
    setIsGameOver(!isGameOver);
  }

  const value = {
    score,
    total,
    level,
    incrementScore,
    incrementLevel,
    incrementTotal,
    restartGame,
    cardCount,
    game,
    setGame,
    resetScore,
    isLevelUpdated,
    setIsLevelUpdated,
    isGameOver,
    setIsGameOver,
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default AppContext;
