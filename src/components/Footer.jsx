import React from 'react';
import Logo from './img/Logo3.png'
import { Link } from 'react-router-dom';
import {BsFacebook} from 'react-icons/bs'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import {BiLogoLinkedinSquare} from 'react-icons/bi'

function Footer() {
  const Footlist = [
    {
        Name: "Home",
        Link: "/"
    },
    {
        Name: "Shop",
        Link: "/Shop"
    },
    {
        Name: "Gallery",
        Link: "/Gallery"
    },
    {
        Name: "Contact",
        Link: "/Contact"
    },
    {
      Name: "About",
      Link: "/About"
  },
];

const Social = [
  {
    Icon: <BsFacebook className='' />,
    Link: 'https://www.facebook.com/akofrancisko/'
  },
  {
    Icon: <AiFillInstagram />,
    Link: 'https://www.facebook.com/akofrancisko/'
  },
  {
    Icon: <BiLogoLinkedinSquare />,
    Link: 'https://www.facebook.com/akofrancisko/'
  },
  {
    Icon: <AiFillTwitterCircle />,
    Link: 'https://www.facebook.com/akofrancisko/'
  },
]

  return (
    <>
    <footer className="text-white">
      <div className="flex lg:flex-row flex-col mx-10 py-5 ">
        <div className="lg:w-[20%] w-auto lg:py-[3rem] py-1 lg:block 
        flex justify-center flex-col items-center text-center lg:text-start">
          <img src={Logo} alt="" className='w-[150px] h-auto'/>
          <div className="subtle text-2xl font-[Agency]">Your Tech Wonderland</div>
        </div>
        <div className="lg:w-[20%] w-auto lg:py-[3rem] py-1 lg:block flex justify-center flex-col items-center text-center">
          <div className='text-start font-[Agency] mb-3 lg:text-[30px] text-lg'>Company</div>
          
          {Footlist.map((item) => (
          <ul className='flex mb-2 mx-1 font-[Roboto] lg:text-base text-sm'>
            <li className='hover:underline'>
              <Link to={item.Link} >
            {item.Name}
            </Link>
            </li>
          </ul>
           
          ))}
        </div>
       <div className="lg:w-[20%] w-auto lg:py-[3rem] py-1 lg:block flex justify-center flex-col items-center text-center ">
        <div className='text-start font-[Agency] mb-3 lg:text-[30px] text-lg'>Socials</div>
        {Social.map((list) => (
          <ul className='text-center font-[Roboto] lg:text-[32px] text-lg mb-2 mx-1'>
          <li >
            <Link to={list.Link} className=''>
            {list.Icon}
            </Link>
            </li>
            </ul>
        ))}
       </div>
       <div className="lg:w-[20%] w-auto lg:py-[3rem] py-1 lg:block flex justify-center flex-col items-center text-center lg:text-start">
          <div className='text-start font-[Agency] mb-3 lg:text-[30px] text-lg'>Help</div>
          <ul className='flex mb-2 mx-1 font-[Roboto] lg:text-base text-sm flex-col '>
            <li><Link to="/Terms" className='hover:underline'> Terms</Link> </li>
            <li><Link to="/Conditions" className='hover:underline'> Conditions</Link> </li>
            <li><Link to="/Terms" className='hover:underline'>Help Center</Link> </li>
            <li><Link to="/Terms" className='hover:underline'>Privacy Settings</Link> </li>
          </ul>
        </div>
        <div className="lg:w-[20%] w-auto lg:py-[3rem] py-1 lg:block flex justify-center flex-col items-center text-center lg:text-start">
          <div className='text-start font-[Agency] mb-3 lg:text-[30px] text-lg'>Address</div>
          <div className=' mb-2 mx-1 font-[Roboto] lg:text-base text-sm '>Burgos, Isabela, Philippines, 3322</div>
        </div>
      </div>

    <div className="footl w-full p-2">
      <div className="alr border-t m-4"></div>
        <div className='text-white lg:text-base text-sm mx-5 text-center'>Copyright © 2023 techub. All Rights Reserved.</div>
        </div> 
           </footer>
      </>
  );
}

export default Footer;
