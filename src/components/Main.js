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
            <p className="ml-4">#1 Digital company in the town!</p>
          </div>
          <h1 className="text-black text-4xl font-bold w-[15rem]">
            Amet Sed Cursus Eu Tellus Eget.
          </h1>
          <p className="text-gray w-[95%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ad
            sed unde, velit aperiam similique saepe perspiciatis ratione
            accusamus non, quisquam consequuntur distinctio, corporis neque
            totam consequatur tempore libero? Nisi!
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
      <div className="text-center flex flex-col items-center">
        <h1 className="text-4xl font-medium">Services That Lead The Way To Better Business</h1>
        <p className="w-[60rem]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
          amet esse sit illo. Quasi officia dignissimos sed eos ducimus, quam
          atque obcaecati veritatis ab, tenetur sapiente consectetur quos ipsum
          sunt?
        </p>
        {/* Services Provided */}
        <div className="grid grid-cols2 grid-rows-2">
          <div>
            icon
            <h1>Mobile App Development</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim,
              asperiores fugiat, labore voluptates explicabo ullam similique
              alias laudantium esse ad sit cumque mollitia, sint.
            </p>
          </div>
          <div>
            icon
            <h1>Mobile App Development</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim,
              asperiores fugiat, labore voluptates explicabo ullam similique
              alias laudantium esse ad sit cumque mollitia, sint.
            </p>
          </div>
          <div>
            icon
            <h1>Mobile App Development</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim,
              asperiores fugiat, labore voluptates explicabo ullam similique
              alias laudantium esse ad sit cumque mollitia, sint.
            </p>
          </div>
          <div>
            icon
            <h1>Mobile App Development</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim,
              asperiores fugiat, labore voluptates explicabo ullam similique
              alias laudantium esse ad sit cumque mollitia, sint.
            </p>
          </div>
        </div>
      </div>
      {/* Services End */}

      {/* Work Start */}
      <div>
        <h1>Companies We Work With</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore,
          harum adipisci eaque voluptate autem exercitationem vitae officia.
          Consequuntur, impedit doloribus. Assumenda voluptas iste cum amet
          vitae. Id reiciendis repellat praesentium!
        </p>
      </div>
              {/* Logo Container */}
      <div>
        <img src={require(`./Images/pepsi.png`)} alt="" />
        <img src={require(`./Images/beats.png`)} alt="" />
        <img src={require(`./Images/panda.jpeg`)} alt="" />
        <img src={require(`./Images/GoPro_logo.svg.png`)} alt="" />
        <img src={require(`./Images/Huawei-logo-A8C7CBCAA8-seeklogo.com.png`)} alt="" />
        <img src={require(`./Images/septwolves.png`)} alt="" />
        <img src={require(`./Images/Dominos.png`)} alt="" />
        <img src={require(`./Images/starbukcs.png`)} alt="" />
        <img src={require(`./Images/dyson.png`)} alt="" />
      </div>
                {/* Process Container */}
      <div>
                {/* Left container */}
      <div>
      <img src={require(`./Images/laptop-1.jpeg`)} alt="" />
      </div>
                {/* right Container */}
      <div></div>   
      </div>
      {/* Work End */}
    </>
  );
};

export default Main;
