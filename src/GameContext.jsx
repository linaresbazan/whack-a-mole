import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider ({children}) {
  const value = {};
  return (
    <GameContext.Provider value={value}>{children}</GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) throw Error("useGame must be used within a GameProvider");
  return context;
}