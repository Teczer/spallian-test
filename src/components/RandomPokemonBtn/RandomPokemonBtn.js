import React from "react";

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
      className="random-pokemon-btn textstroke"
      style={{ backgroundColor: pokemonDominantColor }}
    >
      {children}
    </button>
  );
}

export default RandomPokemonBtn;
