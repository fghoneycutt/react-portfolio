import React from "react";
import Navigation from "../Navigation";
function Header(props) {
  const {
    elements = [],
    setElement,
  } = props
  return (
    <header>
      <p>Griffin Honeycutt</p>
      <Navigation
        elements={elements}
        setElement={setElement}
      ></Navigation>
    </header>
  );
}
export default Header;
