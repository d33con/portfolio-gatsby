import React from "react";
// prop types

import Button from "./Button";

const Card = ({ image, title, description, webLink, githubLink }) => (
  <div className="card">
    <img src={image} className="project-img" />
    <div className="card__overlay">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <Button link={webLink} text="Visit" />
      <Button link={githubLink} text="Source Code" />
    </div>
  </div>
);

export default Card;
