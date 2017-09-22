import React from "react";
import Link from "gatsby-link";

import "./projects.css";

import euros from "../images/euro-fixtures.jpg";
import tracklistah from "../images/tracklistah.jpg";
import crimean from "../images/crimean-war.jpg";
import earthquake from "../images/earthquake.jpg";
import pomodoro from "../images/pomodoro.jpg";
import blv from "../images/blv.jpg";

const Card = ({ image, title, description, webLink, githubLink }) => (
  <div className="project-card-container">
    <div className="card">
      <div className="side">
        <a href={webLink}>
          <img src={image} className="project-img" />
        </a>
        <div className="card-caption">
          <div className="title">{title}</div>
          <div className="description">{description}</div>
          <div>
            <a href={webLink}>Visit</a>
          </div>
          <div>
            <a href={githubLink}>Source Code</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ProjectsPage = () => (
  <div className="projects-wrapper">
    <Card
      image={euros}
      title="Euro 2016 team & player cards"
      description=""
      webLink="https://codepen.io/d33con/full/xOwQmN/"
      githubLink="https://github.com/d33con/euro-2016-team-player-cards"
    />
    <Card
      image={tracklistah}
      title="Tracklistah"
      description="Mix tracklisting app built with React"
      webLink="#"
      githubLink="https://github.com/d33con/tracklistr"
    />
    <Card
      image={crimean}
      title="Crimean War Casualties"
      description="Sunburst visualisation built with react-vis"
      webLink="https://d33con.github.io/crimean-war-casualties/"
      githubLink="https://github.com/d33con/crimean-war-casualties"
    />
    <Card
      image={earthquake}
      title="2016 Kumamoto Earthquake"
      description="Earthquakes mapped & visualised with React & Google maps"
      webLink="https://d33con.github.io/2016-Kumamoto-Earthquake/"
      githubLink="https://github.com/d33con/2016-Kumamoto-Earthquake"
    />
    <Card
      image={pomodoro}
      title="Pomodoro Timer"
      description="Built with React"
      webLink="https://d33con.github.io/react-pomodoro-timer/"
      githubLink="https://github.com/d33con/react-pomodoro-timer"
    />
    <Card
      image={blv}
      title="Buscate La Vida"
      description="UK placement company site built with Bootstrap"
      webLink="https://www.buscatelavida.co.uk"
      githubLink=""
    />
  </div>
);

export default ProjectsPage;
