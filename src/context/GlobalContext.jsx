import { useContext, createContext, useState, useEffect } from "react";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [level, setLevel] = useState(0);
  const [cardCount, setCardCount] = useState(10);

  function incrementScore() {
    setScore(score + 1);
  }

  function incrementTotal() {
    setScore(total + 1);
  }

  function incrementLevel() {
    setScore(level + 1);
  }

  function restartGame() {
    setScore(0);
    setTotal(0);
    setLevel(0);
  }

  const value = {
    incrementScore,
    incrementLevel,
    incrementTotal,
    restartGame,
    cardCount,
    level,
  };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default AppContext;
