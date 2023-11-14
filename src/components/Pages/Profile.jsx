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
      <div className="flex w-full">
        <div className="p-10 w-full">
          <div className="Shop font-semibold text-[50px] font-[Agency] p-10 flex justify-between">
            Profile 
          </div>
       <div className="text-[30px] font-[Agency] px-10">Username: {temp.username}</div>
       <div className="flex justify-between px-10">
        <div className="text-[30px] font-[Agency]">Email: {temp.email}</div>
        <div className="btn flex justify-end text-md font-semibold">
          <button className="cursor-pointer space-x-2 text-center font-semibold ease-out duration-200 rounded-md outline-none transition-all outline-0 bg-none bg-t-hover text-white border border-white shadow-sm text-md px-4 py-1 hidden lg:block m-1 hover:bg-light hover:text-black hover:border-black" onClick={Logoutbtn}>Logout</button>
        </div>
        </div>
        <Cart/>

        
      </div>
      </div>
    </>
  );
}

export default ProductDetails;
