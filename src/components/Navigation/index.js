import React from "react";

function Navigation(props) {
    const {
        elements = [],
        setElement,
    } = props
    return (
      <nav>
        <ul>
            {elements.map((selected) => (
                <li key={selected}>
                    <span onClick={() => {
                        setElement(selected)
                    }} >
                        {selected}
                    </span>
                </li>
            ))}
        </ul>
      </nav>
    );
}
export default Navigation;