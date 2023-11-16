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
   <ul onClick={handleClick} className={click ? 'absolute right-0 top-[2.1rem]  bg-theme-color  cursor-pointer w-[150px]  tracking-wider text-[16px] rounded-b-xl  ' : 'right-0 absolute  top-[2.1rem] bg-theme-color cursor-pointer w-[150px] tracking-wider text-[16px] rounded-b-xl ' }>
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