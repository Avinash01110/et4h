import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../style/Home.css";
import { Autoplay, Mousewheel, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../style/Team.css";

import Profile from "./Profile";

export default function Team() {
  const pic =
    "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const TeamInfo = [
    {
      profile: pic,
      name: "abc",
      designation: "xyz",
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
    {
      profile: pic,
      name: "abc",
      designation: "xyz",
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
    {
      profile: pic,
      name: "abc",
      designation: "xyz",
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
    {
      profile: pic,
      name: "abc",
      designation: "xyz",
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
    {
      profile: pic,
      name: "abc",
      designation: "xyz",
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
    {
      profile: pic,
      name: "abc",
      designation: "xyz",
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
    {
      profile: pic,
      name: "abc",
      designation: "xyz",
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
    {
      profile: pic,
      name: "abc",
      designation: "xyz",
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
    {
      profile: pic,
      name: "abc",
      designation: "xyz",
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
  ];

  const [profInfo, setprofInfo] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (info) => {
    setprofInfo(info);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setprofInfo({});
  };

  return (
    <>
      <Profile info={profInfo} open={isOpen} close={closeModal} />

      <div className="h-[48vh] w-full flex items-end bg-lightblue">
        <div className="h-auto w-full flex flex-col gap-y-10">
          <div className="flex flex-row gap-x-1 items-end justify-center">
            <h3 className="text-xl text-grey font-bold font-sans text-center">
              Meet our
            </h3>
            <span className="text-5xl text-darkblue font-bold font-sans">
              Team
            </span>
          </div>
          <p className="text-sm text-grey font-semibold font-sans text-center px-72">
            Welcome to our team page! Our team is dedicated to pioneering
            advancements in preventive healthcare through the integration of
            artificial intelligence. Our diverse group of experts, researchers,
            and alumni collaborate to transform healthcare and improve lives.
          </p>
        </div>
      </div>

      <div className="h-auto w-full bg-lightblue py-44 px-10 flex flex-col gap-y-24">
        {/* Scientific Team */}
        <div className="h-auto w-full bg-white rounded-lg px-10 py-5 flex flex-col gap-y-4 border border-solid border-grey">
          <h2 className="text-grey font-sans text-3xl text-center font-semibold">
            Scientific Team
          </h2>

          <div className="bg-[url('https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat h-full w-full bg-slate-400 rounded-lg px-24 py-5">
            <Swiper
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              spaceBetween={10}
              loop={true}
              mousewheel={true}
              slidesPerView={3}
              pagination={{ clickable: true }}
              modules={[Mousewheel, Pagination, Navigation, Autoplay]}
              className="mySwiper"
            >
              {/* Card */}
              {TeamInfo.map((team, index) => (
                <SwiperSlide
                  onClick={() => {
                    openModal(team);
                  }}
                  className="bg-white bg-opacity-0 py-7"
                  key={index}
                >
                  <div className="h-full w-64 px-5 py-4 rounded-md bg-white bg-opacity-20 backdrop-blur-lg border border-solid border-white border-opacity-20 shadow-md shadow-grey flex flex-col gap-y-5 hover:-translate-y-2 transition duration-500 ease-in-out cursor-pointer">
                    <div className="h-48 w-full bg-sky-200 rounded-lg overflow-hidden">
                      <img
                        className="h-full w-full object-cover"
                        src={team.profile}
                        alt="profile"
                      />
                    </div>
                    <div className="flex flex-row justify-between item-start">
                      <div className="flex flex-col gap-y-1">
                        <span className="font-sans font-semibold">
                          {team.name}
                        </span>
                        <span className="text-sm font-sans font-medium">
                          {team.designation}
                        </span>
                      </div>
                      <div className="flex flex-row gap-x-4">
                        <Link to={team.twitter}>
                          <div className="h-6 w-6 bg-white bg-opacity-45 backdrop-blur-lg border border-solid border-lightgrey border-opacity-20 flex justify-center items-center rounded-md hover:bg-opacity-20 hover:text-darkblue">
                            <FaXTwitter />
                          </div>
                        </Link>
                        <Link to={team.facebook}>
                          <div className="h-6 w-6 bg-white bg-opacity-45 backdrop-blur-lg border border-solid border-lightgrey border-opacity-20 flex justify-center items-center rounded-md hover:bg-opacity-20 hover:text-darkblue">
                            <FaFacebookF />
                          </div>
                        </Link>
                        <Link to={team.linkedin}>
                          <div className="h-6 w-6 bg-white bg-opacity-45 backdrop-blur-lg border border-solid border-lightgrey border-opacity-20 flex justify-center items-center rounded-md hover:bg-opacity-20 hover:text-darkblue">
                            <FaLinkedinIn />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Researchers */}
        <div className="h-auto w-full bg-white px-10 py-5 rounded-lg flex flex-col gap-y-5 border border-solid border-grey">
          <h2 className="text-grey font-sans text-3xl text-center font-semibold">
            Researchers
          </h2>

          <div className="h-auto w-full flex flex-col gap-y-10">
            {/* Non Medical Group */}
            <div className="h-auto w-full bg-lightblue rounded-lg px-10 py-5 flex flex-col gap-y-4 border border-solid border-darkblue border-opacity-40">
              <h2 className="text-grey font-sans text-2xl text-center font-semibold">
                Non-Medical Group
              </h2>

              <div className="bg-[url('https://images.unsplash.com/photo-1577138017060-8ed59846a432?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat h-full w-full bg-slate-400 rounded-lg px-14 py-5">
                <Swiper
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  spaceBetween={10}
                  loop={true}
                  mousewheel={true}
                  slidesPerView={3}
                  pagination={{ clickable: true }}
                  modules={[Mousewheel, Pagination, Navigation, Autoplay]}
                  className="mySwiper"
                >
                  {/* Card */}
                  {TeamInfo.map((team, index) => (
                    <SwiperSlide
                      onClick={() => {
                        openModal(team);
                      }}
                      className="bg-white bg-opacity-0 py-7"
                      key={index}
                    >
                      <div className="h-full w-64 px-5 py-4 rounded-md bg-white bg-opacity-20 backdrop-blur-lg border border-solid border-white border-opacity-20 shadow-md shadow-grey flex flex-col gap-y-5 hover:-translate-y-2 transition duration-500 ease-in-out cursor-pointer">
                        <div className="h-48 w-full bg-sky-200 rounded-lg overflow-hidden">
                          <img
                            className="h-full w-full object-cover"
                            src={team.profile}
                            alt="profile"
                          />
                        </div>
                        <div className="flex flex-row justify-between item-start">
                          <div className="flex flex-col gap-y-1">
                            <span className="font-sans font-semibold">
                              {team.name}
                            </span>
                            <span className="text-sm font-sans font-medium">
                              {team.designation}
                            </span>
                          </div>
                          <div className="flex flex-row gap-x-4">
                            <Link to={team.twitter}>
                              <div className="h-6 w-6 bg-white bg-opacity-45 backdrop-blur-lg border border-solid border-lightgrey border-opacity-20 flex justify-center items-center rounded-md hover:bg-opacity-20 hover:text-darkblue">
                                <FaXTwitter />
                              </div>
                            </Link>
                            <Link to={team.facebook}>
                              <div className="h-6 w-6 bg-white bg-opacity-45 backdrop-blur-lg border border-solid border-lightgrey border-opacity-20 flex justify-center items-center rounded-md hover:bg-opacity-20 hover:text-darkblue">
                                <FaFacebookF />
                              </div>
                            </Link>
                            <Link to={team.linkedin}>
                              <div className="h-6 w-6 bg-white bg-opacity-45 backdrop-blur-lg border border-solid border-lightgrey border-opacity-20 flex justify-center items-center rounded-md hover:bg-opacity-20 hover:text-darkblue">
                                <FaLinkedinIn />
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            {/* Signal Processing Group  */}
            <div className="h-auto w-full bg-lightblue rounded-lg px-10 py-5 flex flex-col gap-y-4 border border-solid border-darkblue border-opacity-40">
              <h2 className="text-grey font-sans text-2xl text-center font-semibold">
                Signal Processing Group
              </h2>

              <div className="bg-[url('https://images.unsplash.com/photo-1577138017060-8ed59846a432?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat h-full w-full bg-slate-400 rounded-lg px-14 py-5">
                <Swiper
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  spaceBetween={10}
                  loop={true}
                  mousewheel={true}
                  slidesPerView={3}
                  pagination={{ clickable: true }}
                  modules={[Mousewheel, Pagination, Navigation, Autoplay]}
                  className="mySwiper"
                >
                  {/* Card */}
                  {TeamInfo.map((team, index) => (
                    <SwiperSlide
                      onClick={() => {
                        openModal(team);
                      }}
                      className="bg-white bg-opacity-0 py-7"
                      key={index}
                    >
                      <div className="h-full w-64 px-5 py-4 rounded-md bg-white bg-opacity-20 backdrop-blur-lg border border-solid border-white border-opacity-20 shadow-md shadow-grey flex flex-col gap-y-5 hover:-translate-y-2 transition duration-500 ease-in-out cursor-pointer">
                        <div className="h-48 w-full bg-sky-200 rounded-lg overflow-hidden">
                          <img
                            className="h-full w-full object-cover"
                            src={team.profile}
                            alt="profile"
                          />
                        </div>
                        <div className="flex flex-row justify-between item-start">
                          <div className="flex flex-col gap-y-1">
                            <span className="font-sans font-semibold">
                              {team.name}
                            </span>
                            <span className="text-sm font-sans font-medium">
                              {team.designation}
                            </span>
                          </div>
                          <div className="flex flex-row gap-x-4">
                            <Link to={team.twitter}>
                              <div className="h-6 w-6 bg-white bg-opacity-45 backdrop-blur-lg border border-solid border-lightgrey border-opacity-20 flex justify-center items-center rounded-md hover:bg-opacity-20 hover:text-darkblue">
                                <FaXTwitter />
                              </div>
                            </Link>
                            <Link to={team.facebook}>
                              <div className="h-6 w-6 bg-white bg-opacity-45 backdrop-blur-lg border border-solid border-lightgrey border-opacity-20 flex justify-center items-center rounded-md hover:bg-opacity-20 hover:text-darkblue">
                                <FaFacebookF />
                              </div>
                            </Link>
                            <Link to={team.linkedin}>
                              <div className="h-6 w-6 bg-white bg-opacity-45 backdrop-blur-lg border border-solid border-lightgrey border-opacity-20 flex justify-center items-center rounded-md hover:bg-opacity-20 hover:text-darkblue">
                                <FaLinkedinIn />
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>

        {/* Former & Emeritus Researchers */}
        <div className="h-auto w-full bg-white rounded-lg px-10 py-5 flex flex-col gap-y-4 border border-solid border-grey">
          <h2 className="text-grey font-sans text-3xl text-center font-semibold">
            Former & Emeritus Researchers
          </h2>

          <div className="bg-[url('https://images.unsplash.com/photo-1564951415682-4466397f7707?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8')] bg-cover bg-no-repeat h-full w-full bg-slate-400 rounded-lg px-24 py-5">
            <Swiper
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              spaceBetween={10}
              loop={true}
              mousewheel={true}
              slidesPerView={3}
              pagination={{ clickable: true }}
              modules={[Mousewheel, Pagination, Navigation, Autoplay]}
              className="mySwiper"
            >
              {/* Card */}
              {TeamInfo.map((team, index) => (
                <SwiperSlide
                  onClick={() => {
                    openModal(team);
                  }}
                  className="bg-white bg-opacity-0 py-7"
                  key={index}
                >
                  <div className="h-full w-64 px-5 py-4 rounded-md bg-white bg-opacity-20 backdrop-blur-lg border border-solid border-white border-opacity-20 shadow-md shadow-grey flex flex-col gap-y-5 hover:-translate-y-2 transition duration-500 ease-in-out cursor-pointer">
                    <div className="h-48 w-full bg-sky-200 rounded-lg overflow-hidden">
                      <img
                        className="h-full w-full object-cover"
                        src={team.profile}
                        alt="profile"
                      />
                    </div>
                    <div className="flex flex-row justify-between item-start">
                      <div className="flex flex-col gap-y-1">
                        <span className="font-sans font-semibold">
                          {team.name}
                        </span>
                        <span className="text-sm font-sans font-medium">
                          {team.designation}
                        </span>
                      </div>
                      <div className="flex flex-row gap-x-4">
                        <Link to={team.twitter}>
                          <div className="h-6 w-6 bg-white bg-opacity-45 backdrop-blur-lg border border-solid border-lightgrey border-opacity-20 flex justify-center items-center rounded-md hover:bg-opacity-20 hover:text-darkblue">
                            <FaXTwitter />
                          </div>
                        </Link>
                        <Link to={team.facebook}>
                          <div className="h-6 w-6 bg-white bg-opacity-45 backdrop-blur-lg border border-solid border-lightgrey border-opacity-20 flex justify-center items-center rounded-md hover:bg-opacity-20 hover:text-darkblue">
                            <FaFacebookF />
                          </div>
                        </Link>
                        <Link to={team.linkedin}>
                          <div className="h-6 w-6 bg-white bg-opacity-45 backdrop-blur-lg border border-solid border-lightgrey border-opacity-20 flex justify-center items-center rounded-md hover:bg-opacity-20 hover:text-darkblue">
                            <FaLinkedinIn />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
