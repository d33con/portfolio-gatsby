import React from "react";
import Link from "gatsby-link";

const Header = () => (
  <nav>
    <ul className="nav-links">
      <li>
        <Link to="/" className="home-link">
          Oliver Bullen /
        </Link>
      </li>
      <li>
        <Link to="/about/">About</Link>
      </li>
      <li>
        <Link to="/projects/">Projects</Link>
      </li>
      <li>
        <a href="https://github.com/d33con">
          <i className="fa fa-github" />
        </a>
        <a href="mailto:d33con@gmail.com">
          <i className="fa fa-envelope" />
        </a>
        <a href="https://medium.com/@oliverbullen">
          <i className="fa fa-medium" />
        </a>
      </li>
    </ul>
  </nav>
);

export default Header;
