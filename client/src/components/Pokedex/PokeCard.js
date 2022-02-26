import React, { useState, useEffect } from "react";
import PokemonList from "./PokemonList";
import axios from "axios";
import Pagination from "./Pagination";
// const pokemon_number = 898;

// const pokemon_number = 9;

const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

// const main_types = Object.keys(colors);

// const getPokemon = async id => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}/`

//     //fetch the url, res = result
//     const res = await fetch(url);
//     // get the pokemon from res or result then log it to console
//     // const pokemon = await res.json();
//     console.log(pokemon)
//     createPokemonCard(pokemon);
// }

// const getPokeMoves = async (name) => {
//     const urlMoves = `https://pokeapi.co/api/v2/move/${name}/`;
//     const resMoves = await fetch(urlMoves);
//     const moves = await resMoves.json();
//     console.log(moves)
//     // createPokemonCard(moves);
// }

// console.log(getPokeMoves)
function PokeCards() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonUrl, setPokemonUrl] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  // const poke_types = pokemon.types.map(el => el.type.name);
  // const type = main_types.find(type => poke_types.indexOf(type) > -1);
  // loads the pokemon names up to 898 with the first letter uppercase
  // const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  // const color = colors[type];
  // const move = main_moves.find(moves => poke_moves.indexOf(move) > -1);
  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setNextPageUrl(res.data.next);
        setPrevPageUrl(res.data.previous);
        setPokemon(res.data.results.map((p) => (p.name )));
        setPokemonUrl(res.data.results.map((q) => (q.url )));
      });

    return () => cancel();
  }, [currentPageUrl]);

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  if (loading) return "Loading...";
  return (
    <div>
      <>
        <PokemonList pokemon={pokemon} />
        <Pagination
          gotoNextPage={nextPageUrl ? gotoNextPage : null}
          gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
        />
      </>
    </div>
  );
}

export default PokeCards;
