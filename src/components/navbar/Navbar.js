import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav-menu" aria-label="Main Navigation">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="nav-menu__item_current">
            View items
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" activeClassName="nav-menu__item_current">
            Add items
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
