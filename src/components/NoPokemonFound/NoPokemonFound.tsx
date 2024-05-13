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
      <Link className="back-to-home-btn" to="/" reloadDocument>
        Back to Random Pokemon
      </Link>
    </div>
  );
};

export default NoPokemonFound;
