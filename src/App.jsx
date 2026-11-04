import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Mainpage from './pages/mainpage'
import Skills from './pages/Skills'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Mainpage/>}/>
      <Route path='/Skills' element={<Skills/>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App


// import { Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout.jsx";
// import Home from "./pages/Home.jsx";
// import About from "./pages/About.jsx";
// import Skills from "./pages/Skills.jsx";
// import Projects from "./pages/Projects.jsx";
// import Education from "./pages/Education.jsx";
// import Resume from "./pages/Resume.jsx";
// import Contact from "./pages/Contact.jsx";
// import NotFound from "./pages/NotFound.jsx";

// export default function App() {
//   return (
//     <Routes>
//       <Route element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="skills" element={<Skills />} />
//         <Route path="projects" element={<Projects />} />
//         <Route path="education" element={<Education />} />
//         <Route path="resume" element={<Resume />} />
//         <Route path="contact" element={<Contact />} />
//         <Route path="*" element={<NotFound />} />
//       </Route>
//     </Routes>
//   );
// }


