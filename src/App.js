import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Contact from "./components/Contact";
import About from "./components/About";
import Resume from "./components/Resume";
import "../src/index.css";
function App() {
  const [elements] = useState(["Resume", "Portfolio", "Contact", 'About']);
  const [element, setElement] = useState(elements[0]);
  const render = () => {
    if (element === "About") {
      return <About></About>
    }
    if (element === "Portfolio") {
      return <Project></Project>
    }
    if (element === "Contact") {
      return <Contact></Contact>
    }
    if (element === "Resume") {
      return <Resume></Resume>
    }
  }
  return (
    <div>
      <Header
        elements={elements}
        setElement={setElement}
        element={element}
      ></Header>
      <main>
        {render()}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
