import React from "react";

import "./PokemonAbility.css";

function PokemonAbility({ pokemonDominantColor, ability }) {
  return (
    <li
      className="pokemon-ability"
      style={{
        backgroundColor: pokemonDominantColor,
      }}
    >
      <p className="textstroke">{ability.name}</p>
    </li>
  );
}

export default PokemonAbility;
