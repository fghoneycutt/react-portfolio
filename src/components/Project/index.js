import React from "react";

function Project() {
  return (
    <div className="image-grid">
      <div className="portfolio-image-container">
        <img
          className="portfolio-img"
          src="./assets/images/genre.jpeg"
          alt="genre buddy landing page"
        ></img>
        <div className="portfolio-links">
          <a
            href="https://fghoneycutt.github.io/genre-buddy/"
            target="_blank"
            rel="noreferrer"
          >
            <span>Genre Buddy</span>
          </a>
          <a
            href="https://github.com/fghoneycutt/genre-buddy"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./assets/images/github.svg"
              alt="genre buddy github link"
            ></img>
          </a>
        </div>
      </div>
      <div className="portfolio-image-container">
        <img
          className="portfolio-img"
          src="./assets/images/vinder.png"
          alt="vinder landing page"
        ></img>
        <div className="portfolio-links">
          <a
            href="https://lonely-gamer-hours.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <span>Vinder</span>
          </a>
          <a
            href="https://github.com/farrelldianni/Fullstack-Group-Project"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./assets/images/github.svg"
              alt="vinder github link"
            ></img>
          </a>
        </div>
      </div>
      <div className="portfolio-image-container">
        <img
          className="portfolio-img"
          src="./assets/images/tech-blog.png"
          alt="genre buddy landing page"
        ></img>
        <div className="portfolio-links">
          <a
            href="https://griffin-tech-blog.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <span>Tech Blog</span>
          </a>
          <a
            href="https://github.com/fghoneycutt/tech-blog"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./assets/images/github.svg"
              alt="tech blog github link"
            ></img>
          </a>
        </div>
      </div>
      <div className="portfolio-image-container">
        <img
          className="portfolio-img"
          src="./assets/images/countygame.png"
          alt="county game page"
        ></img>
        <div className="portfolio-links">
          <a
            href="https://fghoneycutt.github.io/county-game/"
            target="_blank"
            rel="noreferrer"
          >
            <span>North Carolina County Game</span>
          </a>
          <a
            href="https://github.com/fghoneycutt/county-game"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./assets/images/github.svg"
              alt="county game github link"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Project;
