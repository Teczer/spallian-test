import "./pokedexPokemonCard.css";

import React from "react";
import { Link } from "react-router-dom";

function PokedexPokemonCard({ index, pokemonName, pokemonNumber }) {
  return (
    <li className="pokemon-card">
      <Link
        key={index}
        className="pokemon-link-card"
        to={`/?pokemonName=${pokemonName}`}
      >
        <img
          className="pokemon-sprite"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`}
          alt={pokemonName}
        />
        <p className="textstroke">{pokemonName}</p>
        <span className="textstroke">(#{pokemonNumber})</span>
      </Link>
    </li>
  );
}

export default PokedexPokemonCard;
