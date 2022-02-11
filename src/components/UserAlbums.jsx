//  c. show section with user albums, collapsed by default
//    i. expand to show album list, on click each album to show photos

import React from "react";
import Collapsible from "react-collapsible";

// https://jsonplaceholder.typicode.com/albums?userId=1

const UserAlbums = ({ user }) => {
  return (
    <div className='my-3 p-3 bg-white rounded shadow-sm'>
      <Collapsible trigger={<h3>User Albums</h3>}>
        <hr />
        Here show Albums
      </Collapsible>
    </div>
  );
};

export default UserAlbums;
