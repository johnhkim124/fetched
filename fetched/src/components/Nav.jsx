import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/dogListing">Adopt</Link>
      <Link to="/newDogForm">Find a Home</Link>
    </div>
  );
}

export default Nav;
