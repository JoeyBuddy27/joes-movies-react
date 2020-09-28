import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <NavLink to="/">
        <img
          src="https://i.ibb.co/Jm8c634/joes-Movies-Neon-Trans.png"
          alt="Logo"
          className="header__logo"
        />
      </NavLink>
      <nav>
        <ul className="header__nav">
          <li className="header__nav__item header__nav__item__home">
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li className="header__nav__item header__nav__item__features">
            <NavLink to="/feature/best-films-2018">Features</NavLink>
          </li>
          <li className="header__nav__item header__nav__item__film">
            <NavLink to="/film">Film</NavLink>
          </li>
          <li className="header__nav__item header__nav__item__tv">
            <NavLink to="/tv">TV</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
