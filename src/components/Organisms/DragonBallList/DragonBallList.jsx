import { CharacterItem } from "../../Molecules/CharacterItem/CharacterItem";
import { useFetchCharactersData } from "../../../hooks/useFetchCharactersData";
import "./DragonBallList.scss";

const DragonBallList = () => {

    const { characters } = useFetchCharactersData(
        {url: "https://dragonball-api.com/api/characters?limit=20",
        resultsAttribute: "items"}
    )

    return (
        <div>
            <h1>DragonBall</h1>
            <div className="charactersContainer">
                {characters.map((character, index) => {
                    return (
                    <>
                        <CharacterItem name={character.name}
                        image={character.image}
                        key={index} />
                    </>
                    );
                })}
            </div>
        </div>
    );
}


export default DragonBallList