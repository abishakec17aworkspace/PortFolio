import React from 'react'
import Navbar from './components/Navbar'
import Mainpage from './pages/Mainpage'
import About from './pages/About'
import Projects from './pages/Projects'

const App = () => {
  return (
    <div className='bg-black w-full h-screen text-2xl text-white font-light '>
      <Navbar/>

      <div>
        <Mainpage/>
        <About/>
        <Projects/>
      </div>
    </div>

  )
}

export default App
