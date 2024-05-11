import React from "react";

function SearchInput({ searchPokemon, searchQuery, setSearchQuery }) {
  return (
    <form
      className="search-container"
      onSubmit={(e) => {
        e.preventDefault();
        searchPokemon();
      }}
    >
      <input
        type="text"
        placeholder="Pikachu, Yveltal... OR ID (1,23...)"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="pokeball-search-btn" onClick={searchPokemon}>
        <img
          className="pokeball-img"
          src="/assets/pokeball.png"
          alt="pokeball"
        ></img>
      </button>
    </form>
  );
}

export default SearchInput;
