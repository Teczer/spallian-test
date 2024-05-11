import "./pokedex.css";

import React, { useState } from "react";

import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getPokemonList } from "../../services/PokemonService";

import { pushParamsToUrl } from "../../utils/pushParamsUrl";

import PokedexLoader from "../../components/Loader/PokedexLoader/PokedexLoader";
import PokedexPokemonCard from "../../components/PokedexPokemonCard/PokedexPokemonCard";
import Pagination from "../../components/Pagination/Pagination";

function Pokedex() {
  const searchParams = new URLSearchParams(useLocation().search);
  const currentPage = parseInt(searchParams.get("page")) || 1;

  const [pageIndex, setPageIndex] = useState(currentPage);

  const fetchPokemonList = async ({ pageParam = pageIndex }) => {
    const response = await getPokemonList(pageParam);
    pushParamsToUrl({ page: pageParam });
    return response;
  };

  const {
    data: pokemonList,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["pokemonList", pageIndex],
    queryFn: fetchPokemonList,
    config: {
      cacheTime: 3600000, // Cache for 1 hour
    },
  });

  if (isError) return <p>Error fetching Pokemon data</p>;

  return isLoading ? (
    <PokedexLoader pageIndex={pageIndex} setPageIndex={setPageIndex} />
  ) : (
    <div className="pokedex-container">
      <h1 className="pokemon-main-title">Pokedex</h1>
      <ul className="pokemon-list">
        {pokemonList.map((pokemon, index) => {
          const pokemonNumber = (pageIndex - 1) * 20 + index + 1;
          const pokemonName =
            pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
          return (
            <PokedexPokemonCard
              index={index}
              pokemonName={pokemonName}
              pokemonNumber={pokemonNumber}
            />
          );
        })}
      </ul>

      <Pagination pageIndex={pageIndex} setPageIndex={setPageIndex} />
    </div>
  );
}

export default Pokedex;
