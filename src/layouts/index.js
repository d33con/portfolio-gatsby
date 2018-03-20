import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/Header";

import "./index.css";
import "../style/font-awesome/css/font-awesome.css";

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
