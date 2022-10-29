import React from "react";

function About() {
  return (
    <div>
      <p>
        Download my resume{" "}
        <a
          href="./assets/Griffin Honeycutt Resume.pdf"
          alt="resume download"
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
      </p>
      <h2>Programming Competencies</h2>
      <h3>Web Development</h3>
      <ul>
        <li>HTML/CSS</li>
        <li>JavaScript</li>
        <li>Bootstrap</li>
        <li>Materialize</li>
        <li>Handlebars.js</li>
        <li>SQL</li>
        <li>jQuery</li>
        <li>MERN (MongoDB, Express.js, React.js, Node.js)</li>
      </ul>
      <h3>Concepts</h3>
      <ul>
        <li>OOP</li>
        <li>RESTful APIs</li>
        <li>CRUD Operations</li>
        <li>MVC Frameworks</li>
        <li>Test Driven Development (Jest)</li>
      </ul>
    </div>
  );
}
export default About;
