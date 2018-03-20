import React from "react";
// prop types check

const Button = ({ link, text }) => {
  return (
    <div className="webLink">
      <a href={link}>{text}</a>
    </div>
  );
};

export default Button;
