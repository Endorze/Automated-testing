import Subtitle from "../Subtitle/Subtitle";

const Header = () => {
    return (
        <header className="p-6 bg-black text-center">
            <h1 className="text-8xl font-bold">
                Flags of the World
            </h1>
            <Subtitle text="Guess the country"/>
        </header>
    )
}

export default Header;