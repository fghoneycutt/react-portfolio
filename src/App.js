import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Contact from "./components/Contact";
import About from "./components/About";
import Resume from "./components/Resume";
import "../src/index.css";
function App() {
  const [elements] = useState(["About", "Resume", "Contact", "Portfolio"]);
  const [element, setElement] = useState(elements[0]);
  return (
    <div>
      <Header
        elements={elements}
        setElement={setElement}
        element={element}
      ></Header>
      <main>
        <About></About>
        <Project></Project>
        <Contact></Contact>
        <Resume></Resume>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
