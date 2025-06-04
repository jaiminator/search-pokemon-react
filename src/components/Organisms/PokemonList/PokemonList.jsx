import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { CharacterItem } from "../../Molecules/CharacterItem/CharacterItem";
import "./PokemonList.scss";

const PokemonList = () => {

    const [pokemons, setPokemons] = useState([]);
    const theme = useContext(ThemeContext);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/")
        .then((res) => res.json())
        .then((pokemonList) => {
            setPokemons(pokemonList.results);
        });
    }, []);
    

    return (
        <div>
            <h1>Pokemon</h1>
            <div className="pokemonsContainer">
                {pokemons.map((pokemon, index) => {
                    return (
                    <>
                        <CharacterItem name={pokemon.name} image={`https://img.pokemondb.net/sprites/home/normal/${pokemon.name}.png`} key={index} />
                    </>
                    );
                })}
            </div>
        </div>
    );
}


export default PokemonList