import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='flex flex-col mt-20 text-white bg-DarkBlack '> 
      <div>
      <h1 className='text-center font-bold text-4xl text-white mt-5'>FINICK</h1>

      {/* 1st section */}
      <div className='mt-6 flex gap-10 justify-center align-middle'>
      <Link to={"/"}>
            <span className='text-white text-xl'>Home</span>
            </Link>
            
        <span>Works</span>
        <span>Services</span>
        <span>Contact us</span>
        <span>Careers</span>
      </div>


      {/* icon section */}
      <div className='mt-6 flex gap-x-16 justify-center align-middle'>
      <i class="fa-brands fa-instagram text-2xl bg-DarkPurple text-white px-2.5 py-1.5 rounded-xl h-11 w-11"></i>
      <i class="fa-brands fa-facebook-f text-xl bg-DarkPurple text-white px-3.5 py-2 rounded-xl h-11 w-11"></i>
      <i class="fa-brands fa-linkedin-in text-xl bg-DarkPurple text-white px-3.5 py-2  rounded-xl h-11 w-11"></i>
      <i class="fa-brands fa-twitter text-xl bg-DarkPurple text-white px-3.5 py-2 rounded-xl h-11 w-11"></i>
      <i class="fa-brands fa-youtube text-xl bg-DarkPurple text-white px-3 py-2 rounded-xl h-11 w-11"></i>
      </div>

      {/* copyright section */}
      <div className='mt-6 flex gap-10 justify-center align-middle mb-16'>
        <p className='text-gray'>  2024 &copy; Copyright <strong>FINICK</strong>. All rights
                reserved.</p>
        <div className='flex gap-5'>
         <Link to={"/terms"}>
            <h1 className='text-gray text-lg'>Terms & Conditions</h1>
            </Link>
            <Link to={"/privacy"}>
            <h1 className='text-gray text-lg'>Privacy</h1>
            </Link>
        </div>
      </div>
    </div>
    </div>

  )
}

export default Footer