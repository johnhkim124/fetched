import { Link } from "react-router-dom";
import "./Nav.css";
import { useState } from "react";

//Reference for hamburger nav
//https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/

function Nav() {
  const [openNav, setOpenNav] = useState(false);
  let navMenu;

  if (openNav) {
    navMenu = (
      <div className="linksDiv">
        <Link to="/">Home</Link>
        <Link to="/dogListing">Adopt</Link>
        <Link to="/newDogForm">Find a Home</Link>

        <Link className="sign">Sign Up</Link>

        <Link className="sign">Log In</Link>
      </div>
    );
  }

  return (
    <div className="nav">
      <header>
        <div className="logoDiv">
          <Link className="fetchedLogo" to="/">
            Fetched
          </Link>
        </div>

        <div className="regularNav">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/dogListing">Adopt</Link>
              </li>
              <li>
                <Link to="/newDogForm">Find a Home</Link>
              </li>
              <li>
                <Link>Sign Up</Link>
              </li>
              <li>
                <Link>Log In</Link>
              </li>
            </ul>
          </nav>
        </div>

        <span className="hamburgerNav" onClick={() => setOpenNav(!openNav)}>
          Menu
        </span>

        {navMenu}
      </header>
    </div>
  );
}

export default Nav;
