import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate=useNavigate();
  function refreshPage(){
    // navigate("/")
    window.scrollTo({ top:  0, behavior: 'smooth' });
    // window.addEventListener("scroll",()=>{
    //   window.scrollTo({ top:  0, behavior: 'smooth' });
    // })
  }
  return (
    <div className="flex flex-col mt-20 text-white bg-DarkBlack ">
      <div>
        <h1 className="text-center font-bold sm:text-4xl text-white mt-5 ms:text-2xl">
          FINICK
        </h1>

        {/* 1st section */}
        <div className="mt-6 flex  sm:flex-row ms:flex-col gap-10 justify-center sm:items-start ms:items-center">
          <Link to={"/"}>
            <span className="text-white lg:text-xl font-semibold" onClick={refreshPage}>Home</span>
          </Link>
          <Link to={"service"}>
            <span className="lg:text-xl font-semibold" onClick={refreshPage}>Services</span>
          </Link>
          <Link to={"contact"}>
            <span className="lg:text-xl font-semibold" onClick={refreshPage}>Contact us</span>
          </Link>
          <Link to={"terms"}>
            <span className="lg:text-xl font-semibold" onClick={refreshPage}>Terms</span>
          </Link>
        </div>

        {/* icon section */}
        <div className="sm:mt-6 ms:mt-10 flex  gap-x-16 justify-center align-middle">
          <a href="https://www.instagram.com/finick.xyz/"><i class="fa-brands fa-instagram text-2xl bg-DarkPurple text-white px-2.5 py-1.5 rounded-xl h-11 w-11"></i></a>
          <a href="https://www.linkedin.com/company/finick/"><i class="fa-brands fa-linkedin-in text-xl bg-DarkPurple text-white px-3.5 py-2  rounded-xl h-11 w-11"></i></a>
          <a href="https://twitter.com/Finick_xyz"> <i class="fa-brands fa-twitter text-xl bg-DarkPurple text-white px-3.5 py-2 rounded-xl h-11 w-11"></i></a>
         
        </div>

        {/* copyright section */}
        <div className="sm:mt-6 ms:mt-10 flex sm:flex-row ms:flex-col gap-10 justify-center items-center mb-16">
          <p className="text-gray lg:text-base ms:text-sm m-0">
            {" "}
            2024 &copy; Copyright <strong>FINICK</strong>. All rights reserved.
          </p>
          
        </div>
        <Link to={"/terms"}>
            <h1 className="text-gray lg:text-base ms:text-sm" onClick={refreshPage}>
              Terms & Conditions
            </h1>
          </Link>
          <Link to={"/privacy"}>
            <h1 className="text-gray lg:text-base ms:text-sm" onClick={refreshPage}>Privacy</h1>
          </Link>

      </div>
    </div>
  );
};

export default Footer;
