import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";
import { useState, useEffect } from "react";

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
  console.log(singleDog);

  return (
    <div>
      {singleDog.fields && (
        <div>
          <img src={singleDog.fields.dogPortrait}></img>
          <h3>{singleDog.fields.dogName}</h3>
          <h4>{singleDog.fields.age}</h4>
          <h4>{singleDog.fields.gender}</h4>
          <h4>{singleDog.fields.location}</h4>
          <p>{singleDog.fields.description}</p>
        </div>
      )}
    </div>
  );
};

export default DogInfo;
