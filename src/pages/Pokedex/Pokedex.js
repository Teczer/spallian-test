import "./pokedex.css";

import React, { useState } from "react";

import { Link, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { pushParamsToUrl } from "../../utils/pushParamsUrl";

import Pagination from "../../components/Pagination/Pagination";
import PokedexLoader from "../../components/Loader/PokedexLoader/PokedexLoader";

function Pokedex() {
  const searchParams = new URLSearchParams(useLocation().search);
  const currentPage = parseInt(searchParams.get("page")) || 1;

  const [pageIndex, setPageIndex] = useState(currentPage);

  const fetchPokemonList = async ({ pageParam = pageIndex }) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=${
        (pageParam - 1) * 20
      }&limit=20`
    );
    pushParamsToUrl({ page: pageParam });
    const data = await response.json();
    return data.results;
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
    <PokedexLoader />
  ) : (
    <div className="pokedex-container">
      <h1 className="pokemon-main-title">Pokedex</h1>
      <div className="pokemon-list">
        {pokemonList.map((pokemon, index) => {
          const pokemonNumber = (pageIndex - 1) * 20 + index + 1;
          const pokemonName =
            pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
          return (
            <Link
              key={index}
              className="pokemon-card"
              to={`/?pokemonName=${pokemon.name}`}
            >
              <img
                className="pokemon-sprite"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`}
                alt={pokemon.name}
              />
              <p className="textstroke">{pokemonName}</p>
              <span className="textstroke">(#{pokemonNumber})</span>
            </Link>
          );
        })}
      </div>

      <Pagination pageIndex={pageIndex} setPageIndex={setPageIndex} />
    </div>
  );
}

export default Pokedex;
