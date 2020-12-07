import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";
import { useState, useEffect } from "react";
import "./DogInfo.css";

const DogInfo = () => {
  const { id } = useParams();
  const [singleDog, setSingleDog] = useState({});

  useEffect(() => {
    const getSingleDog = async () => {
      const response = await axios.get(`${baseURL}/${id}`, config);
      setSingleDog(response.data);
    };

    getSingleDog();
  }, []);

  return (
    <div className="profileDiv">
      {singleDog.fields && (
        <div>
          <img
            className="profilePic"
            src={singleDog.fields.dogPortrait}
            alt="dog"
          ></img>
          <h3>{singleDog.fields.dogName}</h3>
          <h4>Age: {singleDog.fields.age}</h4>
          <h4>{singleDog.fields.gender}</h4>
          <h4>{singleDog.fields.location}</h4>
          <p className="description">{singleDog.fields.description}</p>
          <button>Delete</button>
        </div>
      )}
    </div>
  );
};

export default DogInfo;
