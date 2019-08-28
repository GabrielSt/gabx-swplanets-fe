import React from "react";

import "./styles.scss";

const Card = () => {
  return (
    <div id="card">
      <div id="front">
        <div id="top-pic"></div>
        <div id="info-box">
          <div class="info">
            <h1>Planet x</h1>
            <h2>Population: 20000</h2>
            <h2>Climate: Arid</h2>
            <h2>Terrain: Desert</h2>
            <h2>Featured in 5 films</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
