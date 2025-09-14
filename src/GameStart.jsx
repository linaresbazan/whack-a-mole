import { useGame } from "./GameContext";

export default function GameStart() {
  const { startGame, highScores } = useGame();

  return (
    <>
      <header>
        <h1>Whack a Mole</h1>
      </header>
      <main>
        <div>
          <p>Welcome to Whack a Mole!</p>
          <p>Whack a mole to earn points.</p>
          <p>How many can you get?</p>
          <button onClick={() => startGame()}>Play</button>
        </div>
        <div>
          <h2>High Scores</h2>
          <ul>
            {highScores.map((highScore, index) => (
              <li key={index}>{highScore}</li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}