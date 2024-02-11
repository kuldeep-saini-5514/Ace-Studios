import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="flex-col text-center">
        <h1>Contact us</h1>
        <p>Felis nunc, aliquet quam dictum senectus nunc.</p>
      </div>

      <div className="flex m-10 bg-white shadow-2xl rounded-3xl">
        {/* //left side */}
        <div className="bg-purple text-white rounded-xl px-8 py-6 w-[25rem] h-[30rem]">
          <div>
            <h1 className="text-xl font-semibold mb-2"> Contact Information</h1>
            <p className="mb-10">
              {" "}
              If you like to work with us then drop us a message
            </p>
          </div>
          <div className="bg-white h-10 w-10 flex px-3 py-1.5 mb-2 rounded-full mb-6">
            <i class="fa-light fa-mobile mr-10 text-purple"></i>
            <span>9560532957</span>
          </div>
          <div className="bg-white h-10 w-10 flex px-3 py-1.5 mb-2 rounded-full mb-6">
            <i class="fa-light fa-mobile mr-10  text-purple"></i>
            <span>9560532957</span>
          </div>
          <div className="bg-white h-10 w-10 flex px-3 py-1.5 mb-2 rounded-full mb-6">
            <i class="fa-light fa-mobile mr-10  text-purple"></i>
            <span>9560532957</span>
          </div>
          <div className="bg-white h-10 w-10 flex px-3 py-1.5 mb-2 rounded-full mb-6">
            <i class="fa-light fa-mobile mr-10  text-purple"></i>
            <span>9560532957</span>
          </div>
        </div>

        {/* //right side  */}
        <div className="">
          <form class="flex flex-wrap ml-10 w-[40rem]">
            <div>
              <h1>Full Name</h1>
              <input type="text" />
            </div>
            <div>
              <h1>Email</h1>
              <input type="email" />
            </div>
            <div>
              <h1>Phone</h1>
              <input type="email" />
            </div>
            <div>
              <h1>Email</h1>
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
  );
};

export default Contact;
