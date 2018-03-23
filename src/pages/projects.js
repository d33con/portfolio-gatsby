import React from "react";

import Card from "../components/Card";

import euros from "../images/euro-fixtures.jpg";
import tracklistah from "../images/tracklistah.jpg";
import crimean from "../images/crimean-war.jpg";
import earthquake from "../images/earthquake.jpg";
import pomodoro from "../images/pomodoro.jpg";
import blv from "../images/blv.jpg";
import d3 from "../images/d3-vis.jpg";
import portfolio from "../images/portfolio.png";

const ProjectsPage = () => (
  <div className="projects-wrapper">
    <Card
      image={euros}
      title="Euro 2016 team & player cards"
      description="CSS & jQuery"
      webLink="https://codepen.io/d33con/full/xOwQmN/"
      githubLink="https://github.com/d33con/euro-2016-team-player-cards"
    />
    <Card
      image={tracklistah}
      title="Tracklistah"
      description="Mix tracklisting app built with React"
      webLink="https://d33con.github.io/tracklistr"
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
    <Card
      image={d3}
      title="D3 Visualisations"
      description="Collection of data visualisations built with D3.js"
      webLink="https://codepen.io/collection/nWxkKw/"
      githubLink=""
    />
    <Card
      image={portfolio}
      title="Portfolio site"
      description="This site is built using Gatsbyjs - a static site generator for React"
      webLink="#"
      githubLink="https://github.com/d33con/portfolio-gatsby"
    />
  </div>
);

export default ProjectsPage;
