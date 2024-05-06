import React, { useEffect, useRef } from "react";
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
import image from "../Photos/Home/image.png";
import { FaRegLightbulb } from "react-icons/fa";
import { GiShakingHands } from "react-icons/gi";
import { IoAccessibilityOutline } from "react-icons/io5";

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

import Loading from "./loader/loading"



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

  const animationRef = useRef(null);

  useGSAP(() => {
    // const rightPhotoItems = gsap.utils.toArray(".right-photo-item");

    // rightPhotoItems.forEach(function (item, index) {
    //   item.style.zIndex = rightPhotoItems.length - index;
    // });

    // gsap.set(".right-photo-item", {
    //   clipPath: "inset(0px 0px 0px 0px)",
    // });

    // animationRef.current = gsap.to(".right-photo-item:not(:last-child)", {
    //   clipPath: "inset(0px 0px 100% 0px)",
    //   stagger: 0.5,
    //   ease: "none",
    // });

    // ScrollTrigger.create({
    //   trigger: ".projects",
    //   scroller: "body",
    //   start: "top top",
    //   end: "bottom bottom",
    //   animation: animationRef.current,
    //   scrub: 1,
    // });
    
  });

  return (
    <>
      <Loading/>

      {/* Landing page */}
      <div className="h-[100vh] w-full flex items-end relative z-10 overflow-hidden">
        <div className="absolute h-[45rem] w-[45rem] bg-lightblue z-0 rounded-xl rotate-45 -left-12 -bottom-16"></div>
        <div className="h-96 w-96 rounded-xl absolute right-14 top-0 -rotate-45 bg-lightgrey opacity-60"></div>
        <div className="h-[29rem] w-full flex z-10">
          <div className="left w-1/2 h-full px-20">
            <div className="flex w-[25rem] h-full flex-col justify-center items-start gap-y-6">
              <h1 className="text-5xl uppercase font-bold text-blue">
                Revolution
                <span className="text-5xl uppercase font-bold text-grey">
                  izing
                </span>{" "}
                Healthcare
              </h1>
              <h4 className="text-base capitalize text-justify text-grey opacity-80 font-semibold">
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

          <div className="right w-1/2 h-full flex justify-center items-center">
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
      <div className="border-b-2 border-darkblue h-auto w-full bg-lightblue px-28 py-28 flex flex-col items-center gap-y-12">
        <h2 className="text-5xl text-blue font-bold uppercase [text-shadow:3px_6px_10px_var(--tw-shadow-color)] shadow-grey">
          Our Members
        </h2>

        <div className="h-full w-full relative flex overflow-x-hidden justify-center items-center">
          <div
            className="absolute h-full w-96 top-0 left-0 z-10 gradient"
            style={{
              background:
                "linear-gradient(to left, rgba(255, 255, 255, 0), #E8EEFD",
            }}
          ></div>
          <div
            className="absolute h-full w-96 top-0 right-0 z-10 gradient"
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
      <div className="border-b-2 border-darkblue h-auto w-full bg-purewhite flex justify-center items-center py-20 relative z-10 overflow-hidden">
        <div className="bg-shape1 bg-teal opacity-50 bg-blur"></div>
        <div className="bg-shape2 bg-primary opacity-50 bg-blur"></div>
        <div className="bg-shape3 bg-purple opacity-50 bg-blur"></div>

        <div className="crousel h-auto w-3/4 bg-lightblue rounded-lg p-10 flex flex-col gap-y-10 shadow-lg shadow-grey z-10">
          <h2 className="text-4xl text-grey font-bold uppercase [text-shadow:3px_6px_10px_var(--tw-shadow-color)] shadow-grey">
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
                <div className="h-[20rem] w-full bg-white p-10 flex flex-row rounded-lg">
                  <div className="h-full w-7/12 p-4 flex flex-col justify-between">
                    <div className="flex flex-col gap-y-5 pr-16">
                      <h3 className="text-2xl text-blue font-bold">
                        {post.title}
                      </h3>
                      <p className="text-grey text-sm font-medium">
                        {post.description}
                      </p>
                    </div>
                    <div>
                      <Link to={post.link}>
                        <button className="button bg-blue text-[#FFFFFF] py-2 px-3 rounded-lg text-sm font-medium active:bg-blue hover:bg-darkblue hover:shadow-md hover:shadow-lightgrey transition ease-in-out duration-300">
                          Read More
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="h-full w-5/12">
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
        <div className="h-96 w-full flex flex-row px-12">
          <div className="left h-full w-6/12 flex flex-col justify-center gap-y-5 px-6">
            <h3 className="text-4xl text-darkblue font-bold">Our Mission</h3>
            <p className="text-grey font-semibold opacity-80 text-justify">
              At EmergingTech4Health, our mission is to harness the power of AI
              and emerging technologies to create a future where healthcare is
              more accessible, accurate, and personalized. By developing
              cutting-edge AI applications for tumor segmentation and advanced
              research in EEG and ECG analytics, we are not just imagining the
              future of healthcare – we are building it.
            </p>
          </div>
          <div className="right h-full w-6/12 px-6 py-12 rounded-lg">
            <img
              className="h-full w-full object-cover rounded-lg border-2 border-grey"
              src={about_us2}
              alt="error"
            />
          </div>
        </div>
      </div>

      {/* Our Vision */}
      <div className="border-b-2 border-grey h-auto w-full px-16 flex flex-col items-center justify-center gap-y-10 py-16 bg-lightblue">
        <h2 className="text-4xl text-darkblue font-bold">Our Vision</h2>
        <div
          className="w-full h-[35rem] rounded-lg relative bg-cover bg-center bg-no-repeat px-60 py-4"
          style={{ backgroundImage: `url(${image})` }}
        >
          <p className="text-sm text-grey items-center font-bold opacity-80">
            Our vision is to lead the way in integrating AI with healthcare,
            creating solutions that not only solve today’s medical problems but
            also anticipate tomorrow's challenges. We believe in a world where
            every patient benefits from the advancements in medical technology,
            and every healthcare provider is empowered with the tools they need
            to deliver exceptional care.
          </p>
        </div>
      </div>

      {/* Our Core Values */}
      <div className="h-auto w-full px-16 flex flex-col items-center justify-center gap-y-10 py-16 bg-white">
        <h2 className="text-4xl text-darkblue font-bold">Our Core Values</h2>
        <div className="h-96 w-full flex flex-row items-center justify-between px-10">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="h-80 w-[19rem] bg-blue flex flex-col justify-center items-center px-6 gap-y-8 rounded-lg group"
            >
              <div className="flex flex-row gap-x-4 items-center justify-start w-full">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-lightgrey group-hover:bg-purewhite transition ease-in-out duration-300">
                  <value.icon
                    className="h-5 w-5 text-grey group-hover:text-darkblue transition ease-in-out duration-300"
                    aria-hidden="true"
                  />
                </div>
                <h4 className="text-white text-2xl font-semibold">
                  {value.title}
                </h4>
              </div>
              <p className="text-justify text-white opacity-80">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Active Project */}
      {/* <div className="border-b-2 border-grey bg-lightblue h-auto w-full flex flex-col items-center py-20 gap-y-1">
        <h2 className="text-5xl text-blue font-bold uppercase [text-shadow:2px_4px_5px_var(--tw-shadow-color)] shadow-grey">
          Active Projects
        </h2>

        <div className="projects w-full h-auto px-16 flex flex-row">
          
          <div className="left w-1/2 h-auto flex items-center justify-center">
              <div className="projects-text">
              {Projects.map((project, index) => (
                <div key={index} className="h-[100vh] project-info flex flex-col justify-center gap-y-10">
                  <div className="flex flex-col gap-y-1">
                    <span className="text-2xl text-grey font-semibold">
                      {project.index}
                    </span>
                    <h3 className="text-4xl text-grey font-bold">
                      {project.title}
                    </h3>
                    <span className="text-base text-grey">
                      {project.description}
                    </span>
                  </div>
                  <Link to={project.link}>
                    <button className="button bg-blue text-[#FFFFFF] py-2 px-3 rounded-lg text-sm font-medium active:bg-blue hover:bg-darkblue hover:shadow-md hover:shadow-lightgrey transition ease-in-out duration-300">
                      View More
                    </button>
                  </Link>
                </div>
              ))}
              </div>
          </div>


          <div className="right w-1/2 h-auto">
            <div className="right-b1 flex flex-col justify-center sticky top-0 w-full h-[100vh]">
              <div
                useRef={animationRef}
                className="right-photo h-96 w-[40rem] relative"
              >
                {Projectsimage.map((project, index) => (
                <div key={index} className="right-photo-item w-full h-full py-5 px-10 absolute">
                  <img
                    className="h-full w-full object-cover rounded-lg block border-2 border-grey"
                    src={project.image}
                    alt="error"
                  />
                </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* About us */}
      <div className="h-[30rem] w-full bg-lightblue flex justify-start items-center relative group overflow-hidden">
        <div className="about bg-[url('https://img.freepik.com/free-photo/medium-shot-scientists-lab_23-2148970019.jpg?t=st=1712730077~exp=1712733677~hmac=bedf57e8cb70e08b3778d1ee268ea54a591de2697719a6ed13c7327098a90c1c&w=740')] h-full w-full bg-cover bg-no-repeat gradient-mask-l-[rgba(0,0,0,1.0)_10%,rgba(0,0,0,1.0)_30px,rgba(0,0,0,0.3)_40%] group-hover:scale-110 transition ease-in-out duration-1000"></div>
        <div className="w-[35rem] h-full flex flex-col justify-center items-center gap-y-10 absolute p-8 ml-10">
          <div className="flex flex-col gap-y-7">
            <h3 className="text-blue text-5xl font-bold">About Us</h3>
            <span className="text-grey text-sm font-medium text-justify opacity-80">
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
            <button className="button bg-blue text-[#FFFFFF] py-3 px-5 rounded-lg text-sm font-medium active:bg-blue hover:bg-darkblue hover:shadow-md hover:shadow-lightgrey transition ease-in-out duration-300">
              Discover More
            </button>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="h-auto w-full bg-white">
        <div className="flex h-screen w-full p-6 pt-24 flex-col items-center justify-center xl:text-slate-400">
          <div className="grid h-full w-full grid-cols-3 gap-4">
            <div className="col-span-2 row-span-3 rounded-3xl bg-slate-200 hover:scale-95 transition duration-500 ease-in-out"></div>
            <div className="row-span-4 rounded-3xl bg-slate-200 text-center flex justify-center items-center text-3xl font-bold hover:scale-95 transition duration-500"></div>
            <div className="row-span-3 rounded-3xl bg-slate-200 text-center flex justify-center items-center text-3xl font-bold hover:scale-95 transition duration-500"></div>
            <div className="row-span-3 rounded-3xl bg-slate-200 text-center flex justify-center items-center text-3xl font-bold hover:scale-95 transition duration-500"></div>
            <div className="row-span-2 rounded-3xl bg-slate-200 text-center flex justify-center items-center text-3xl font-bold hover:scale-95 transition duration-500"></div>
          </div>
        </div>
      </div>

      {/* Our Leadership */}
      <div className="h-auto w-full flex flex-row items-center">
        <div className="h-auto w-7/12">
          <video
            src={leadership}
            className="h-full w-full object-cover p-2"
            autoPlay
            loop
            muted
          />
        </div>
        <div className="h-full w-5/12">
          <div className="w-[35rem] h-full flex flex-col justify-center items-center gap-y-10 px-8">
            <div className="flex flex-col gap-y-7">
              <h3 className="text-grey text-5xl font-bold">Our Leadership</h3>
              <span className="text-grey text-sm font-medium text-justify opacity-80">
                Meet the visionary leaders behind EmergingTech4Health. Our
                leadership team brings together expertise in artificial
                intelligence, medical research, and technology development,
                driving us forward in our mission to transform healthcare.
              </span>
            </div>
            <div className="flex justify-start w-full">
              <button className="button bg-blue text-[#FFFFFF] py-3 px-5 rounded-lg text-sm font-medium active:bg-blue hover:bg-darkblue hover:shadow-md hover:shadow-lightgrey transition ease-in-out duration-300">
                Meet Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
