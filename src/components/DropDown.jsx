import React , { useState} from 'react'
import { Link } from 'react-router-dom'


function DropDown() {
    const [click, setClick] = useState(false)
  
    const handleClick = () => setClick(!click)
    const DropdownList =[
        {
          Name: 'Profile',
          Link: '/Profile',
        },
        {
            Name: 'Terms',
            Link: '/Terms',
          },
          {
            Name: 'Conditions',
            Link: '/Conditions',
          },
        {
          Name: 'About',
          Link: '/About',
        },
      ]
  return (
   <>
   <ul onClick={handleClick} className={click ? 'absolute lg:right-[4rem] right-[7rem] top-[14.6rem] lg:top-[2.8rem]  bg-theme-color  cursor-pointer w-[150px]  tracking-wider text-[16px] rounded-b-xl ' : 'lg:right-[4rem] absolute  lg:top-[2.8rem] right-[7rem] top-[14.6rem]  bg-theme-color cursor-pointer w-[150px] tracking-wider text-[16px] rounded-b-xl ' }>
            {DropdownList.map((item) => (
                <li className="text-black p-1 w-full hover:bg-t-hover hover:rounded-b-xl hover:text-white flex justify-center items-center">
                    <Link to={item.Link} >
                        {item.Name}
                    </Link>
                </li>
            ))}
   </ul>
   </>
  )
}

export default DropDown