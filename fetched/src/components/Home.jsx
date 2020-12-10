import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="homeDiv">
        <h1>Fetched</h1>
        <p>
          Find a warm loving home for dogs in need. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <Link to="/dogListing">
          <button>Adopt Today</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
