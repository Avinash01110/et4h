import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import lp_image1 from "../Photos/Home/landingPage/lp_image1.png";
import lp1 from "../Photos/Home/landingPage/lp1.jpg";
import lp2 from "../Photos/Home/landingPage/lp2.jpg";
import lp3 from "../Photos/Home/landingPage/lp3.jpg";
import lp4 from "../Photos/Home/landingPage/lp4.jpg";
import lp5 from "../Photos/Home/landingPage/lp5.jpg";
import lp6 from "../Photos/Home/landingPage/lp6.jpg";
import lp7 from "../Photos/Home/landingPage/lp7.jpg";
import lp8 from "../Photos/Home/landingPage/lp8.jpg";
import leadership from "../Photos/Home/leadership1.mp4";
import liverimage from "../Photos/Projects/liverimage.png";
import kidneyimage from "../Photos/Projects/kidneyimage.png";
import breastimage from "../Photos/Projects/breastimage.png";
import ECGimage from "../Photos/Projects/ECGimage.png";
import EEGimage from "../Photos/Projects/EEGimage.png";
import about_us2 from "../Photos/Home/about_us2.png";
import vision from "../Photos/Home/vision1.jpg";
import image from "../Photos/Home/image.png";
import v1 from "../Video/v1.mp4";
import v2 from "../Video/v2.mp4";
import v3 from "../Video/v3.mp4";
import v4 from "../Video/v4.mp4";
import v5 from "../Video/v5.mp4";
import { FaRegLightbulb } from "react-icons/fa";
import { GiShakingHands, GiArtificialIntelligence } from "react-icons/gi";
import { IoAccessibilityOutline } from "react-icons/io5";
import { SiFuturelearn } from "react-icons/si";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineHealthAndSafety } from "react-icons/md";


import Preloader from "./Preloader";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../style/Home.css";
import { Autoplay, Mousewheel, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {

  const latestPost = [
    {
      title: "The Future of Healthcare : AI Innovations",
      description:
        "Welcome to Emerging Tech4 Health, a Biotechnology Startup that leverages cutting-edge technology, particularly",
      link: "/",
      image: lp_image1,
    },
    {
      title: "The Future of Healthcare : AI Innovations",
      description:
        "Welcome to Emerging Tech4 Health, a Biotechnology Startup that leverages cutting-edge technology, particularly",
      link: "/",
      image: lp_image1,
    },
    {
      title: "The Future of Healthcare : AI Innovations",
      description:
        "Welcome to Emerging Tech4 Health, a Biotechnology Startup that leverages cutting-edge technology, particularly",
      link: "/",
      image: lp_image1,
    },
  ];

  const Projects = [
    {
      index: "01",
      title: "Liver Tumor Segmentation",
      description: "description",
      link: "/",
    },
    {
      index: "02",
      title: "Kidney Tumor Segmentation",
      description: "description",
      link: "/",
    },
    {
      index: "03",
      title: "Breast Tumor Segmentation",
      description: "description",
      link: "/",
    },
    {
      index: "04",
      title: "Electroencephalogram (EEG)",
      description: "description",
      link: "/",
    },
    {
      index: "05",
      title: "Electrocardiogram (ECG)",
      description: "description",
      link: "/",
    },
  ];

  const Projectsimage = [
    {
      image: liverimage,
    },
    {
      image: kidneyimage,
    },
    {
      image: breastimage,
    },
    {
      image: EEGimage,
    },
    {
      image: ECGimage,
    },
  ];

  const coreValues = [
    {
      title: "Innovation",
      description:
        "We believe in the power of innovation to solve complex healthcare challenges. Our commitment to pioneering research and cutting-edge technology is unwavering, as we strive to develop solutions that push the boundaries of what is possible.",
      icon: FaRegLightbulb,
    },
    {
      title: "Collaboration",
      description:
        "Healthcare and technology are collaborative fields by nature. We value the power of teamwork, both within our organization and with our partners, believing that together, we can achieve outcomes that are greater than the sum of our parts.",
      icon: GiShakingHands,
    },
    {
      title: "Accessibility",
      description:
        "We are committed to making healthcare more accessible through technology. By breaking down barriers to care, we aim to ensure that every individual, regardless of their location or background, can benefit from the advances in medical science.",
      icon: IoAccessibilityOutline,
    },
  ];

  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef && swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef && swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };  

  return (
    <>

      {/* Landing page */}
      <div className="h-[120vh] sm:h-[72vh] xl:h-[75vh] 2xl:h-[75vh] w-full flex items-end bg-white relative z-10 overflow-hidden">
        
        <div className="absolute sm:hidden xl:flex xl:h-[50rem] xl:w-[50rem] 2xl:h-[55rem] 2xl:w-[55rem] bg-lightblue z-0 rounded-xl rotate-45 -left-12 -bottom-16"></div>
        
        <div className="sm:hidden xl:flex xl:h-[26rem] xl:w-[26rem] 2xl:h-[30rem] 2xl:w-[30rem] rounded-xl absolute right-14 top-0 -rotate-45 bg-lightgrey opacity-60"></div>

        <div className="xl:hidden h-full w-full absolute overflow-hidden">
          <video
            src={"https://cdn.pixabay.com/video/2023/09/01/178597-860270761_tiny.mp4"}
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            id="myVideo"
          /> 
        </div>

        <div className="xl:hidden h-full w-full bg-lightblue bg-opacity-65 backdrop-blur-5xl absolute"></div>
        
        <div className="h-full sm:h-full xl:h-[39rem] 2xl:h-[35rem] w-full flex sm:items-center sm:justify-center z-10">
          <div className="left xl:w-1/2 2xl:w-2/3 h-full px-4 sm:px-4 md:px-10 lg:px-20 font-sans mt-0 lg:mt-8 xl:mt-0">
            <div className="flex w-full 2xl:w-full h-full flex-col justify-center items-center sm:items-center xl:items-start gap-y-10 sm:gap-y-10 xl:gap-y-6">
              <h1 className="text-4xl xs:text-5xl text-center sm:text-center lg:text-start uppercase font-bold text-blue">
                Revolution
                <span className="text-4xl xs:text-5xl text-center sm:text-center lg:text-start uppercase font-bold text-grey">
                  izing
                </span>{" "}
                Healthcare
              </h1>
              <h4 className="text-xl sm:text-xl xl:text-base capitalize text-center sm:text-center xl:text-justify text-grey xl:opacity-80 font-bold xl:font-semibold">
                Welcome to EmergingTech4Health, where AI meets medical
                innovation. Our mission: harness AI to tackle challenging
                medical problems, transforming diagnosis, treatment, and
                research. Bridging technology and healthcare, we innovate
                solutions to enhance care accessibility and efficiency. Join us
                in creating a healthier tomorrow.
              </h4>
              <button className="button bg-blue text-[#FFFFFF] py-2 px-5 rounded-lg text-sm font-medium active:bg-blue hover:bg-darkblue hover:shadow-md hover:shadow-lightgrey transition ease-in-out duration-300">
                Learn More
              </button>
            </div>
          </div>

          <div className="right xl:w-1/2 2xl:w-2/3 h-full hidden sm:hidden xl:flex justify-center items-center">
            <div className="gallery">
              <img src={lp1} alt="error" />
              <img src={lp2} alt="error" />
              <img src={lp4} alt="error" />
              <img src={lp3} alt="error" />
              <img src={lp6} alt="error" />
              <img src={lp5} alt="error" />
              <img src={lp8} alt="error" />
              <img src={lp7} alt="error" />
            </div>
          </div>
        </div>
      </div>

      {/* Our Members - Logos */}
      <div className="border-b-2 border-darkblue h-auto w-full bg-lightblue px-0 sm:px-2 md:px-18 lg:px-24 xl:px-28 py-28 flex flex-col items-center gap-y-12">
        <h2 className="text-4xl sm:text-5xl text-blue font-sans font-bold uppercase [text-shadow:3px_6px_10px_var(--tw-shadow-color)] shadow-grey">
          Our Members
        </h2>

        <div className="h-full w-full relative flex overflow-x-hidden justify-center items-center">
          <div
            className="absolute h-full w-40 xs:w-60 sm:w-80 md:w-96 top-0 left-0 z-10 gradient"
            style={{
              background:
                "linear-gradient(to left, rgba(255, 255, 255, 0), #E8EEFD",
            }}
          ></div>
          <div
            className="absolute h-full w-40 xs:w-60 sm:w-80 md:w-96 top-0 right-0 z-10 gradient"
            style={{
              background:
                "linear-gradient(to right, rgba(255, 255, 255, 0), #E8EEFD",
            }}
          ></div>

          <div className="py-12 animate-marquee whitespace-nowrap">
            <span className="text-4xl mx-20">Logo 1</span>
            <span className="text-4xl mx-20">Logo 2</span>
            <span className="text-4xl mx-20">Logo 3</span>
            <span className="text-4xl mx-20">Logo 4</span>
            <span className="text-4xl mx-20">Logo 5</span>
          </div>

          <div className="absolute py-12 animate-marquee2 whitespace-nowrap">
            <span className="text-4xl mx-20">Logo 1</span>
            <span className="text-4xl mx-20">Logo 2</span>
            <span className="text-4xl mx-20">Logo 3</span>
            <span className="text-4xl mx-20">Logo 4</span>
            <span className="text-4xl mx-20">Logo 5</span>
          </div>
        </div>
      </div>

      {/* Latest Post */}
      <div className="border-b-2 border-darkblue h-auto w-full bg-purewhite flex justify-center items-center py-20 px-4 sm:px-0 relative z-10 overflow-hidden">
        <div className="bg-shape1 bg-teal opacity-50 bg-blur"></div>
        <div className="bg-shape2 bg-primary opacity-50 bg-blur"></div>
        <div className="bg-shape3 bg-purple opacity-50 bg-blur"></div>

        <div className="crousel h-auto w-full sm:w-[35rem] md:w-11/12 lg:w-5/6 xl:w-4/5 2xl:w-3/4 bg-lightblue rounded-lg p-5 sm:p-10 flex flex-col gap-y-10 shadow-lg shadow-grey z-10">
          <h2 className="text-4xl text-grey font-sans font-bold uppercase [text-shadow:3px_6px_10px_var(--tw-shadow-color)] shadow-grey">
            Latest Posts
          </h2>

          <Swiper
            ref={swiperRef}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={30}
            loop={true}
            mousewheel={true}
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Mousewheel, Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            {latestPost.map((post, index) => (
              <SwiperSlide key={index}>
                <div className="h-auto lg:h-[20rem] w-full bg-white p-5 sm:p-10 flex flex-col-reverse lg:flex-row rounded-lg">
                  <div className="h-auto md:h-full w-auto lg:w-7/12 p-4 flex flex-col justify-between items-center lg:items-start gap-y-8">
                    <div className="flex flex-col gap-y-5 pr-2 lg:pr-16">
                      <h3 className="text-2xl text-justify sm:text-start text-blue font-bold font-sans">
                        {post.title}
                      </h3>
                      <p className="text-grey text-justify text-sm font-medium font-sans">
                        {post.description}
                      </p>
                    </div>
                    <div className="content-start">
                      <Link to={post.link}>
                        <button className="button bg-blue text-[#FFFFFF] py-2 px-3 rounded-lg text-sm font-medium font-sans active:bg-blue hover:bg-darkblue hover:shadow-md hover:shadow-lightgrey transition ease-in-out duration-300">
                          Read More
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="h-full w-auto lg:w-5/12">
                    <img
                      className="h-full w-full object-cover rounded-lg"
                      src={post.image}
                      alt="error"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-end gap-x-4 pr-10">
            <div
              onClick={goPrev}
              className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-lightgrey group hover:bg-purewhite cursor-pointer transition ease-in-out duration-300"
            >
              <IoIosArrowBack
                className="h-5 w-5 text-grey group-hover:text-darkblue transition ease-in-out duration-300"
                aria-hidden="true"
              />
            </div>
            <div
              onClick={goNext}
              className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-lightgrey group hover:bg-purewhite cursor-pointer transition ease-in-out duration-300"
            >
              <IoIosArrowForward
                className="h-5 w-5 text-grey group-hover:text-darkblue transition ease-in-out duration-300"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission */}
      <div className="h-auto w-full bg-lightblue flex items-center justify-center">
        <div className="h-auto lg:h-96 w-full flex flex-col-reverse lg:flex-row justify-center items-center px-4 sm:px-12">
          <div className="left h-full w-full lg:w-6/12 flex flex-col justify-center gap-y-5 px-0 lg:px-6">
            <h3 className="text-4xl text-darkblue font-bold font-sans">
              Our Mission
            </h3>
            <p className="text-grey font-semibold opacity-80 text-justify font-sans">
              At EmergingTech4Health, our mission is to harness the power of AI
              and emerging technologies to create a future where healthcare is
              more accessible, accurate, and personalized. By developing
              cutting-edge AI applications for tumor segmentation and advanced
              research in EEG and ECG analytics, we are not just imagining the
              future of healthcare – we are building it.
            </p>
          </div>
          <div className="right h-full w-full lg:w-6/12 px-0 lg:px-6 py-12 rounded-lg">
            <img
              className="h-full w-full object-cover rounded-lg border-2 border-grey"
              src={about_us2}
              alt="error"
            />
          </div>
        </div>
      </div>

      {/* Our Vision */}
      <div className="border-b-2 border-grey h-auto w-full lg:px-4 xl:px-10 2xl:px-16 flex flex-col items-center justify-center gap-y-10 py-16 bg-lightblue">
        <h2 className="text-4xl text-darkblue font-bold font-sans">
          Our Vision
        </h2>
        <p className="px-4 sm:px-12 md:px-12 lg:px-24 xl:px-32 font-sans font-bold text-sm text-grey text-justify opacity-80">
          Our vision is to lead the way in integrating AI with healthcare,
          creating solutions that not only solve today’s medical problems but
          also anticipate tomorrow's challenges. We believe in a world where
          every patient benefits from the advancements in medical technology,
          and every healthcare provider is empowered with the tools they need to
          deliver exceptional care.
        </p>
        <div className="lg:h-[45rem] xl:h-[40rem] w-full flex flex-col-reverse sm:flex-col-reverse lg:flex-row px-4 sm:px-12 gap-x-4 justify-center items-center">
          <div className="left h-full w-full lg:w-6/12 flex flex-col justify-start gap-y-5 px-0 sm:px-0 lg:px-6">

            <div className="h-auto w-full py-5 flex flex-col gap-y-2 border-b-2 border-grey hover:border-blue group transition ease-in-out duration-300 cursor-pointer">
              <div className="h-10 w-10 bg-white rounded-lg flex justify-center items-center border border-grey group-hover:border-blue transition ease-in-out duration-300"><GiArtificialIntelligence className="text-2xl group-hover:text-blue transition ease-in-out duration-300"/></div>
              <h3 className="text-lg font-sans font-bold text-grey group-hover:text-blue transition ease-in-out duration-300">Integrating AI with Healthcare</h3>
              <span className="text-sm text-grey font-sans font-bold opacity-80">Pioneering the integration of AI to revolutionize medical solutions.</span>
            </div>
            <div className="h-auto w-full py-5 flex flex-col gap-y-2 border-b-2 border-grey hover:border-blue group transition ease-in-out duration-300 cursor-pointer">
            <div className="h-10 w-10 bg-white rounded-lg flex justify-center items-center border border-grey group-hover:border-blue transition ease-in-out duration-300"><SiFuturelearn className="text-2xl group-hover:text-blue transition ease-in-out duration-300"/></div>
              <h3 className="text-lg font-sans font-bold text-grey group-hover:text-blue transition ease-in-out duration-300">Anticipating Future Challenges</h3>
              <span className="text-sm text-grey font-sans font-bold opacity-80">Innovating today to solve tomorrow's healthcare challenges.</span>
            </div>
            <div className="h-auto w-full py-5 flex flex-col gap-y-2 border-b-2 border-grey hover:border-blue group transition ease-in-out duration-300 cursor-pointer">
            <div className="h-10 w-10 bg-white rounded-lg flex justify-center items-center border border-grey group-hover:border-blue transition ease-in-out duration-300"><GrTechnology className="text-2xl group-hover:text-blue transition ease-in-out duration-300"/></div>
            
              <h3 className="text-lg font-sans font-bold text-grey group-hover:text-blue transition ease-in-out duration-300">Patient-Centered Technology</h3>
              <span className="text-sm text-grey font-sans font-bold opacity-80">Ensuring every patient benefits from cutting-edge medical advancements.</span>
            </div>
            <div className="h-auto w-full py-5 flex flex-col gap-y-2 border-b-2 border-grey hover:border-blue group transition ease-in-out duration-300 cursor-pointer">
              <div className="h-10 w-10 bg-white rounded-lg flex justify-center items-center border border-grey group-hover:border-blue transition ease-in-out duration-300"><MdOutlineHealthAndSafety className="text-2xl group-hover:text-blue transition ease-in-out duration-300"/></div>
              <h3 className="text-lg font-sans font-bold text-grey group-hover:text-blue transition ease-in-out duration-300">Empowering Healthcare Providers</h3>
              <span className="text-sm text-grey font-sans font-bold opacity-80">Equipping healthcare providers with AI tools for exceptional care delivery.</span>
            </div>

          </div>
          <div className="right h-96 lg:h-full w-full lg:w-6/12 px-0 sm:px-0 lg:px-6 rounded-lg">
            <img
              className="h-full w-full object-cover rounded-lg border-2 border-grey"
              src={vision}
              alt="error"
            />
          </div>
        </div>
      </div>

      {/* Our Core Values */}
      <div className="h-auto w-full px-4 sm:px-10 xl:px-16 flex flex-col items-center justify-center gap-y-10 py-16 bg-white">
        <h2 className="text-4xl text-darkblue font-bold font-sans">
          Our Core Values
        </h2>
        <div className="h-auto xl:h-96 w-full flex flex-wrap gap-10 flex-row items-center justify-center xl:justify-between sm:px-5 xl:px-10">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="h-auto sm:h-80 w-[19rem] bg-blue flex flex-col justify-center items-center p-6 sm:px-6 gap-y-8 rounded-lg group"
            >
              <div className="flex flex-row gap-x-4 items-center justify-start w-full">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-lightgrey group-hover:bg-purewhite transition ease-in-out duration-300">
                  <value.icon
                    className="h-5 w-5 text-grey group-hover:text-darkblue transition ease-in-out duration-300"
                    aria-hidden="true"
                  />
                </div>
                <h4 className="text-white text-2xl font-semibold font-sans">
                  {value.title}
                </h4>
              </div>
              <p className="text-justify text-white opacity-80 font-sans">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      

      {/* About us */}
      <div className="h-[30rem] w-full bg-lightblue flex justify-start items-center relative group overflow-hidden">
        <div className="about bg-[url('https://img.freepik.com/free-photo/medium-shot-scientists-lab_23-2148970019.jpg?t=st=1712730077~exp=1712733677~hmac=bedf57e8cb70e08b3778d1ee268ea54a591de2697719a6ed13c7327098a90c1c&w=740')] h-full w-full bg-cover bg-no-repeat bg-start gradient-mask-l-[rgba(0,0,0,1.0)_10%,rgba(0,0,0,1.0)_30px,rgba(0,0,0,0.3)_40%] group-hover:scale-110 transition ease-in-out duration-1000"></div>
        <div className="w-full lg:w-[35rem] h-full flex flex-col justify-center items-center gap-y-10 absolute p-8 lg:ml-10 bg-white bg-opacity-10 backdrop-blur-sm">
          <div className="flex flex-col gap-y-7">
            <h3 className="text-blue text-5xl font-bold font-sans">About Us</h3>
            <span className="text-grey text-sm font-medium text-justify opacity-80 font-sans">
              At EmergingTech4Health, our mission is to bridge the gap between
              technology and healthcare, leveraging the latest advancements in
              artificial intelligence to solve complex medical challenges. Our
              dedicated team of researchers, scientists, and technologists
              collaborate to develop AI-driven solutions that not only enhance
              diagnostic and treatment capabilities but also aim to make
              healthcare more accessible and efficient for everyone.
            </span>
          </div>
          <div className="flex justify-end w-full">
            <button className="button bg-blue text-[#FFFFFF] py-3 px-5 rounded-lg text-sm font-medium font-sans active:bg-blue hover:bg-darkblue hover:shadow-md hover:shadow-lightgrey transition ease-in-out duration-300">
              Discover More
            </button>
          </div>
        </div>
      </div>

      {/* Projects */}
      {/* <div className="h-auto w-full bg-white">
        <div className="flex h-screen w-full p-6 pt-24 flex-col items-center justify-center xl:text-slate-400">
          <div className="grid h-full w-full grid-cols-3 gap-4">
            <Link to={"/Projects"} className="col-span-2 row-span-3 rounded-3xl bg-slate-200 hover:scale-95 transition duration-500 ease-in-out overflow-hidden">
              <video className="h-full w-full object-cover" src={v2} autoPlay loop muted/>
            </Link>
            <Link to={"/Projects"} className="row-span-4 rounded-3xl bg-slate-200 text-center flex justify-center items-center text-3xl font-bold hover:scale-95 transition duration-500 ease-in-out overflow-hidden">
              <video className="h-full w-full object-cover" src={v1} autoPlay loop muted/>
            </Link>
            <Link to={"/Projects"} className="row-span-3 rounded-3xl bg-slate-200 text-center flex justify-center items-center text-3xl font-bold hover:scale-95 transition duration-500 ease-in-out overflow-hidden">
              <video className="h-full w-full object-cover" src={v3} autoPlay loop muted/>
            </Link>
            <Link to={"/Projects"} className="row-span-3 rounded-3xl bg-slate-200 text-center flex justify-center items-center text-3xl font-bold hover:scale-95 transition duration-500 ease-in-out overflow-hidden">
              <video className="h-full w-full object-cover" src={v4} autoPlay loop muted/>
            </Link>
            <Link to={"/Projects"} className="row-span-2 rounded-3xl bg-slate-200 text-center flex justify-center items-center text-3xl font-bold hover:scale-95 transition duration-500 ease-in-out overflow-hidden">
              <video className="h-full w-full object-cover" src={v5} autoPlay loop muted/>
            </Link>
          </div>
        </div>
      </div> */}

      {/* Our Leadership */}
      <div className="h-auto w-full flex flex-col pb-16 sm:pb-16 sm:flex-col lg:py-0 lg:flex-row items-center bg-white">
        <div className="h-auto w-auto lg:w-5/10 xl:w-6/12 2xl:w-7/12">
          <video
            src={leadership}
            className="h-full w-full object-cover p-2"
            autoPlay
            loop
            muted
          />
        </div>
        <div className="h-full w-auto lg:py-16 lg:w-5/10 xl:w-6/12 2xl:py-0 2xl:w-5/12">
          <div className="w-auto h-full flex flex-col justify-center items-center gap-y-10 px-8">
            <div className="flex flex-col flex-wrap gap-y-7">
              <h3 className="text-grey text-5xl font-bold font-sans">
                Our Leadership
              </h3>
              <span className="text-grey text-sm font-medium text-justify opacity-80 font-sans">
                Meet the visionary leaders behind EmergingTech4Health. Our
                leadership team brings together expertise in artificial
                intelligence, medical research, and technology development,
                driving us forward in our mission to transform healthcare.
              </span>
            </div>
            <div className="flex justify-start w-full">
              <button className="button bg-blue text-[#FFFFFF] py-3 px-5 rounded-lg text-sm font-medium font-sans active:bg-blue hover:bg-darkblue hover:shadow-md hover:shadow-lightgrey transition ease-in-out duration-300">
                Meet Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
