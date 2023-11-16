import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../img/Hero.png';
import Hero2 from '../img/Hero2.png';
import Star from './Star';
import MapQuest from '../Mapquest';
import Newsletter from './Newsletter';

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [latt] = useState(17.067863);
  const [langg] = useState(121.6883799);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/product', {
          headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
          },
        });
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getTop5HighestRated = () => {
    const sortedData = [...data].sort((a, b) => b.rating - a.rating);
    return sortedData.slice(0, 5);
  };

  const top5Products = getTop5HighestRated();


  return (
    <>
      <div className="Intro w-full h-full flex justify-center items-center my-10">
        <div className="banner w-full lg:h-[400px] h-[200px] relative"></div>
        <div className="img absolute flex w-full justify-around">
          <img src={Hero} alt="Hero" className="lg:w-[80%] w-[45%] max-w-[420px] h-auto mb-10" />
          <img src={Hero2} alt="Hero2" className="lg:w-[80%] w-[45%] max-w-[400px] h-auto" />
        </div>
        <div className="absolute text-center text-white font-[Agency] drop-shadow-md text-[2rem] lg:text-[3rem] lg:mb-[10rem] mb-[5rem]">
          Build your own gaming setup here in{' '}
          <span className="text-theme-color">TechHub!</span>
        </div>
        <div className="bttn absolute">
          <Link to="/Dashboard/Login">
            <button className="cursor-pointer space-x-2 text-center font-semibold ease-out duration-200 rounded-md outline-none transition-all outline-0 bg-none text-white border border-white shadow-sm text-md px-7 py-1 hidden lg:block m-1 hover:bg-light hover:text-black">
              Shop Now
            </button>
          </Link>
        </div>
      </div>

      <div className="flex w-full">
        <div className="px-10 w-full">
          <div className="Shop font-semibold font-[Agency] lg:text-[2.5rem] text-[1.5rem] lg:text-start text-center p-10">
            Top 5 High Rates
          </div>
          <div className="shop-body flex lg:flex-row flex-col justify-center items-center">
            {top5Products.map((item) => (
              <div 
                key={item.id}
                className="w-[270px] h-auto rounded-lg shadow-md flex flex-col justify-between lg:items-start text-center lg:text-start items-center p-3 m-5 bg-white cursor-pointer"
              >
                <Link to={`/Shop/Shop/${item.position}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="p-5 lg:w-[230px] w-auto lg:h-[250px] h-auto"
                /></Link>
                <div className="text-start text-lg font-semibold">
                  {item.name}
                </div>
                <div className="price">
                  {item.prices.map((price, i) => (
                    <div key={i}>
                      <p>{item.prices[0].value}</p>
                      <Star stars={item.rating} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
<div className="w-full flex justify-center items-center my-20">
  <div className="border-2 rounded-sm lg:w-[80%] w-[70%] h-auto shadow-2xl">
        <MapQuest
          center={[latt, langg]}
          titleLayer="map"
          zoom={12}
          apiKey="4kC6xsxjbMIOYoPumlwhcOJZYN9fMa6S"
        />
        </div>
        </div>

        <div className="flex justify-center items-center">
          <Newsletter />
        </div>
    </>
  );
}

