// 🗿🪓🌲

import { compareResults, pickOppositeChoice, pickRandomChoice } from "./gameHelpers";

describe("pickOppositeChoice tests", () => {
  it("should properly pick the opposite", () => {
    const winningPairs = {
      "🗿": "🌲",
      "🪓": "🗿",
      "🌲": "🪓",
    };

    for (const playerChoice in winningPairs) {
      const result = pickOppositeChoice(playerChoice);

      expect(result).toBe(winningPairs[playerChoice]);
    }
  });
  it("should throw an error if no choice is provided", () => {
    const throwyFunction = () => pickOppositeChoice();

    expect(throwyFunction).toThrow("(╯°□°）╯︵ ┻━┻  WHY IS THERE NO VALUE");
  });
  it("should throw an error if the choice is invalid", () => {
    const throwyFunction = () => pickOppositeChoice("🥔");

    expect(throwyFunction).toThrow("༼ つ ◕_◕ ༽つ WHAT IS THIS CHOICE");
  });
});
describe("pickRandomChoice tests", () => {
  it("should return one of the three values", () => {
    const choices = ["🗿", "🌲", "🪓"];

    const result1 = pickRandomChoice(6);
    const result2 = pickRandomChoice(7);
    const result3 = pickRandomChoice(9);

    expect(choices).toContain(result1);
    expect(choices).toContain(result2);
    expect(choices).toContain(result3);
  });
});
describe("compareResults tests", () => {
  it("should properly evaluate who wins in the two choices", () => {
    const pairs = [
      ["🗿", "🗿", "tie"],
      ["🗿", "🌲", "computer"],
      ["🪓", "🌲", "player"],
    ];

    for (const pair of pairs) {
      const result = compareResults(pair[0], pair[1]);

      expect(result).toBe(pair[2])
    }
  });
  xit("should throw an error if a choice is invalid or missing", () => {
    //
  });
});
