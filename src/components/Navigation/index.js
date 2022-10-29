import React, {useState} from 'react';

function Navigation() {
    const [elements] = useState(['About', 'Resume', 'Contact', 'Portfolio'])
    const [element, setElement] = useState(elements[0]);
    function elementSelected(element) {
        setElement((prevElement) => element)
        console.log(element);
    }
    return (
      <nav>
        <ul>
            {elements.map((selected) => (
                <li key={selected}>
                    <span onClick={() => {
                        elementSelected(selected)
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