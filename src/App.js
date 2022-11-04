import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import About from "./components/pages/About";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar title={"Github Finder"} icon={"fab fa-github"} />
      <div className='container'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
