//  c. show section with user albums, collapsed by default
//    i. expand to show album list, on click each album to show photos

import React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Collapsible from "react-collapsible";

const Album = ({ album }) => {
  const history = useHistory();
  const handleRedirect = () => {
    history.push({
      pathname: "/Album/" + album.id,
    });
  };

  return (
    <div className='px-2' onClick={handleRedirect}>
      <p>{album.title}</p>
      <hr />
    </div>
  );
};

const UserAlbums = ({ user }) => {
  const [albums, setAlbums] = useState([]);

  const getAlbumsByUserId = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/albums?userId=" + user.id
    );
    const albumsData = await response.json();
    setAlbums(albumsData);
  };

  useEffect(() => {
    getAlbumsByUserId();
  }, []);

  return (
    <div className='my-3 p-3 bg-white rounded shadow-sm'>
      <Collapsible trigger={<h3>User Albums</h3>}>
        <hr />
        <div className='px-2'>
          {albums.map((album) => {
            return <Album key={album.id} album={album} />;
          })}
        </div>
      </Collapsible>
    </div>
  );
};

export default UserAlbums;
