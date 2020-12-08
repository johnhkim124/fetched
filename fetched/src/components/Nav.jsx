import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <div>Fetched</div>
      </Link>
      <div className="linksDiv">
        <Link to="/">Home</Link>
        <Link to="/dogListing">Adopt</Link>
        <Link to="/newDogForm">Find a Home</Link>
      </div>
      <div>
        <Link>Sign Up</Link>
        <Link>Log In</Link>
      </div>
    </div>
  );
}

export default Nav;
