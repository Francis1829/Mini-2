import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./img/Logo2.png";
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import {
  AiOutlineCaretUp,
  AiOutlineCaretDown,
} from "react-icons/ai";
import DropDown from "./DropDown";

function Navbar() {
 const Navlist = [
    {
      Name: "Home",
      Link: "/",
    },
    {
      Name: "Shop",
      Link: "/Shop",
    },
    {
      Name: "Gallery",
      Link: "/Gallery",
    },
    {
      Name: "Contact",
      Link: "/Contact",
    },
  ];

  const [mobOpen, setMobOpen] = useState(false);

  const onMouseIn = () => {
    if(window.innerWidth < 960) {
      setMobOpen(false)
    }else{
      setMobOpen(true)
    }
  }

  const onMouseOut = () => {
    if(window.innerWidth < 960) {
      setMobOpen(false)
    }else{
      setMobOpen(false)
    }
  }

  const [isOpen, setIsOpen] = useState(false);

  const onMouseEnter = () => {
    if(window.innerWidth < 960) {
      setIsOpen(false)
    }else{
      setIsOpen(true)
    }
  }

  const onMouseLeave = () => {
    if(window.innerWidth < 960) {
      setIsOpen(false)
    }else{
      setIsOpen(false)
    }
  }
  const [click, setClick] = useState(false)
  
  const handleClick = () => setClick(!click)

  const temp = JSON.parse(localStorage.getItem("data"));
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (temp) {
      setShow(true);
    }
  }, [temp]);


  return (
    <>
          <header className="bg-white sticky top-0 z-40">
            <nav className="flex items-center justify-between md:px-16 px-5 py-2">
              <div className="flex justify-center items-center md:w-auto w-full">
            <div className="Logo mx-2 z-50 md:w-auto w-full flex justify-between items-center">
              <img src={Logo} alt="" width={150} className="md:cursor-pointer "/>
              <div className="r-menu md:hidden block z-50 " onClick={handleClick}>
            {click ? (<IoClose size={25}/>) : (<FaBars size={25}/>)}
            </div>
            </div>
            <ul className="pt-[.3rem] md:flex hidden items-center font-[Roboto] text-[16px] font-semibold tracking-wider  ease-in-out">
              <li>
              {Navlist.map((data) => (
                <Link
                  to={data.Link}
                  className=" inline-block mx-1 px-2 py-1"
                  key={data.Name}
                >
                  {data.Name}
                </Link>
              ))}
              </li>
            </ul>
            </div>
               {/* Mobile here */}
               <ul className={`md:hidden flex flex-col items-center bg-white py-24 absolute w-full h-[1290px] top-10 bottom-0 left-0 duration-500 z-30 ${click ? "left-0" : "left-[-100%]"}`} >
              
              {Navlist.map((data) => 
              (<li>
                <Link
                  to={data.Link}
                  className="block py-2 px-3 font-[Roboto] text-[16px] font-semibold tracking-wider text-center"
                  key={data.Name}
                >
                  {data.Name}
                </Link>
            
              </li>
                ))}
           {show ? (
             <>
             <div className="profile md:flex flex-col justify-center  items-center ">
               <ul className="relative">
               <li 
                 onMouseIn={onMouseIn}
                 onMouseOut={onMouseOut}
                 className="px-2 cursor-pointer w-[150px] shadow-md rounded-md py-1 flex gap-2 justify-between items-center tracking-wider text-[16px] font-semibold font-[Roboto]  text-black active:text-white hover:bg-theme-color hover:rounded-md hover:text-white ease-in-out duration-300"
               >
                 {temp.username}
                 {!mobOpen ? (
                   <AiOutlineCaretDown className="h-4" />
                 ) : (
                   <AiOutlineCaretUp className="h-4" />
                 )}
              
                 {mobOpen && <DropDown/>}  
               
                </li>
               </ul>
             </div>
           </>
          ) : (
            <>
            <div className="bttn md:hidden py-5">
              <Link to="/Dashboard/Login">
                <button className=" cursor-pointer space-x-2 text-center text-white font-semibold ease-out duration-200 rounded-md outline-none transition-all outline-0 bg-theme-color border shadow-sm text-base px-7 py-1 hover:bg-light hover:text-black">
                  Sign Up
                </button>
              </Link>
            </div>
            </>
            )}
             </ul>
            {show ? (
            <>
           
              <div className="profile md:flex hidden flex-col justify-center  items-center ">
                <ul className="relative">
                <li
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  className="px-2 cursor-pointer w-[150px] shadow-md rounded-md py-1 flex gap-2 justify-between items-center tracking-wider text-[16px] font-semibold font-[Roboto]  text-black active:text-white hover:bg-theme-color hover:rounded-md hover:text-white ease-in-out duration-300"
                >
                  {temp.username}
                  {!isOpen ? (
                    <AiOutlineCaretDown className="h-4" />
                  ) : (
                    <AiOutlineCaretUp className="h-4" />
                  )}
               
                {isOpen && <DropDown/>}
                
                 </li>
                </ul>
              </div>
            </>
          ) : (
            <>
            <div className="bttn md:block hidden">
              <Link to="/Dashboard/Login">
                <button className=" cursor-pointer space-x-2 text-center text-white font-semibold ease-out duration-200 rounded-md outline-none transition-all outline-0 bg-theme-color border shadow-sm text-base px-7 py-1 hover:bg-light hover:text-black">
                  Sign Up
                </button>
              </Link>
            </div>
        </>
          )}
          
         
            </nav>
          </header>
    </>
  );
}

export default Navbar;

 