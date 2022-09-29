import fetch from 'node-fetch'; 

// const pokemonName = "https://pokeapi.co/api/v2/pokemon/${selectedPokemon}/"

 async function  fetchPokemonData (/*pokemoName*/) {
    return fetch('https://pokeapi.co/api/v2/pokemon/ditto/') // fetch the data from the API
        .then(response => response.json()) // parse the response as JSON
        .then(data => data)  // return the data
        .catch(error => console.log(error)); // log any errors



    } 



export default fetchPokemonData; 