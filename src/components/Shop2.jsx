import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Star from './Pages/Star';
import { PulseLoader } from "react-spinners";
import { useContext } from 'react';
import CartContext from './Context/CartContext';


function Shop2() {
  const [loading, setLoading] = useState(false);
  const { position } = useParams();
  const [data, setData] = useState([]);
  const paramName = 'position'   

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:3001/product?${paramName}=${position}`, {
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => setData(json))

      setTimeout(() => {
        setLoading(false);
      }, 2000);
  }, [position]);
  
  const usdToPhpExchangeRate = 60.0;

  const convertToPhp = (usdPrice) => {
    const phpPrice = usdPrice * usdToPhpExchangeRate;
    return `₱${phpPrice.toFixed(3)}`;
  };



  
  return (
    <>
    <div className="w-full flex justify-center">

     {loading ? (
             <PulseLoader
             color="#c9aa5b"
             cssOverride={{
              margin: '20px',
              height: '400px',
               Display: 'flex',
               justifyContent: 'center',
               alignItems: 'center'
             }}
             loading
           />
            ) :(
              <>
          {data.map((item) => (
            <>
            <div className="lg:p-20 p-10 w-full flex justify-center items-center lg:flex-row flex-col">
            <div className='bg-white p-5 lg:w-[75%] rounded-xl border shadow-md text-center'>
            <img src={item.image} alt={item.name} className='w-[330px] h-auto' />
            <div className="Shop font-semibold text-[25px] mt-5">
                {item.name}
                
             </div>
            </div> 
            <div className="flex flex-col lg:px-[8rem] my-5 lg:w-auto w-[80%]">
                <div className='lg:text-lg text-base font-semibold '>{item.title} </div>
                
                {item.categories.map((cat, i) => 
                <div className='mt-2 text-base italic'>Categories: {cat.name}</div>
                )}
                  {item.prices.map((price, i) => 
                  <>
                  <div className='mt-2 text-[18px] text-theme-color font-semibold italic tracking-wide'>{convertToPhp(price.value)}</div>
                  <div className='flex gap-2'>
                  <Star stars={item.rating} />({item.rating})
                  </div>
                  <div className="flex gap-5 my-10 lg:justify-start justify-center">
                  <button onClick={() =>
                          addToCart(
                            {
                              name: item.name,
                              title: item.title,
                              image: item.image,
                              price: convertToPhp(price.value),
                              quantity: 1,

                            }
                          )
                        } className="cursor-pointer space-x-2 text-center font-semibold ease-out duration-200 rounded-md outline-none transition-all outline-0 bg-none bg-t-hover text-white border border-white shadow-sm text-base lg:w-[180px] w-[120px] lg:h-[60px] h-[40px]  hover:bg-light hover:text-black hover:border-black lg:mr-20">
                            Add to Cart
                          </button>
                  <button className="cursor-pointer space-x-2 text-center font-semibold ease-out duration-200 rounded-md outline-none transition-all outline-0 bg-none bg-light text-black border border-black shadow-sm text-base lg:w-[180px] w-[120px] lg:h-[60px] h-[40px] hover:bg-t-hover hover:text-white hover:border-light">
                            Buy Now
                          </button>
                          
                          </div>
                  </>
                  )}
            </div>
        </div>
       
              </>
              ))}
           </>
            )}
      </div>
   </>
  );
}

export default Shop2;
