import { fireEvent, render } from "@testing-library/react";
import Game from "../Game";

describe("Game component functionality", () => {
  it("should update the class of the robot when the robot is clicked", () => {
    const { queryByTestId } = render(<Game />);

    const robot = queryByTestId("robot");

    expect(robot).toHaveClass("cheating");

    fireEvent.click(robot);

    expect(robot).not.toHaveClass("cheating");
  });

  it("should show the winner as the computer if the computer cheats", () => {
    const { getByText, findByTestId } = render(<Game />);

    const moaiButton = getByText("🗿");

    fireEvent.click(moaiButton);

    return findByTestId("result").then((result) => {
      expect(result).toHaveTextContent("SKYNET IS BACK BABY!");
    })

  });

  it("should show the winner when the player chooses an item and the computer is not cheating", async () => {
    const { getByText, getByTestId, findByTestId } = render(<Game />);
    const potentialOutcomes = [
      "SKYNET IS BACK BABY!",
      "We won, for now.",
      "Windsor or nothing."
    ]

    const robot = getByTestId("robot");

    fireEvent.click(robot);

    const moaiButton = getByText("🗿");

    fireEvent.click(moaiButton);

    // const result = getByTestId("result");

    // expect(result).not.toHaveTextContent("Waiting for your choice!");

    const result = await findByTestId("result")
    
    expect(result).not.toHaveTextContent("Waiting for your choice!")
    
  });
});
