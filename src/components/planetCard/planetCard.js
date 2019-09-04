import React from "react";

import "./styles.scss";

const Card = props => {
  const { planet } = props;
  return (
    <div id="card">
      <div id="front">
        <div id="top-pic">
          <p className="planetTitle">{planet.name}</p>
        </div>
        <div id="info-box">
          <div className="info">
            <h2>
              Population: <p className="infoValue">{planet.population}</p>
            </h2>
            <h2>
              Climate: <p className="infoValue">{planet.climate}</p>
            </h2>
            <h2>
              Terrain: <p className="infoValue">{planet.terrain}</p>
            </h2>
            <h2>
              Featured in <p className="infoValue">{planet.films.length}</p>{" "}
              films
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
