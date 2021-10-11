/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import Card from "../components/Card";

import { useApp } from "../context/AppContext";

const myList = () => {
  const { addPokemon } = useApp();
  const [showDetail, setShowDetail] = useState(false);
  const [pokemonDetail, setPokemonDetail] = useState(null);
  console.log(addPokemon);
  return (
    <div className='container '>
      <nav className='nav'>
        <button className='btn back-btn'>
          <Link to='/'>
            <BsArrowLeft />
          </Link>
        </button>
      </nav>
      <p className='title'>My Pokemon</p>
      <div className='list'>
        {addPokemon.length > 0 ? (
          addPokemon.map((pokemon) => (
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
          ))
        ) : (
          <p className='no-pokemon'>Anda Belum memilki pokemon</p>
        )}
      </div>
    </div>
  );
};

export default myList;
