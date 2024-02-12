import React from 'react'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './components/Contact'

import Main from './components/Main'
import Error from './components/Error'

import Terms from './components/Terms'

import Service from './components/Service'
import Privacy from './components/Privacy'

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
        path:"contact",
        element:<Contact/>
      },
    
      {
        path:"service",
        element:<Service/>
      },
     
      {
        path:"terms",
        element:<Terms/>
      },{
        path:"privacy",
        element: <Privacy/>
      }
    ]
  }
])



export default AppRouter;