import React from "react";

const Service = () => {
  return (
    <>
      <div className="ml-34">
        <div className="m-5 p-3">
          <p className="text-center p-0 m-0 text-2xl font-semibold">
            Services We Provided
          </p>
          <p className="text-center p-0 m-0 text-gray">
            {" "}
            Enim egestas at massa senectus justo ut. Hac est.
          </p>
        </div>

        {/* Boxes */}
        <div className="flex flex-wrap justify-evenly align-middle m-4 gap-4">
          <div className=" h-1/3 w-[30rem] m-3 px-10 py-5 shadow-lg rounded-3xl hover:border-blue">
          <div className="rounded-full bg-lightgray mb-2  h-10 w-10 flex justify-center items-center"><i class="fa-solid fa-globe text-xl text-purple"></i></div>
            <h3 className="text-lg font-bold mb-3"> Mobile Development</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis impedit aliquam, corrupti alias earum ullam quae commodi laudantium minus dignissimos maiores ratione in magni possimus quia nostrum numquam eaque eligendi!
            </p>
            <div className="flex mt-4">
              <button className="text-base bg-purple rounded-3xl px-4 py-2 text-white">
                Connect with us
              </button>
            </div>
          </div>
          <div className=" h-1/3 w-[30rem] m-3 px-10 py-5 shadow-lg rounded-3xl hover:border-blue">
            <div className="rounded-full bg-lightgray mb-2 h-10 w-10 flex justify-center items-center"><i class="fa-solid fa-globe text-xl text-purple"></i></div>
            <h3 className="text-lg font-bold mb-3">Website Design</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, inventore nostrum odit recusandae dolor animi totam iste? Mollitia dolores non aliquam nostrum iure rerum laudantium dicta, qui, accusamus, quis porro!
            </p>
            <div className="flex mt-4">
              <button className="text-base bg-purple rounded-3xl px-4 py-2 text-white">
                Connect with us
              </button>
            </div>
          </div>
          <div className=" h-1/3 w-[30rem] m-3 px-10 py-5 shadow-lg rounded-3xl hover:border-blue">
          <div className="rounded-full bg-lightgray mb-2 h-10 w-10 flex justify-center items-center"><i class="fa-solid fa-globe text-xl text-purple"></i></div>
            <h3 className="text-lg font-bold mb-3">Graphic Designing</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam amet magni in eaque alias dicta, aspernatur quae suscipit? Obcaecati rem, eligendi ratione blanditiis veritatis adipisci sit nemo laborum vero maxime.
            </p>
            <div className="flex mt-4">
              <button className="text-base bg-purple rounded-3xl px-4 py-2 text-white">
                Connect with us
              </button>
            </div>
          </div>
          <div className=" h-1/3 w-[30rem] m-3 px-10 py-5 shadow-lg rounded-3xl hover:border-blue">
          <div className="rounded-full bg-lightgray mb-2 h-10 w-10 flex justify-center items-center"><i class="fa-solid fa-globe text-xl text-purple"></i></div>
            <h3 className="text-lg font-bold mb-3">Digital marketing</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore ab cupiditate rerum! Debitis aliquam molestias, modi exercitationem consequuntur distinctio quaerat sapiente quia atque, aut non itaque laborum numquam dolorem eligendi!
            </p>
            <div className="flex mt-4">
              <button className="text-base bg-purple rounded-3xl px-4 py-2 text-white">
                Connect with us
              </button>
            </div>
          </div>
        </div>

        {/* small content  */}
        <div className="flex flex-wrap  px-24 py-10 bg-lightgray mt-20">
          <div className="inline-block w-2/4">
            <h3 className="text-3xl mb-2 w-[25rem] font-bold">
              {" "}
              Bringing Your Online Dreams to Life, Together!
            </h3>
            <p className="mb-4 w-[28rem] text-gray">
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
          <img className="rounded-xl" src={require(`./Images/standup.jpeg`)} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
