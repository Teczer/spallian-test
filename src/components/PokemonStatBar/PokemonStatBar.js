import React from "react";

function PokemonStatBar({ statName, statValue, percentage }) {
  return (
    <li className="pokemon-stats textstroke">
      <span className="pokemon-row-stats">
        {statName}: {statValue}
      </span>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${percentage}%` }}></div>
      </div>
    </li>
  );
}

export default PokemonStatBar;
