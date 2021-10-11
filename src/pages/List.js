import React, { useEffect, useState } from "react";
import { useHook } from "../utils/useHooks";

import "./style/List.css";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Details from "./Details";
const List = () => {
  const [pokemons, setPokemons] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [pokemonDetail, setPokemonDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  let { data: pokemonsData } = useHook("/pokemon");

  useEffect(() => {
    if (!pokemonsData.results) return;
    (async () => {
      setLoading(loading);
      let datas = await Promise.all(
        pokemonsData.results.map(async (pokemon) => {
          let data, species;

          try {
            let res = await fetch(pokemon.url);
            data = await res.json();
            res = await fetch(
              `https://pokeapi.co/api/v2/pokemon-species/${data.id}/`
            );
            species = await res.json();
          } catch (error) {
            console.log("Error Fetch: ", error);
          }
          return Promise.resolve({ ...data, color: species.color.name });
        })
      );
      setPokemons(datas);
    })();
    setLoading(!loading);
  }, [pokemonsData]);

  return (
    <>
      <div className='container pokemon-list'>
        <Navbar type='list' />
        <h2 className='title'>Pokemon List</h2>
        <div className='list'>
          {!loading &&
            pokemons &&
            pokemons.map((pokemon) => {
              return (
                <div
                  onClick={() => {
                    setShowDetail(true);
                    setPokemonDetail(pokemon);
                  }}>
                  <Card
                    id={pokemon.id}
                    key={pokemon.id}
                    color={pokemon.color}
                    sprites={pokemon.sprites}
                    types={pokemon.types}
                    name={pokemon.name}
                  />
                </div>
              );
            })}
        </div>
        <Details
          show={showDetail}
          setShow={setShowDetail}
          dataPokomen={pokemonDetail}
        />
      </div>
    </>
  );
};

export default List;
