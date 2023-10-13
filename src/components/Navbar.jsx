import Logo from './img/Logo1.png'
import React from 'react'
import { Link } from  "react-router-dom";

export default function Navbar() {
  const menuList = [
    { 
    name: "Home",
    link:  "/Home",
},
{ 
    name: "Games",
    link:  "/Games",
},
{ 
    name: "Contact",
    link:  "/Contact",
},    
{ 
  name: "Category",
  link:  "/Category",
},   
]
  return (
    <>
    <header className="sticky top-0">
      <nav className='p-2 px-[5rem]'>
        <div className="navbar flex justify-between text-white ">
          <div className="flex justify-start gap-16">
          <Link to="/Home">
          <div className="logo flex items-center text-[25px] uppercase"><img src={Logo} alt="" width={35} className="mr-1 md:cursor-pointer"/>ocializone</div>
          </Link>
          <div className="navList md:flex hidden justify-center items-center gap-8">
           {menuList.map((item, idx) => (
                <Link className="hover:text-[#000] ease-in-out duration-300" key={idx} to={item.link}>
                  {item.name}
                </Link>
              ))}
            </div>
            </div>
            <div className="btnn w-[185px] flex justify-center">
            <button className="bg-theme-color rounded-full py-2 px-9">Get Started</button>
            </div>
        </div>
      </nav>
    </header>

    </>
  )
}