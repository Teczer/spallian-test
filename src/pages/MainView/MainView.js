import "./mainView.css";

import React, { useState, useEffect } from "react";

import useDominantColor from "../../hooks/useDominantColor.js";

import { colorsTypes } from "../../utils/colorsType.js";
import { pushParamsToUrl } from "../../utils/pushParamsUrl.js";

import {
  getPokemonBySearch,
  getRandomPokemon,
} from "../../services/PokemonService.js";

import Loader from "../../components/Loader/Loader.js";
import SearchInput from "../../components/SearchInput/SearchInput.js";
import PokemonStatBar from "../../components/PokemonStatBar/PokemonStatBar.js";
import SectionTitle from "../../components/SectionTitle/SectionTitle.js";
import RandomPokemonBtn from "../../components/RandomPokemonBtn/RandomPokemonBtn.js";
import { Link } from "react-router-dom";

const MainView = () => {
  const [pokemon, setPokemon] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const randomIndex = Math.floor(Math.random() * 1000) + 1;

  // FETCH RANDOM POKEMON
  async function fetchRandomPokemon(number) {
    const randomPokemonData = await getRandomPokemon(number);
    setPokemon(randomPokemonData);
    // Mettre à jour le nom du Pokémon dans l'URL
    pushParamsToUrl({ pokemonName: randomPokemonData.name });
  }

  // SEARCH POKEMON
  async function searchPokemon() {
    const searchPokemonData = await getPokemonBySearch(searchQuery);
    setPokemon(searchPokemonData);
    pushParamsToUrl({ pokemonName: searchQuery });
  }

  const pokemonDominantColor = useDominantColor(
    pokemon?.sprites?.other["official-artwork"].front_default
  );

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has("pokemonName")) {
      const pokemonName = searchParams.get("pokemonName");
      // Effectuez le fetch en fonction du pokemonName
      fetchRandomPokemon(pokemonName);
    } else {
      // Si le paramètre d'URL pokemonName n'est pas présent, effectuez un fetch aléatoire
      fetchRandomPokemon(randomIndex);
    }
  }, []);

  return !pokemon ? (
    <Loader />
  ) : (
    <div
      className="container"
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
          <SectionTitle>Abilities :</SectionTitle>
          <ul className="pokemon-abilities-box">
            {pokemon.abilities.map(({ ability }, index) => (
              <li
                className="pokemon-ability textstroke"
                key={index}
                style={{
                  backgroundColor: pokemonDominantColor,
                }}
              >
                {ability.name}
              </li>
            ))}
          </ul>
          <SectionTitle>Types :</SectionTitle>
          <ul className="pokemon-abilities-box">
            {pokemon.types.map(({ type }, index) => {
              const typeData = colorsTypes[type.name.toLowerCase()]; // Obtenir les données du type à partir de colorsTypes
              const backgroundColor = typeData ? typeData.color : ""; // Couleur de fond du type
              const icon = typeData ? typeData.icon : ""; // Chemin de l'icône du type

              return (
                <li
                  className="pokemon-ability textstroke"
                  key={index}
                  style={{
                    backgroundColor: backgroundColor,
                  }}
                >
                  <img className="type-icon" src={icon} alt={type.name} />
                  <span>{type.name}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* GET RANDOM POKEMON BUTTON */}
      <div className="random-pokemon-container">
        <RandomPokemonBtn
          fetchRandomPokemon={fetchRandomPokemon}
          pokemonDominantColor={pokemonDominantColor}
        >
          Get Random Pokemon
        </RandomPokemonBtn>
      </div>
    </div>
  );
};

export default MainView;
