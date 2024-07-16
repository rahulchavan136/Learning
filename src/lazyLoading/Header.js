import React, { useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';

const Header = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <Nav>
        <Nav.Link as={NavLink} to="/" exact activeClassName="active">Home</Nav.Link>
        <Nav.Link as={NavLink} to="/medicines/brandA" activeClassName="active">BrandA</Nav.Link>
        <Nav.Link as={NavLink} to="/medicines/brandB" activeClassName="active">BrandB</Nav.Link>
        <Nav.Link as={NavLink} to="/medicines/brandC" activeClassName="active">BrandC</Nav.Link>
      </Nav>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Header;
