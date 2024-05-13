import "./RandomPokemonBtn.css";

interface Props {
  children: React.ReactNode;
  fetchRandomPokemon: (index: number) => void;
  pokemonDominantColor: string;
}

const RandomPokemonBtn: React.FC<Props> = ({
  children,
  fetchRandomPokemon,
  pokemonDominantColor,
}: Props) => {
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
};

export default RandomPokemonBtn;
