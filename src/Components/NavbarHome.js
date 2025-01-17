import React, { useState } from 'react'
import Button from './Button';
import { GiHamburgerMenu } from "react-icons/gi";
import {Link} from 'react-router-dom'

//This is the navigation bar or header for the home page only, including the login button.


const NavbarHome = () => {
  let Links = [
    { name: "Home", link: "/Home" },
    { name: "Dashboard", link: "/Dashboard" },
    { name: "Report Form", link: "/Reportform" },
    { name: "Grade Report", link: "/GradeReport" },
    { name: "Contact", link: "/InstructorContact" },
    { name: "Help", link: "/HelpFaq" },
  ];

  let [open, setOpen] = useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0 '>
      <div className='md:flex items-center justify-between bg-indigo-100 py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center
      text-gray-800'>
          GradeTracker
        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <GiHamburgerMenu name={open ? 'close' : 'menu'}></GiHamburgerMenu>
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-indigo-100 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
          {
            Links.map((link) => (
              <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
              </li>
            ))
          }
          <Link to="/Login">
            <Button className='lg:hidden'>
              Login
            </Button>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default NavbarHome