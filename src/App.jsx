import React from 'react'
import Navbar from './assets/components/Navbar'
import Mainpage from './pages/Mainpage'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import FreeLancing from './pages/FreeLancing'
import Footer from './pages/Footer'

const App = () => {
  return (
    <div className='w-full h-screen text-2xl text-white font-light '>
      {/* <Navbar/> */}

      <div>
        <Mainpage/>
        <FreeLancing/>
        <Projects/>
        <Skills/>
        <About/>
        <Footer/>
      </div>
    </div>

  )
}

export default App
