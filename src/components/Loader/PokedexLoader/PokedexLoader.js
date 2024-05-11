import "./pokodexloader.css";
import React from "react";

function PokedexLoader() {
  return (
    <div className="pokedex-loader-container">
      <h1 className="pokemon-main-title">Pokedex</h1>
      <div className="pokemon-list-loader">
        {Array.from({ length: 20 }).map((pokemon, index) => {
          return (
            <div key={index} className="pokedex-loader-pokemon-card">
              <p className="pokedex-loader-pokemon-name"></p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PokedexLoader;
