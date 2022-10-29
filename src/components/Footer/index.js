import React from "react";

function Footer() {
  return (
    <footer>
      <a href="https://github.com/fghoneycutt" target="_blank" rel="noreferrer">
        <img
          class="footer-img"
          src="./assets/images/github.svg"
          alt="github logo"
        ></img>
      </a>
      <a
        href="https://www.linkedin.com/in/griffin-honeycutt/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          class="footer-img"
          src="./assets/images/linkedin.svg"
          alt="linkedin logo"
        ></img>
      </a>
      <a href="mailto:fghoneycutt@gmail.com" target="_blank" rel="noreferrer">
        <img class="footer-img" src="./assets/images/email.svg" alt="email logo"></img>
      </a>
    </footer>
  );
}
export default Footer;
