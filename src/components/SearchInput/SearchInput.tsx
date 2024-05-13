import "./SearchInput.css";

interface Props {
  searchPokemon: () => void;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: React.FC<Props> = ({
  searchPokemon,
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <form
      className="search-container"
      onSubmit={(e) => {
        e.preventDefault();
        if (searchQuery.length > 0) {
          searchPokemon();
        }
      }}
    >
      <input
        type="text"
        placeholder="Pikachu, Yveltal... OR ID (1,23...)"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        className="pokeball-search-btn"
        onClick={() => {
          if (searchQuery.length > 0) {
            searchPokemon();
          }
        }}
      >
        <img
          className="pokeball-img"
          src="/assets/pokeball.png"
          alt="pokeball"
        />
      </button>
    </form>
  );
};

export default SearchInput;
