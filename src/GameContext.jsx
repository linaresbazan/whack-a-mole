import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider ({children}) {
  const [selectedHole, setSelectedHole] = useState(Math.floor(Math.random() * 8));
  const [score, setScore] = useState(0);
  const [highScores, setHighScores] = useState([]);
  const [phase, setPhase] = useState("");

  const moleWhacked = () => {
    increaseScore();
    updateHole();
  };

  const increaseScore = () => {
    setScore(score + 1);
  }

  const resetScore = () => {
    setScore(0);
  }

  const updateHole = () => {
    setSelectedHole(Math.floor(Math.random() * 8));
  };

  const startGame = () => {
    resetScore();
    updateHole();
    setPhase("play");
  }

  const restartGame = () => {
    setPhase("restart");
    const currentHighScores = [...highScores];
    currentHighScores.push(score);
    setHighScores(currentHighScores.sort((a, b) => b - a));
  }

  const value = {
    phase,
    setPhase,
    selectedHole,
    updateHole,
    score,
    moleWhacked,
    startGame,
    restartGame,
    highScores,
  };
  return (
    <GameContext.Provider value={value}>{children}</GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) throw Error("useGame must be used within a GameProvider");
  return context;
}