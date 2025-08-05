import { render, screen, fireEvent } from "@testing-library/react"
import FlagContainer from "./FlagContainer"
import countries from "@/data/country"

beforeEach(() => {
    window.confirm = jest.fn(() => true);
    window.alert = jest.fn();
})

it("renders the question with the targets country name", () => {
    render(<FlagContainer />)
    const question = /Which country flag belongs to/i;
    expect(screen.getByText(question)).toBeInTheDocument();
})

it("increases score when correct answer", () => {
    jest.spyOn(global.Math, "random").mockReturnValue(0)

    render(<FlagContainer />);
    const correctCountry = countries[0];
    const correctImage = screen.getByAltText(correctCountry.alt);

    fireEvent.click(correctImage);
    expect(window.confirm).toHaveBeenCalled();
    expect(screen.getByText("Score: 1")).toBeInTheDocument();
})

it("does not increase score on wrong answer", () => {
    jest.spyOn(global.Math, "random").mockReturnValue(0);

    render(<FlagContainer />)
    const wrongCountry = countries[1];
    const wrongImage = screen.getByAltText(wrongCountry.alt);

    fireEvent.click(wrongImage);
    expect(window.alert).toHaveBeenCalledWith("wrong flag");
    expect(screen.getByText("Score: 0")).toBeInTheDocument();
})