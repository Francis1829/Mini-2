import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./img/Logo2.png";
import {
  AiOutlineCaretUp,
  AiOutlineCaretDown,
  AiTwotoneShopping,
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
      setIsOpen(true)
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
      <header className="sticky transition-opacity top-0 z-40 bg-light">
        <nav className="flex justify-between h-16 lg:px-[6rem] xl:px-[7rem] items-center mx-3">
          <div className="Logo_sec flex justify-start items-center">
            <div className="Logo">
              <img src={Logo} alt="" width={150} />
            </div>
            <ul>
            <li className="Navlist flex items-center justify-center h-16 pl-8 font-[Roboto]">
              {Navlist.map((data) => (
                <Link
                  to={data.Link}
                  className="mx-1 font-[Roboto] text-[16px] font-semibold tracking-wider px-2 py-1 ease-in-out"
                  key={data.Name}
                >
                  {data.Name}
                </Link>
              ))}
            </li>
            </ul>
          </div>
          {show ? (
            <>
              <div className="profile flex flex-col justify-center shadow-md rounded-md items-center ">
                <ul className="relative">
                <li
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  className="px-2 cursor-pointer w-[150px] py-1 flex gap-2 justify-between items-center tracking-wider text-[16px] font-semibold font-[Roboto]  text-black active:text-white hover:bg-theme-color hover:rounded-md hover:text-white ease-in-out duration-300"
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
            <div className="bttn flex">
              <Link to="/Dashboard/Login">
                <button className=" cursor-pointer space-x-2 text-center text-white font-semibold ease-out duration-200 rounded-md outline-none transition-all outline-0 bg-theme-color border shadow-sm text-md px-7 py-1 hidden lg:block m-1 hover:bg-light hover:text-black">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}

export default Navbar;
