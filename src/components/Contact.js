import axios from "axios";
import React, { useState } from "react";
import ThankYou from "./ThankYou";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [check, setCheck] = useState([]);
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Phone: phone,
      Check: check,
      Message: message,
    };
    console.log(data);
    await axios
      .post(
        "https://sheet.best/api/sheets/3e1356a4-7043-4b4a-955a-56341508e156",
        data
      )
      .then((response) => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setCheck([]);
        setMessage("");
        setResponse(true);
      });
  };

  return (
    <div>
      <div className="flex-col 2xl:mt-14 sm:mt-10 ms:mt-10  text-center">
        <h3 className="2xl:text-5xl lg:text-4xl ms:text-3xl">Contact us</h3>
        <p className="text-gray 2xl:text-xl lg:text-base md:mt-3 ms:text-sm sm:pt-0 ms:pt-2">
          Let’s talk how we can help you !!
        </p>
      </div>

      <div className="flex sm:flex-row ms:flex-col-reverse lg::m-10 md:m-5  text-white bg-white shadow-3xl md:mt-0 rounded-3xl">
        {/* //left side */}
        <div className="bg-purple text-white rounded-xl sm:px-8 py-6 xl:w-[30rem] lg:w-[24rem] sm:h-[40rem] lg:w-[40rem] md:w-[20rem] md:mt-2 ms:m-3 ms:px-4 ms:mt-10">
          <div>
            <p className="2xl:text-3xl text-3xl font-semibold mb-2">
              {" "}
              Contact Information
            </p>
            <p className="mb-10 2xl:text-3xl lg:text-xl ms:text-sm text-Gray">
              {" "}
              If you like to work with us then drop us a message
            </p>
          </div>
          <div className="bg-white  h-10 w-10 flex p-3 2xl:text-xl lg:text-base rounded-full mb-6 2xl:h-12 2xl:w-12 2xl:p-4">
            <i class="fa-solid fa-mobile mr-10 text-purple"></i>
            <span>9720623941</span>
          </div>
          <div className="bg-white  h-10 w-10 flex p-3 2xl:text-xl lg:text-base rounded-full mb-6  2xl:h-12 2xl:w-12 2xl:p-4">
            <i class="fa-solid fa-envelope mr-10 text-purple"></i>
            <span>abhinay@finick.xyz</span>
          </div>
          <div className="bg-white h-10 w-10 flex p-3 2xl:text-xl lg:text-base rounded-full mb-6 mr-5 2xl:h-12 2xl:w-12 2xl:p-4">
            <i class="fa-solid fa-globe mr-10 text-purple"></i>
            <span>www.finick.xyz</span>
          </div>
          <div className="bg-white h-10 w-10 flex p-3 2xl:text-xl lg:text-base rounded-full mb-6 2xl:h-12 2xl:w-12 2xl:p-4">
            <i class="fa-solid fa-location-dot mr-10 text-purple"></i>
            <span>India</span>
          </div>
        </div>
        {/* right side */}
        <div className=" text-black">
          <form
            onSubmit={handleSubmit}
            className="flex flex-wrap lg:flex-row md:flex-col sm:ml-5 ms:ml-5 2xl:w-[55rem] xl:w-[45rem] lg:w-[35rem] lg:gap-10  md:w-[23rem]"
          >
            <div>
              <p className="text-black  2xl:text-xl lg:text-lg ms:text-base m-0 lg:mb-2 md:mb-0 sm:mt-8 md:mt-2">
                First Name
              </p>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                className="contact-input"
                type="text"
              />
            </div>
            <div>
              <p className="text-black 2xl:text-xl lg:text-lg ms:text-base m-0 lg:mb-2 ms:mt-8 lg:mt-2 md:mt-3 sm:mb-0">
                Last Name
              </p>
              <input
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                className="contact-input"
                type="text"
              />
            </div>
            <div>
              <p className="text-black 2xl:text-xl lg:text-lg ms:text-base m-0 lg:mb-2 ms:mt-8 md:mt-3 md:mb-0">
                Email
              </p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="contact-input"
                type="email"
              />
            </div>
            <div>
              <p className="text-black 2xl:text-xl lg:text-lg ms:text-base m-0 lg:mb-2 ms:mt-8 md:mt-3 md:mb-0">
                Phone
              </p>
              <input
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                className="contact-input"
                type="tel"
              />
            </div>
            <div className="w-[100%]">
              <p className="lg:mt-0 ms:mt-8 md:mb-3 font-semibold 2xl:text-3xl  lg:text-xl ms:text-base">
                What Services do you need?
              </p>
              <div className="flex lg:flex-wrap  lg:gap-x-20 lg:gap-y-5 lg:flex-row ms:flex-col ms:gap-y-2 2xl:text-xl 2xl:mt-5">
                <div>
                  <label className="container">
                    Web Design
                    <input
                      type="checkbox"
                      checked={check.includes("Web Design")}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setCheck([...check, "Web Design"]);
                        } else {
                          setCheck(
                            check.filter((item) => item !== "Web Design")
                          );
                        }
                      }}
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div>
                  <label className="container">
                    App Design
                    <input
                      type="checkbox"
                      checked={check.includes("App Design")}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setCheck([...check, "App Design"]);
                        } else {
                          setCheck(
                            check.filter((item) => item !== "App Design")
                          );
                        }
                      }}
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div>
                  <label className="container">
                    Graphic Design
                    <input
                      type="checkbox"
                      checked={check.includes("Graphic Design")}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setCheck([...check, "Graphic Design"]);
                        } else {
                          setCheck(
                            check.filter((item) => item !== "Graphic Design")
                          );
                        }
                      }}
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div>
                  <label className="container">
                    Digital Marketing
                    <input
                      type="checkbox"
                      checked={check.includes("Digital Marketing")}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setCheck([...check, "Digital Marketing"]);
                        } else {
                          setCheck(
                            check.filter((item) => item !== "Digital Marketing")
                          );
                        }
                      }}
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div>
                  <label className="container">
                    Other
                    <input
                      type="checkbox"
                      checked={check.includes("Other")}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setCheck([...check, "Other"]);
                        } else {
                          setCheck(check.filter((item) => item !== "Other"));
                        }
                      }}
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
              <p className="lg:mt-10 2xl:text-3xl lg:text-xl ms:text-lg ms:mt-4 md:mb-2 font-semibold ">
                Message
              </p>
              <input
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                type="text"
                className="msg-input sm:w-[90%] ms:w-[90%] focus:outline-none"
                placeholder="Write your message..."
              />
            </div>
            <button className="nav-btn   text-base bg-purple rounded-3xl px-4 py-2 mt-5 text-white md:w-[10rem] md:h-[3rem] ms:w-[12rem] ms:h-[3rem] ms:block ">
              Submit
            </button>
            {response && <ThankYou setResponse={setResponse} />}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
