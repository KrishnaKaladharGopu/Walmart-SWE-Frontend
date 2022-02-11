import React from "react";

import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();

  return <div className='container'>This is user {id} page</div>;
};

export default User;
