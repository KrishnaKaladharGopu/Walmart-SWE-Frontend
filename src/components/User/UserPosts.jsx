//  b. show section with user posts, collapsed by default
//    i. expand to show search bar, create comment button and post new comments
//    ii. show post list w/ comments, each post can be updated or deleted.

import React from "react";
import { useEffect, useState } from "react";
import Collapsible from "react-collapsible";

import UserPost from "./UserPost";

const UserPosts = ({ user }) => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=" + user.id
    );
    let postsData = await response.json();

    setPosts(postsData);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className='my-3 p-3 bg-white rounded shadow-sm'>
      <Collapsible trigger={<h3>User Posts</h3>}>
        <hr />
        {posts.map((post) => {
          return <UserPost key={post.id} post={post} />;
        })}
      </Collapsible>
    </div>
  );
};

export default UserPosts;
