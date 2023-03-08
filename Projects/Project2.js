import "./Project2.css";
import React from "react";
import js from "../assets/JSMealProject.png";
import sa from "../assets/SASSproject.png";
import rs from "../assets/travelproject.png";
import { Link } from "react-router-dom";

export const Project2 = () => {
  return (
    <div className="text">
      <div className="heading">
        <h1>See My recent Work</h1>
        <div className="work">
          <h1 className="pheading">Projects</h1>
          <div className="p-container">
            <div className="p-card">
              <img src={js} alt="image" />
              <h2 className="project-title">JSMealProject</h2>
              <div className="details">
                <p>Javascript meal App here you can see many food items.</p>
                <div className="project-btn">
                  <Link to="https://github.com/123raman456/JS-Meal.git" className="btnpro">
                    View
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-card">
              <img src={sa} alt="image" />
              <h2 className="project-title">SASS Project</h2>
              <div className="details">
                <p>Responsive Website for restaurant.</p>
                <div className="project-btn">
                  <Link to="https://github.com/123raman456/Restaurant.git" className="btnpro">
                    View
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-card">
              <img src={rs} alt="image" />
              <h2 className="project-title">Travel Website</h2>
              <div className="details">
                <p>Javascript meal App here you can see many food items.</p>
                <div className="project-btn">
                  <Link to="https://github.com/123raman456/travelSite.git" className="btnpro">
                    View
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
