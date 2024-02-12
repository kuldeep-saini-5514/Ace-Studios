import React, { useState } from "react";

const Main = () => {
  const [color, setColor] = useState("#ffe710");
  return (
    <>
      <div className="flex mx-[4rem] my-[2rem]">
        {/* left container */}
        <div className="w-[45rem] flex flex-col gap-y-4">
          <div className="flex items-center rounded-xl w-[19rem] py-3 px-2 bg-lightgray">
            <i
              className="fa-solid fa-circle fa-2xl"
              style={{ color: `${color}` }}
            ></i>
            <p className="ml-4 text-black">#1 Digital company in the town!</p>
          </div>
          <h1 className="text-black text-4xl font-bold w-[15rem]">
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
      <div className="text-center flex flex-col items-center mt-10 mx-11 gap-8 ">
        <h1 className="text-4xl font-medium">
          Services That Lead The Way To Better Business
        </h1>
        <p className="w-[60rem] text-gray">
          Welcome to Finick, where we pave the path to digital success with our
          comprehensive suite of innovative IT services. As your strategic
          partner in the digital realm, we specialize in:
        </p>
        {/* Services Provided */}
        <div className="flex flex-wrap justify-center items-center text-black">
          <div className="flex flex-col justify-center items-center gap-4 h-[12rem] w-[35%] shadow-lg rounded-xl p-5 m-6">
            <i class="fa-solid fa-gears text-2xl text-purple"></i>
            <p className="text-xl font-semibold">Mobile App Development</p>
            <p className=" text-black">
              Unleash the Power of Mobile with Custom App Development
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 h-[12rem] w-[35%] shadow-lg rounded-xl p-5 m-6">
            <i class="fa-solid fa-code text-2xl text-purple"></i>
            <p className="text-xl font-semibold">Website Development</p>
            <p className=" text-black">
              Craft Powerful Digital Experiences with Cutting-Edge Web
              Development
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 h-[12rem] w-[35%] shadow-lg rounded-xl p-5 m-6">
            <i class="fa-solid fa-palette text-2xl text-purple"></i>
            <p className="text-xl font-semibold">Design</p>
            <p className=" text-black">
              Elevate Your Brand with Strategic Web & App Design Solutions
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 h-[12rem] w-[35%] shadow-lg rounded-xl p-5 m-6">
            <i class="fa-solid fa-lock text-2xl text-purple"></i>
            <p className="text-xl font-semibold">AR Solution</p>
            <p className=" text-black">
              Reimagine Your Business with Immersive Augmented Reality Solutions
            </p>
          </div>
        </div>
      </div>
      {/* Services End */}

      {/* Work Start */}
      <div className="flex justify-center items-center text-center mt-14">
        <div>
          <p className="font-semibold text-4xl">Companies We Work With</p>
          <p className="text-gray mt-4">
            We partner with awesome companies like yours, building cool stuff
            and making a real impact together.
          </p>
        </div>
      </div>
      {/* Logo Container */}
      <div className="flex flex-wrap gap-8 m-12 mt-16 justify-center items-center">
        <img className="h-16" src={require(`./Images/ig-1.png`)} alt="" />
        <img className="h-16" src={require(`./Images/2.png`)} alt="" />
        <img className="h-16" src={require(`./Images/3.png`)} alt="" />
        <img className="h-16" src={require(`./Images/4.png`)} alt="" />
        <img className="h-16" src={require(`./Images/5.png`)} alt="" />
        <img className="h-16" src={require(`./Images/6.png`)} alt="" />
        <img className="h-16" src={require(`./Images/7.png`)} alt="" />
        <img className="h-16" src={require(`./Images/8.png`)} alt="" />
        <img className="h-16" src={require(`./Images/9.png`)} alt="" />
      </div>
      {/* Process Container */}
      <div>
        {/* Left container */}
        <div className="flex m-2 p-5">
          <div>
            <img src={require(`./Images/laptop-1.jpeg`)} alt="" />
          </div>
          {/* right Container */}
          <div className="mx-12 text-black">
            <h1 className="text-4xl text-black font-semibold">Our Process </h1>
            <p className="text-gray">
              {" "}
              Your vision, our expertise. From websites to AR, we craft tailored
              solutions through a collaborative process, unlocking success for
              every project.
            </p>
           <div className="flex flex-col gap-5 mt-10">
           <div className="text-black">
              <div className="flex gap-4">
              <div className="flex justify-center items-center bg-skin h-10 w-10 rounded-xl">
              <i class="fa-solid fa-rocket text-xl text-brown"></i>
              </div>
              <p className="text-black text-2xl font-semibold">Discovery</p>
              </div>
              <p className="pl-9 pt-2 text-gray">
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
              <i class="fa-solid fa-lightbulb text-xl"></i>
              </div>
              <p className="text-black text-2xl font-semibold">Plan</p>
              </div>
              <p className="pl-9 pt-2 text-gray">
                  {" "}
                  We craft a clear roadmap together, leveraging expertise to
                  guide your project. Flexibility is key; we adapt to your
                  preferences, be it agile sprints or structured approaches.{" "}
                </p>
            </div>
            <div className="text-black">
              <div className="flex gap-4">
              <div className="flex justify-center items-center bg-lightgreen h-10 w-10 rounded-xl">
              <i class="fa-solid fa-rocket text-xl"></i>
              </div>
              <p className="text-black text-2xl font-semibold">Execute</p>
              </div>
              <p className="pl-9 pt-2 text-gray">
                  {" "}
                  Seamless teamwork ensures efficient delivery with rigorous
                  quality control. Regular feedback keeps you informed and
                  involved, shaping the project's outcome every step of the way.{" "}
                </p>
            </div>
            <div className="text-black">
              <div className="flex gap-4">
              <div className="flex justify-center items-center bg-lightyellow h-10 w-10 rounded-xl">
              <i class="fa-solid fa-rocket text-lg"></i>
              </div>
              <p className="text-black text-2xl font-semibold">Deliver</p>
              </div>
              <p className="pl-9 pt-2 text-gray">
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
      <div className="flex  m-5 mt-12 mb-12">
        {/* left box */}
        <div className="w-1/2 text-3xl font-semibold">
          We’re a lean creative agency that uses design and code to solve
          problems.
        </div>
        {/* right box */}
        <div className="w-1/2">
          We don't just build solutions, we tailor them to your unique needs.
          From data-driven insights to agile collaboration, we work closely with
          you to deliver cutting-edge solutions that drive real results. Backed
          by a proven track record of success, we're your trusted partner in
          achieving your digital goals.
        </div>
      </div>

      {/* another box */}
      <div className="flex m-2">
        {/* left- image box */}
        <div>
          <img
            className="h-96 m-2"
            src={require(`./Images/laptop-1.jpeg`)}
            alt=""
          />
        </div>
        {/* right box */}
        <div className="m-7 flex flex-col justify-center align- gap-5 ">
          <h1 className="text-4xl font-semibold">
            Designed and built by an astonishing creative team.
          </h1>
          <p className="text-black">
            Empowering businesses with innovative solutions and tangible
            results, our expert team is dedicated to helping you reach your
            objectives with confidence.
          </p>
          <button className="text-base w-28 bg-purple rounded-3xl px-4 py-2 text-white">
            About us
          </button>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div>
        {/* left */}
        <div>
          <img
            className=""
            src={require("./Images/Huawei-logo-A8C7CBCAA8-seeklogo.com.png")}
            alt="logo"
          />
        </div>
        <div></div>
      </div>

      {/* //Contact  */}
      <div>
        <div className="flex-col text-center">
          <h3>Contact us</h3>
          <p>Felis nunc, aliquet quam dictum senectus nunc.</p>
        </div>

        <div className="flex m-10 bg-white shadow-2xl rounded-3xl">
          {/* //left side */}
          <div className="bg-purple text-white rounded-xl px-8 py-6 w-[25rem] h-[30rem]">
            <div>
              <h5 className="text-xl font-semibold mb-2">
                {" "}
                Contact Information
              </h5>
              <p className="mb-10">
                {" "}
                If you like to work with us then drop us a message
              </p>
            </div>
            <div className="bg-white h-10 w-10 flex px-3 py-1.5  rounded-full mb-6">
              <i class="fa-solid fa-mobile mr-10 text-purple"></i>
              <span>+91 9720623941</span>
            </div>
            <div className="bg-white h-10 w-10 flex px-3 py-1.5  rounded-full mb-6 ">
              <div className="flex">
                <i class="fa-solid fa-envelope mr-10 text-purple"></i>
                <span>abhinay@finick.xyz</span>
              </div>
            </div>
            <div className="bg-white h-10 w-10 flex px-3 py-1.5  rounded-full mb-6 mr-5">
              <i class="fa-solid fa-globe mr-10 text-purple"></i>
              <span>www.finick.com</span>
            </div>
            <div className="bg-white h-10 w-10 flex px-3 py-1.5  rounded-full mb-6">
              <i class="fa-solid fa-location-dot mr-10 text-purple"></i>
              <span>India</span>
            </div>
          </div>

          {/* //right side  */}
          <div className="">
            <form class="flex flex-wrap ml-10 w-[40rem]">
              <div>
                <h5>Full Name</h5>
                <input type="text" />
              </div>
              <div>
                <h5>Email</h5>
                <input type="email" />
              </div>
              <div>
                <h5>Phone</h5>
                <input type="email" />
              </div>
              <div>
                <h5>Email</h5>
                <input type="email" />
              </div>
              <input
                placeholder="Rating (1-5)"
                class="bg-gray-700 text-black border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="number"
              />
              <textarea
                placeholder="Feedback"
                class="bg-gray-700 text-black border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-purple focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                name="feedback"
              />

              <button
                class="bg-gradient-to-r from-blue-500 to-blue-500 text-blackfont-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
