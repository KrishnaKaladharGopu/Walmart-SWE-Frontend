// 2. User detail page
//  a. show section with user profile
//  b. show section with user posts, collapsed by default
//    i. expand to show search bar, create comment button and post new comments
//    ii. show post list w/ comments, each post can be updated or deleted.
//  c. show section with user albums, collapsed by default
//    i. expand to show album list, on click each album to show photos
// Use these free REST APIs - https://jsonplaceholder.typicode.com/ to design the page.

import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import UserProfile from "../UserProfile";

const User = (props) => {
  const [userData, setUserData] = useState(props.history.location.user);
  const { id } = useParams();

  const getUserData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/" + id
    );
    const user = await response.json();

    setUserData(user);
    console.log("User from params", user, userData);
  };

  useEffect(() => {
    if (userData === undefined) {
      getUserData();
    }
  }, [userData, getUserData]);

  return (
    <div className='container'>
      This is user
      {JSON.stringify(userData)} page
      {userData && <UserProfile user={userData} />}
    </div>
  );
};

export default User;