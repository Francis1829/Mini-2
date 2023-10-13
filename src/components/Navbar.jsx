import React from 'react'
import Logo from './img/Logo1.png'
import { Link } from  "react-router-dom";

export default function Navbar() {
    // const menuList = [
    //     { 
    //     name: "Home",
    //     link:  "/",
    // },
    // {
    //    name: "Categories",
    //    link: "/",
    // },
    // { 
    //     name: "Games",
    //     link:  "/",
    // },
    // { 
    //     name: "Cafes",
    //     link:  "/",
    // },     
    // ]

  return (
    <>
    <header>
      <nav className='p-2 px-[5rem]'>
        <div className="navbar flex justify-start gap-10 text-white ">
          <div className="logo flex items-center text-[25px] uppercase"><img src={Logo} alt="" width={35} className="mr-1 md:cursor-pointer"/>ocialzone</div>
          <div className="navList flex justify-center items-center gap-4 text-[16px] font-[300]">
             home
            
            </div>
        </div>
      </nav>
    </header>

    </>
  )
}
