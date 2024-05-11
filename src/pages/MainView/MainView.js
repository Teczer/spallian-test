import { useState } from "react";
import { Link } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

import useDominantColor from "../../hooks/useDominantColor.js";

import { colorsTypes } from "../../utils/colorsType.js";
import { pushParamsToUrl } from "../../utils/pushParamsUrl.js";

import {
  getPokemonBySearch,
  getRandomPokemon,
} from "../../services/PokemonService.js";

import SearchInput from "../../components/SearchInput/SearchInput.js";
import PokemonStatBar from "../../components/PokemonStatBar/PokemonStatBar.js";
import SectionTitle from "../../components/SectionTitle/SectionTitle.js";
import RandomPokemonBtn from "../../components/RandomPokemonBtn/RandomPokemonBtn.js";
import MainViewLoader from "../../components/Loader/MainViewLoader/MainViewLoader.js";
import PokemonAbility from "../../components/PokemonAbility/PokemonAbility.js";
import PokemonTypes from "../../components/PokemonTypes/PokemonTypes.js";
import NoPokemonFound from "../../components/NoPokemonFound/NoPokemonFound.js";

import "./MainView.css";

const MainView = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const randomIndex = Math.floor(Math.random() * 1000) + 1;

  const {
    data: pokemon,
    isLoading,
    isError,
    refetch: refetchPokemon,
  } = useQuery({
    queryKey: ["pokemon"],
    queryFn: async () => {
      const searchParams = new URLSearchParams(window.location.search);
      if (searchParams.has("pokemonName")) {
        const pokemonName = searchParams.get("pokemonName");
        return await getPokemonBySearch(pokemonName);
      } else {
        return await getRandomPokemon(randomIndex);
      }
    },
    refetchOnWindowFocus: false,
  });

  const pokemonDominantColor = useDominantColor(
    pokemon?.sprites?.other["official-artwork"].front_default
  );

  const fetchRandomPokemon = async (number) => {
    const randomPokemonData = await getRandomPokemon(number);
    pushParamsToUrl({ pokemonName: randomPokemonData.name });
    refetchPokemon(randomPokemonData);
  };

  const searchPokemon = async () => {
    const searchPokemonData = await getPokemonBySearch(searchQuery);
    pushParamsToUrl({ pokemonName: searchQuery });
    refetchPokemon(searchPokemonData);
  };

  if (isError) return <NoPokemonFound />;

  return isLoading ? (
    <MainViewLoader />
  ) : (
    <div
      className="mainview-container"
      style={{ backgroundColor: pokemonDominantColor }}
    >
      {/* SEARCH INPUT FORM */}
      <header className="pokemon-view-header">
        <nav>
          <Link className="textstroke" to="/pokedex">
            <img
              className="pokedex-icon"
              src="/assets/pokedex.png"
              alt="pokedex"
            />
          </Link>
        </nav>
        <SearchInput
          searchPokemon={searchPokemon}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </header>

      {/* POKEMON VISUAL */}

      <div className="pokemon-container">
        {/* POKEMON STATISTICS */}
        <div className="pokemon-stats-container">
          <SectionTitle>Statistics :</SectionTitle>
          <ul className="pokemon-stats-box">
            {pokemon.stats.map((stats, index) => {
              const statValue = stats.base_stat;
              const statName = stats.stat.name;
              const percentage = Math.min((statValue / 150) * 100, 100);
              return (
                <PokemonStatBar
                  key={index}
                  statValue={statValue}
                  statName={statName}
                  percentage={percentage}
                />
              );
            })}
          </ul>
        </div>

        {/* POKEMON SPLASH + NAME */}
        <div className="pokemon-splash-container">
          <h2 className="textstroke">
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            {""} <span>(#{pokemon.id})</span>
          </h2>
          <a
            className="pokemon-full-splash"
            href={`https://bulbapedia.bulbagarden.net/wiki/${pokemon.name}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="pokemon-splash"
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}
            />
          </a>
        </div>

        {/* POKEMON ABILITIES + TYPES */}
        <div className="pokemon-abilities-container">
          {/* POKEMON ABILITIES */}
          <div className="pokemon-ability-title-card">
            <SectionTitle>Abilities :</SectionTitle>
            <ul className="pokemon-abilities-box">
              {pokemon.abilities.map(({ ability }, index) => (
                <PokemonAbility
                  key={index}
                  pokemonDominantColor={pokemonDominantColor}
                  ability={ability}
                />
              ))}
            </ul>
          </div>
          {/* POKEMON TYPES */}
          <div className="pokemon-ability-title-card">
            <SectionTitle>Types :</SectionTitle>
            <ul className="pokemon-abilities-box">
              {pokemon.types.map(({ type }, index) => {
                const typeData = colorsTypes[type.name.toLowerCase()]; // Obtenir les données du type à partir de colorsTypes
                const backgroundColor = typeData ? typeData.color : ""; // Couleur de fond du type
                const icon = typeData ? typeData.icon : ""; // Chemin de l'icône du type

                return (
                  <PokemonTypes
                    key={index}
                    backgroundColor={backgroundColor}
                    icon={icon}
                    type={type}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* GET RANDOM POKEMON BUTTON */}
      <div className="random-pokemon-container">
        <RandomPokemonBtn
          fetchRandomPokemon={() => fetchRandomPokemon(randomIndex)}
          pokemonDominantColor={pokemonDominantColor}
        >
          Get Random Pokemon
        </RandomPokemonBtn>
      </div>
    </div>
  );
};

export default MainView;
