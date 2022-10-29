import React from "react";

function About() {
  return (
    <div className="about-container">
      <div className="image-container">
        <img
          className="griffin-pic img-fluid"
          src="./assets/images/PicOfMe2.jpeg"
          alt="Griffin"
        ></img>
      </div>
      <div className="about-text">
        <p>
          Graduate of UNC Chapel Hill’s Coding Boot Camp with experience working
          across the full stack of software development and a passion for
          creating user-friendly applications. I am looking for a role as an
          entry-level software developer that will allow me to continue to learn
          new technologies and gain experience working with seasoned developers.
        </p>
      </div>
    </div>
  );
}
export default About;