import { useState, useEffect } from "react";

const Pokedex = () => {

    const [inputPokemon, setInputPokemon] = useState("");
    const [pokemon, setPokemon] = useState([]);

    const handleInputChange = (event) => {
        const searchParam = event.target.value;
        if(searchParam) {
            setInputPokemon(searchParam);
        }
    };

    useEffect(() => {
        
        if (inputPokemon) {
           fetch(`https://pokeapi.co/api/v2/pokemon/${inputPokemon}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setPokemon(data);
            }) 
            .catch(() => {
                setPokemon("Pokemon not founded");
                console.log(pokemon);
            });
        }
        
    }, [inputPokemon])
    

    return (
        <>
            <h1>Pokedex</h1>
            <input type="search" onChange={handleInputChange} placeholder="Search pokemon..."/>

            <div>{pokemon.name}</div>
            {/* <img src={pokemon.sprites.front_default} /> */}
        </>
    )
}

export default Pokedex