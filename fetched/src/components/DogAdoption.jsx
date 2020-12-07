import React from "react";
import { Link } from "react-router-dom";
import "./DogAdoption.css";

const DogAdoption = (props) => {
  return (
    <div className="doggyListing">
      <Link to={`/fetched/${props.dog.id}`}>
        <img
          className="doggyListingPic"
          src={props.dog.fields.dogPortrait}
          alt="dog"
        ></img>
      </Link>

      <Link to={`/fetched/${props.dog.id}`}>
        <h3>{props.dog.fields.dogName}</h3>
      </Link>

      <p>Age: {props.dog.fields.age}</p>
      <p>{props.dog.fields.breed}</p>
    </div>
  );
};

export default DogAdoption;
