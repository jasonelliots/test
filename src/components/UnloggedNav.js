import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar, LinkStyle } from '../styledComponents'; 

export default function UnloggedNav() {
    return (
        <div className="unlogged">
        <div class="navBar">
          <h1>
          <Link to='/'>water my <br />
              plants</Link>
          </h1>
          <nav>
            {/* <a href="html/about.html"> about</a> */}
            <Link to="/login"> log in</Link>
            <Link to="/register"> register</Link>
          </nav>
        </div>
      </div>
    )
}
