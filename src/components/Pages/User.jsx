// 2. User detail page
// a. show section with user profile
// b. show section with user posts, collapsed by default
// i. expand to show search bar, create comment button and post new comments
// ii. show post list w/ comments, each post can be updated or deleted.
// c. show section with user albums, collapsed by default
// i. expand to show album list, on click each album to show photos
// Use these free REST APIs - https://jsonplaceholder.typicode.com/ to design the page.

import React from "react";

const User = (props) => {
  const { user } = props.history.location;

  return (
    <div className='container'>
      This is user
      {JSON.stringify(user)} page
    </div>
  );
};

export default User;
