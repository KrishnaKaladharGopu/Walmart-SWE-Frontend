import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Title = ({ title }) => {
  return (
    <div className='col-md-4'>
      <div className='card mb-4 box-shadow'>
        <img className='card-img-top' src={title.url} alt='Title pic' />
        <div className='card-body'>
          <h5 className='card-title'>{title.title}</h5>
        </div>
      </div>
    </div>
  );
};

const Album = () => {
  const [titlesData, setTitlesData] = useState("");
  const { id } = useParams();

  const getTitlesByAlbumId = async () => {
    const response = await fetch(
      " https://jsonplaceholder.typicode.com/photos?albumId=" + id
    );
    const titles = await response.json();

    setTitlesData(titles);
  };

  useEffect(() => {
    getTitlesByAlbumId();
  }, []);

  return (
    <div className='container'>
      <div className='row'>
        {titlesData &&
          titlesData.map((title) => {
            return <Title key={title.id} title={title} />;
          })}
      </div>
    </div>
  );
};

export default Album;
