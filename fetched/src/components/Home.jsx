import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="homeDiv">
        <h1>Fetched</h1>
        <p>Find a loving home.</p>
        <Link to="/dogListing">
          <button>Adopt</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
