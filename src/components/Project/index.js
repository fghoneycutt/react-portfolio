import React from "react";

function Project() {
  return (
    <div className="image-grid">
      <a
        href="https://fghoneycutt.github.io/genre-buddy/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="portfolio-img"
          src="./assets/images/genrebuddy.png"
          alt="genre buddy landing page"
        ></img>
      </a>
      <img
        className="portfolio-img"
        src="./assets/images/vinder.png"
        alt="vinder landing page"
      ></img>
      <img
        className="portfolio-img"
        src="./assets/images/tech-blog.png"
        alt="tech blog home page"
      ></img>
    </div>
  );
}
export default Project;
