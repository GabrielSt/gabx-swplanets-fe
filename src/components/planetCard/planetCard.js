import React from "react";

import "./styles.scss";

const Card = props => {
  const { planet } = props;
  console.log(planet);
  return (
    <div id="card">
      <div id="front">
        <div id="top-pic">{planet.name}</div>
        <div id="info-box">
          <div className="info">
            <h2>Population: {planet.population}</h2>
            <h2>Climate: {planet.climate}</h2>
            <h2>Terrain: {planet.terrain}</h2>
            <h2>Featured in {planet.films.length} films</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
