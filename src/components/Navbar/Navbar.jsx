import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  return (
      <div className={"nav"}>
        <div className={"nav-logo"}>FilmFreeWay</div>
        <ul className={"nav-menu"}>
          <li>How It Works</li>
          <li>Browse Festivals</li>
          <li>Log In</li>
          <li>Sign Up</li>
        </ul>
      </div>
  )
}

export default Navbar;