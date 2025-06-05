import { CharacterItem } from "../../Molecules/CharacterItem/CharacterItem";
import { useFetchCharactersData } from "../../../hooks/useFetchCharactersData";
import "./PokemonList.scss";

const PokemonList = () => {

   const { characters } = useFetchCharactersData(
        {url: "https://pokeapi.co/api/v2/pokemon/",
        resultsAttribute: "results"}
    );

    return (
        <div>
            <h1>Pokemon</h1>
            <div className="pokemonsContainer">
                {characters.map((pokemon, index) => {
                    return (
                    <>
                        <CharacterItem name={pokemon.name} 
                        image={`https://img.pokemondb.net/sprites/home/normal/${pokemon.name}.png`} 
                        key={index + 1} />
                    </>
                    );
                })}
            </div>
        </div>
    );
}

export default PokemonList