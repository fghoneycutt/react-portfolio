import React from "react";
import {projects} from '../../projects'
function Project() {
  return (
    <div className="image-grid">
      {projects.map((data) => {
        return (
          <div className="portfolio-image-container">
            <img
              className="portfolio-img"
              src={"./assets/images/" + data.image}
              alt={ data.alt + " landing page"}
            ></img>
            <div className="portfolio-links">
              <a
                href={data.deployedLink}
                target="_blank"
                rel="noreferrer"
              >
                <span>{data.title}</span>
              </a>
              <a
                href={data.ghLink}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./assets/images/github.svg"
                  alt={ data.alt + " github link"}
                ></img>
              </a>
            </div>
          </div>
        );
    })}
    </div>
  );
}
export default Project;
