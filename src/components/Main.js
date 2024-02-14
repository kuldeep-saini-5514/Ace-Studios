import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [color, setColor] = useState("#ffe710");
  const navigate = useNavigate();

  return (
    <>
      <div
        className="flex md:mx-[4rem] sm:mx-[2rem] md:mt-20 sm:mt-10 my-[2rem]"
        style={{
          backgroundImage: `url(${require("./Images/bg_logo.png")})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* left container */}
        <div className="w-[45rem] flex flex-col gap-y-4 ms:px-5 sm:p-0   ">
          <div className="flex items-center rounded-xl md:w-[19rem] sm:w-[17rem]  md:px-2 sm:px-3 sm:py-2 mm:w-[90%] ml:w-[80%] ms:w-[100%] ms:py-4 ms:px-3   bg-lightgray">
            <i
              className="fa-solid fa-circle fa-2xl md:text-2xl sm:text-2xl ms:text-xl"
              style={{ color: `${color}` }}
            ></i>
            <p className="md:ml-4 text-black md:text-base sm:text-sm sm:m-0 sm:ml-4 sm:pt-0 ms:mb-0 ms:ml-2 ms:text-base">
              #1 Digital company in the town!
            </p>
          </div>
          <h1 className="text-black md:text-4xl font-bold sm:text-2xl md:w-[18rem] sm:w-[12rem] mm:text-4xl ms:text-3xl ">
            Tech Solutions Tailored for Growth
          </h1>
          <p className="text-gray w-[95%] lg:text-base md:text-sm ms:text-sm sm:m-0  ms:mb-0">
            Simplify your digital journey, maximize your return on innovation.
            Let's grow your business together.
          </p>
          {/* buttons container */}
          <div className="flex items-center mt-4 gap-x-10 ">
            <button
              className="text-base bg-purple rounded-3xl px-4 py-2  ms:text-base  text-white"
              onClick={() => navigate("contact")}
            >
              Connect with us
            </button>
          </div>
        </div>
        {/* right container */}
        <div className="md:w-[400px] sm:w-[550px] border-black] sm:block ms:hidden">
          <img src={require(`./Images/logo_1.png`)} alt="" />
        </div>
      </div>
      <div className="bg-blue w-full h-9 mt-20"></div>

      {/* Services */}
      <div
        className="text-center flex flex-col items-center mt-10 mx-11 md:gap-4
      md:mx-8 
      lg:mx-11

      ms:mx-2
      "
      >
        <h1 className="lg:text-4xl md:text-2xl sm:text-2xl ms:text-2xl sm:font-medium ms:font-bold">
          Services That Lead The Way To Better Business
        </h1>
        <p className="md:w-[80%] sm:w-[90%] lg:text-base md:text-sm ms:text-sm md:mt-0 text-gray ms:mt-5">
          Welcome to Finick, where we pave the path to digital success with our
          comprehensive suite of innovative IT services. As your strategic
          partner in the digital realm, we specialize in:
        </p>
        {/* Services Provided */}
        <div
          className="flex flex-wrap justify-evenly md:gap-y-20  items-center text-black
        md:justify-between md:flex-row  
        lg:justify-evenly 
        sm:flex-col gap-y-6
        "
        >
          <div
            className="flex flex-col justify-center items-center gap-4 md:h-[12rem] w-[35%] shadow-lg rounded-xl p-5 m-6
          md:w-[48%] md:m-0 md:gap-2
          lg:w-[45%] lg:h-[15rem] 
          xl:w-[35%] xl:h-[15rem]
          sm:w-[80%] ml:h-[15rem]
          ms:w-[95%] ms:m-0 gap-0 ms:h-[13rem]
          "
          >
            <i class="fa-solid fa-gears text-4xl  text-purple"></i>
            <p className="lg:text-2xl ms:text-xl  font-semibold ms:mb-0">
              Mobile App Development
            </p>
            <p className=" text-black ms:text-sm lg:text-base ms:text-sm ms:mb-0 ">
              Unleash the Power of Mobile with Custom App Development
            </p>
          </div>
          <div
            className="flex flex-col justify-center items-center gap-4 md:h-[12rem] w-[35%] shadow-lg rounded-xl p-5 m-6
            md:w-[48%] md:m-0 md:gap-2
          lg:w-[45%] lg:h-[15rem] 
          xl:w-[35%] xl:h-[15rem]
          sm:w-[80%] ml:h-[15rem] 
          ms:w-[95%] ms:m-0 ms:h-[13rem]
          "
          >
            <i class="fa-solid fa-code text-2xl text-purple"></i>
            <p className="lg:text-2xl ms:text-2xl font-semibold ms:mb-0">
              Website Development
            </p>
            <p className=" text-black ms:text-sm lg:text-base ms:text-sm ms:mb-0">
              Craft Powerful Digital Experiences with Cutting-Edge Web
              Development
            </p>
          </div>
          <div
            className="flex flex-col justify-center items-center gap-4 md:h-[12rem] w-[35%] shadow-lg rounded-xl p-5 m-6
            md:w-[48%] md:m-0 md:gap-2
          lg:w-[45%] lg:h-[15rem] 
          xl:w-[35%] xl:h-[15rem]
          sm:w-[80%] ml:h-[15rem]
          ms:w-[95%] ms:m-0 ms:h-[13rem]
          "
          >
            <i class="fa-solid fa-palette text-2xl text-purple"></i>
            <p className="lg:text-2xl ms:text-2xl font-semibold ms:mb-0">
              Design
            </p>
            <p className=" text-black ms:text-sm lg:text-base ms:text-sm ms:mb-0">
              Elevate Your Brand with Strategic Web & App Design Solutions
            </p>
          </div>
          <div
            className="flex flex-col justify-center items-center gap-4 md:h-[12rem] w-[35%] shadow-lg rounded-xl p-5 m-6
          md:w-[48%] md:m-0 md:gap-2
          lg:w-[45%] lg:h-[15rem] 
          xl:w-[35%] xl:h-[15rem]
          sm:w-[80%] ml:h-[15rem]
          ms:w-[95%] ms:m-0 ms:h-[13rem]
          "
          >
            <i class="fa-solid fa-lock text-2xl text-purple"></i>
            <p className="lg:text-2xl ms:text-2xl font-semibold ms:mb-0">
              AR Solution
            </p>
            <p className=" text-black ms:text-sm lg:text-base ms:text-sm ms:mb-0">
              Reimagine Your Business with Immersive Augmented Reality Solutions
            </p>
          </div>
        </div>
      </div>
      {/* Services End */}

      {/* Work Start */}
      <div className="flex justify-center items-center text-center mt-14 ">
        <div className="ms:p-2">
          <p
            className="font-semibold lg:text-4xl
          md:text-2xl
          ms:text-2xl sm:mb-2

          "
          >
            Companies We Work With
          </p>
          <p
            className="text-gray  mt-4
          md:text-sm lg:text-base 
          ms:text-sm
          "
          >
            We partner with awesome companies like yours, building cool stuff
            and making a real impact together.
          </p>
        </div>
      </div>
      {/* Logo Container */}
      <div
        className="flex flex-wrap md:gap-8 md:m-12 sm:mt-16 ms:mt-5 justify-center items-center
      md:my-2
      lg:my-12
      sm:my-0 sm:gap-x-3 sm:m-5
      ms:gap-x-10 ms:gap-y-5

      "
      >
        <img
          className="lg:h-16 md:h-10 ms:h-14 "
          src={require(`./Images/ig-1.png`)}
          alt=""
        />
        <img
          className="lg:h-16 md:h-10 ms:h-14 "
          src={require(`./Images/2.png`)}
          alt=""
        />
        <img
          className="lg:h-16 md:h-10 ms:h-14 "
          src={require(`./Images/3.png`)}
          alt=""
        />
        <img
          className="lg:h-16 md:h-10 ms:h-14 "
          src={require(`./Images/4.png`)}
          alt=""
        />
        <img
          className="lg:h-16 md:h-10 ms:h-14 "
          src={require(`./Images/5.png`)}
          alt=""
        />
        <img
          className="lg:h-16 md:h-10 ms:h-14 "
          src={require(`./Images/6.png`)}
          alt=""
        />
        <img
          className="lg:h-16 md:h-10 ms:h-14 "
          src={require(`./Images/7.png`)}
          alt=""
        />
        <img
          className="lg:h-16 md:h-10 ms:h-14 "
          src={require(`./Images/8.png`)}
          alt=""
        />
        <img
          className="lg:h-16 md:h-10 ms:h-14 "
          src={require(`./Images/9.png`)}
          alt=""
        />
      </div>
      {/* Process Container */}
      <div>
        {/* Left container */}
        <div
          className="flex md:flex-row ms:flex-col m-2 lg:p-5
        md:p-2 ms:mt-5
        "
        >
          <div>
            <img
              className="rounded-xl  sm: sm:ml-0 sm:mt-10  sm:ml-0 ms:ml-0"
              src={require(`./Images/laptop-1.jpeg`)}
              alt=""
            />
          </div>
          {/* right Container */}
          <div
            className="lg:mx-12 text-black
          md:mx-5 mt-0
          sm:mx-5 sm:mt-10
          ms:mx-2
          
          "
          >
            <h1
              className="lg:text-4xl md:text-2xl ms:text-3xl ms:mt-5 text-black font-semibold 
            "
            >
              Our Process{" "}
            </h1>
            <p className="text-gray lg:text-base lg:mt-2 md:text-sm ms:text-sm md:m-0 ms:mt-2 ">
              {" "}
              Your vision, our expertise. From websites to AR, we craft tailored
              solutions through a collaborative process, unlocking success for
              every project.
            </p>
            <div className="flex flex-col lg:gap-5 lg:mt-10 md:mt-5 md:gap-2">
              <div className="text-black">
                <div className="flex gap-4">
                  <div className="flex justify-center items-center bg-skin sm:h-10 sm:w-10 ms:h-14 ms:w-14 rounded-xl">
                    <i class="fa-solid fa-rocket text-xl text-brown"></i>
                  </div>
                  <p className="text-black lg:text-2xl md:text-lg sm:text-xl ms:text-xl font-semibold md:m-0 ms:mt-4 ms:mb-0 ">
                    Discovery
                  </p>
                </div>
                <p className="ms:pl-14 ms:pt-2 text-gray lg:text-base md:text-sm ms:text-sm md:m-0 ms:pl-0 ms:pt-0">
                  {" "}
                  Dive deep into your vision: We actively listen and understand
                  your unique goals, challenges, and audience. Strategic
                  planning ensures measurable success with open communication
                  throughout.{" "}
                </p>
              </div>
              <div className="text-black">
                <div className="flex gap-4">
                  <div className="flex justify-center items-center bg-lightblue sm:h-10 sm:w-10 ms:h-14 ms:w-14 rounded-xl">
                    <i class="fa-solid fa-lightbulb text-xl text-DarkBlue"></i>
                  </div>
                  <p className="text-black lg:text-2xl md:text-lg sm:text-xl ms:text-xl font-semibold md:m-0 ms:mt-4 ms:mb-0 ">
                    Plan
                  </p>
                </div>
                <p className="ms:pl-14 ms:pt-2 text-gray lg:text-base md:text-sm ms:text-sm md:m-0 ms:pl-0 ms:pt-0">
                  {" "}
                  We craft a clear roadmap together, leveraging expertise to
                  guide your project. Flexibility is key; we adapt to your
                  preferences, be it agile sprints or structured approaches.{" "}
                </p>
              </div>
              <div className="text-black">
                <div className="flex gap-4">
                  <div className="flex justify-center items-center bg-lightgreen sm:h-10 sm:w-10 ms:h-14 ms:w-14 rounded-xl">
                    <i class="fa-solid fa-rocket text-xl text-green"></i>
                  </div>
                  <p className="text-black lg:text-2xl md:text-lg sm:text-xl ms:text-xl font-semibold md:m-0 ms:mt-4 ms:mb-0">
                    Execute
                  </p>
                </div>
                <p className="ms:pl-14 ms:pt-2 text-gray lg:text-base md:text-sm ms:text-sm md:m-0 ms:pl-0 ms:pt-0">
                  {" "}
                  Seamless teamwork ensures efficient delivery with rigorous
                  quality control. Regular feedback keeps you informed and
                  involved, shaping the project's outcome every step of the way.{" "}
                </p>
              </div>
              <div className="text-black">
                <div className="flex gap-4">
                  <div className="flex justify-center items-center bg-lightyellow sm:h-10 sm:w-10 ms:h-14 ms:w-14 rounded-xl">
                    <i class="fa-solid fa-rocket text-lg text-DarkYellow"></i>
                  </div>
                  <p className="text-black lg:text-2xl md:text-lg sm:text-xl ms:text-xl font-semibold md:m-0 ms:mt-4 ms:mb-0">
                    Deliver
                  </p>
                </div>
                <p className="ms:pl-14 ms:pt-2 text-gray lg:text-base ms:text-sm md:m-0 ms:pl-0 ms:pt-0">
                  {" "}
                  Exceeding expectations, we deliver a product that aligns
                  perfectly with your goals. Beyond launch, ongoing support
                  optimizes long-term success, building trust and value for
                  future collaborations.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* //Center box  */}
      <div className="flex sm:flex-row ms:flex-col bg-LightGray sm:p-10 sm:m-5 mt-12 mb-12 ms:p-5 ms:gap-10 ms:mb-5">
        {/* left box */}
        <div className="sm:w-[90rem] sm:h-[10rem]  lg:text-3xl ms:text-2xl font-semibold">
          We’re a lean creative agency that uses design and code to solve
          problems.
        </div>
        {/* right box */}
        <div>
          <p className="sm:pl-10 sm:ml-4 sm:h-[10rem] lg:text-lg ms:text-sm sm:border-l-[3px] sm:border-Gray  text-gray ">
            We don't just build solutions, we tailor them to your unique needs.
            From data-driven insights to agile collaboration, we work closely
            with you to deliver cutting-edge solutions that drive real results.
            Backed by a proven track record of success, we're your trusted
            partner in achieving your digital goals.
          </p>
        </div>
      </div>

      {/* another box */}
      <div className="flex sm:flex-row ms:flex-col justify-around m-2">
        {/* left- image box */}
        <div>
          <img
            className="lg:h-[30rem] lg:w-[40rem] rounded-xl  m-2
            md:h-[25rem] md:w-[25rem]
            ms:h-[22rem] ms:w-[95%]
            "
            src={require(`./Images/Group.jpeg`)}
            alt=""
          />
        </div>
        {/* right box */}
        <div
          className="lg:m-0 flex flex-col  lg:pl-8  justify-center gap-5 
        md:pl-5 md:m-0 
        ms:pl-3 ms:pt-5
        "
        >
          <p className="lg:text-4xl ms:text-2xl m-0 w-[20rem] font-semibold">
            Designed and built by an astonishing creative team.
          </p>
          <p className="text-gray m-0 lg:text-base md:text-base lg:w-[28rem] md:w-[20rem] ms:text-sm">
            Empowering businesses with innovative solutions and tangible
            results, our expert team is dedicated to helping you reach your
            objectives with confidence.
          </p>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="flex sm:flex-row ms:flex-col  sm:mt-10 ms:p-3 justify-center lg:items-center">
        {/* left */}
        <div className="lg:h-[30rem] w-[160rem] m-5 md:h-[24rem] md:flex md:flex-wrap lg:ml-5 md:ml-0 justify-evenly">
          <div
            className="rounded-xl
            ms:hidden
            sm:block
            md:static md:w-[6rem] md:h-[6rem]
            lg:absolute lg:w-[7rem] lg:h-[7rem] lg:left-[10rem] 
            xl:h-[8rem] xl:w-[8rem] xl:left-[14rem]"
            style={{
              backgroundImage: `url(${require("./Images/TS-1.png")})`,
              backgroundSize: "cover",
            }}
          ></div>

          <div
            className="rounded-xl
            ms:hidden
            sm:block 
            md:static md:w-[6rem] md:h-[6rem]
            lg:absolute lg:w-[6rem] lg:h-[6rem] lg:left-[20rem] lg:top-[214rem] 
            xl:h-[7rem] xl:w-[7rem] xl:left-[25rem] xl:top-[214rem]  "
            style={{
              backgroundImage: `url(${require("./Images/TS-2.png")})`,
              backgroundSize: "cover",
            }}
          ></div>

          <div
            className="rounded-xl
            ms:hidden
            sm:block
            md:static md:w-[6rem] md:h-[6rem]
            lg:absolute lg:w-[7rem] lg:h-[7rem] lg:top-[218rem] lg:left-5 
            xl:h-[8rem] xl:w-[8rem] xl:top-[218rem] xl:left-10"
            style={{
              backgroundImage: `url(${require("./Images/TS-3.png")})`,
              backgroundSize: "cover",
            }}
          ></div>

          <div
            className="rounded-xl 
            ms:hidden
            sm:block 
            md:static md:top-[201rem] md:w-[6rem] md:h-[6rem]
            lg:absolute lg:w-[7rem] lg:h-[7rem]   lg:left-[9rem] lg:top-[224rem]
            xl:h-[8rem] xl:w-[8rem] xl:left-[13rem] xl:top-[224rem]"
            style={{
              backgroundImage: `url(${require("./Images/TS-4.png")})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className="rounded-xl
            ms:hidden
            sm:block 
            md:static top-[201rem] md:w-[6rem] md:h-[6rem]
            lg:absolute lg:w-[7rem] lg:h-[7rem] lg:left-[18rem] lg:top-[223rem] 
            xl:h-[8rem] xl:w-[8rem] xl:left-[24rem] xl:top-[223rem] "
            style={{
              backgroundImage: `url(${require("./Images/TS-5.png")})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className="rounded-xl
            ms:hidden
            sm:block 
            md:static top-[201rem] md:w-[6rem] md:h-[6rem]
            lg:absolute lg:w-[6rem] lg:h-[6rem]  lg:left-[27rem] lg:top-[220rem]
            xl:h-[6rem] xl:w-[6rem]  xl:left-[34rem] xl:top-[218rem]"
            style={{
              backgroundImage: `url(${require("./Images/TS-6.jpeg")})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className="rounded-xl
            ms:hidden
            sm:block 
            md:static top-[208rem] md:w-[6rem] md:h-[6rem]
            lg:absolute lg:w-[7rem] lg:h-[7rem] lg:left-5 lg:top-[230rem] 
            xl:h-[8rem] xl:w-[8rem] xl:left-10 xl:top-[228rem] "
            style={{
              backgroundImage: `url(${require("./Images/TS-8.png")})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className="rounded-xl
            ms:hidden
            sm:block 
            md:static top-[208rem] md:w-[6rem] md:h-[6rem]
            lg:absolute  lg:w-[7rem] lg:h-[7rem] lg:left-[14rem] lg:top-[232rem] 
            xl:h-[8rem] xl:w-[8rem] xl:left-[19rem] xl:top-[234rem] "
            
            style={{
              backgroundImage: `url(${require("./Images/TS-3.png")})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className="rounded-xl
            ms:hidden
            sm:block 
            md:static top-[208rem] md:w-[6rem] md:h-[6rem]
            lg:absolute lg:w-[7rem] lg:h-[7rem]  lg:left-[24rem] lg:top-[231rem]
            xl:h-[8rem] xl:w-[8rem]  xl:left-[33rem] xl:top-[231rem]"
            style={{
              backgroundImage: `url(${require("./Images/TS-9.png")})`,
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        {/* right */}
        <div>
          <p className="font-semibold lg:text-4xl leading-10 sm:w-[25rem]  ms:text-2xl md:mt-10">
            Meet Client Satisfaction After Working With Us
          </p>
          <p className="font-semibold lg:text-base m-0 p-0 ms:text-sm">
            Doesn't feel like an agency
          </p>
          {/* icons */}
          <div className="text-yellow mb-2 mt-2">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          {/* icons */}
          <p className="text-gray lg:text-base ms:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            doloribus voluptatibus minus tempore corporis, sapiente culpa quos
            temporibus expedita sequi omnis commodi! Eligendi, beatae animi ut
            praesentium possimus natus totam! Voluptates quidem earum nemo
            harum, pariatur soluta cumque eaque molestias aut facilis
          </p>
          {/* User */}
          <div className="flex">
            {/* left */}
            <div
              className="sm:w-[4rem] sm:h-[4rem] ms:w-[7rem] ms:h-[7rem] rounded-xl"
              style={{
                backgroundImage: `url(${require("./Images/TS-logo.png")})`,
                backgroundSize: "100% 110%",
              }}
            ></div>
            {/* right */}
            <div className="flex flex-col sm:ml-5 ms:ml-10 justify-center">
              <p className="p-0 font-semibold m-0 lg:text-base md:text-sm ms:text-xl">
                Gwen Stacy
              </p>
              <p className="p-0 m-0 text-gray mt-2 lg:text-base md:text-sm ms:text-xl">
                Cloudexter
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* //Contact  */}
      <div>
        <div className="flex-col sm:mt-10 ms:mt-10  text-center">
          <h3 className="lg:text-4xl ms:text-3xl">Contact us</h3>
          <p className="text-gray lg:text-base ms:text-sm sm:pt-0 ms:pt-2">
            Felis nunc, aliquet quam dictum senectus nunc.
          </p>
        </div>

        <div className="flex sm:flex-row ms:flex-col-reverse sm:m-10 text-white bg-white shadow-2xl md:mt-0 rounded-3xl">
          {/* //left side */}
          <div className="bg-purple text-white rounded-xl sm:px-8 py-6  lg:w-[25rem] sm:h-[40rem] md:w-[40rem] md:mt-2 ms:m-3 ms:px-4 ms:mt-10">
            <div>
              <p className="text-2xl font-semibold mb-2">
                {" "}
                Contact Information
              </p>
              <p className="mb-10 lg:text-xl ms:text-sm text-Gray">
                {" "}
                If you like to work with us then drop us a message
              </p>
            </div>
            <div className="bg-white h-10 w-10 flex p-3 lg:text-base rounded-full mb-6">
              <i class="fa-solid fa-mobile mr-10 text-purple"></i>
              <span>+919720623941</span>
            </div>
            <div className="bg-white h-10 w-10 flex p-3 lg:text-base rounded-full mb-6 ">
              <i class="fa-solid fa-envelope mr-10 text-purple"></i>
              <span>abhinay@finick.xyz</span>
            </div>
            <div className="bg-white h-10 w-10 flex p-3 lg:text-base rounded-full mb-6 mr-5">
              <i class="fa-solid fa-globe mr-10 text-purple"></i>
              <span>www.finick.com</span>
            </div>
            <div className="bg-white h-10 w-10 flex p-3 lg:text-base rounded-full mb-6">
              <i class="fa-solid fa-location-dot mr-10 text-purple"></i>
              <span>India</span>
            </div>
          </div>
          {/* right side */}
          <div className=" text-black">
            <form class="flex flex-wrap lg:flex-row md:flex-col sm:ml-10 ms:ml-5 lg:w-[35rem]  md:w-[19rem]">
              <div className="">
                <p className="text-black lg:text-lg ms:text-base m-0 lg:mb-2 md:mb-0 sm:mt-8 md:mt-2">
                  First Name
                </p>
                <input className="contact-input" type="text" />
              </div>
              <div>
                <p className="text-black lg:text-lg ms:text-base m-0 lg:mb-2 ms:mt-8 md:mt-3 sm:mb-0">
                  Last Name
                </p>
                <input className="contact-input" type="email" />
              </div>
              <div>
                <p className="text-black lg:text-lg ms:text-base m-0 lg:mb-2 ms:mt-8 md:mt-3 md:mb-0">
                  Email
                </p>
                <input className="contact-input" type="email" />
              </div>
              <div>
                <p className="text-black lg:text-lg ms:text-base m-0 lg:mb-2 ms:mt-8 md:mt-3 md:mb-0">
                  Phone
                </p>
                <input className="contact-input" type="email" />
              </div>
              <div className="w-[100%]">
                <p className="lg:mt-10 ms:mt-4 md:mb-3 font-semibold lg:text-xl ms:text-base">
                  What Services do you need?
                </p>
                <div className="flex lg:flex-wrap  lg:gap-x-20 lg:gap-y-5 lg:flex-row ms:flex-col ms:gap-y-2 ">
                  <div className="">
                    <label class="container">
                      Web Design
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  <div>
                    <label class="container">
                      App Design
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  <div>
                    <label class="container">
                      Graphic Design
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  <div>
                    <label class="container">
                      Digital Marketing
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  <div>
                    <label class="container">
                      Other
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>
                <p className="lg:mt-10 lg:text-xl ms:text-lg ms:mt-4 md:mb-2 font-semibold ">
                  Message
                </p>
                <input
                  type="text"
                  className="msg-input sm:w-[100%] ms:w-[90%] focus:outline-none"
                  placeholder="Write your message..."
                />
              </div>
              <button className="nav-btn text-base bg-purple rounded-3xl px-4 py-2 mt-5 text-white  ms:block ">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
