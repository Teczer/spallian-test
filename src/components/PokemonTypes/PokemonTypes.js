import "./pokemonTypes.css";

import React from "react";

function PokemonTypes({ backgroundColor, icon, type }) {
  return (
    <li
      className="pokemon-ability"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <img className="type-icon" src={icon} alt={type.name} />
      <span className="textstroke">{type.name}</span>
    </li>
  );
}

export default PokemonTypes;
