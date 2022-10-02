import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.css';
import backgroundColorType from '../backgroundColorType';

const PokemonCard = ({ name }) => {
  const [artwork, setArtwork] = useState('');
  const [types, setTypes] = useState([]);

  // Fetch Pokemon and pass the image into state
  const fetchPokemons = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setArtwork(data.sprites.other['official-artwork'].front_default);
      setTypes(data.types);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    fetchPokemons(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }, [name]);

  return (
    <Link to={`/pokemon/${name}`}>
      <div className={style.cardItem}>
        <img className={style.cardItemImage} src={artwork} alt="art-work" />
        <p className={style.cardTitle}>{name}</p>
        <div className={style.cardTypesContainer}>
          {types.map((item) => (
            <p
              key={item.slot}
              className={style.cardTypes}
              style={backgroundColorType(item.type.name)}
            >
              {item.type.name}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
