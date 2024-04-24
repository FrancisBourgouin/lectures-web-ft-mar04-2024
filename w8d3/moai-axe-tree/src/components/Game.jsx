import { useState } from "react";
import Computer from "./Computer";
import Player from "./Player";
import Result from "./Result";
import {
  compareResults,
  pickOppositeChoice,
  pickRandomChoice,
} from "../helpers/gameHelpers";

export default function Game(props) {
  const [computerCheating, setComputerCheating] = useState(true);
  const [winner, setWinner] = useState(null);

  const toggleCheating = () => setComputerCheating(!computerCheating);

  const play = (playerChoice) => {
    let computerChoice;

    if (computerCheating) {
      computerChoice = pickOppositeChoice(playerChoice);
    } else {
      computerChoice = pickRandomChoice(Math.random());
    }

    const result = compareResults(playerChoice, computerChoice);

    setTimeout(() => {
      setWinner(result);
    }, 1000)
  };
  return (
    <div>
      <main className="game">
        <Computer isCheating={computerCheating} toggleCheating={toggleCheating} />
        <Player play={play} />
      </main>
      <Result winner={winner} />
    </div>
  );
}
