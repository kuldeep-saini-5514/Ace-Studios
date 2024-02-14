import React from "react";

const Service = () => {
  return (
    <>
      <div className="ml-34">
        <div className="m-5 p-3">
          <p className="text-center p-0 m-0 lg:text-4xl  ms:text-2xl font-semibold">
            Services We Provided
          </p>
          <p className="text-center p-0 m-0 lg:text-base ms:text-sm lg:mt-5 ms:mt-2 text-gray">
            {" "}
            Empowering businesses with innovative web, app, and AR solutions,
            driving success through creativity, collaboration, and cutting-edge
            technology.
          </p>
        </div>

        {/* Boxes */}
        <div
          className="flex flex-wrap justify-evenly md:gap-y-15 mt-10  items-center text-black
        md:justify-evenly md:flex-row   
        lg:justify-evenly 
        sm:flex-col gap-y-6
        "
        >
          <div
            className="flex flex-col  md:h-[12rem] w-[35%] shadow-lg rounded-xl sm:p-10 m-6
          md:w-[45%] md:m-0 md:gap-2
          lg:w-[45%] lg:h-[15rem] lg:gap-4
          xl:w-[35%] xl:h-[15rem] 
          sm:w-[80%] sm:h-[15rem]
          ms:w-[80%] ms:m-0 ms:gap-2 ms:h-[12rem] ms:px-4 ms:py-5
          "
          >
            <i class="fa-solid fa-gears text-4xl  text-purple"></i>
            <p className="lg:text-2xl mm:text-lg ms:text-base font-semibold ms:mb-0">
              Mobile App Development
            </p>
            <p className=" text-black ms:text-sm lg:text-base  ms:text-sm ms:mb-0  ">
              Innovative mobile applications designed to enhance user experience
              and engagement.
            </p>
          </div>
          <div
            className="flex flex-col  gap-4 md:h-[12rem] w-[35%] shadow-lg rounded-xl p-10 m-6
            md:w-[45%] md:m-0 md:gap-2
          lg:w-[45%] lg:h-[15rem] lg:gap-4
          xl:w-[35%] xl:h-[15rem]
          sm:w-[80%] sm:h-[15rem]
          ms:w-[80%] ms:m-0 ms:gap-2 ms:h-[12rem] ms:px-4 ms:py-5
          "
          >
            <i class="fa-solid fa-code text-2xl text-purple"></i>
            <p className="lg:text-2xl ms:text-lg font-semibold ms:mb-0">
              Website Development
            </p>
            <p className=" text-black ms:text-sm lg:text-base ms:text-sm ms:mb-0">
              Engaging websites tailored for maximum impact and user
              interaction.
            </p>
          </div>
          <div
            className="flex flex-col gap-4 md:h-[12rem] w-[35%] shadow-lg rounded-xl p-10 m-6
            md:w-[45%] md:m-0 md:gap-2
          lg:w-[45%] lg:h-[15rem] lg:gap-4
          xl:w-[35%] xl:h-[15rem]
          sm:w-[80%] sm:h-[15rem]
          ms:w-[80%] ms:m-0 ms:gap-2 ms:h-[12rem] ms:px-4 ms:py-5
          "
          >
            <i class="fa-solid fa-palette text-2xl text-purple"></i>
            <p className="lg:text-2xl ms:text-lg font-semibold ms:mb-0">
              Graphic Design
            </p>
            <p className=" text-black ms:text-sm lg:text-base ms:text-sm ms:mb-0">
              Creative designs that set your brand apart and leave a lasting
              impression.
            </p>
          </div>
          <div
            className="flex flex-col  gap-4 md:h-[12rem] w-[35%] shadow-lg rounded-xl p-10 m-6
          md:w-[45%] md:m-0 md:gap-2
          lg:w-[45%] lg:h-[15rem] lg:gap-4
          xl:w-[35%] xl:h-[15rem]
          sm:w-[80%] sm:h-[15rem]
          ms:w-[80%] ms:m-0 ms:gap-2 ms:h-[12rem] ms:px-4 ms:py-5 
          "
          >
            <i class="fa-solid fa-lock text-2xl  text-purple"></i>
            <p className="lg:text-2xl ms:text-xl font-semibold ms:mb-0">
              Digital Marketing
            </p>
            <p className=" text-black ms:text-sm lg:text-base ms:text-sm ms:mb-0">
              Targeted strategies to boost online visibility and drive business
              growth.
            </p>
          </div>
        </div>

        {/* small content  */}
        <div className="flex flex-wrap  sm:flex-row ms:flex-col-reverse xl:px-24 ms:px-5 ms:py-5 bg-lightgray mt-20">
          <div className="inline-block w-2/4">
            <h3 className="sm:text-3xl mb-2 lg:w-[25rem]  md:w-[20rem] ms:w-[25rem] ms:text-xl sm:mt-0 ms:mt-5 font-bold">
              {" "}
              Bringing Your Online Dreams to Life, Together!
            </h3>
            <p className="mb-4 lg:w-[28rem] lg:text-xl ms:text-sm ms:w-[20rem]  text-gray">
              {" "}
              Go hand in hand with Swift Site Design and transform your online
              visions beautifully into reality. We weave your unique ideas into
              a digital presence that is not only eye-catching but also
              amazingly user-friendly. Whether you lean towards WordPress,
              Shopify, Wix or a one-of-a-kind custom website.
            </p>
          </div>
          <div className="sm:w-2/4 ms:w-[98%] ">
            <img
              className="rounded-xl"
              src={require(`./Images/standup.jpeg`)}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
