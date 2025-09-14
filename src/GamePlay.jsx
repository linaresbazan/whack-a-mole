import { useGame } from "./GameContext";

export default function GamePlay() {
  const { selectedHole, moleWhacked, restartGame, score } = useGame(); 

  const holeList = [];
  for (let i = 0; i < 9; i++) {
    let listClass = "hole";
    if (i === selectedHole) {
      listClass = listClass + " mole";
      holeList.push(<li key={i} className={listClass} onClick={() => moleWhacked()}></li>);
    } else {
      holeList.push(<li key={i} className={listClass}></li>);
    }
    // holeList.push(<li key={i} className={`hole ${i === selectedHole ? " mole" : ""}`}></li>);
  }

  return(
    <>
      <header>
        <h1>Whack a Mole</h1>
      </header>
      <main>
        <div>
          <p>Score: {score}</p>
          <p>Time: Unlimited</p>
          <button onClick={() => restartGame()}>Restart</button>
        </div>
        <div>
          <ul className="whack-a-mole">
            {holeList}
          </ul>
        </div>
      </main>
    </>
  );
}