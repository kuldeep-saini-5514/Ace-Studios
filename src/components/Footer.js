import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col text-white bg-black '> 
      <div>
      <h1 className='text-center font-bold text-4xl text-white mt-5'>Finick</h1>

      {/* 1st section */}
      <div className='mt-6 flex gap-10 justify-center align-middle'>
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
        <p>copyight &copy; 2024</p>
        <div className='flex gap-5'>
          <p>Terms and Conditions</p>
          <p>Privacy</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer