import { useState, useEffect, useContext } from "react";
import { CharacterItem } from "../../Molecules/CharacterItem/CharacterItem";
import "./DragonBallList.scss";

const DragonBallList = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch("https://dragonball-api.com/api/characters?limit=20")
        .then((res) => res.json())
        .then((data) => {
            setCharacters(data.items);
        });
    }, []);
    

    return (
        <div>
            <h1>DragonBall</h1>
            <div className="charactersContainer">
                {characters.map((character, index) => {
                    return (
                    <>
                        <CharacterItem name={character.name} image={character.image} key={index} />
                    </>
                    );
                })}
            </div>
        </div>
    );
}


export default DragonBallList