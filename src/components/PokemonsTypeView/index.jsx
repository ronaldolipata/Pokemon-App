import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../NavBar';
import PokemonCard from '../PokemonCard';
import style from './style.module.css';

const PokemonsTypeView = () => {
  const { type } = useParams();
  const [pokemon, setPokemon] = useState([]);

  // Fetch Pokemon from selected Type and pass into state
  const fetchPokemons = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPokemon(data.pokemon);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    fetchPokemons(`https://pokeapi.co/api/v2/type/${type}`);
  }, [type]);

  return (
    <div className={style.mainContainer}>
      <NavBar />
      <div>
        <h1 className={style.title}>
          {type !== undefined
            ? `${pokemon.length} ${type} Pokemons`
            : 'Please select a type.'}
        </h1>
        {/* Iterate PokemonCard component for each pokemon on the selected type */}
        <div className={style.cards}>
          {pokemon.map(({ pokemon }, index) => (
            <PokemonCard key={`${pokemon.name}-${index}`} name={pokemon.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonsTypeView;
