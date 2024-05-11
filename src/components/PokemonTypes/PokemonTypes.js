import React from "react";

import "./PokemonTypes.css";

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
