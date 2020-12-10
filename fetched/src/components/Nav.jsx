import { Link } from "react-router-dom";
import "./Nav.css";
import { useState } from "react";

function Nav() {
  const [openNav, setOpenNav] = useState(false);
  let navMenu;

  if (openNav) {
    navMenu = (
      <div className="linksDiv">
        <Link to="/">Home</Link>
        <Link to="/dogListing">Adopt</Link>
        <Link to="/newDogForm">Find a Home</Link>
        <div>
          <Link>Sign Up</Link>
          <Link>Log In</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="nav">
      <Link className="fetchedLogo" to="/">
        Fetched
      </Link>

      <div className="regularNav">
        <Link to="/">Home</Link>

        <Link to="/dogListing">Adopt</Link>

        <Link to="/newDogForm">Find a Home</Link>

        <div>
          <div>
            <Link>Sign Up</Link>
          </div>
          <div>
            <Link>Log In</Link>
          </div>
        </div>
      </div>

      <span className="hamburgerNav" onClick={() => setOpenNav(!openNav)}>
        Menu
      </span>
      {navMenu}
    </div>
  );
}

export default Nav;
