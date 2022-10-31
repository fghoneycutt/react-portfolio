import React from "react";
function setNewHighlight(selected) {
    var removeActiveAbout = document.querySelector('.About');
    if (removeActiveAbout) {
        removeActiveAbout.classList.remove('About');
    }
    var removeActive = document.querySelector('.activeTab');
    if (removeActive) {
        removeActive.classList.remove('activeTab');
    }
    var highlight = document.getElementById(selected);
    highlight.className = 'activeTab'
}
function Navigation(props) {
    const {
        elements = [],
        setElement,
    } = props
    return (
      <nav>
        <ul className="nav">
                {elements.map((selected) => (
                <li className={selected} id={selected} key={selected}>
                    <span
                        onClick={() => {
                            setElement(selected);
                            setNewHighlight(selected);
                        }}>
                        {selected}
                    </span>
                </li>
            ))}
        </ul>
      </nav>
    );
}
export default Navigation;