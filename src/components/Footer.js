import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='flex flex-col text-white bg-black '> 
      <div>
      <h1 className='text-center font-bold text-4xl text-white mt-5'>Finick</h1>

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
      <div className='mt-6 flex gap-10 justify-center align-middle'>
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-linkedin"></i>
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-youtube"></i>
      </div>

      {/* copyright section */}
      <div className='mt-6 flex gap-10 justify-center align-middle mb-16'>
        <p>  2024 &copy; Copyright <strong>Finick</strong>. All rights
                reserved.</p>
        <div className='flex gap-5'>
         <Link to={"/terms"}>
            <h1 className='text-white text-xl'>Terms & Conditions</h1>
            </Link>
            <Link to={"/privacy"}>
            <h1 className='text-white text-xl'>Privacy</h1>
            </Link>
        </div>
      </div>
    </div>
    </div>

  )
}

export default Footer