import React from "react";
import "./PokemonAbility.css";

interface Ability {
  name: string;
}

interface Props {
  pokemonDominantColor: string;
  ability: Ability;
}

const PokemonAbility: React.FC<Props> = ({ pokemonDominantColor, ability }) => {
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
};

export default PokemonAbility;
