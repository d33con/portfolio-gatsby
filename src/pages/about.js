import React from "react";

const AboutPage = () => (
  <div className="about-page">
    <div className="skills-container">
      <div className="skills-title">Skills</div>
      <ul className="skills-list">
        <li>Javascript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>React</li>
        <li>D3</li>
        <li>jQuery</li>
      </ul>
    </div>
    <div className="skills-title">Education</div>
    <ul className="skills-list">
      <li>B.Eng (Hons) Engineering (Mechanical)</li>
    </ul>
    <div className="skills-title">About Me</div>
    <div className="bio">
      <p>I'm a Front End Developer from the UK.</p>
      <p>
        I've been developing and learning for around 2 years. I love creating
        modern, responsive websites and applications keeping up wth the latest
        trends. I have recently returned from living in Japan and am looking for
        my first professional development position.
      </p>
      <p>
        In my spare time I love listening to and occasionally producing music,
        watching Leicester City FC, reading and watching TV.
      </p>
    </div>
  </div>
);

export default AboutPage;
