import "./pokodexloader.css";

import React from "react";

import Pagination from "../../Pagination/Pagination";

function PokedexLoader({ pageIndex, setPageIndex }) {
  return (
    <div className="pokedex-container">
      <h1 className="pokemon-main-title">Pokedex</h1>
      <ul className="pokemon-list">
        {Array.from({ length: 20 }).map((pokemon, index) => {
          return (
            <li key={index} className="pokemon-card">
              <p className="pokedex-loader-pokemon-name"></p>
            </li>
          );
        })}
      </ul>
      <Pagination pageIndex={pageIndex} setPageIndex={setPageIndex} />
    </div>
  );
}

export default PokedexLoader;
