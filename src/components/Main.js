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
          Simplify your digital journey, maximize your return on innovation. Let's grow your business together.
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
      <div className="text-center flex flex-col items-center mt-10 mx-11 gap-8 justify-center align-middle">
        <h1 className="text-4xl font-medium">Services That Lead The Way To Better Business</h1>
        <p className="w-[60rem] text-black">
        Welcome to Finick, where we pave the path to digital success with our comprehensive suite of innovative IT services. As your strategic partner in the digital realm, we specialize in:
        </p>
        {/* Services Provided */}
        <div className="flex flex-wrap text-black">
          <div className="h-4/6 w-[33.3%] shadow-lg p-5 m-6">
          <i class="fa-solid fa-gears"></i> 
            <h1>Mobile App Development</h1>
            <p className=" text-black">
            Unleash the Power of Mobile with Custom App Development
            </p>
          </div>
          <div className="h-4/6 w-[33.3%] shadow-lg p-5 m-6">
          <i class="fa-solid fa-code"></i>
            <h1>Website Development</h1>
            <p className=" text-black">
            Craft Powerful Digital Experiences with Cutting-Edge Web Development
            </p>
          </div>
          <div className="h-4/6 w-[33.3%] shadow-lg p-5 m-6">
          <i class="fa-solid fa-palette"></i>
            <h1>Design</h1>
            <p className=" text-black">
            Elevate Your Brand with Strategic Web & App Design Solutions
            </p>
          </div>
          <div className="h-4/6 w-[33.3%] shadow-lg p-5 m-6">
          <i class="fa-solid fa-lock"></i>
            <h1>AR Solution</h1>
            <p className=" text-black">
            Reimagine Your Business with Immersive Augmented Reality Solutions
            </p>
          </div>
        </div>
      </div>
      {/* Services End */}

      {/* Work Start */}
      <div className="flex justify-center align-middle">
        <div>
        <h1 className="text center">Companies We Work With</h1>
        <p>
        We partner with awesome companies like yours, building cool stuff and making a real impact together.
        </p>
        </div>
      </div>
              {/* Logo Container */}
      <div className="flex flex-wrap gap-8 m-12">
        <img className="h-24" src={require(`./Images/pepsi.png`)} alt="" />
        <img className="h-24" src={require(`./Images/beats.png`)} alt="" />
        <img className="h-24" src={require(`./Images/panda.jpeg`)} alt="" />
        <img className="h-24" src={require(`./Images/GoPro_logo.svg.png`)} alt="" />
        <img className="h-24" src={require(`./Images/Huawei-logo-A8C7CBCAA8-seeklogo.com.png`)} alt="" />
        <img className="h-24" src={require(`./Images/septwolves.png`)} alt="" />
        <img className="h-24" src={require(`./Images/Dominos.png`)} alt="" />
        <img className="h-24" src={require(`./Images/starbukcs.png`)} alt="" />
        <img className="h-24" src={require(`./Images/dyson.png`)} alt="" />
      </div>
                {/* Process Container */}
      <div>
                {/* Left container */}
     <div className="flex m-2 p-5">
     <div >
      <img className="h-96" src={require(`./Images/laptop-1.jpeg`)} alt="" />
      </div>
                {/* right Container */}
      <div className="mx-5 text-black">
          <h1>Our Process </h1>
          <p className="text-black"> Your vision, our expertise. From websites to AR, we craft tailored solutions through a collaborative process, unlocking success for every project.</p>
          <div className="text-black"> <i class="fa-solid fa-rocket"></i>
            <p className="text-black">Discovery</p>
            <p className="text-black"> Dive deep into your vision: We actively listen and understand your unique goals, challenges, and audience. Strategic planning ensures measurable success with open communication throughout. </p>
          </div>
          <div className="text-black"><i class="fa-solid fa-lightbulb"></i>
            <p className="text-black">Plan</p>
            <p className="text-black"> We craft a clear roadmap together, leveraging expertise to guide your project. Flexibility is key; we adapt to your preferences, be it agile sprints or structured approaches. </p>
          </div>
          <div className="text-black"><i class="fa-solid fa-rocket"></i>
            <p className="text-black">Execute</p>
            <p className="text-black"> Seamless teamwork ensures efficient delivery with rigorous quality control. Regular feedback keeps you informed and involved, shaping the project's outcome every step of the way. </p>
          </div>
          <div className="text-black"><i class="fa-solid fa-rocket"></i>
            <p className="text-black">Deliver</p>
            <p className="text-black"> Exceeding expectations, we deliver a product that aligns perfectly with your goals. Beyond launch, ongoing support optimizes long-term success, building trust and value for future collaborations. </p>
          </div>
        </div>   
     </div>
      </div>

      {/* //Center box  */}
      <div className="flex m-5">
        {/* left box */}
        <div className="w-1/2 text-3xl font-semibold">
        We’re a lean creative agency that uses design and code to solve problems.
        </div>
        {/* right box */}
        <div className="w-1/2">
        We don't just build solutions, we tailor them to your unique needs. From data-driven insights to agile collaboration, we work closely with you to deliver cutting-edge solutions that drive real results. Backed by a proven track record of success, we're your trusted partner in achieving your digital goals.
        </div>
      </div>

      {/* another box */}
      <div>
        {/* left- image box */}
        <div>
        <img className="h-96" src={require(`./Images/laptop-1.jpeg`)} alt="" />
        </div>
        {/* right box */}
        <div>
          <h1>Designed and built by an astonishing creative team.</h1>
          <p>Empowering businesses with innovative solutions and tangible results, our expert team is dedicated to helping you reach your objectives with confidence.</p>
          <button className="text-base bg-purple rounded-3xl px-4 py-2 text-white">
              About us
            </button>
        </div>
      </div>
    </>
  );
};

export default Main;
