import { render, screen } from "@testing-library/react"
import Header from "./Header"


it("Tests that the pagetitle is rendered on the screen", () => {
    render(<Header />)

    const pageTitle = screen.getByText(/Flags of the World/i)
    expect(pageTitle).toBeInTheDocument();
})

it("Test that the title is an H1", () => {
    render(<Header />)

    const pageTitle = screen.getByRole("heading", {level: 1, name: "Flags of the World"})
    expect(pageTitle).toBeInTheDocument();
})

it("Integrated test checking that subtitle works as intended with header", () => {
    render(<Header />)

    const subtitleText= screen.getByRole("heading", {level:3, name:/Guess the country/i})
    expect(subtitleText).toBeInTheDocument();
    
})