import { useState, useEffect } from "react";
import PokemonItem from "../../Molecules/PokemonItem/PokemonItem";
import "./PokemonList.scss";

const PokemonList = () => {

    const [pokemons, setPokemons] = useState([]);

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
                        <PokemonItem name={pokemon.name} key={index} />
                    </>
                    );
                })}
            </div>
        </div>
    );
}


export default PokemonList