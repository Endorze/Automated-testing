"use client"
import { useState } from "react";
import countries from "@/data/country"
import Flag from "../Flag/Flag";

const FlagContainer = () => {

    const [score, setScore] = useState(0);

    const getRandomCountry = () => {
        const randomIndex = Math.floor(Math.random() * countries.length);
        return countries[randomIndex];
    }

    const [targetCountry, setTargetCountry] = useState(getRandomCountry());

    const handleFlagClick = (clickedId: number) => {
        if (clickedId === targetCountry.id) {
            const shouldContinue = confirm("Correct! +1 Point. Continue?")
            if (shouldContinue) {
                setScore(score + 1)
                setTargetCountry(getRandomCountry())

            }
        } else {
            alert("wrong flag");
        }
    }

    return (
        <div>
            <h2 className="text-xl mb-4">Which country flag belongs to {targetCountry.name}?</h2>
            <p className="mb-4">Score: {score}</p>
            <div className="flex gap-6 flex-wrap">
                {countries.map((country) => (
                    <Flag
                        key={country.id}
                        id={country.id}
                        imageUrl={country.flagUrl}
                        altText={country.alt}
                        onClick={handleFlagClick}
                    />
                ))}
            </div>
        </div>
    )
}

export default FlagContainer;