import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const HoverText = ({ user }) => {
  return (
    <div className='mx-5'>
      <h5>
        <strong>User name: </strong>
        {user.username}
      </h5>
      <div>
        <strong> Email: </strong>
        {user.email}
      </div>
    </div>
  );
};

const UserList = ({ user }) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const history = useHistory();
  const handleRedirect = () => {
    // history.push("/User/" + user.id);
    history.push({
      pathname: "/User/" + user.id,
      user,
    });
  };

  return (
    <div
      onClick={handleRedirect}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className='my-3 p-2 bg-white rounded shadow-sm'>
      <div>
        <h3>{user.name}</h3>
        {isHovering && <HoverText user={user} />}
      </div>
    </div>
  );
};

export default UserList;
