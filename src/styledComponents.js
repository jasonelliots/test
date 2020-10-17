import styled from "styled-components";

const FormContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap");
  font-family: "Raleway", sans-serif;
  color: #121212;
  font-weight: bold;
  width: 100%;
  margin: 0 auto;

  /* * {
    border: 1px solid black;
  } */
  /* .formBox {
    color: #121212;
    border-bottom: 1px solid #121212;
    border-top: 1px solid #121212;
    border-radius: 0px;
    width: 30%;
    margin: 0% auto;
    margin-bottom: 3%;
    background-color: white;
  } */
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
    color:  #056105ce;
    border: 2px  #056105ce solid; 
    border-radius: 3px;
    font-size: 1.2rem;
    margin: 5%;
    width: 30%; 
    height: 3rem; 
    text-align: center;  

    &:hover {
        box-shadow: 8px 8px 8px rgba(0,0,0,0.3);    
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

export { NavBar, LinkStyle, FormContainer };
