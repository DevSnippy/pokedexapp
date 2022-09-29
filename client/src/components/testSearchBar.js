/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState, useEffect } from 'react';

import Downshift from 'downshift'


export default function TestSearchBar() {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => { 
    Pokemons();

    async function Pokemons() {
      const res = await fetch(
        `http://localhost:3001/pokemon/names`
      );
      const data = await res.json();
      setPokemonData(data);
    }

  }, []);
  const items = pokemonData;
  return (
    <div>
      <Downshift
        onChange={selection =>
          fetch(`http://localhost:3001/search/${selection.value}`).then(res => res.json()).then(data => console.log(data)) 
        }
        itemToString={item => (item ? item.value : '')}
      >
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem,
          getRootProps,
        }) => (
          <div>
            <label {...getLabelProps()}>Enter a pokemon </label>
            <div
              style={{ display: 'inline-block' }}
              {...getRootProps({}, { suppressRefError: true })}
            >
              <input {...getInputProps()} />
            </div>
            <ul {...getMenuProps()}>
              {isOpen

                ? items

                  .filter(item => !inputValue || item.value.includes(inputValue))
                  .map((item, index) => (
                    <li
                      {...getItemProps({
                        key: item.value,
                        index,
                        item,
                        style: {
                          backgroundColor:
                            highlightedIndex === index ? 'lightgray' : 'white',
                          fontWeight: selectedItem === item ? 'bold' : 'normal',
                        },
                      })}
                    >
                      {item.value}
                    </li>
                  ))
                : null}
            </ul>

<p></p>


          </div>
        )}
        
      </Downshift>,


    

    </div>
  );
}