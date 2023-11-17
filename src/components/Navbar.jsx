import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./img/Logo2.png";
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import DropDown from "./DropDown";
import { useNavigate } from "react-router-dom";

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
      Link: "/",
    },
    {
      Name: "Contact",
      Link: "/Contact",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [click, setClick] = useState(false);
  const navigate = useNavigate()

  const handleClick = () => setClick(!click);

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
          <div className="flex lg:justify-start justify-between items-center lg:w-auto w-full">
            <div className="Logo mx-2">
              <img src={Logo} alt="" width={150} className="cursor-pointer" />
            </div>
            <div
              className="r-menu md:hidden block"
              onClick={handleClick}
            >
              {click ? <IoClose size={25} /> : <FaBars size={25} />}
            </div>
            <ul className="md:flex hidden items-center font-[Roboto] text-[16px] font-semibold tracking-wider">
              {Navlist.map((data) => (
                <li key={data.Name}>
                  <Link
                    to={data.Link}
                    className="inline-block mx-1 px-2 py-1"
                  >
                    {data.Name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu */}
          <ul
            className={`md:hidden flex flex-col items-center bg-white absolute w-full top-10 py-10 h-[1260px] overflow-y-auto transition-all ${click ? "left-0" : "left-[-100%]"} duration-500`}
          >
            {Navlist.map((data) => (
              <li key={data.Name}>
                <Link
                  to={data.Link}
                  className="block py-2 px-3 font-[Roboto] text-[16px] font-semibold tracking-wider text-center"
                >
                  {data.Name}
                </Link>
              </li>
            ))}
            {show && (
              <div className="profile flex flex-col justify-center items-center">
                <ul>
                  <li
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                    className="px-2 cursor-pointer w-[150px] shadow-md rounded-md py-1 flex gap-2 justify-between items-center tracking-wider text-[16px] font-semibold font-[Roboto] text-black hover:bg-theme-color hover:rounded-md hover:text-white transition-all duration-300"
                  >
                    {temp.username}{" "}
                    {isOpen ? (
                      <AiOutlineCaretUp className="h-4" />
                    ) : (
                      <AiOutlineCaretDown className="h-4" />
                    )}
                    {isOpen && <DropDown />}
                  </li>
                </ul>
              </div>
            )}
            {!show && (
              <div className="bttn md:hidden py-5">
                <Link to="/Dashboard/Login">
                  <button className=" cursor-pointer space-x-2 text-center text-white font-semibold ease-out duration-200 rounded-md outline-none transition-all outline-0 bg-theme-color border shadow-sm text-base px-7 py-1 hover:bg-light hover:text-black">
                    Sign Up
                  </button>
                </Link>
              </div>
            )}
          </ul>

          {/* Desktop Menu */}
          {show && (
            <div className="profile hidden md:flex flex-col justify-center items-center">
              <ul>
                <li
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                  className="px-2 cursor-pointer w-[150px] shadow-md rounded-md py-1 flex gap-2 justify-between items-center tracking-wider text-[16px] font-semibold font-[Roboto] text-black hover:bg-theme-color hover:rounded-md hover:text-white transition-all duration-300"
                >
                  {temp.username}{" "}
                  {isOpen ? (
                    <AiOutlineCaretUp className="h-4" />
                  ) : (
                    <AiOutlineCaretDown className="h-4" />
                  )}
                  {isOpen && <DropDown />}
                </li>
              </ul>
            </div>
          )}
          {!show && (
            <div className="bttn md:block hidden">
              <Link to="/Dashboard/Login">
                <button className=" cursor-pointer space-x-2 text-center text-white font-semibold ease-out duration-200 rounded-md outline-none transition-all outline-0 bg-theme-color border shadow-sm text-base px-7 py-1 hover:bg-light hover:text-black">
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
