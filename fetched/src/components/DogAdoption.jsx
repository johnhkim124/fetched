import React from "react";
import { Link } from "react-router-dom";
import "./DogAdoption.css";
import { baseURL, config } from "../services";
import axios from "axios";

const DogAdoption = (props) => {
  const handleDelete = async () => {
    const dogURL = `${baseURL}/${props.dog.id}`;
    await axios.delete(dogURL, config);
    props.setToggle((previous) => !previous);
  };

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
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DogAdoption;
