import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../NavBar';
import style from './style.module.css';
import backgroundColorType from '../backgroundColorType';

const PokemonCardDetails = () => {
  const { name } = useParams();
  const [details, setDetails] = useState([]);
  const [types, setTypes] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [artwork, setArtwork] = useState('');

  // Fetch Pokemon Abilities
  const fetchPokemonAbilities = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      setAbilities((previous) => [
        ...previous,
        {
          ability: data.name,
          details: data.effect_entries[1].effect,
        },
      ]);
    } catch (error) {
      return error;
    }
  };

  const getAbilities = (abilities) => {
    abilities.map(({ ability }) => {
      fetchPokemonAbilities(ability.url);
    });
  };

  // Fetch Pokemon Details and pass into the state
  const fetchPokemonDetails = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setDetails(data);
      setArtwork(data.sprites.other['official-artwork'].front_default);
      setTypes(data.types);
      getAbilities(data.abilities);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    fetchPokemonDetails(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }, [name]);

  return (
    <div className={style.mainContainer}>
      <NavBar />
      <div className={style.detailsContainer}>
        <h1>{name}</h1>
        <p className={style.id}>#{details.id}</p>
        <img className={style.cardItemImage} src={artwork} alt={artwork} />
        <div className={style.cardTypesContainer}>
          {types.map(({ type }) => (
            <p
              className={style.cardTypes}
              style={backgroundColorType(type.name)}
            >
              {type.name}
            </p>
          ))}
        </div>
        <div className={style.abilityContainer}>
          {abilities.map(({ ability, details }) => (
            <div className={style.abilitySubContainer}>
              <h4 className={style.abilityName}>{ability}</h4>
              <p className={style.abilityDetails}>{details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonCardDetails;
