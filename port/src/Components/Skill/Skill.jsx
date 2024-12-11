import React, { useState } from "react";
import "./Skill.css";
import { icons } from "../../Script.js";
import Experience from "../Experience/Experience.jsx";
import theme_pattern from "../../assets/theme_pattern.svg"; 

const Skills = () => {
  const [active, setActive] = useState(1);

  return (
    <section id="skillSec" className="skill">
      <div className="container" id="skills">
        <div className="title">
          <span>What I Expert?</span>
          {/* <img src={theme_pattern} alt="" /> */}
          <h1>Skills And Experience</h1>
        </div>
        <div className="select">
          <button
            onClick={() => setActive(1)}
            className={active === 1 ? "active" : ""}>
            Skills
          </button>
          <button
            onClick={() => setActive(2)}
            className={active === 2 ? "active" : ""}>
            Experiences
          </button>
        </div>
        <div className="skills">
          {active === 1 &&
            icons.map((icon) => {
              return (
                <div key={Math.random()} className="tools">
                  <img src={icon} alt="" />
                </div>
              );
            })}
        </div>
        <div className="experiencs">
          {active === 2 && <Experience />}
        </div>
        {/* <div className="finishes_container">
          {finishes.map((finish) => {
            return (
              <div className="finishes" key={finish.id}>
                <div className="number">{finish.number}</div>
                <h4 className="item_name">{finish.itemName}</h4>
              </div>
            );
          })}
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
