import React from "react";
import Navigation from "../Navigation";
function Header(props) {
  const {
    elements = [],
    setElement,
  } = props
  return (
    <header>
      <h1>Griffin Honeycutt</h1>
      <Navigation
        elements={elements}
        setElement={setElement}
      ></Navigation>
    </header>
  );
}
export default Header;
