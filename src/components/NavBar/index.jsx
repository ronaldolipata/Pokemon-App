import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBarItem from '../NavBarItem';
import style from './style.module.css';

const NavBar = () => {
  const [pokemonType, setPokemonType] = useState([]);
  const [selectTypeButtonActive, setSelectTypeButtonnActive] = useState(false);

  // Fetch Pokemon Types and pass into state
  const fetchTypes = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/type');
      const data = await response.json();
      setPokemonType(data.results);
    } catch (error) {
      return error;
    }
  };

  const handleClick = () => {
    setSelectTypeButtonnActive((current) => !current);
  };

  useEffect(() => {
    fetchTypes();
  }, []);

  return (
    <div>
      <div className={style.navBarMobile}>
        <button onClick={handleClick} className={style.selectTypeButton}>
          Pokemon Types
        </button>
        <ul
          style={{ display: selectTypeButtonActive ? 'block' : '' }}
          className={style.navBarMobileList}
        >
          {pokemonType.map((item) => (
            <li className={style.navBarMobileItem}>
              <Link to={`/type/${item.name}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Pass the pokemon type to NavBarItem component */}
      <nav className={style.navBar}>
        <h2>Pokemon Types</h2>
        <ul className={style.navBarList}>
          {pokemonType.map((item) => (
            <NavBarItem key={item.name} type={item.name} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
