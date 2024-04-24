export const pickOppositeChoice = (playerChoice) => {
  const choices = ["🗿", "🌲", "🪓", "🗿"];

  if (!playerChoice) {
    throw new Error("(╯°□°）╯︵ ┻━┻  WHY IS THERE NO VALUE");
  }

  if (!choices.includes(playerChoice)) {
    throw new Error("༼ つ ◕_◕ ༽つ WHAT IS THIS CHOICE");
  }

  // const winningPairs = {
  //   "🗿": "🌲",
  //   "🪓": "🗿",
  //   "🌲": "🪓",
  // };

  return choices[choices.indexOf(playerChoice) + 1];
};

export const pickRandomChoice = (seed) => {
  const choices = ["🗿", "🌲", "🪓"];

  const index = Math.round(Math.sqrt(seed * 137826571213 / 23892 * 1038)) % 3

  return choices[index]
};

export const compareResults = (playerChoice, computerChoice) => {
    const winningPairs = {
    "🗿": "🌲",
    "🪓": "🗿",
    "🌲": "🪓",
  };

  if(playerChoice === computerChoice){
    return "tie"
  }

  if(computerChoice === winningPairs[playerChoice]){
    return "computer"
  }

  return "player"
};

// // When we will test the robot component
// export const toggleCheatingMode = () => {
//   //
// };
