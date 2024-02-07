import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Body from './components/Body'
import './App.css'

const App = () => {
  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<Body/>
    }
  ])
  return (
    <RouterProvider router={appRouter}>
      <Body/> 
    </RouterProvider>
  )
}

export default App