import React, { useEffect } from 'react';

const MapQuest = ({ height, width, center, titleLayer, zoom, apiKey }) => {
  useEffect(() => {
    let map = null;

    if (window.L && window.L.mapquest) {
      window.L.mapquest.key = apiKey;

      if (!map) {
        map = window.L.mapquest.map('map', {
          center,
          layers: window.L.mapquest.tileLayer(titleLayer),
          zoom,
        });
        map.addControl(window.L.mapquest.control());
      }
    } else {
      console.error('MapQuest is not available.');
    }

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, [apiKey, center, titleLayer, zoom]);

  return <div id="map" className='w-full lg:h-[500px] h-[300px] z-10 '></div>;
};

export default MapQuest;
