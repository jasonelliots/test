import styled from "styled-components";

const FormContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap");
  font-family: "Raleway", sans-serif;
  color: #121212;
  font-weight: bold;
  width: 100%;
  margin: 0 auto;

  h1 {
    text-align: center;
  }
  a {
    text-decoration: none;
    color: #121212;
    :hover {
      color: #1db954;
    }
  }
  button {
    background-color: white;
    color: #056105ce;
    border: 2px #056105ce solid;
    border-radius: 3px;
    font-size: 1.2rem;
    margin: 5%;
    width: 30%;
    height: 3rem;
    text-align: center;

    &:hover {
      box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.3);
      transform: translateY(-2px);
    }
  }

  form {
    margin: 0% auto;
    width: 50%;
    text-align: center;
    border-radius: 5px;
  }
  label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    margin: 3% auto;
    margin-bottom: 2%;
  }
  input {
    height: 2.5rem;
    width: 50%;
    align-content: right;

    @media (max-width: 500px) {
      width: 80%;
      margin: 3% auto;
    }
  }
  .link {
    color: darkgreen;
  }
`;

const NavBar = styled.div`
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
  }

  .links {
    display: flex;
    flex-direction: row;
    width: 15%;
  }
`;

const LinkStyle = styled.div`
  margin: 5%;
`;

// layout

const StyledDashboard = styled.div`
  width: 80%;
  /* border: 1px solid black;  */
  margin: 6% auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* align-items: center;  */
`;

const LeftDash = styled.div`
  width: 25%;
`;

const RightDash = styled.div`
  width: 75%;
`;

const PlantListDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
const PlantDiv = styled.div`
  width: 26%;
  height: 200px;
  padding: 5%;
  margin: 2%;
  text-align: center; 
  color: #056105ce;
  border: 2px #056105ce solid;
  border-radius: 50%;
  &:hover {
    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }
`;

const Button = styled.button`
  background-color: white;
  color: #056105ce;
  border: 2px #056105ce solid;
  border-radius: 3px;
  font-size: 1.2rem;
  margin-left: 2%;
  margin-top: 2%; 
  width: 50%;
  height: 3rem;
  text-align: center;

  &:hover {
    box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }
`;
const SubTitle = styled.h2`
  font-size: 2rem;
  margin-left: 7%;
  margin-bottom: 2%;
`;

const Emoji = styled.div`
  height: 200px; 
`



const AddPlantContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap");
  font-family: "Raleway", sans-serif;
  color: #121212;
  font-weight: bold;
  width: 100%;
  margin: 0 auto;

  h1 {
    text-align: center;
  }
  a {
    text-decoration: none;
    color: #121212;
    :hover {
      color: #1db954;
    }
  }
  button {
    background-color: white;
    color: #056105ce;
    border: 2px #056105ce solid;
    border-radius: 3px;
    font-size: 1.2rem;
    margin: 5%;
    margin-left: 8%; 
    width: 35%;
    height: 3rem;
    text-align: center;

    &:hover {
      box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.3);
      transform: translateY(-2px);
    }
  }

  form {
    margin: 0% auto;
    width: 100%;
    text-align: center;
    border-radius: 5px;
  }
  label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    margin: 3% auto;
    margin-bottom: 2%;
  }
  input {
    height: 2.5rem;
    width: 100%;
    align-content: right;

    @media (max-width: 500px) {
      width: 80%;
      margin: 3% auto;
    }
  }
  .link {
    color: darkgreen;
  }
`;
export {
  NavBar,
  LinkStyle,
  FormContainer,
  StyledDashboard,
  SubTitle,
  LeftDash,
  RightDash,
  PlantListDiv,
  PlantDiv,
  Button,
  Emoji,
  AddPlantContainer
};
