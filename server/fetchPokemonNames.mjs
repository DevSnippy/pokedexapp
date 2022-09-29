import fetch from 'node-fetch';


export default async function fetchPokemonNames() {
    return fetch('https://pokeapi.co/api/v2/pokemon/?limit=493 ')
        .then(response => response.json())
        .then(data => data.results.map(function (pokemon)
         { return {

             "value": pokemon.name, "label": pokemon.name 
            }
         }
         )
         )
         

}




