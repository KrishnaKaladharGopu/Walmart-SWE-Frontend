// 2. User detail page
//  a. show section with user profile

import React from "react";

const UserProfile = ({ user }) => {
  return (
    <div className='my-3 p-2 bg-white rounded shadow-sm'>
      <div className='row'>
        <div className='col-md-3'>
          <img
            className='rounded img-thumbnail img-fluid'
            src='defaultAvatar.jpeg'
            alt='Avatar'
          />
        </div>
        <div className='col-md-9 pl-md-0'>
          <h4 className='font-weight-strong mt-2'>
            <strong>Name: </strong>
            {user.name}
          </h4>
          <div>
            <strong>User Name:</strong> {user.username}
          </div>
          <div>
            <strong>Email:</strong> {user.email}
          </div>
        </div>
      </div>
      <hr />
      Here display posts
    </div>
  );
};

export default UserProfile;
