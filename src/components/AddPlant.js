import React, { useState } from "react";

export default function AddPlant() {
  const [adding, setAdding] = useState(false);
  const [formValues, setFormState] = useState({
    nickname: "",
    species: "",
    h20frequency: ""
});

const inputChange = (e) => {
    e.persist();
    const newFormValues = {
        ...formValues,
        [e.target.name]: e.target.value,
    };
    setFormState(newFormValues);
};

  return (
    <div>
      {adding ? (
          <div>
        <form>
          <input
            id="nickname"
            type="text"
            name="nickname"
            value={formValues.nickname}
            onChange={inputChange}
          />
        </form>
        <button  onClick={() => {
            setAdding(!adding);
          }}> cancel </button>
        </div>
      ) : (
        <button
          onClick={() => {
            setAdding(!adding);
          }}
        >
          add plant
        </button>
      )}
    </div>
  );
}
