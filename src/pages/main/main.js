import React, { useState } from "react";
import logo from "../../logo.svg";

import Button from "../../components/button";
import PlanetCard from "../../components/planetCard";
import { getPlanet } from "../../services/planets";

const Main = () => {
  const nPlanets = 61;
  const [planet, setPlanet] = useState();

  const getRandomPlanet = async () => {
    let planetId = Math.floor(Math.random() * nPlanets + 1);
    const data = await getPlanet(planetId);
    setPlanet(data);
  };
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Star Wars planets.</p>
      </header>
      {planet ? <PlanetCard planet={planet} /> : <div />}
      <div className="container">
        <Button text="Give me a planet!" onClick={getRandomPlanet} />
      </div>
    </div>
  );
};

export default Main;
