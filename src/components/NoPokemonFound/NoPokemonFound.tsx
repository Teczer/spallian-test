import "./NoPokemonFound.css";

import { Link } from "react-router-dom";

const NoPokemonFound: React.FC = () => {
  return (
    <div className="pokemon-notfound-container">
      <h1 className="pokemon-notfound-title textstroke">
        This Pokemon doesn't exist
      </h1>
      <Link to="/pokedex">
        <img className="pokedex-icon" src="/assets/pokedex.png" alt="pokedex" />
      </Link>
      <a className="back-to-home-btn" href="/">
        Back to Random Pokemon
      </a>
    </div>
  );
};

export default NoPokemonFound;
