import React, { useState } from "react";

const Main = () => {
  const [color, setColor] = useState("#ffe710");
  return (
    <>
      <div
        className="flex mx-[4rem] mt-20 my-[2rem]"
        style={{
          backgroundImage: `url(${require("./Images/bg_logo.png")})`,
          backgroundSize: "cover",
        }}
      >
        {/* left container */}
        <div className="w-[45rem] flex flex-col gap-y-4">
          <div className="flex items-center rounded-xl w-[19rem]  px-2 bg-lightgray">
            <i
              className="fa-solid fa-circle fa-2xl"
              style={{ color: `${color}` }}
            ></i>
            <p className="ml-4 pt-5 text-black">
              #1 Digital company in the town!
            </p>
          </div>
          <h1 className="text-black text-4xl font-bold w-[18rem]">
            Tech Solutions Tailored for Growth
          </h1>
          <p className="text-gray w-[95%]">
            Simplify your digital journey, maximize your return on innovation.
            Let's grow your business together.
          </p>
          {/* buttons container */}
          <div className="flex items-center mt-4 gap-x-10">
            <button className="text-base bg-purple rounded-3xl px-4 py-2 text-white">
              Connect with us
            </button>
          </div>
        </div>
        {/* right container */}
        <div className="w-[400px]  border-black]">
          <img src={require(`./Images/logo_1.png`)} alt="" />
        </div>
      </div>
      <div className="bg-blue w-full h-9 mt-20"></div>

      {/* Services */}
      <div
        className="text-center flex flex-col items-center mt-10 mx-11 gap-8 
      md:mx-8 
      lg:mx-11
      "
      >
        <h1 className="lg:text-4xl md:text-2xl font-medium">
          Services That Lead The Way To Better Business
        </h1>
        <p className="w-[80%] lg:text-xl md:text-sm text-gray">
          Welcome to Finick, where we pave the path to digital success with our
          comprehensive suite of innovative IT services. As your strategic
          partner in the digital realm, we specialize in:
        </p>
        {/* Services Provided */}
        <div
          className="flex flex-wrap justify-evenly gap-y-20  items-center text-black
        md:justify-between 
        lg:justify-evenly gap-y-20
        "
        >
          <div
            className="flex flex-col justify-center items-center gap-4 h-[12rem] w-[35%] shadow-lg rounded-xl p-5 m-6
          md:w-[48%] md:m-0 md:gap-0
          lg:w-[45%] lg:h-[15rem] gap-4
          xl:w-[35%] xl:h-[15rem]
          "
          >
            <i class="fa-solid fa-gears text-2xl text-purple"></i>
            <p className="lg:text-xl md:text-lg  font-semibold">
              Mobile App Development
            </p>
            <p className=" text-black md:text-sm lg:text-lg">
              Unleash the Power of Mobile with Custom App Development
            </p>
          </div>
          <div
            className="flex flex-col justify-center items-center gap-4 h-[12rem] w-[35%] shadow-lg rounded-xl p-5 m-6
            md:w-[48%] md:m-0 md:gap-0
          lg:w-[45%] lg:h-[15rem] gap-4
          xl:w-[35%] xl:h-[15rem]
          "
          >
            <i class="fa-solid fa-code text-2xl text-purple"></i>
            <p className="lg:text-xl md:text-lg font-semibold">
              Website Development
            </p>
            <p className=" text-black md:text-sm lg:text-lg">
              Craft Powerful Digital Experiences with Cutting-Edge Web
              Development
            </p>
          </div>
          <div
            className="flex flex-col justify-center items-center gap-4 h-[12rem] w-[35%] shadow-lg rounded-xl p-5 m-6
            md:w-[48%] md:m-0 md:gap-0
          lg:w-[45%] lg:h-[15rem] gap-4
          xl:w-[35%] xl:h-[15rem]
          "
          >
            <i class="fa-solid fa-palette text-2xl text-purple"></i>
            <p className="lg:text-xl md:text-lg font-semibold">Design</p>
            <p className=" text-black md:text-sm lg:text-lg">
              Elevate Your Brand with Strategic Web & App Design Solutions
            </p>
          </div>
          <div
            className="flex flex-col justify-center items-center gap-4 h-[12rem] w-[35%] shadow-lg rounded-xl p-5 m-6
          md:w-[48%] md:m-0 md:gap-0
          lg:w-[45%] lg:h-[15rem] gap-4
          xl:w-[35%] xl:h-[15rem]
          "
          >
            <i class="fa-solid fa-lock text-2xl text-purple"></i>
            <p className="lg:text-xl md:text-lg font-semibold">AR Solution</p>
            <p className=" text-black md:text-sm lg:text-lg">
              Reimagine Your Business with Immersive Augmented Reality Solutions
            </p>
          </div>
        </div>
      </div>
      {/* Services End */}

      {/* Work Start */}
      <div className="flex justify-center items-center text-center mt-14">
        <div>
          <p
            className="font-semibold lg:text-4xl
          md:text-2xl
          "
          >
            Companies We Work With
          </p>
          <p
            className="text-gray  mt-4
          md:text-sm lg:text-xl
          "
          >
            We partner with awesome companies like yours, building cool stuff
            and making a real impact together.
          </p>
        </div>
      </div>
      {/* Logo Container */}
      <div
        className="flex flex-wrap gap-8 m-12 mt-16 justify-center items-center
      md:my-2
      lg:my-12
      "
      >
        <img
          className="lg:h-16 md:h-10 "
          src={require(`./Images/ig-1.png`)}
          alt=""
        />
        <img
          className="lg:h-16 md:h-10 "
          src={require(`./Images/2.png`)}
          alt=""
        />
        <img
          className="lg:h-16 md:h-10 "
          src={require(`./Images/3.png`)}
          alt=""
        />
        <img
          className="lg:h-16 md:h-10 "
          src={require(`./Images/4.png`)}
          alt=""
        />
        <img
          className="lg:h-16 md:h-10 "
          src={require(`./Images/5.png`)}
          alt=""
        />
        <img
          className="lg:h-16 md:h-10 "
          src={require(`./Images/6.png`)}
          alt=""
        />
        <img
          className="lg:h-16 md:h-10 "
          src={require(`./Images/7.png`)}
          alt=""
        />
        <img
          className="lg:h-16 md:h-10 "
          src={require(`./Images/8.png`)}
          alt=""
        />
        <img
          className="lg:h-16 md:h-10 "
          src={require(`./Images/9.png`)}
          alt=""
        />
      </div>
      {/* Process Container */}
      <div>
        {/* Left container */}
        <div
          className="flex m-2 lg:p-5
        md:p-2 md:mt-5
        "
        >
          <div>
            <img
              className="rounded-xl"
              src={require(`./Images/laptop-1.jpeg`)}
              alt=""
            />
          </div>
          {/* right Container */}
          <div
            className="lg:mx-12 text-black
          md:mx-5
          "
          >
            <h1
              className="lg:text-4xl md:text-2xl text-black font-semibold
            "
            >
              Our Process{" "}
            </h1>
            <p className="text-gray lg:text-lg lg:mt-2 md:text-sm md:m-0 md:mt-2">
              {" "}
              Your vision, our expertise. From websites to AR, we craft tailored
              solutions through a collaborative process, unlocking success for
              every project.
            </p>
            <div className="flex flex-col lg:gap-5 lg:mt-10 md:mt-5 md:gap-2">
              <div className="text-black">
                <div className="flex gap-4">
                  <div className="flex justify-center items-center bg-skin h-10 w-10 rounded-xl">
                    <i class="fa-solid fa-rocket text-xl text-brown"></i>
                  </div>
                  <p className="text-black lg:text-2xl md:text-lg font-semibold md:m-0">
                    Discovery
                  </p>
                </div>
                <p className="pl-14 pt-2 text-gray lg:text-xl md:text-sm md:m-0">
                  {" "}
                  Dive deep into your vision: We actively listen and understand
                  your unique goals, challenges, and audience. Strategic
                  planning ensures measurable success with open communication
                  throughout.{" "}
                </p>
              </div>
              <div className="text-black">
                <div className="flex gap-4">
                  <div className="flex justify-center items-center bg-lightblue h-10 w-10 rounded-xl">
                    <i class="fa-solid fa-lightbulb text-xl text-DarkBlue"></i>
                  </div>
                  <p className="text-black lg:text-2xl md:text-lg font-semibold md:m-0">
                    Plan
                  </p>
                </div>
                <p className="pl-14 pt-2 text-gray lg:text-xl md:text-sm md:m-0">
                  {" "}
                  We craft a clear roadmap together, leveraging expertise to
                  guide your project. Flexibility is key; we adapt to your
                  preferences, be it agile sprints or structured approaches.{" "}
                </p>
              </div>
              <div className="text-black">
                <div className="flex gap-4">
                  <div className="flex justify-center items-center bg-lightgreen h-10 w-10 rounded-xl">
                    <i class="fa-solid fa-rocket text-xl text-green"></i>
                  </div>
                  <p className="text-black lg:text-2xl md:text-lg font-semibold md:m-0">
                    Execute
                  </p>
                </div>
                <p className="pl-14 pt-2 text-gray lg:text-xl md:text-sm md:m-0">
                  {" "}
                  Seamless teamwork ensures efficient delivery with rigorous
                  quality control. Regular feedback keeps you informed and
                  involved, shaping the project's outcome every step of the way.{" "}
                </p>
              </div>
              <div className="text-black">
                <div className="flex gap-4">
                  <div className="flex justify-center items-center bg-lightyellow h-10 w-10 rounded-xl">
                    <i class="fa-solid fa-rocket text-lg text-DarkYellow"></i>
                  </div>
                  <p className="text-black lg:text-2xl md:text-lg font-semibold md:m-0">
                    Deliver
                  </p>
                </div>
                <p className="pl-14 pt-2 text-gray lg:text-xl md:text-sm md:m-0 ">
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
      <div className="flex bg-LightGray p-10 m-5 mt-12 mb-12">
        {/* left box */}
        <div className="w-[90rem] h-[10rem]  lg:text-3xl md:text-2xl font-semibold">
          We’re a lean creative agency that uses design and code to solve
          problems.
        </div>
        {/* right box */}
        <div>
          <p className="pl-10 ml-4 h-[10rem] lg:text-lg md:text-sm border-l-[3px] border-Gray  text-gray ">
            We don't just build solutions, we tailor them to your unique needs.
            From data-driven insights to agile collaboration, we work closely
            with you to deliver cutting-edge solutions that drive real results.
            Backed by a proven track record of success, we're your trusted
            partner in achieving your digital goals.
          </p>
        </div>
      </div>

      {/* another box */}
      <div className="flex m-2">
        {/* left- image box */}
        <div>
          <img
            className="lg:h-[30rem] lg:w-[50rem] rounded-xl  m-2
            md:h-[25rem] md:w-[23rem]
            "
            src={require(`./Images/Group.jpeg`)}
            alt=""
          />
        </div>
        {/* right box */}
        <div
          className="lg:m-7 flex flex-col  lg:pl-15 justify-center gap-5 
        md:pl-5 md:m-0 
        "
        >
          <p className="lg:text-4xl md:text-2xl m-0 w-[20rem] font-semibold">
            Designed and built by an astonishing creative team.
          </p>
          <p className="text-gray m-0 lg:text-xl md:text-sm lg:w-[28rem] md:w-[20rem]">
            Empowering businesses with innovative solutions and tangible
            results, our expert team is dedicated to helping you reach your
            objectives with confidence.
          </p>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="flex mt-20 justify-center lg:items-center">
        {/* left */}
        <div className="h-[30rem] w-[160rem] m-5">
          <div
            className="absolute lg:left-[14rem] lg:w-[8rem] lg:h-[8rem] rounded-xl
            md:left-5 md:w-[6rem] md:h-[6rem]
            "
            style={{
              backgroundImage: `url(${require("./Images/TS-1.png")})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className="absolute lg:left-[25rem] lg:top-[221rem] lg:w-[6rem] lg:h-[6rem] rounded-xl
            md:left-[8rem] md:w-[6rem] md:h-[6rem]
            "
            style={{
              backgroundImage: `url(${require("./Images/TS-2.png")})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className="absolute lg:top-[224rem] lg:w-[8rem] lg:h-[8rem] rounded-xl
            md:left-[15rem] md:w-[6rem] md:h-[6rem]
            "
            style={{
              backgroundImage: `url(${require("./Images/TS-3.png")})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className="absolute lg:left-[12rem] lg:top-[231rem] lg:w-[7rem] lg:h-[7rem] rounded-xl
            md:left-5 top-[203rem] md:w-[6rem] md:h-[6rem]
            "
            style={{
              backgroundImage: `url(${require("./Images/TS-4.png")})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className="absolute lg:left-[22rem] lg:top-[230rem] lg:w-[7rem] lg:h-[7rem] rounded-xl
            md:left-[8rem] top-[203rem] md:w-[6rem] md:h-[6rem]
            "
            style={{
              backgroundImage: `url(${require("./Images/TS-5.png")})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className="absolute lg:left-[33rem] lg:top-[226rem] lg:w-[6rem] lg:h-[6rem] rounded-xl
            md:left-[15rem] top-[203rem] md:w-[6rem] md:h-[6rem]
            "
            style={{
              backgroundImage: `url(${require("./Images/TS-6.jpeg")})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className="absolute lg:left-[2rem] lg:top-[236rem] lg:w-[8rem] lg:h-[8rem] rounded-xl
            md:left-5 top-[212rem] md:w-[6rem] md:h-[6rem]
            "
            style={{
              backgroundImage: `url(${require("./Images/TS-8.png")})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className="absolute lg:left-[16rem] lg:top-[240rem] lg:w-[8rem] lg:h-[8rem] rounded-xl
            md:left-[8rem] top-[212rem] md:w-[6rem] md:h-[6rem]
            "
            style={{
              backgroundImage: `url(${require("./Images/TS-3.png")})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className="absolute lg:left-[30rem] lg:top-[237rem] lg:w-[8rem] lg:h-[8rem] rounded-xl
            md:left-[15rem] top-[212rem] md:w-[6rem] md:h-[6rem]
            "
            style={{
              backgroundImage: `url(${require("./Images/TS-9.png")})`,
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        {/* right */}
        <div>
          <p className="font-semibold lg:text-3xl leading-10 w-[25rem] md:text-2xl md:mt-10">
            Meet Client Satisfaction After Working With Us
          </p>
          <p className="font-semibold m-0 p-0">Doesn't feel like an agency</p>
          {/* icons */}
          <div className="text-yellow mb-2 mt-2">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          {/* icons */}
          <p className="text-gray lg:text-base md:text-xs">
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
              className="w-[4rem] h-[4rem] rounded-xl"
              style={{
                backgroundImage: `url(${require("./Images/TS-logo.png")})`,
                backgroundSize: "100% 110%",
              }}
            ></div>
            {/* right */}
            <div className="flex flex-col ml-5">
              <p className="p-0 font-semibold m-0 lg:text-lg md:text-sm">
                Gwen Stacy
              </p>
              <p className="p-0 m-0 text-gray mt-2 lg:text-lg md:text-sm">
                Cloudexter
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* //Contact  */}
      <div>
        <div className="flex-col text-center">
          <h3 className="lg:text-4xl md:text-3xl">Contact us</h3>
          <p className="text-gray lg:text-lg md:text-sm">
            Felis nunc, aliquet quam dictum senectus nunc.
          </p>
        </div>

        <div className="flex m-10 text-white bg-white shadow-2xl rounded-3xl">
          {/* //left side */}
          <div className="bg-purple text-white rounded-xl px-8 py-6  lg:w-[25rem] h-[40rem] md:w-[40rem]">
            <div>
              <p className="text-2xl font-semibold mb-2">
                {" "}
                Contact Information
              </p>
              <p className="mb-10 text-Gray">
                {" "}
                If you like to work with us then drop us a message
              </p>
            </div>
            <div className="bg-white h-10 w-10 flex p-3 rounded-full mb-6">
              <i class="fa-solid fa-mobile mr-10 text-purple"></i>
              <span>+919720623941</span>
            </div>
            <div className="bg-white h-10 w-10 flex p-3  rounded-full mb-6 ">
              <i class="fa-solid fa-envelope mr-10 text-purple"></i>
              <span>abhinay@finick.xyz</span>
            </div>
            <div className="bg-white h-10 w-10 flex p-3  rounded-full mb-6 mr-5">
              <i class="fa-solid fa-globe mr-10 text-purple"></i>
              <span>www.finick.com</span>
            </div>
            <div className="bg-white h-10 w-10 flex p-3  rounded-full mb-6">
              <i class="fa-solid fa-location-dot mr-10 text-purple"></i>
              <span>India</span>
            </div>
          </div>
          {/* right side */}
          <div className=" text-black">
            <form class="flex flex-wrap lg:flex-row md:flex-col ml-10 lg:w-[40rem] md:w-[19rem]">
              <div>
                <p className="text-black lg:text-xl md:text-base   m-0 lg:mb-2 md:mb-0 mt-8">First Name</p>
                <input className="contact-input" type="text" />
              </div>
              <div>
                <p className="text-black lg:text-xl md:text-base m-0 lg:mb-2 lg:mt-8 md:mt-3 md:mb-0">Last Name</p>
                <input className="contact-input" type="email" />
              </div>
              <div>
                <p className="text-black lg:text-xl md:text-base m-0 lg:mb-2 lg:mt-8 md:mt-3 md:mb-0">Email</p>
                <input className="contact-input" type="email" />
              </div>
              <div>
                <p className="text-black lg:text-xl md:text-base m-0 lg:mb-2 lg:mt-8 md:mt-3 md:mb-0">Phone</p>
                <input className="contact-input" type="email" />
              </div>
              <div>
                <p className="lg:mt-10 md:mt-4 md:mb-3">What Service do you need?</p>
                <div className="flex lg:flex-wrap lg:gap-x-20 lg:gap-y-5 lg:flex-row md:flex-col md:gap-y-2 ">
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
                <p className="lg:mt-10 lg:text-xl md:text-base md:mt-4 md:mb-2 font-normal">Message</p>
                <input
                  type="text"
                  className="msg-input w-[90%] focus:outline-none"
                  placeholder="Write your message..."
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
