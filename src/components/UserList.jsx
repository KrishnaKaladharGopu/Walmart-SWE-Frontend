import React from "react";
import { useHistory } from "react-router-dom";

import Tooltip from "@mui/material/Tooltip";

const HoverText = ({ user }) => {
  return (
    <div className='mx-5'>
      <h6>
        <strong>User name: </strong>
        {user.username}
      </h6>
      <div>
        <strong> Email: </strong>
        {user.email}
      </div>
    </div>
  );
};

const UserList = ({ user }) => {
  const history = useHistory();
  const handleRedirect = () => {
    history.push({
      pathname: "/" + user.id,
      user,
    });
  };

  return (
    <div key={user.id}>
      <Tooltip title={<HoverText user={user} />}>
        <div
          onClick={handleRedirect}
          className='my-3 p-2 bg-white rounded shadow-sm'>
          {user.name}
        </div>
      </Tooltip>
    </div>
  );
};

export default UserList;
