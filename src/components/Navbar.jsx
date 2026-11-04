import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const Navbar = () => {

    const NavItems = [
        {name:"Home",id:"name"},
        {name:"About",id:"about"},
        {name:"Projects",id:"projects"}
    ]

    const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <div className='flex flex-row justify-around align-middle items-center px-4 p-6'>
      <h1 className='text-2xl font-light'>Logo</h1>

      {/* <ul className='flex flex-row justify-around align-middle  items-center  gap-4'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
      </ul> */}

      <div className='flex flex-row justify-around items-center align-middle gap-4'>
        {NavItems.map((items)=>{
           return(
            <button 
            key={items.id}
            onClick={()=> scrollToSection(items.id)}
            className='hover:-translate-y-2 duration-200 delay-75'
            >
             <span>{items.name}</span>
            </button>
           )
        })}
        </div> 

      <div>
        <ul className='flex flex-row justify-center align-middle  items-center gap-4'>
            <li><FaGithub/></li>
            <li><FaLinkedin/></li>
            <li><FaWhatsapp/></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
