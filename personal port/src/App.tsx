// import { useState } from "react";
import "./App.css";
import About from "./components/About";
// import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div className="flex flex-col lg:flex-row h-screen">
        <div className="lg:w-2/5 p-4 bg-gray-900">
          <About />
        </div>
        <div className="lg:w-3/5 p-4 bg-gray-900">
          <Projects />
        </div>
      </div>
    </>
  );
}

export default App;
