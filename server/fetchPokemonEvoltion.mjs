import fetch from "node-fetch"; 

function fetchPokemonEvoltion(/*pokemonName*/) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/ditto/`)
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.log(error));
}