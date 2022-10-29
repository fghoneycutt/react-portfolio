import React from "react";
import Navigation from "../Navigation";
function Header(props) {
  const {
    elements = [],
    setElement,
  } = props
  return (
    <header>
      <p>Griffin's Portfolio</p>
      <Navigation
        elements={elements}
        setElement={setElement}
      ></Navigation>
    </header>
  );
}
export default Header;
