import { useState, useEffect } from "react";

const useFetchCharactersData = ({url, resultsAttribute}) => {
  
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
            fetch(url)
            .then((res) => res.json())
            .then((charactersList) => {
                setLoading(false)
                setCharacters(charactersList[resultsAttribute]);
            });
        }, []);
  
    return { characters, loading }
}

export { useFetchCharactersData }