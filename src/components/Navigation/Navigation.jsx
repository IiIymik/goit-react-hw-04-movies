import {NavLink} from 'react-router-dom';
import { Nav } from './Navigation.styled.js';

const Navigation = () => {
  return (
    <Nav>
      <NavLink to="/">Main</NavLink>
      <NavLink to="/Movies">Movies</NavLink>
    </Nav>
  )
}

export default Navigation
