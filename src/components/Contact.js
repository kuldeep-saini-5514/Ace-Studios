import React from "react";

const Contact = () => {
  return (
    <div>
    <div className="flex-col sm:mt-2 ms:mt-10  text-center">
      <h3 className="lg:text-4xl ms:text-3xl">Contact us</h3>
      <p className="text-gray lg:text-base ms:text-sm">
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
        <form class="flex flex-wrap lg:flex-row md:flex-col sm:ml-10 ms:ml-5 lg:w-[25rem] md:w-[19rem]">
          <div>
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
              className="msg-input sm:w-[90%] ms:w-[100%] focus:outline-none"
              placeholder="Write your message..."
            />
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Contact;
