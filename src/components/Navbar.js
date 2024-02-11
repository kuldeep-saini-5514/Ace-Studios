import React, { useState } from "react";
import MenuBar from "./MenuBar";
const Navbar = () => {
  const [handlebtn,setHandlebtn] = useState(false)

  const handlemenuclick = ()=>{
    setHandlebtn(true)
  }

  return (
    <div className="flex justify-between px-16 py-5 shadow-lg " id="navbar-container">
      {/* Logo */}
      <div className="" id="nav-left">
      <div className="flex"><span className="pr-1 text-blue">Fi </span> <h4> Nick</h4></div>
      </div>
      {/* contatct-btn */}
      <div className="flex justify-between gap-x-10 " id="nav-right">
        <button className="text-base bg-purple rounded-3xl px-4 py-2 text-white">Connect with us</button>
      {/* menubar - icon */}
        <button onClick={handlemenuclick}><i class="fa-solid fa-bars-staggered text-2xl"></i></button>
      </div>
      {handlebtn && <MenuBar setHandlebtn={setHandlebtn}/>}
    </div>
  );
};

export default Navbar;
