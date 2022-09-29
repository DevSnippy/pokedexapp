import  Express  from "express";  
import fetchPokemonNames from "./fetchPokemonNames.mjs";  
import fetchPokemonData from "./fetchPokemonData.mjs";  

import fetch from "node-fetch";




const names = await fetchPokemonNames();
const pokemonData = await fetchPokemonData();   
const port =  3001;
const app = Express();



app.get("/", (req, res) => {
    res.send("Hello World!");
}
);

app.get ("/search/:name", ( req , res) => {  


    res.header("Access-Control-Allow-Origin", "*");
    
    fetch (`https://pokeapi.co/api/v2/pokemon/${req.params.name}`) 

    .then (res => res.json())
    .then (data => {
        res.json(data);
     }
    )

 
}
); 

app.get ("/pokemon/names", ( req , res) => {
    res.set ("access-control-allow-origin", "*");
     res.json(names);
 }
 ); 
 

app.get ("/", (req, res) => {
    res.send("foo!");
}
); 






app.listen (port, () => {
    console.log("Server started on port " + port);
}
);
