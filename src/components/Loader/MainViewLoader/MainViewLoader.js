import "./mainviewloader.css";

import React from "react";
import { Link } from "react-router-dom";

function MainViewLoader({ isNoPokemon }) {
  if (isNoPokemon)
    return (
      <div className="loader-container">
        <h1 style={{ color: "white" }}>This Pokemon doesn't exist</h1>
        <Link className="textstroke" to="/pokedex">
          <img
            className="pokedex-icon"
            src="/assets/pokedex.png"
            alt="pokedex"
          />
        </Link>
        <a className="textstroke" href="/">
          Back to Random Pokemon
        </a>
      </div>
    );
  return (
    <div className="loader-container">
      <h1 style={{ color: "white" }}>??????????</h1>
      <div className="loader-stats">
        <p>Height: ???</p>
        <p>Weight: ???</p>
        <p>Abilities: ???</p>
        <a href="/">Back to home</a>
      </div>
    </div>
  );
}

export default MainViewLoader;
