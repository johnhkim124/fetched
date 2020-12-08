import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseURL, config } from "../services";
import { useState, useEffect } from "react";
import "./DogInfo.css";
import { Link } from "react-router-dom";

const DogInfo = (props) => {
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
          <p>
            <b>Contact:</b> {singleDog.fields.email}
          </p>
          <Link>
            <button>Previous</button>
          </Link>
          <Link to={`/edit/${singleDog.id}`}>
            <button>Edit</button>
          </Link>

          <Link>
            <button>Next</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default DogInfo;
