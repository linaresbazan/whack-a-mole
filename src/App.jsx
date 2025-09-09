import { useGame } from "./GameContext";
import GameStart from "./GameStart";
import GamePlay from "./GamePlay";

export default function App() {
  return (
    <main>
      <GameStart />
      <GamePlay />
    </main>
);
}
