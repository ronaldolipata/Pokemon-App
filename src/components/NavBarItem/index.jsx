import { Link } from 'react-router-dom';
import style from './style.module.css';
import backgroundColorType from '../backgroundColorType';

const NavBarItem = ({ type }) => {
  return (
    // Pass pokemon type to the Router Link when clicked
    <Link to={`/type/${type}`}>
      <li className={style.navBarItem} style={backgroundColorType(type)}>
        {type}
      </li>
    </Link>
  );
};

export default NavBarItem;
