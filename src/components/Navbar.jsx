import React from 'react'
import Logo from './img/Logo.png'

export default function Navbar() {
    const menuList = [
        { 
        name: "Home",
        link:  "/",
    },
    { 
        name: "Games",
        link:  "/",
    },
    { 
        name: "Cafes",
        link:  "/",
    },     
    ]

  return (
    <>
    <header>
      <nav className='bg-theme-color p-2 px-[2rem]'>
        <div className="navbar flex justify-between">
          <div className="logo flex items-center text-white text-[22px]"><img src={Logo} alt="" width={50} />ocialzone</div>
          <div className="navList flex justify-center items-center gap-20 text-[24px] font-[500] text-white">
            {menuList.map((item, idx) => (
                <a className="hover:text-black ease-in-out duration-300" key={idx} href={item.link}>
                  {item.name}
                </a>
              ))}
            </div>
        </div>
      </nav>
    </header>

    </>
  )
}
