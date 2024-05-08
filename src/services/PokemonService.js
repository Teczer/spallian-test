export const getRandomPokemon = async (number) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${number}/`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch random Pokemon");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching random Pokemon:", error);
  }
};

export const getPokemonBySearch = async (searchQuery) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${searchQuery.toLowerCase()}`
    );
    if (!response.ok) {
      throw new Error("Pokemon not found");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error searching Pokemon:", error);
  }
};
