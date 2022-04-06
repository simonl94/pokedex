import { useState, useEffect } from 'react';
import {
  getPokemonDescription,
  getPokemonList,
  getPokemonSprite,
} from '../utils/api';

function Card() {
  const [pokedexList, setPokedexList] = useState([]);
  const [pokemonDescription, setPokemonDescription] = useState('');
  const [pokemonSprite, setPokemonSprite] = useState('');

  useEffect(() => {
    async function getData() {
      const apiData = await getPokemonList();
      const pokemonDescription = await getPokemonDescription(1);
      const pokemonSprite = await getPokemonSprite(1);
      setPokemonDescription(pokemonDescription);
      setPokedexList(apiData);
      setPokemonSprite(pokemonSprite);
    }

    getData();
  }, []);

  const getPokemonInformation = async (pokedexEntryNumber: any) => {
    const pokemonDescription = await getPokemonDescription(pokedexEntryNumber);
    const pokemonSprite = await getPokemonSprite(pokedexEntryNumber);
    setPokemonDescription(pokemonDescription);
    setPokemonSprite(pokemonSprite);
  };

  const pokemonOptions = pokedexList.map((pokemon, idx) => {
    const pokemonName =
      pokemon.name.charAt(0).toUpperCase() +
      pokemon.name.substring(1).toLowerCase();
    return (
      <option key={idx} value={idx + 1} defaultValue={pokemonName}>
        {pokemonName}
      </option>
    );
  });

  return (
    <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 m-auto">
      <div className="flex justify-center">
        <select
          defaultValue=""
          className="border-solid rounded outline outline-2 outline-black hover:outline-slate-400"
          onChange={(e) => getPokemonInformation(e.target.value)}
        >
          {pokemonOptions}
        </select>
      </div>
      <div className="flex justify-center md:justify-center"></div>
      <div className="flex justify-center md:justify-center mt-10">
        <img
          className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
          src={pokemonSprite}
          alt="Loading"
        />
      </div>
      <div>
        <h2 className="flex justify-center text-gray-800 text-3xl font-semibold">
          Pokedex Entry
        </h2>
        <p className=" flex justify-center mt-2 text-gray-600">
          {pokemonDescription}
        </p>
      </div>
    </div>
  );
}

export default Card;
