import React from 'react';
import Navbar from './components/Navbar'; // Adjust the path according to your file structure
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Skill from './components/Skill';
import Project from './components/Project';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';


const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Navbar/>
        <Home/>
        <Footer/>
      </div>
    },
    {
      path:"/about",
      element:
      <div>
        <Navbar/>
        <About/>
        <Footer/>
      </div>
    },
    {
      path:"/project",
      element:
      <div>
        <Navbar/>
        <Project/>
        <Footer/>
      </div>
    },
    {
      path:"/Skill",
      element:
      <div>
        <Navbar/>
        <Skill/>
        <Footer/>
      </div>
    },
    {
      path:"/contact",
      element:
      <div>
        <Navbar/>
        <Contact/>
        <Footer/>
      </div>
    },
  ],
);
function App() {
  return (
   <RouterProvider router={router} />
  )
}

export default App;
