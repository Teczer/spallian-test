import React from "react";

function Loader() {
  return (
    <div className="loader-container">
      <h1 style={{ color: "white" }}>??????????</h1>
      <div className="loader-stats">
        <p>Height: ???</p>
        <p>Weight: ???</p>
        <p>Abilities: ???</p>
        <a href="/">Back to home</a>
      </div>
    </div>
  );
}

export default Loader;
