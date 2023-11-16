import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";

function ProductDetails({productsInCart}) {
  const navigate = useNavigate();
  const Logoutbtn = () => {
    localStorage.removeItem("data");
    navigate("/");
    window.location.reload();
  };

  const temp = JSON.parse(localStorage.getItem("data"));
  
  return (
    <>
      <div className="w-full">
        <div className="p-10 flex flex-col w-full">
          <div className="flex lg:justify-between justify-center p-10">
            <div className="font-semibold lg:text-[3rem] text-[2rem] font-[Agency]  ">
             Profile
            </div>
            </div> 
             <div className="flex flex-col justify-between lg:p-10">
       <div className="lg:text-xl text-lg font-[Agency]">Username: {temp.username}</div>
        <div className="lg:text-xl text-lg font-[Agency]">Email: {temp.email}</div>
        <div className="btn flex justify-end text-md font-semibold">
          <button className="cursor-pointer space-x-2 text-center font-semibold ease-out duration-200 rounded-md outline-none transition-all outline-0 bg-none bg-t-hover text-white border border-white shadow-sm text-md px-4 py-1 m-1 hover:bg-light hover:text-black hover:border-black" onClick={Logoutbtn}>Logout</button>
        </div>
        </div>
        <Cart/>

        
      </div>
      </div>
    </>
  );
}

export default ProductDetails;
