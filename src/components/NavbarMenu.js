import React from 'react';
import { Link } from 'react-router-dom'; 

function NavbarMenu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/playlist">Playlist</Link>
        </li>
        {/* <li>
          <Link to="/search">Search</Link>
        </li> */}
        {/* <li>
          <Link to="/profile">Profile</Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default NavbarMenu;
