import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";

const DogAdoption = (props) => {
  return (
    <div>
      <Link to={`/fetched/${props.dog.id}`}>
        <img src={props.dog.fields.dogPortrait}></img>
      </Link>

      <Link to={`/fetched/${props.dog.id}`}>
        <h3>{props.dog.fields.dogName}</h3>
      </Link>

      <p>{props.dog.fields.age}</p>
      <p>{props.dog.fields.gender}</p>
    </div>
  );
};

export default DogAdoption;
