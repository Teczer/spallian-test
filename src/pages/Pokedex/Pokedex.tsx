import "./Pokedex.css";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getPokemonList } from "../../services/PokemonService";

import PokedexLoader from "../../components/Loader/PokedexLoader/PokedexLoader";
import PokedexPokemonCard from "../../components/PokedexPokemonCard/PokedexPokemonCard";
import Pagination from "../../components/Pagination/Pagination";

function Pokedex() {
  const searchParams = new URLSearchParams(useLocation().search);
  const currentPageString = searchParams.get("page");
  const currentPage = currentPageString ? parseInt(currentPageString) : 1;

  const [pageIndex, setPageIndex] = useState<number>(currentPage);

  const {
    data: pokemonList,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["pokemonList", pageIndex],
    queryFn: async () => {
      const pokemonList = await getPokemonList(pageIndex);
      return pokemonList;
    },
  });

  if (isError) return <p>Error fetching Pokemon data</p>;

  return isLoading || !pokemonList ? (
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
            <li key={index}>
              <Link to={`/?pokemonName=${pokemonName}`}>
                <PokedexPokemonCard
                  pokemonName={pokemonName}
                  pokemonNumber={pokemonNumber}
                />
              </Link>
            </li>
          );
        })}
      </ul>

      <Pagination pageIndex={pageIndex} setPageIndex={setPageIndex} />
    </div>
  );
}

export default Pokedex;
