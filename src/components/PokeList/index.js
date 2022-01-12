import ItemList from "../ItemList";
import { getPokemons } from "../../services/pokemons";
import React, { useState, useEffect } from "react";

import { Li } from "./styles";

function PokeList() {
  const [pokemons, setPokemons] = useState([]);

  console.log(pokemons);

  useEffect(() => {
    getPokemons().then((data) => {
      setPokemons(data);
    });
  }, []);

  return (
    <Li>
      {Object.entries(pokemons)[3] &&
        Object.entries(pokemons)[3][1].map((pokemon, index) => {
          return <ItemList key={index} {...pokemon} id={index + 1} />;
        })}
    </Li>
  );
}

export default PokeList;
