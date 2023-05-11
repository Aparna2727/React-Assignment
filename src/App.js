import { useEffect, useState } from "react";
import "./App.css";
import { Square } from "./Components/Square";

//Initial Array
const initialState = ["", "", "", "", "", "", "", "", ""];

function App() {
  const [gameState, setGameState] = useState(initialState); // initially our gameState will blanck
  const [steps, setSteps] = useState(0);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    checkForWinner(gameState);
  }, [gameState]);

  function onClickhandler(event) {
    //  console.log("event>>", event.target.id)
    //  let's ex hit suare box id:2
    //  ["", "", "X","", "", "","", "", ""] => indexing [0,1,2,3,4,5,6,7,8]
    //  setGameState(["", "", "X","", "", "","", "", ""])

    const copyOfGameState = [...gameState]; // Destructuring our gameSate values like copy

    if (!event.target.innerText) {
      copyOfGameState[event.target.id] = steps % 2 === 0 ? "x" : "o"; // if number is even we will show like 'x' and if number odd we will show 'o'
      setSteps(steps + 1);
      setGameState(copyOfGameState);
    }
  }
  // Handling button functionality
  function restartGame() {
    setGameState(initialState);
    setSteps(0); // start from "x"
    setWinner(null)
  }

  // this function will check winner
  // winning 1st condition :- {0,1,2},{3,4,5},{6,7,8}  horizontle
  // winning 2nd condition :- {0,3,6},{1,4,7},{2,5,8}  vertical
  // winning 3rd condition :- {0,4,8},{2,4,6}          daigonal

  function checkForWinner(gameSate) {
    // 2D-Array
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    winningConditions.forEach((condition) => {
      const [a, b, c] = condition; // [0,1,2],[3,4,5] and up to array element iterate destruchturing

      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        setWinner(gameState[a]);
        console.log("winner>>", gameState[a]);
      }
    });
  }
  return (
    <div className="container">
      <div className="left-wtapper">
        <div className="left-text">Let's Play the Tic-tac-toe Game!</div>
        <div className="button" onClick={restartGame}>
          Start Again
        </div>
      </div>
      {!winner && steps < 9 && (
        <div className="right-wrapper">
          {" "}
          {/* //if !winner have to win game will disapear */}
          <div className="players-x-o">
            <div className={`player ${steps % 2 === 0 && "player-x"}`}>
              Player X
            </div>
            <div className={`player ${steps % 2 === 1 && "player-o"}`}>
              Player O
            </div>
          </div>
          <div className="game-wrapper" onClick={onClickhandler}>
            <Square
              id={0}
              state={gameState[0]}
              className="border-right-bottom"
            />
            <Square
              id={1}
              state={gameState[1]}
              className="border-right-bottom"
            />
            <Square id={2} state={gameState[2]} className="border-bottom" />
            <Square
              id={3}
              state={gameState[3]}
              className="border-right-bottom"
            />
            <Square
              id={4}
              state={gameState[4]}
              className="border-right-bottom"
            />
            <Square id={5} state={gameState[5]} className="border-bottom" />
            <Square id={6} state={gameState[6]} className="border-right" />
            <Square id={7} state={gameState[7]} className="border-right" />
            <Square id={8} state={gameState[8]} />
          </div>
        </div>
      )}
      {/*If we have a winner  */}
      {(winner || steps === 9) && <div className="winner-wrapper">
        <div className="winner-text">{steps === 9 && !winner ? "Its a Draw" :`${winner} Win!`}</div>
        </div>}
    </div>
  );
}

export default App;
