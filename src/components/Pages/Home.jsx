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
        <div className="banner w-full h-[400px] relative"></div>
        <div className="img absolute flex w-full justify-around">
          <img src={Hero} alt="Hero" className="w-[420px] h-[450px] mb-9" />
          <img src={Hero2} alt="Hero2" className="w-[400px] h-[440px] mt-7" />
        </div>
        <div className="absolute text-white font-[Agency] drop-shadow-md text-[3rem] mb-[10rem]">
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
          <div className="Shop font-semibold font-[Agency] text-[40px] p-10">
            Top 5 High Rates
          </div>
          <div className="shop-body flex justify-center">
            {top5Products.map((item) => (
              <div 
                key={item.id}
                className="w-[270px] h-[350px] rounded-lg shadow-md flex flex-col justify-between p-3 m-5 bg-white cursor-pointer"
              >
                <Link to={`/Shop/Shop/${item.position}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="p-5 w-[230px] h-[250px]"
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
  <div className="border-2 rounded-sm w-[80%] shadow-2xl">
        <MapQuest
          height="80vh"
          width="100%"
          center={[latt, langg]}
          titleLayer="map"
          zoom={12}
          apiKey="4kC6xsxjbMIOYoPumlwhcOJZYN9fMa6S"
        />
        </div>
        </div>

        <div className="flex">
          <Newsletter />
        </div>
    </>
  );
}

