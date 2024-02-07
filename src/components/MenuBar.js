import React from 'react'
import { Link } from 'react-router-dom'

const MenuBar = () => {
  return (
    <div className='px-20 py-5'>                                                                                                                 ;'.//     .   ./    03.6++++++++++++-+ '
        <div className='flex gap-x-10 gap-y-2'>
        <button className="mr-6 text-base bg-purple rounded-3xl px-4 py-2 text-white">Connect with us</button>
        <i class="fa-solid fa-xmark"></i>
        </div>
        <div className='flex flex-col gap-y-4'>
            <Link to={"/"}>
            <h1 className='text-black text-xl'>Home</h1>
            </Link>
            <Link to={"/"}>
            <h1 className='text-black text-xl'>About us</h1>
            </Link>
            <Link to={"/"}>
            <h1 className='text-black text-xl'>Contact us</h1>
            </Link>
            <Link to={"/"}>
            <h1 className='text-black text-xl'>Blogs</h1>
            </Link>
            <Link to={"/"}>
            <h1 className='text-black text-xl'>Terms & Conditions</h1>
            </Link>
        </div>
        <div>
            <p>Follow us on</p>
            <div className='flex gap-x-4 text-2xl'>
            <div className='text-purple bg-lightgray'><i class="fa-brands fa-instagram"></i></div>
            <div><i class="fa-brands fa-facebook-f"></i></div>
            <div><i class="fa-brands fa-linkedin-in"></i></div>
            <div><i class="fa-brands fa-twitter"></i></div>
            <div><i class="fa-brands fa-youtube"></i></div>
            </div>
        </div>
    </div>
  )
}

export default MenuBar