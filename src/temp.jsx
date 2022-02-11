// The Assignment: Front End/Full Stack
// For this coding exercise, you will be creating a web page which has following requirements.
// 1. User list by name
// a. on hover to show popup with username and email
// b. on click to navigate to user detail page
// 2. User detail page
// a. show section with user profile
// b. show section with user posts, collapsed by default
// i. expand to show search bar, create comment button and post new comments
// ii. show post list w/ comments, each post can be updated or deleted.
// c. show section with user albums, collapsed by default
// i. expand to show album list, on click each album to show photos
// Use these free REST APIs - https://jsonplaceholder.typicode.com/ to design the page.

import { useEffect, useState } from "react";
import "./styles.css";
import Tooltip from "@mui/material/Tooltip";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./User";

export default function App() {
  const [data, setData] = useState([]);
  const [routes, setRoutes] = useState([]);

  const getUserData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonData = await response.json();
    let rows = [];
    let tmpRoutes = [];
    // console.log(jsonData)
    jsonData.forEach((element, index) => {
      rows.push(
        <div key={index}>
          <Tooltip
            title={
              "Username: " + element.username + " | Email: " + element.email
            }>
            <li
              onClick={() => {
                window.location.href = "/" + element.id;
              }}>
              {element.name}
            </li>
          </Tooltip>
        </div>
      );
      tmpRoutes.push(
        <Route
          key={element.id}
          path='/:id'
          element={<User data={element.id} />}
        />
      );
    });
    setData(rows);
    setRoutes(tmpRoutes);
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route element={<div>404 Not Found</div>} />
          <Route path='/' element={<ol>{data}</ol>} />
          {routes}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
