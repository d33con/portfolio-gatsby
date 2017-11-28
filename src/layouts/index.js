import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import "./index.css";
import "../style/font-awesome/css/font-awesome.css";

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

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Oliver Bullen - Front End Developer"
      meta={[
        { name: "description", content: "Oliver Bullen Front End Developer" },
        {
          name: "keywords",
          content:
            "front, end, developer, javascript, html, css, react, sass, uk, website, app"
        }
      ]}
    />
    <Header />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
