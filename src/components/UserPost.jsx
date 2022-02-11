import React from "react";

const UserPost = ({ post }) => {
  return (
    <div className='mt-2 p-4 bg-light border border-top-0 border-right-0 rounded'>
      <h4>{post.title}</h4>
      <hr />
      <p>{post.body}</p>
    </div>
  );
};

export default UserPost;
