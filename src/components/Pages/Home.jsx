// 1. User list by name
// a. on hover to show popup with username and email
// b. on click to navigate to user detail page
// Use these free REST APIs - https://jsonplaceholder.typicode.com/ to design the page.

import React from "react";
import { useEffect, useState } from "react";

import UserList from "../UserList";

const Home = () => {
  const [userData, setUserData] = useState([]);

  const getUserData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json();

    // Sorting users by name
    users.sort((a, b) => {
      const nameA = a.name;
      const nameB = b.name;
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    setUserData(users);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className='container'>
      {userData.map((user) => {
        return <UserList key={user.id} user={user} />;
      })}
    </div>
  );
};

export default Home;
