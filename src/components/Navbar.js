import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between px-16 py-5 shadow-lg " id="navbar-container">
      {/* Logo */}
      <div className="" id="nav-left">
      <div className="flex"><span className="pr-1 text-yellow">Ace </span> <h4> Studios</h4></div>
      </div>
      {/* contatct-btn */}
      <div className="flex justify-between gap-x-10 " id="nav-right">
        <button className="text-base bg-purple rounded-3xl px-4 py-2 text-white">Connect with us</button>
        <i class="fa-solid fa-bars-staggered text-2xl" ></i>
      </div>
    </div>
  );
};

export default Navbar;
