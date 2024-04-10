import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import lp_image1 from "../Photos/lp_image1.png";
import lp_image2 from "../Photos/lp_image2.png";
import lp_image3 from "../Photos/lp_image3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../style/Home.css";
import { Autoplay, Mousewheel, Navigation, Pagination} from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
      <div className="h-[100vh] w-full bg-lightblue flex items-end">
        <div className="h-[29rem] w-full flex">
          <div className="left w-1/2 h-full px-20">
            <div className="flex w-[25rem] h-full flex-col justify-center items-start gap-y-6">
              <h1 className="text-5xl uppercase font-bold text-blue">
                Revolution
                <span className="text-5xl uppercase font-bold text-grey">
                  izing
                </span>{" "}
                Healthcare
              </h1>
              <h4 className="text-lg capitalize text-justify text-grey">
                Welcome to Emerging Tech4 Health, a Biotechnology Startup that
                leverages cutting edge technology, particularly AI, to
                revolutionize healthcare.
              </h4>
              <button className="button bg-blue text-[#FFFFFF] py-2 px-5 rounded-lg text-sm font-medium active:bg-blue hover:bg-darkblue hover:shadow-md hover:shadow-lightgrey transition ease-in-out duration-300">
                Learn More
              </button>
            </div>
          </div>

          <div className="right w-1/2 h-full flex justify-center items-center">
            <div className="h-96 w-[27rem] relative">
              <div className="h-52 w-full absolute top-0 shadow-xl shadow-grey">
                <img
                  className="h-full w-full object-cover"
                  src={lp_image2}
                  alt="error"
                />
              </div>
              <div className="h-52 w-96 absolute top-24 -left-20 shadow-xl shadow-grey">
                <img
                  className="h-full w-full object-cover"
                  src={lp_image1}
                  alt="error"
                />
              </div>
              <div className="h-52 w-64 absolute bottom-0 right-0 shadow-xl shadow-grey">
                <img
                  className="h-full w-full object-cover"
                  src={lp_image3}
                  alt="error"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

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

      <div className="border-b-2 border-darkblue h-auto w-full bg-purewhite flex justify-center items-center py-20">
        
        <div className="crousel h-auto w-3/4 bg-lightblue rounded-lg p-10 flex flex-col gap-y-10 shadow-lg shadow-grey">

          <h2 className="text-4xl text-grey font-bold uppercase [text-shadow:3px_6px_10px_var(--tw-shadow-color)] shadow-grey">
            Latest Posts
          </h2>

          <Swiper
            ref={swiperRef}
            navigation={{
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            spaceBetween={30}
            loop={true}
            mousewheel={true}
            slidesPerView={1}
            pagination={{clickable: true}}
            modules={[Mousewheel,Pagination,Navigation, Autoplay]}
            className="mySwiper"
          >
            {latestPost.map((post, index) => (
              <SwiperSlide key={index}>
                <div  className="h-[20rem] w-full bg-white p-10 flex flex-row rounded-lg">
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
            <div onClick={goPrev} className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-lightgrey group hover:bg-purewhite cursor-pointer transition ease-in-out duration-300">
              <IoIosArrowBack
                className="h-5 w-5 text-grey group-hover:text-darkblue transition ease-in-out duration-300"
                aria-hidden="true"
              />
            </div>
            <div onClick={goNext} className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-lightgrey group hover:bg-purewhite cursor-pointer transition ease-in-out duration-300">
              <IoIosArrowForward
                className="h-5 w-5 text-grey group-hover:text-darkblue transition ease-in-out duration-300"
                aria-hidden="true"
              />
            </div>
          </div>

        </div>
      </div>

      <div className="border-b-2 border-grey h-[30rem] w-full bg-lightblue flex justify-start items-center relative group overflow-hidden">
        <div className="about bg-[url('https://img.freepik.com/free-photo/medium-shot-scientists-lab_23-2148970019.jpg?t=st=1712730077~exp=1712733677~hmac=bedf57e8cb70e08b3778d1ee268ea54a591de2697719a6ed13c7327098a90c1c&w=740')] h-full w-full bg-cover bg-no-repeat gradient-mask-l-[rgba(0,0,0,1.0)_10%,rgba(0,0,0,1.0)_30px,rgba(0,0,0,0.3)_40%] group-hover:scale-110 transition ease-in-out duration-1000">
        </div>
        <div className="w-[35rem] h-full flex flex-col justify-center items-center gap-y-10 absolute p-8 ml-10">
          <div className="flex flex-col gap-y-7">
          <h3 className="text-blue text-5xl font-bold">About Us</h3>
          <span className="text-grey text-sm font-medium text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          eget lectus auctor, iaculis leo ut, malesuada urna. Phasellus
          tincidunt sit amet orci vitae laoreet. Quisque tellus lacus,
          bibendum nec diam a, laoreet commodo mauris. Nulla volutpat
          congue dolor, sit amet vulputate nisl hendrerit pellentesque.
          Cras sollicitudin est at lectus fringilla ornare. Aeneanngue
          sollicitudin, dui nisi varius elit, sed ullamcorper nulla ligula sed
          leo.
          </span>
          </div>
          <div className="flex justify-end w-full">
          <button className="button bg-blue text-[#FFFFFF] py-3 px-5 rounded-lg text-sm font-medium active:bg-blue hover:bg-darkblue hover:shadow-md hover:shadow-lightgrey transition ease-in-out duration-300">
                Discover More 
          </button>
          </div>
        </div>
      </div>

      <div className="h-96 w-full">
        <div className="h-full w-7/12 bg-mustardyellow">
            <img className=" h-full w-full object-cover" src={"https://img.freepik.com/free-photo/leader-authority-boss-coach-director-manager-concept_53876-133859.jpg?w=740&t=st=1712767152~exp=1712767752~hmac=9fcece6bb090dcda117b35ac42ce897f048d4bcc4132258324a2d0432982ff31"}/>
        </div>
        <div></div>
      </div>
    </>
  );
}
