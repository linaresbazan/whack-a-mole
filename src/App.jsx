import { useGame } from "./GameContext";
import GameStart from "./GameStart";
import GamePlay from "./GamePlay";

export default function App() {
  const { phase } = useGame();
  if (phase === "play") return <GamePlay />;
  return <GameStart />;
}
