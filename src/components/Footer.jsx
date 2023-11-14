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
    <footer className="text-white h-[350px] flex flex-col py-12 mt-3">
      <div className="container mx-auto flex justify-between">
        <div className="w-full m-3 md:w-1/4 mb-4 md:mb-0">
          <img src={Logo} alt="" width={150}/>
          <div className="subtle text-2xl font-[Agency]">Your Tech Wonderland</div>
        </div>
        <div className="w-full flex flex-col md:w-1/4 mb-4 md:mb-0">
          <div className="text-start m-2 font-[Agency] text-[35px]">Company</div>
          <div className="Navlist flex flex-col h-16 font-[Roboto] m-3">
                {Footlist.map((data) => (
                    <Link to={data.Link} className='mb-3 font-[Roboto] text-[18px]'>
                    {data.Name}</Link>
                 ))}
                 </div>
        </div>
        <div className="w-full flex flex-col md:w-1/4 mb-4 md:mb-0">
          <div className="text-start m-2 font-[Agency] text-[35px]">Social</div>
          <div className="Navlist flex flex-col h-16 font-[Roboto] m-3">
                {Social.map((data) => (
                    <Link to={data.Link} className='mb-3 text-center font-[Roboto] text-[35px]'>
                    {data.Icon}</Link>
                 ))}
                 </div>
        </div>
        <div className="w-full flex flex-col md:w-1/4 mb-4 md:mb-0">
          <div className="text-start m-2 font-[Agency] text-[35px]">Address</div>
          <div className="m-3 font-[Roboto] text-[18px]">Burgos,Isabela, Phillipines 3322</div>
        </div>
      </div>
    </footer>
    <div className="footl w-full p-2">
      <div className="alr p-2 text-white text-[18px] border-t m-4">
        Copyright © 2023 techub. All Rights Reserved.
        </div>
        </div>
      </>
  );
}

export default Footer;
