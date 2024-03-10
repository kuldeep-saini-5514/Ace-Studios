import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import data from "./Carousel/data.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import ThankYou from "./ThankYou";

const Main = () => {
  const [color, setColor] = useState("#ffe710");
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [check, setCheck] = useState([]);
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const refreshPage = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
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

        window.scrollTo({ top: 0, behavior: "smooth" });
        // Prevent scrolling by the user
        document.body.style.overflow = "hidden";
        // Re-enable scrolling after a delay (e.g., 5 seconds)
        setTimeout(() => {
          document.body.style.overflow = "auto";
        }, 50000);
      });
  };
  const [currentIndex, setCurrentIndex] = useState();

  function handleChange(index) {
    setCurrentIndex(index);
  }

  const renderSlides = data.map((comment, index) => (
    <div key={index}>
      {/* Paragraph */}
      <p className="text-gray lg:text-base ms:text-sm lg:pr-8 md:pr-0">
        {comment.Comment}
      </p>
      {/* User */}
      <div className="flex justify-end pr-8">
        <div className="flex flex-col sm:ml-5 ms:ml-10 justify-center">
          <p className="p-0 font-semibold m-0 lg:text-base md:text-sm ms:text-xl">
            {comment.Person}
          </p>
        </div>
      </div>
    </div>
  ));

  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <>
      <div
        data-aos="fade-down"
        data-aos-delay="500"
        className="md:h-[80vh] lg:h-[62vh]  xl:h-[66vh] 2xl:h-[62vh]  w-[88vw] absolute top-36 left-20 -z-50 md:block ms:hidden"
        style={{
          backgroundImage: `url(${require("./Images/bg_logo.png")})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="flex   md:mx-[4rem] sm:mx-[2rem] md:mt-20 sm:mt-10 my-[2rem]">
        {/* left container */}
        <div
          className="w-[45rem] flex flex-col gap-y-4 ms:px-5 sm:p-0"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="flex items-center rounded-xl 2xl:w-[22rem] md:w-[19rem] sm:w-[17rem]  md:px-2 sm:px-3 sm:py-2 mm:w-[90%] ml:w-[80%] ms:w-[100%] ms:py-4 ms:px-3   bg-lightgray">
            <i
              className="fa-solid fa-circle fa-3xl 2xl:text-4xl  md:text-3xl sm:text-3xl ms:text-xl"
              style={{ color: `${color}` }}
            ></i>
            <p className="md:ml-4 text-black 2xl:text-xl md:text-base sm:text-sm sm:m-0 sm:ml-4 sm:pt-0 ms:mb-0 ms:ml-2 ms:text-base">
              #1 Digital company in the town!
            </p>
          </div>
          <h1 className="text-black 2xl:text-5xl 2xl:w-[22rem] md:text-4xl font-bold sm:text-3xl md:w-[18rem] sm:w-[12rem] mm:text-4xl ms:text-3xl ">
            Tech Solutions Tailored for Growth
          </h1>
          <p className="text-gray w-[95%] 2xl:text-xl lg:text-base md:text-sm ms:text-sm sm:m-0 ms:mb-0">
            Simplify your digital journey, maximize your return on innovation.
            Let's grow your business together.
          </p>
          {/* buttons container */}
          <div className="flex items-center mt-4 gap-x-10  ">
            <button
              id="button"
              className="text-base bg-purple rounded-3xl px-4 py-2  ms:text-base  text-white "
              onClick={() => navigate("contact")}
            >
              Connect with us
            </button>
          </div>
        </div>
        {/* right container */}
        <div className="md:w-[400px] sm:w-[550px] border-black] sm:block ms:hidden">
          <img
            src={require(`./Images/logo_1.png`)}
            alt=""
            data-aos="fade-up"
            data-aos-delay="800"
          />
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="500"
        className="bg-blue w-full h-9 mt-20"
      ></div>

      {/* Services */}
      <div
        className="text-center flex flex-col items-center mt-10 mx-11 md:gap-4
      md:mx-8 
      lg:mx-11

      ms:mx-2
      "
      >
        <h1
          data-aos="fade-up"
          data-aos-delay="400"
          className="2xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl ms:text-3xl sm:font-medium ms:font-bold"
        >
          Services That Lead The Way To Better Business
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="500"
          className="md:w-[80%] sm:w-[90%] 2xl:text-xl lg:text-base md:text-sm ms:text-sm md:mt-0 text-gray ms:mt-5"
        >
          Welcome to Finick, where we pave the path to digital success with our
          comprehensive suite of innovative IT services. As your strategic
          partner in the digital realm, we specialize in:
        </p>
        {/* Services Provided */}
        <div
          className="flex flex-wrap justify-evenly md:gap-y-20  items-center text-black
        md:justify-between md:flex-row  
        lg:justify-evenly 
        sm:flex-col gap-y-6
        "
        >
          <div
            data-aos="fade-right"
            data-aos-delay="500"
            id="services-box"
            className="flex flex-col justify-center items-center gap-4 md:h-[12rem] w-[35%] shadow-lg rounded-xl p-5 m-6
            2xl:gap-4 2xl:w-[46%] 2xl:h-[20rem]
          md:w-[48%] md:m-0 md:gap-2
          lg:w-[45%] lg:h-[15rem] 
          xl:w-[35%] xl:h-[15rem]
          sm:w-[80%] ml:h-[15rem]
          ms:w-[95%] ms:m-0 gap-0 ms:h-[13rem]
          "
          >
            <i class="fa-solid fa-mobile text-4xl  text-purple"></i>
            <p className="2xl:text-3xl lg:text-2xl ms:text-xl  font-semibold ms:mb-0">
              Mobile App Development
            </p>
            <p className=" text-black ms:text-sm 2xl:text-xl lg:text-base ms:text-sm ms:mb-0 ">
              Unleash the Power of Mobile with Custom App Development
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="500"
            id="services-box"
            className="flex flex-col justify-center items-center gap-4 md:h-[12rem] w-[35%] shadow-lg rounded-xl p-5 m-6
            md:w-[48%] md:m-0 md:gap-2
            2xl:gap-4 2xl:w-[46%] 2xl:h-[20rem]
          lg:w-[45%] lg:h-[15rem] 
          xl:w-[35%] xl:h-[15rem]
          sm:w-[80%] ml:h-[15rem] 
          ms:w-[95%] ms:m-0 ms:h-[13rem]
          "
          >
            <i class="fa-solid fa-code text-3xl text-purple"></i>
            <p className="2xl:text-3xl lg:text-2xl ms:text-3xl font-semibold ms:mb-0">
              Website Development
            </p>
            <p className=" text-black ms:text-sm 2xl:text-xl lg:text-base ms:text-sm ms:mb-0">
              Craft Powerful Digital Experiences with Cutting-Edge Web
              Development
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            id="services-box"
            className="flex flex-col justify-center items-center gap-4 md:h-[12rem] w-[35%] shadow-lg rounded-xl p-5 m-6
            md:w-[48%] md:m-0 md:gap-2
            2xl:gap-4 2xl:w-[46%] 2xl:h-[20rem]
          lg:w-[45%] lg:h-[15rem] 
          xl:w-[35%] xl:h-[15rem]
          sm:w-[80%] ml:h-[15rem]
          ms:w-[95%] ms:m-0 ms:h-[13rem]
          "
          >
            <i class="fa-solid fa-palette text-3xl text-purple"></i>
            <p className="2xl:text-3xl lg:text-2xl ms:text-3xl font-semibold ms:mb-0">
              Design
            </p>
            <p className=" text-black ms:text-sm 2xl:text-xl lg:text-base ms:text-sm ms:mb-0">
              Elevate Your Brand with Strategic Web & App Design Solutions
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            id="services-box"
            className="flex flex-col justify-center items-center gap-4 md:h-[12rem] w-[35%] shadow-lg rounded-xl p-5 m-6
          md:w-[48%] md:m-0 md:gap-2
          2xl:gap-4 2xl:w-[46%] 2xl:h-[20rem]
          lg:w-[45%] lg:h-[15rem] 
          xl:w-[35%] xl:h-[15rem]
          sm:w-[80%] ml:h-[15rem]
          ms:w-[95%] ms:m-0 ms:h-[13rem]
          "
          >
            <i class="fa-solid fa-vr-cardboard text-3xl text-purple"></i>
            <p className="2xl:text-3xl lg:text-2xl ms:text-3xl font-semibold ms:mb-0">
              AR Solution
            </p>
            <p className=" text-black ms:text-sm 2xl:text-xl lg:text-base ms:text-sm ms:mb-0">
              Reimagine Your Business with Immersive Augmented Reality Solutions
            </p>
          </div>
        </div>
      </div>
      {/* Services End */}

      {/* Work Start */}
      <div className="flex justify-center items-center text-center mt-14 ">
        <div className="ms:p-2">
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="font-semibold
          2xl:text-5xl
          lg:text-4xl
          md:text-3xl
          ms:text-3xl sm:mb-2

          "
          >
            Companies We Work With
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="500"
            className="text-gray  mt-4
          md:text-sm lg:text-base 
          ms:text-sm
          2xl:text-xl
          "
          >
            We partner with awesome companies like yours, building cool stuff
            and making a real impact together.
          </p>
        </div>
      </div>
      {/* Logo Container */}
      <div
        className="flex flex-wrap md:gap-8 md:m-12 sm:mt-16 ms:mt-5 justify-center items-center
      md:my-2
      lg:my-12
      sm:my-0 sm:gap-x-3 sm:m-5
      ms:gap-x-10 ms:gap-y-5

      "
      >
        <img
          data-aos="zoom-in"
          data-aos-delay="900"
          id="work-img"
          className="2xl:h-20 lg:h-16 md:h-10 ms:h-14 "
          src={require(`./Images/ig-1.png`)}
          alt=""
        />
        <img
          data-aos="zoom-in"
          data-aos-delay="900"
          id="work-img"
          className="2xl:h-20 lg:h-16 md:h-10 ms:h-14 "
          src={require(`./Images/2.png`)}
          alt=""
        />
        <img
          data-aos="zoom-in"
          data-aos-delay="900"
          id="work-img"
          className="2xl:h-20 lg:h-16 md:h-10 ms:h-14 "
          src={require(`./Images/3.png`)}
          alt=""
        />
        <img
          data-aos="zoom-in"
          data-aos-delay="900"
          id="work-img"
          className="2xl:h-20 lg:h-16 md:h-10 ms:h-14 "
          src={require(`./Images/4.png`)}
          alt=""
        />
        <img
          data-aos="zoom-in"
          data-aos-delay="900"
          id="work-img"
          className="2xl:h-20 lg:h-16 md:h-10 ms:h-14 "
          src={require(`./Images/5.png`)}
          alt=""
        />
        <img
          data-aos="zoom-in"
          data-aos-delay="900"
          id="work-img"
          className="2xl:h-20 lg:h-16 md:h-10 ms:h-14 "
          src={require(`./Images/6.png`)}
          alt=""
        />
        <img
          data-aos="zoom-in"
          data-aos-delay="900"
          id="work-img"
          className="2xl:h-20 lg:h-16 md:h-10 ms:h-14 "
          src={require(`./Images/7.png`)}
          alt=""
        />
        <img
          data-aos="zoom-in"
          data-aos-delay="900"
          id="work-img"
          className="2xl:h-20 lg:h-16 md:h-10 ms:h-14 "
          src={require(`./Images/8.png`)}
          alt=""
        />
        <img
          data-aos="zoom-in"
          data-aos-delay="900"
          id="work-img"
          className="2xl:h-20 lg:h-16 md:h-10 ms:h-14 "
          src={require(`./Images/9.png`)}
          alt=""
        />
      </div>
      {/* Process Container */}
      <div>
        {/* Left container */}
        <div
          className="flex md:flex-row ms:flex-col m-2 lg:p-5
        md:p-2 ms:mt-5
        "
        >
          <div>
            <img
              data-aos="zoom-out"
              data-aos-delay="500"
              className="rounded-xl  sm: sm:ml-0 sm:mt-10  sm:ml-0 ms:ml-0"
              src={require(`./Images/laptop-1.jpeg`)}
              alt=""
            />
          </div>
          {/* right Container */}
          <div
            className=" 
          lg:mx-12 text-black
          md:mx-5 mt-0
          sm:mx-5 sm:mt-10
          ms:mx-2
          
          "
          >
            <h1
              data-aos="fade-left"
              data-aos-delay="400"
              className="2xl:text-5xl lg:text-4xl md:text-3xl ms:text-3xl ms:mt-5 text-black font-semibold 
            "
            >
              Our Process{" "}
            </h1>
            <p
              data-aos="fade-left"
              data-aos-delay="500"
              className="text-gray 2xl:text-xl lg:text-base lg:mt-2 md:text-sm ms:text-sm md:m-0 ms:mt-2 "
            >
              {" "}
              Your vision, our expertise. From websites to AR, we craft tailored
              solutions through a collaborative process, unlocking success for
              every project.
            </p>
            <div className="flex flex-col lg:gap-5 lg:mt-10 md:mt-5 2xl:gap-10 md:gap-2">
              <div className="text-black">
                <div className="flex gap-4">
                  <div
                    data-aos="fade-up"
                    data-aos-delay="500"
                    className="flex justify-center items-center bg-skin 2xl:h-14 2xl:w-14 sm:h-10 sm:w-10 ms:h-14 ms:w-14 rounded-xl"
                  >
                    <img
                      src={require(`./Images/discovery.jpeg`)}
                      alt=""
                      id="icon"
                      className="h-8 rounded-lg"
                    />
                  </div>
                  <p
                    data-aos="fade-left"
                    data-aos-delay="500"
                    className="text-black 2xl:text-2xl lg:text-  xl md:text-lg sm:text-xl ms:text-xl font-semibold md:m-0 ms:mt-4 ms:mb-0 "
                  >
                    Discovery
                  </p>
                </div>
                <p
                  data-aos="fade-left"
                  data-aos-delay="500"
                  className="ms:pl-14 ms:pt-2 text-gray 2xl:text-xl lg:text-base md:text-sm ms:text-sm md:m-0 ms:pl-0 ms:pt-0"
                >
                  {" "}
                  Dive deep into your vision: We actively listen and understand
                  your unique goals, challenges, and audience. Strategic
                  planning ensures measurable success with open communication
                  throughout.{" "}
                </p>
              </div>
              <div className="text-black">
                <div className="flex gap-4">
                  <div
                    data-aos="fade-up"
                    data-aos-delay="500"
                    className="flex justify-center items-center bg-lightblue 2xl:h-14 2xl:w-14 sm:h-10 sm:w-10 ms:h-14 ms:w-14 rounded-xl"
                  >
                    <img
                      src={require(`./Images/plan-icon.jpeg`)}
                      alt=""
                      id="icon"
                      className="h-8 rounded-lg"
                    />
                  </div>
                  <p
                    data-aos="fade-left"
                    data-aos-delay="500"
                    className="text-black 2xl:text-3xl lg:text-xl md:text-lg sm:text-xl ms:text-xl font-semibold md:m-0 ms:mt-4 ms:mb-0 "
                  >
                    Plan
                  </p>
                </div>
                <p
                  data-aos="fade-left"
                  data-aos-delay="500"
                  className="ms:pl-14 ms:pt-2 text-gray 2xl:text-xl lg:text-base md:text-sm ms:text-sm md:m-0 ms:pl-0 ms:pt-0"
                >
                  {" "}
                  We craft a clear roadmap together, leveraging expertise to
                  guide your project. Flexibility is key; we adapt to your
                  preferences, be it agile sprints or structured approaches.{" "}
                </p>
              </div>
              <div className="text-black">
                <div className="flex gap-4">
                  <div
                    data-aos="fade-up"
                    data-aos-delay="500"
                    className="flex justify-center items-center bg-lightgreen 2xl:h-14 2xl:w-14 sm:h-10 sm:w-10 ms:h-14 ms:w-14 rounded-xl"
                  >
                    <img
                      src={require(`./Images/Execute-icon.jpeg`)}
                      alt=""
                      id="icon"
                      className="h-8 rounded-lg"
                    />
                  </div>
                  <p
                    data-aos="fade-left"
                    data-aos-delay="500"
                    className="text-black 2xl:text-3xl lg:text-xl md:text-lg sm:text-xl ms:text-xl font-semibold md:m-0 ms:mt-4 ms:mb-0"
                  >
                    Execute
                  </p>
                </div>
                <p
                  data-aos="fade-left"
                  data-aos-delay="500"
                  className="ms:pl-14 ms:pt-2 text-gray 2xl:text-xl lg:text-base md:text-sm ms:text-sm md:m-0 ms:pl-0 ms:pt-0"
                >
                  {" "}
                  Seamless teamwork ensures efficient delivery with rigorous
                  quality control. Regular feedback keeps you informed and
                  involved, shaping the project's outcome every step of the way.{" "}
                </p>
              </div>
              <div className="text-black">
                <div className="flex gap-4">
                  <div
                    data-aos="fade-up"
                    data-aos-delay="500"
                    className="flex justify-center items-center bg-lightyellow 2xl:h-14 2xl:w-14 sm:h-10 sm:w-10 ms:h-14 ms:w-14 rounded-xl"
                  >
                    <img
                      src={require(`./Images/deliver.jpeg`)}
                      alt=""
                      id="icon"
                      className="h-6 rounded-lg"
                    />
                  </div>
                  <p
                    data-aos="fade-left"
                    data-aos-delay="500"
                    className="text-black 2xl:text-3xl lg:text-xl md:text-lg sm:text-xl ms:text-xl font-semibold md:m-0 ms:mt-4 ms:mb-0"
                  >
                    Deliver
                  </p>
                </div>
                <p
                  data-aos="fade-left"
                  data-aos-delay="500"
                  className="ms:pl-14 ms:pt-2 text-gray 2xl:text-xl lg:text-base ms:text-sm md:m-0 ms:pl-0 ms:pt-0"
                >
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
      <div className="flex sm:flex-row ms:flex-col bg-LightGray sm:p-10 sm:m-5 mt-12 mb-12 ms:p-5 ms:gap-10 ms:mb-5">
        {/* left box */}
        <div
          data-aos="fade-down"
          data-aos-delay="500"
          className="sm:w-[90rem] sm:h-[10rem] 2xl:text-3xl lg:text-3xl ms:text-3xl font-semibold"
        >
          We’re a lean creative agency that uses design and code to solve
          problems.
        </div>
        {/* right box */}
        <div>
          <p
            data-aos="fade-down"
            data-aos-delay="500"
            className="sm:pl-10 sm:ml-4 sm:h-[10rem] 2xl:text-xl lg:text-lg ms:text-sm sm:border-l-[3px] sm:border-Gray  text-gray "
          >
            We don't just build solutions, we tailor them to your unique needs.
            From data-driven insights to agile collaboration, we work closely
            with you to deliver cutting-edge solutions that drive real results.
            Backed by a proven track record of success, we're your trusted
            partner in achieving your digital goals.
          </p>
        </div>
      </div>

      {/* another box */}
      <div className="flex sm:flex-row ms:flex-col justify-around m-2">
        {/* left- image box */}
        <div>
          <img
            data-aos="zoom-out"
            data-aos-delay="500"
            className="
            2xl:h-[35rem] 2xl:w-[50rem]
            lg:h-[30rem] lg:w-[40rem] rounded-xl  m-2
            md:h-[25rem] md:w-[25rem]
            ms:h-[22rem] ms:w-[95%]
            "
            src={require(`./Images/Group.jpeg`)}
            alt=""
          />
        </div>
        {/* right box */}
        <div
          className="lg:m-0 flex flex-col  lg:pl-8  justify-center gap-5 
        md:pl-5 md:m-0 
        ms:pl-3 ms:pt-5
        "
        >
          <p
            data-aos="fade-up"
            data-aos-delay="500"
            className="2xl:text-5xl 2xl:w-[30rem] lg:text-4xl ms:text-3xl m-0 w-[20rem] font-semibold"
          >
            Designed and built by an astonishing creative team.
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="500"
            className="text-gray m-0 2xl:text-xl lg:text-base md:text-base lg:w-[28rem] md:w-[20rem] ms:text-sm"
          >
            Empowering businesses with innovative solutions and tangible
            results, our expert team is dedicated to helping you reach your
            objectives with confidence.
          </p>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="flex sm:flex-row ms:flex-col  sm:mt-10 ms:p-3 justify-center lg:items-center">
        {/* left */}
        <div className="lg:h-[30rem] w-[160rem] m-5 md:h-[24rem] md:flex md:flex-wrap lg:ml-5 md:ml-0 justify-evenly">
          <div
            data-aos="fade-right"
            data-aos-delay="500"
            id="client-img"
            className="rounded-xl
            ms:hidden
            sm:block
            md:static md:w-[6rem] md:h-[6rem]
            lg:absolute lg:w-[7rem] lg:h-[7rem] lg:left-[10rem] 
            xl:h-[8rem] xl:w-[8rem] xl:left-[14rem]
            2xl:h-[9rem] 2xl:w-[9rem] 2xl:left-[13rem]
            "
            style={{
              backgroundImage: `url(${require("./Images/TS-1.png")})`,
              backgroundSize: "cover",
            }}
          ></div>

          <div
            data-aos="fade-left"
            data-aos-delay="500"
            id="client-img"
            className="rounded-xl
            ms:hidden
            sm:block 
            md:static md:w-[6rem] md:h-[6rem]
            lg:absolute lg:w-[6rem] lg:h-[6rem] lg:left-[20rem] lg:top-[214rem] 
            xl:h-[7rem] xl:w-[7rem] xl:left-[25rem] xl:top-[214rem]
            2xl:h-[8rem] 2xl:w-[8rem] 2xl:left-[25rem] 2xl:top-[244rem]
              "
            style={{
              backgroundImage: `url(${require("./Images/TS-2.png")})`,
              backgroundSize: "cover",
            }}
          ></div>

          <div
            data-aos="fade-up-right"
            data-aos-delay="500"
            id="client-img"
            className="rounded-xl
            ms:hidden
            sm:block
            md:static md:w-[6rem] md:h-[6rem]
            lg:absolute lg:w-[7rem] lg:h-[7rem] lg:top-[218rem] lg:left-5 
            xl:h-[8rem] xl:w-[8rem] xl:top-[218rem] xl:left-10
            2xl:h-[9rem] 2xl:w-[9rem] 2xl:top-[248rem] 2xl:left-7
            "
            style={{
              backgroundImage: `url(${require("./Images/TS-3.png")})`,
              backgroundSize: "cover",
            }}
          ></div>

          <div
            data-aos="zoom-out"
            data-aos-delay="500"
            id="client-img"
            className="rounded-xl 
            ms:hidden
            sm:block 
            md:static md:top-[201rem] md:w-[6rem] md:h-[6rem]
            lg:absolute lg:w-[7rem] lg:h-[7rem]   lg:left-[9rem] lg:top-[224rem]
            xl:h-[8rem] xl:w-[8rem] xl:left-[13rem] xl:top-[224rem]
            2xl:h-[9rem] 2xl:w-[9rem] 2xl:left-[11rem] 2xl:top-[258rem]
            "
            style={{
              backgroundImage: `url(${require("./Images/TS-4.png")})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div
            data-aos="zoom-out"
            data-aos-delay="500"
            id="client-img"
            className="rounded-xl
            ms:hidden
            sm:block 
            md:static top-[201rem] md:w-[6rem] md:h-[6rem]
            lg:absolute lg:w-[7rem] lg:h-[7rem] lg:left-[18rem] lg:top-[223rem] 
            xl:h-[8rem] xl:w-[8rem] xl:left-[24rem] xl:top-[223rem]
            2xl:h-[9rem] 2xl:w-[9rem] 2xl:left-[23rem] 2xl:top-[255rem]
             "
            style={{
              backgroundImage: `url(${require("./Images/TS-5.png")})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div
            data-aos="fade-up-left"
            data-aos-delay="500"
            id="client-img"
            className="rounded-xl
            ms:hidden
            sm:block 
            md:static top-[201rem] md:w-[6rem] md:h-[6rem]
            lg:absolute lg:w-[6rem] lg:h-[6rem]  lg:left-[27rem] lg:top-[220rem]
            xl:h-[6rem] xl:w-[6rem]  xl:left-[34rem] xl:top-[218rem]
            2xl:h-[7rem] xl:w-[7rem]  2xl:left-[35rem] 2xl:top-[250rem]
            "
            style={{
              backgroundImage: `url(${require("./Images/TS-6.jpeg")})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div
            data-aos="fade-down-right"
            data-aos-delay="500"
            id="client-img"
            className="client-img rounded-xl
            ms:hidden
            sm:block 
            md:static top-[208rem] md:w-[6rem] md:h-[6rem]
            lg:absolute lg:w-[7rem] lg:h-[7rem] lg:left-5 lg:top-[230rem] 
            xl:h-[8rem] xl:w-[8rem] xl:left-10 xl:top-[228rem] 
            2xl:h-[9rem] 2xl:w-[9rem] 2xl:left-5 2xl:top-[262rem] 
            "
            style={{
              backgroundImage: `url(${require("./Images/TS-8.png")})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div
            data-aos="fade-down"
            data-aos-delay="500"
            id="client-img"
            className="rounded-xl
            ms:hidden
            sm:block 
            md:static top-[208rem] md:w-[6rem] md:h-[6rem]
            lg:absolute  lg:w-[7rem] lg:h-[7rem] lg:left-[14rem] lg:top-[232rem] 
            xl:h-[8rem] xl:w-[8rem] xl:left-[19rem] xl:top-[234rem]
            2xl:h-[9rem] 2xl:w-[9rem] 2xl:left-[19rem] 2xl:top-[268rem]
             "
            style={{
              backgroundImage: `url(${require("./Images/TS-3.png")})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div
            data-aos="fade-down-left"
            data-aos-delay="500"
            id="client-img"
            className="rounded-xl
            ms:hidden
            sm:block 
            md:static top-[208rem] md:w-[6rem] md:h-[6rem]
            lg:absolute lg:w-[7rem] lg:h-[7rem]  lg:left-[24rem] lg:top-[231rem]
            xl:h-[8rem] xl:w-[8rem]  xl:left-[33rem] xl:top-[231rem]
            2xl:h-[9rem] 2xl:w-[9rem]  2xl:left-[33rem] 2xl:top-[265rem]
            "
            style={{
              backgroundImage: `url(${require("./Images/TS-9.png")})`,
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        {/* right */}
        <div data-aos="fade-left" data-aos-delay="500">
          <p className="font-semibold 2xl:text-5xl lg:text-4xl 2xl:w-[35rem] 2xl:leading-tight leading-10 sm:w-[25rem]  ms:text-3xl md:mt-10">
            Meet Client Satisfaction After Working With Us
          </p>
          <Carousel
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            className="carousel-container"
          >
            {renderSlides}
          </Carousel>
        </div>
      </div>
      {/* //Contact  */}
      <div>
        <div className="flex-col 2xl:mt-14 sm:mt-10 ms:mt-10  text-center">
          <h3
            data-aos="zoom-out"
            data-aos-delay="500"
            className="2xl:text-5xl lg:text-4xl ms:text-3xl"
          >
            Contact us
          </h3>
          <p
            data-a
            os="fade-up"
            data-aos-delay="500"
            className="text-gray 2xl:text-xl lg:text-base md:mt-3 ms:text-sm sm:pt-0 ms:pt-2"
          >
            Let’s talk how we can help you !!
          </p>
        </div>

        <div className="flex sm:flex-row ms:flex-col-reverse lg::m-10  md:m-5  text-white bg-white shadow-3xl md:mt-10 rounded-3xl">
          {/* //left side */}
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="bg-purple text-white rounded-xl sm:px-8 py-6 xl:w-[30rem] lg:w-[24rem] sm:h-[40rem] lg:w-[40rem] md:w-[20rem] md:mt-2 ms:m-3 ms:px-4 ms:mt-10"
          >
            <div>
              <p
                data-aos="fade-up"
                data-aos-delay="500"
                className="2xl:text-3xl text-3xl font-semibold mb-2"
              >
                {" "}
                Contact Information
              </p>
              <p
                data-aos="fade-up"
                data-aos-delay="600"
                className="mb-10 2xl:text-3xl lg:text-xl ms:text-sm text-Gray"
              >
                {" "}
                If you like to work with us then drop us a message
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="500"
              className="bg-white  h-10 w-10 flex items-center p-3.5 2xl:text-xl  lg:text-base rounded-full mb-6 2xl:h-12 2xl:w-12 2xl:p-4"
            >
              <i
                data-aos="fade-up"
                data-aos-delay="600"
                id="icon"
                className="contact-icon fa-solid fa-mobile mr-10 text-purple"
              ></i>
              <span>9720623941</span>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="600"
              className="bg-white  h-10 w-10 flex items-center p-3 2xl:text-xl lg:text-base rounded-full mb-6  2xl:h-12 2xl:w-12 2xl:p-4"
            >
              <i
                data-aos="fade-up"
                data-aos-delay="700"
                id="icon"
                className="contact-icon fa-solid fa-envelope mr-9 text-purple"
              ></i>
              <span>abhinay@finick.xyz</span>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="700"
              className="bg-white h-10 w-10 flex items-center p-3 2xl:text-xl lg:text-base rounded-full mb-6 2xl:h-12 2xl:w-12 2xl:p-4"
            >
              <i
                data-aos="fade-up"
                data-aos-delay="800"
                id="icon"
                className="contact-icon fa-solid fa-globe mr-9 text-purple hover:scale-125"
              ></i>
              <span>www.finick.com</span>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="800"
              className="bg-white h-10 w-10 flex items-center p-3.5 2xl:text-xl lg:text-base rounded-full mb-6 2xl:h-12 2xl:w-12 2xl:p-4"
            >
              <i
                data-aos="fade-up"
                data-aos-delay="900"
                id="icon"
                className="contact-icon fa-solid fa-location-dot mr-10 text-purple"
              ></i>
              <span>India</span>
            </div>
          </div>
          {/* right side */}
          <div className=" text-black">
            <form
              data-aos="zoom-in"
              data-aos-delay="400"
              onSubmit={handleSubmit}
              className="flex flex-wrap lg:flex-row md:flex-col sm:ml-5 ms:ml-5 2xl:w-[55rem] xl:w-[45rem] lg:w-[35rem] lg:gap-10  md:w-[23rem]"
            >
              <div data-aos="fade-up" data-aos-delay="500">
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
              <div data-aos="fade-up" data-aos-delay="500">
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
              <div data-aos="fade-up" data-aos-delay="500">
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
              <div data-aos="fade-up" data-aos-delay="500">
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
                <p
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="lg:mt-0 ms:mt-8 md:mb-3 font-semibold 2xl:text-3xl  lg:text-xl ms:text-base"
                >
                  What Services do you need?
                </p>
                <div className="flex lg:flex-wrap  lg:gap-x-20 lg:gap-y-5 lg:flex-row ms:flex-col ms:gap-y-2 2xl:text-xl 2xl:mt-5">
                  <div data-aos="fade-up" data-aos-delay="500">
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
                  <div data-aos="fade-up" data-aos-delay="600">
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
                  <div data-aos="fade-up" data-aos-delay="700">
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
                  <div data-aos="fade-up" data-aos-delay="800">
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
                              check.filter(
                                (item) => item !== "Digital Marketing"
                              )
                            );
                          }
                        }}
                      />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div data-aos="fade-up" data-aos-delay="900">
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
                <p
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="lg:mt-10 2xl:text-3xl lg:text-xl ms:text-lg ms:mt-4 md:mb-2 font-semibold "
                >
                  Message
                </p>
                <input
                  data-aos="fade-up"
                  data-aos-delay="700"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  type="text"
                  className="msg-input sm:w-[90%] ms:w-[90%] focus:outline-none"
                  placeholder="Write your message..."
                />
              </div>
              <button
                data-aos="zoom-in-up"
                data-aos-delay="500"
                id="button"
                className="nav-btn text-base bg-purple rounded-3xl px-4 py-2 mt-5 text-white  ms:block "
              >
                Submit
              </button>
            </form>
            {response && <ThankYou />}
          </div>
        </div>
      </div>
      <button
        data-aos="zoom-in"
        data-aos-delay="500"
        className="button-up"
        onClick={refreshPage}
      >
        <svg className="svgIcon" viewBox="0 0 384 512">
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
        </svg>
      </button>
    </>
  );
};

export default Main;
