import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MortyParent from "./components/mortyFetch/MortyParent";
import Home from "./components/routerExample/Home";
import AboutMeRouter from "./components/routerExample/AboutMeRouter";
import CurrentProjects from "./components/routerExample/CurrentProjects";
import { Routes, Route, NavLink } from "react-router-dom";

function App() {
  // this is a comment
  let activeStyle = { color: "red" };
  let inActiveStyle = { textDecoration: "none" };
  return (
    <div className="App">
      <Header />
      {/* <MortyParent /> */}

      {/* Create Home Page (HomePage.jsx)- Welcome add lorem ipsum 1 paragraph
      
      Create an About Me page (AboutMeRouter.jsx) - Have your name in the h2 and list of 3 things about you. Favorite food, Birthplace...etc

      Create Current Projects (CurrentProject.jsx) - list current projects you are working on. Add a lorem imsum paragraph at the end. 
      */}

      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
            >
              Home
            </NavLink>
          </li>
          <li style={{ marginLeft: "auto" }}>
            <NavLink
              to="/about-me"
              style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/current-projects"
              style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
            >
              Current Projects
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMeRouter />} />
        <Route path="/current-projects" element={<CurrentProjects />} />
        <Route path="/morty" element={<MortyParent />} />
        <Route path="/morty/:id" element={<MortyParent />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
