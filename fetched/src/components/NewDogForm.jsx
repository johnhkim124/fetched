import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { baseURL, config } from "../services";

const NewDogForm = (props) => {
  const [dogName, setDogName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [dogPortrait, setDogPortrait] = useState("");
  const [description, setDescription] = useState("");
  const [breed, setBreed] = useState("");
  const [email, setEmail] = useState("");
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    if (params.id > 0 && props.dogData.length) {
      const dog = props.dogData.find((dog) => dog.id === params.id);
      setDogName(dog.fields.dogName);
      setGender(dog.fields.gender);
      setAge(dog.fields.age);
      setLocation(dog.fields.location);
      setDogPortrait(dog.fields.dogPortrait);
      setDescription(dog.fields.description);
      setBreed(dog.fields.breed);
      setEmail(dog.fields.email);
    }
  }, [props.dogData, params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let fields = {
      dogName,
      gender,
      age,
      location,
      dogPortrait,
      description,
      breed,
      email,
    };

    await axios.post(baseURL, { records: [{ fields }] }, config);
    props.setToggle((prev) => !prev);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={dogName}
          required
          onChange={(e) => {
            setDogName(e.target.value);
          }}
        />
        <label htmlFor="age">Age:</label>
        <input
          type="text"
          name="age"
          value={age}
          required
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <label htmlFor="gender">Gender:</label>
        <input
          type="text"
          name="gender"
          value={gender}
          required
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        <label htmlFor="breed">Breed:</label>
        <input
          type="text"
          name="breed"
          value={breed}
          required
          onChange={(e) => {
            setBreed(e.target.value);
          }}
        />
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          name="location"
          value={location}
          required
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <label htmlFor="dogImg">Dog Image URL:</label>
        <input
          type="url"
          name="dogImg"
          value={dogPortrait}
          required
          onChange={(e) => {
            setDogPortrait(e.target.value);
          }}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button type="submit">Find a Home</button>
      </form>
    </div>
  );
};

export default NewDogForm;
