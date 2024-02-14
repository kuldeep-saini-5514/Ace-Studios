import React, { useState } from "react";
import MenuBar from "./MenuBar";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [handlebtn,setHandlebtn] = useState(false)

  const handlemenuclick = ()=>{
    setHandlebtn(true)
  }

  return (
    <div className="navbar flex justify-between sm:px-16 sm:py-5 ms:px-5 ms:py-2 h-24 items-center shadow-lg sm:w-[100%] " id="navbar-container">
      {/* Logo */}
      <div className="text-purple " id="nav-left">
        <Link to={"/"}><h5 className="text-purple 1xl:text-3xl">FINICK</h5></Link>
      </div>
      {/* contatct-btn */}
      <div className="flex justify-between gap-x-10 " id="nav-right">
        <Link to={"contact"}>
        <button className="nav-btn text-base bg-purple 1xl:text-xl rounded-3xl px-4 py-2 text-white  md:block ">Connect with us</button>
        </Link>
      {/* menubar - icon */}
        <button onClick={handlemenuclick}><i class="fa-solid fa-bars-staggered 1xl:text-3xl text-2xl"></i></button>
      </div>
      {handlebtn && <MenuBar setHandlebtn={setHandlebtn}/>}
    </div>
  );
};

export default Navbar;
