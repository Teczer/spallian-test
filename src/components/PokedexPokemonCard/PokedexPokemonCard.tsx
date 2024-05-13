import "./PokedexPokemonCard.css";

interface Props {
  pokemonName: string;
  pokemonNumber: number;
}

const PokedexPokemonCard: React.FC<Props> = ({
  pokemonName,
  pokemonNumber,
}) => {
  return (
    <div className="pokemon-card">
      <img
        className="pokemon-sprite"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`}
        alt={pokemonName}
      />
      <p className="textstroke">{pokemonName}</p>
      <span className="textstroke">(#{pokemonNumber})</span>
    </div>
  );
};

export default PokedexPokemonCard;
