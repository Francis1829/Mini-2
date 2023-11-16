import React, { useEffect, useState } from 'react';
import { createClient } from 'pexels';

function Gallery() {
  const [photos, setPhotos] = useState([]);
  const client = createClient('LsfzoEK6GYaDT9mchfSS7vLGMyiuumByYueS5S8Fz6swrVlZYjcJvDoA'); 
  const query = 'Gaming pc';

  useEffect(() => {
    client.photos.search({ query, per_page: 50 })
      .then(response => {
        setPhotos(response.photos);
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
      });
  }, []);

  return (
    <> <div className="flex w-full">
    <div className="w-full p-10">
      <div className="font-semibold lg:text-[3rem] text-[2rem] font-[Agency] p-10 lg:text-start text-center">Gallery</div>
      <div className="shop-body flex flex-wrap justify-center items-center">
      {photos.map((photo) => (
        <>
      <div key={photos.id} className='flex flex-col box-border cursor-pointer  m-2 my-4'>
        <div className="img flex justify-center items-center">
      <img src={photo.src.medium} alt={photo.photographer} className='rounded-md' />
      </div>
      <div className="flex flex-col p-2">
      <span className='text-[20px] font-semibold font-[Sudo] lg:text-start text-center'>Photographer: {photo.photographer}</span>
      
      </div>
      </div>
      </>
    ))}
      </div>
    </div>
  </div>
    </>

  );
}

export default Gallery;
