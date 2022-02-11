//  b. show section with user posts, collapsed by default
//    i. expand to show search bar, create comment button and post new comments
//    ii. show post list w/ comments, each post can be updated or deleted.

import React from "react";
import { useEffect, useState } from "react";
import Collapsible from "react-collapsible";

import UserPost from "./UserPost";

const UserPosts = ({ user }) => {
  const [posts, setPosts] = useState([]);

  const [input, setInput] = useState("");

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

  const handleSearch = (event) => {
    event.preventDefault();

    console.log(input);
  };

  return (
    <div className='my-3 p-3 bg-white rounded shadow-sm'>
      <Collapsible trigger={<h3>User Posts</h3>}>
        <hr />
        <div className='d-flex flex-row justify-content-end p-1'>
          <form className='form-inline my-2 my-lg-0' onSubmit={handleSearch}>
            <input
              className='form-control mr-sm-3'
              type='search'
              placeholder='Search'
              aria-label='Search'
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button className='btn btn-outline-dark my-2 my-sm-0' type='submit'>
              Search
            </button>
          </form>
        </div>

        {posts.map((post) => {
          return <UserPost key={post.id} post={post} />;
        })}
      </Collapsible>
    </div>
  );
};

export default UserPosts;
