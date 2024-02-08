import React from 'react'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './components/Contact'
import About from './components/About'
import Main from './components/Main'
import Error from './components/Error'
import Blogs from './components/Blogs'
import Terms from './components/Terms'
import Work from './components/Work'
import Service from './components/Service'

const App = () => {
  
  return (
  <>
    <Navbar/>
  
      <Outlet/>
    
    <Footer/>
  </>
  )
}

const AppRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error />,
    children:[
      {
        path:"/",
      element:<Main/>,
    },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"work",
        element:<Work/>
      },
      {
        path:"service",
        element:<Service/>
      },
      {
        path:"blogs",
        element:<Blogs/>
      },
      {
        path:"terms",
        element:<Terms/>
      }
    ]
  }
])



export default AppRouter;