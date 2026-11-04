import React from 'react'
import Navbar from '../component/Navbar'
import backgroundTmage1 from '../assets/bgImage.jpg'

const Mainpage = () => {
  return (
    <div className='w-full h-screen bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${backgroundTmage1})` }} >
        <Navbar/>
        <div className='flex flex-col justify-start align-middle items-start gap-4'>
          <h1 className='text-4xl font-light text-white'>Software Developer</h1>
          <p className='text-xl font-semibold text-white'>an Aspiring Softeware developer</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Ipsum cum aliquid aspernatur adipisci delectus eaque alias, fuga reiciendis ipsam quia.</p>
        </div>
    </div>
  )
}

export default Mainpage
