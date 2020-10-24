import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import {Button, AddPlantContainer} from '../styledComponents'; 


export default function AddPlant({setRefresh}) {

  const userid = window.localStorage.getItem('userid');

  const [adding, setAdding] = useState(false);
  const [formValues, setFormValues] = useState({
    nickname: "",
    species: "",
    h2ofrequency: ""
});

const handleSubmit = (e) => {
  e.preventDefault();
  axiosWithAuth()
      .post(`/api/plants/user/${userid}`, formValues)
      .then((res) => {
          console.log("success", res);
          // reset form if successful
          setFormValues({
            nickname: "",
            species: "",
            h2ofrequency: "",
          });
          setAdding(false);
          setRefresh(true); 
      })
      .catch((err) => {
          console.log(err.response);
      });
};

const inputChange = (e) => {
    e.persist();
    const newFormValues = {
        ...formValues,
        [e.target.name]: e.target.value,
    };
    setFormValues(newFormValues);
};

// - build out form inputs below -  make sure handleSubmit is right

  return (
    <div>
      {adding ? (
          <AddPlantContainer>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            id="nickname"
            type="text"
            name="nickname"
            value={formValues.nickname}
            onChange={inputChange}
          />
           <label>Species</label>
             <input
            id="species"
            type="text"
            name="species"
            value={formValues.species}
            onChange={inputChange}
          />
           <label>Watering Frequency</label>
             <input
            id="h2ofrequency"
            type="text"
            name="h2ofrequency"
            value={formValues.h2ofrequency}
            onChange={inputChange}
          />
        </form>
        <button  onClick={handleSubmit}> submit </button>
        <button  onClick={() => {
            setAdding(!adding);
          }}> cancel </button>
        </AddPlantContainer>
      ) : (
        <Button
          onClick={() => {
            setAdding(!adding);
          }}
        >
          add plant
        </Button>
      )}
    </div>
  );
}
