import { Link } from "react-router-dom";
import "./Nav.css";
import { useState } from "react";

function Nav() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="nav">
      <Link className="fetchedNav" to="/">
        Fetched
      </Link>
      <div className="linksDiv">
        <Link to="/">Home</Link>
        <Link to="/dogListing">Adopt</Link>
        <Link to="/newDogForm">Find a Home</Link>
        <div>
          <Link>Sign Up</Link>
          <Link>Log In</Link>
        </div>
      </div>
      <span onClick={() => setOpenMenu}>Click for menu</span>
    </div>
  );
}

export default Nav;
