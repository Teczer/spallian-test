import "./pokedex.css";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import PokedexLoader from "../../components/Loader/PokedexLoader/PokedexLoader";
import SearchInput from "../../components/SearchInput/SearchInput";

import { BiFirstPage, BiLastPage } from "react-icons/bi";
import { pushParamsToUrl } from "../../utils/pushParamsUrl";

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

  if (isLoading) return <PokedexLoader />;
  if (isError) return <p>Error fetching Pokemon data</p>;

  return (
    <div className="pokedex-container">
      <h1 className="pokemon-main-title">Pokedex</h1>
      <SearchInput />
      <div className="pokemon-list">
        {pokemonList.map((pokemon, index) => (
          <Link
            key={index}
            className="pokemon-card"
            to={`/?pokemonName=${pokemon.name}`}
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                (pageIndex - 1) * 20 + index + 1
              }.png`}
              alt={pokemon.name}
            />
            <p>{pokemon.name}</p>
          </Link>
        ))}
      </div>

      <div className="pagination">
        <button
          className="pagination-button"
          onClick={() =>
            setPageIndex((prevIndex) => Math.max(prevIndex - 1, 1))
          }
          disabled={pageIndex === 1}
        >
          <BiFirstPage />
        </button>
        <span>Page {pageIndex}</span>
        <button
          onClick={() =>
            setPageIndex((prevIndex) =>
              Math.min(prevIndex + 1, Math.ceil(1302 / 20))
            )
          }
          disabled={pageIndex === Math.ceil(1302 / 20)}
        >
          <BiLastPage />
        </button>
      </div>
    </div>
  );
}

export default Pokedex;
