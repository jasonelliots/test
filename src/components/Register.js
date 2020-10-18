import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { FormContainer } from "../styledComponents";
import axios from "axios";

export default function Register() {
  const { push } = useHistory();
  const [signUpInput, setSignUpInput] = useState({});

  const handleChange = (event) => {
    setSignUpInput({ ...signUpInput, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://jswatermyplants-backend.herokuapp.com/api/auth/register",
        signUpInput
      )
      .then((response) => {
        console.log("response from POST request in SIGNUP form", response);
        localStorage.setItem("token", response.data.token);
        push("/dashboard");
      })
      .catch((error) => console.log("Error from POST in SIGNUP form", error));
    setSignUpInput({
      username: "",
      password: "",
    });
  };

  return (
    <FormContainer>
      <form className="login" onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={signUpInput.username || ""}
            onChange={handleChange}
          />
        </div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={signUpInput.password || ""}
          onChange={handleChange}
        />
        <div>
          <button type="submit">Register</button>
          <p>
            Already have an account? Sign in <Link to="/login" className="link">Here</Link>
          </p>
        </div>
      </form>
    </FormContainer>
  );
}
