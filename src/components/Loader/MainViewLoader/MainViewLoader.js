import React from "react";

import "./MainViewLoader.css";
function MainViewLoader() {
  return (
    <div className="loader-container">
      {/* SKELETON STATS */}
      <ul className="loader-stats-box">
        {Array.from({ length: 6 }).map((pokemon, index) => {
          return (
            <li key={index} className="loader-progress-skeleton">
              <div className="loader-skeleton-stat"></div>
              <div className="loader-progress-bar"></div>
            </li>
          );
        })}
      </ul>
      {/* SKELETON SPLASH + NAME */}
      <div className="loader-splash-title-container">
        <div className="skeleton-pokemon-name"></div>
        <div className="skeleton-pokemon-splash"></div>
      </div>
      {/* SKELETON ABILITIES */}
      <div className="loader-atributes-container">
        {Array.from({ length: 2 }).map((pokemon, index) => {
          return (
            <div key={index} className="skeleton-attribute-container">
              <div className="skeleton-attribute-title"></div>
              <ul className="skeleton-attribute-box">
                <li className="skeleton-attribute"></li>
                <li className="skeleton-attribute"></li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainViewLoader;
