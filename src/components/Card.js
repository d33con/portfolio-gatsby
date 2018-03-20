import React from "react";
// prop types

import Button from "./Button";

const Card = ({ image, title, description, webLink, githubLink }) => (
  <div className="card">
    <img src={image} className="project-img" />
    <div className="card__overlay">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <div className="webLink">
        <a href={webLink}>Visit</a>
        <Button />
      </div>
      <div>
        <a href={githubLink}>Source Code</a>
      </div>
    </div>
  </div>
);

export default Card;
