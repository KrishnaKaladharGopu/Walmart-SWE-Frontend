// The Assignment: Front End/Full Stack
// For this coding exercise, you will be creating a web page which has following requirements.
// 1. User list by name
// 2. User detail page
// Use these free REST APIs - https://jsonplaceholder.typicode.com/ to design the page.

import React from "react";
// import { HashRouter as Router, Route } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

// Pages
import Home from "./components/Pages/Home";
import User from "./components/Pages/User";

// Components
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      {/* 1. User list by name */}
      <Route exact path='/' component={Home} />
      {/* 2. User detail page */}
      <Route path='/:id' component={User} />
    </Router>
  );
};

export default App;
