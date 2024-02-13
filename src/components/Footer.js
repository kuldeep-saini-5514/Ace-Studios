import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="flex flex-col mt-20 text-white bg-DarkBlack ">
      <div>
        <h1 className="text-center font-bold text-4xl text-white mt-5">
          FINICK
        </h1>

        {/* 1st section */}
        <div className="mt-6 flex gap-10 justify-center align-middle">
          <Link to={"/"}>
            <span className="text-white lg:text-xl font-semibold">Home</span>
          </Link>
          <Link to={"service"}>
            <span className="lg:text-xl font-semibold">Services</span>
          </Link>
          <Link to={"contact"}>
            <span className="lg:text-xl font-semibold">Contact us</span>
          </Link>
          <Link to={"terms"}>
            <span className="lg:text-xl font-semibold">Terms</span>
          </Link>
        </div>

        {/* icon section */}
        <div className="mt-6 flex gap-x-16 justify-center align-middle">
          <i class="fa-brands fa-instagram text-2xl bg-DarkPurple text-white px-2.5 py-1.5 rounded-xl h-11 w-11"></i>
          <i class="fa-brands fa-facebook-f text-xl bg-DarkPurple text-white px-3.5 py-2 rounded-xl h-11 w-11"></i>
          <i class="fa-brands fa-linkedin-in text-xl bg-DarkPurple text-white px-3.5 py-2  rounded-xl h-11 w-11"></i>
          <i class="fa-brands fa-twitter text-xl bg-DarkPurple text-white px-3.5 py-2 rounded-xl h-11 w-11"></i>
          <i class="fa-brands fa-youtube text-xl bg-DarkPurple text-white px-3 py-2 rounded-xl h-11 w-11"></i>
        </div>

        {/* copyright section */}
        <div className="mt-6 flex gap-10 justify-center items-center mb-16">
          <p className="text-gray lg:text-base md:text-sm m-0">
            {" "}
            2024 &copy; Copyright <strong>FINICK</strong>. All rights reserved.
          </p>
          <Link to={"/terms"}>
            <h1 className="text-gray lg:text-base md:text-sm">
              Terms & Conditions
            </h1>
          </Link>
          <Link to={"/privacy"}>
            <h1 className="text-gray lg:text-base md:text-sm">Privacy</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
