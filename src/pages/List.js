import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { useApp } from "../context/AppContext";
import "../style/List.css";
import { useHook } from "../utils/useHooks";

import { FaList, FaSlidersH } from "react-icons/fa";
import { BsArrowLeft, BsFillGridFill } from "react-icons/bs";

import { decoration } from "../assets";
import Details from "./Details";

const List = () => {
  const [pokemons, setPokemons] = useState(null);
  const [detailPokemon, setDetailPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const [showMyPokemons, setShowMyPokemons] = useState(false);

  const { addPokemon } = useApp();
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
        {!showMyPokemons ? (
          <>
            <img
              src={decoration}
              alt='decoration'
              className='decoration-bulat'
            />
            <div className='decoration-slide'>
              <FaSlidersH />
            </div>
            <div className='nav'>
              <div
                className='back-btn btn'
                onClick={() => setShowMyPokemons(!showMyPokemons)}>
                <BsArrowLeft />
              </div>
              <div
                className='my-pokemon-btn btn'
                onClick={() => setShowMyPokemons(!showMyPokemons)}>
                {showMyPokemons ? <BsFillGridFill /> : <FaList />}
              </div>
            </div>
            <h2 className='title'>
              {showMyPokemons ? "My Pokemon" : "Pokemon List"}
            </h2>
            <div className='list'>
              {pokemons &&
                pokemons.map((pokemon, idx) => {
                  return (
                    <div
                      key={idx}
                      onClick={() => {
                        setShowDetails(true);
                        setDetailPokemon(pokemon);
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
          </>
        ) : (
          <>
            <img
              src={decoration}
              alt='decoration'
              className='decoration-bulat'
            />
            <div className='nav'>
              <div
                className='back-btn btn'
                onClick={() => setShowMyPokemons(!showMyPokemons)}>
                <BsArrowLeft />
              </div>
              <div className='my-pokemon-btn btn'>
                {showMyPokemons ? <BsFillGridFill /> : <FaList />}
              </div>
            </div>
            <h2 className='title'>
              {showMyPokemons ? "My Pokemon" : "Pokemon List"}
            </h2>
            <div className='list'>
              {addPokemon.length > 0 &&
                addPokemon.map((pokemon, idx) => {
                  return (
                    <div
                      key={idx}
                      onClick={() => {
                        setShowDetails(true);
                        setDetailPokemon(pokemon);
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
          </>
        )}
        {addPokemon.length === 0 && (
          <p style={{ height: "100%" }}>Data Pokemon Tidak Ada</p>
        )}
      </div>
      <Details
        show={showDetails}
        setShow={setShowDetails}
        dataPokomen={detailPokemon}
      />
    </>
  );
};

export default List;
