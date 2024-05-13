import { Pokemon, PokemonList } from "../types/types";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export const getRandomPokemon = async (
  number: number
): Promise<Pokemon | undefined> => {
  try {
    const response = await fetch(`${BASE_URL}/${number}/`);

    if (!response.ok) {
      throw new Error("Failed to fetch random Pokemon");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching random Pokemon:", error);
  }
};

export const getPokemonBySearch = async (
  searchQuery: string
): Promise<Pokemon | undefined> => {
  try {
    const response = await fetch(`${BASE_URL}/${searchQuery.toLowerCase()}`);
    if (!response.ok) {
      throw new Error("Pokemon not found");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error searching Pokemon:", error);
  }
};

export const getPokemonList = async (
  pageParam: number
): Promise<PokemonList | undefined> => {
  try {
    const response = await fetch(
      `${BASE_URL}/?offset=${(pageParam - 1) * 20}&limit=20`
    );
    if (!response.ok) {
      throw new Error("Pokemon not found");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error searching Pokemon:", error);
  }
};
