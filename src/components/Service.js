import React from "react";

const Service = () => {
  return (
    <>
      <div className="ml-34">
        <div className="m-5 p-3">
          <h1 className="text-center text-4xl font-bold">
            Services We Provided
          </h1>
          <h3 className="text-center">
            {" "}
            Welcome to Finick, where we pave the path to digital success with our comprehensive suite of innovative IT services. As your strategic partner in the digital realm, we specialize in:
          </h3>
        </div>

        {/* Boxes */}
        <div className="flex flex-wrap justify-around align-middle m-4 gap-4">
          <div className=" h-1/3 w-2/6 m-3 p-4 shadow-lg rounded-3xl hover:border-blue">
          <div className="rounded-full bg-lightgray mb-2 h-10 w-10 flex justify-center items-center"><i class="fa-solid fa-globe text-xl text-purple"></i></div>
            <h3 className="text-lg font-bold mb-3"> Mobile Development</h3>
            <p>
              lorem10 lorem10 lorem10 lorem10 lorem10 lorem10 lorem10 lorem10
              lorem10
            </p>
            <div className="flex mt-4">
              <button className="text-base bg-purple rounded-3xl px-4 py-2 text-white">
                Connect with us
              </button>
            </div>
          </div>
          <div className=" h-1/3 w-2/6 m-3 p-4 shadow-lg rounded-3xl hover:border-blue">
            <div className="rounded-full bg-lightgray mb-2 h-10 w-10 flex justify-center items-center"><i class="fa-solid fa-globe text-xl text-purple"></i></div>
            <h3 className="text-lg font-bold mb-3">Website Design</h3>
            <p>
              lorem10 lorem10 lorem10 lorem10 lorem10 lorem10 lorem10 lorem10
              lorem10
            </p>
            <div className="flex mt-4">
              <button className="text-base bg-purple rounded-3xl px-4 py-2 text-white">
                Connect with us
              </button>
            </div>
          </div>
          <div className=" h-1/3 w-2/6 m-3 p-4 shadow-lg rounded-3xl hover:border-blue">
          <div className="rounded-full bg-lightgray mb-2 h-10 w-10 flex justify-center items-center"><i class="fa-solid fa-globe text-xl text-purple"></i></div>
            <h3 className="text-lg font-bold mb-3">Graphic Designing</h3>
            <p>
              lorem10 lorem10 lorem10 lorem10 lorem10 lorem10 lorem10 lorem10
              lorem10
            </p>
            <div className="flex mt-4">
              <button className="text-base bg-purple rounded-3xl px-4 py-2 text-white">
                Connect with us
              </button>
            </div>
          </div>
          <div className=" h-1/3 w-2/6 m-3 p-4 shadow-lg rounded-3xl hover:border-blue">
          <div className="rounded-full bg-lightgray mb-2 h-10 w-10 flex justify-center items-center"><i class="fa-solid fa-globe text-xl text-purple"></i></div>
            <h3 className="text-lg font-bold mb-3">Digital marketing</h3>
            <p>
              lorem10 lorem10 lorem10 lorem10 lorem10 lorem10 lorem10 lorem10
              lorem10
            </p>
            <div className="flex mt-4">
              <button className="text-base bg-purple rounded-3xl px-4 py-2 text-white">
                Connect with us
              </button>
            </div>
          </div>
        </div>

        {/* small content  */}
        <div className="flex flex-wrap mx-28 ">
          <div className="inline-block w-2/4">
            <h3 className="text-3xl mb-2 w-[25rem] font-bold">
              {" "}
              Bringing Your Online Dreams to Life, Together!
            </h3>
            <p className="mb-4 w-[28rem]">
              {" "}
              Go hand in hand with Swift Site Design and transform your online
              visions beautifully into reality. We weave your unique ideas into
              a digital presence that is not only eye-catching but also
              amazingly user-friendly. Whether you lean towards WordPress,
              Shopify, Wix or a one-of-a-kind custom website.
            </p>
            <button className="text-base bg-purple rounded-3xl px-4 py-2 text-white">
              Connect with us
            </button>{" "}
          </div>
          <div className="w-2/4">
            <img
              className="rounded-2xl"
              src="https://static.wixstatic.com/media/f76f4d_07507007982b4bf398ac641f029af18a~mv2.jpg/v1/fill/w_1264,h_652,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f76f4d_07507007982b4bf398ac641f029af18a~mv2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
