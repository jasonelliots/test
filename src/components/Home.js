import React from "react";
import { Link } from 'react-router-dom';

import '../landingpage/css/index.css';

export default function Home() {
  return (
    <html lang="en">
      <head>
        <title>Water My Plants</title>
      </head>
      <body>
        <header>
          <div class="navBar">
            <h1>
              <Link to='/'>water my <br />
              plants</Link>
            </h1>
            <nav>
              <a href="#mainContainer"> about</a>
              <Link to="/login"> log in</Link>
              <Link to="/register"> register</Link>
            </nav>
          </div>
        </header>

        <div class="mainContainer" id="mainContainer">
          <h4>The simple solution to keep your plants alive and thriving.</h4>

          <div class="details">
            <p class="steps">1. Create a WaterMyPlants account.</p>
            <p class="steps" id="offStep">
              2. Enter your plant's information and watering schedule.
            </p>
            <p class="steps" id="offStep2">
              3. Watch your plant friends <span>thrive.</span>
            </p>
          </div>

          <div class="buttonSection">
          <Link to="/login">
              <h3 class="button">log in</h3>
            </Link>
            <Link to="/register">
              <h3 class="button">register</h3>
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
