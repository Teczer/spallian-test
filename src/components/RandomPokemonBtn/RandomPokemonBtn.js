import React from "react";

import "./randomPokemonBtn.css";

function RandomPokemonBtn({
  children,
  fetchRandomPokemon,
  pokemonDominantColor,
}) {
  return (
    <button
      onClick={() => {
        const newRandomIndex = Math.floor(Math.random() * 1000) + 1;
        fetchRandomPokemon(newRandomIndex);
      }}
      className="random-pokemon-btn"
      style={{ backgroundColor: pokemonDominantColor }}
    >
      <p className="textstroke">{children}</p>
    </button>
  );
}

export default RandomPokemonBtn;
