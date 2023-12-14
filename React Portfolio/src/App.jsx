import { useState } from 'react'
import './App.css'
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Reccomendations from "./components/Reccomendations";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <Navbar />
        <About />
        <Projects />
        <Skills />
        <Reccomendations />
        <Contact />

      </main>
      
    </>
  );
}

export default App

