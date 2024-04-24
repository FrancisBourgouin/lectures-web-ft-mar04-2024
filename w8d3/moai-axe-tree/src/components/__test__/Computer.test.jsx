import {fireEvent, render} from "@testing-library/react"
import Computer from "../Computer";

describe("Computer cheating component", () => {
  it("should call the function when clicking on the robot face", () => {
    
    const fakeToggle = jest.fn()
    
    const {debug, queryByText} = render(<Computer toggleCheating={fakeToggle}/>)
   
    // debug()

    const robot = queryByText("🤖") // If it's not there, will return undefined
    // getByText("🤖") // If it's not there, will throw an error
    // findByText("🤖") // If it's not there, it will wait 2s and then throw an error if still not there

    expect(robot).toBeInTheDocument()

    fireEvent.click(robot)

    expect(fakeToggle).toHaveBeenCalled()

    // queryBy / queryAllBy
    // getBy / getAllBy
    // findBy / findAllBy
  })
})