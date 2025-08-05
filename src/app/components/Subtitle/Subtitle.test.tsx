import { render, screen } from "@testing-library/react"
import Subtitle from "./Subtitle"

it("test that the subtitle h3 component renders a text", () => {
    const expectedText = "Guess the country"
    render(<Subtitle text={expectedText}/>)

    const element = screen.getByRole("heading", {level: 3, name:expectedText})
})