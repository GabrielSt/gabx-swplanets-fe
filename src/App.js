import React from "react";
import logo from "./logo.svg";
import "./App.scss";

import Button from "./components/button";
import PlanetCard from "./components/planetCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Star Wars planets.</p>
      </header>
      <PlanetCard />
      <div className="container">
        <Button text="Give me a planet!" />
      </div>
    </div>
  );
}

export default App;
