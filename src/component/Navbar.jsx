import React from 'react'
import {FaGithub,FaLinkedin} from 'react-icons/fa';
import { HiMail } from "react-icons/hi";


const Navbar = () => {
  return (
    <div className='flex flex-row  justify-between align-middle items-center px-6 w-full h-fit p-5 backdrop-blur-lg'>
      <h1>Logo</h1>
      <ul className='flex flex-row justify-center align-middle items-center gap-4'>
        <li><h1 className='text-lg font-light  hover:-translate-y-2  duration-150 delay-100 cursor-pointer'>Home</h1></li>
        <li><h1 className='text-lg font-light  hover:-translate-y-2  duration-150 delay-100 cursor-pointer'>About</h1></li>
        <li><h1 className='text-lg font-light  hover:-translate-y-2  duration-150 delay-100 cursor-pointer'>Project</h1></li>
      </ul>

      <div>
      <ul className='flex flex-row justify-center align-middle items-center gap-4'>
          <li className='hover:-translate-y-2 duration-150 delay-100 cursor-pointer'><FaGithub size={30} /></li>
          <li className='hover:-translate-y-2 duration-150 delay-100 cursor-pointer'><FaLinkedin size={30} /></li>
          <li className='hover:-translate-y-2 duration-150 delay-100 cursor-pointer'><HiMail size={30}/></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
