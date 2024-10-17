import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaLinkedinIn } from "react-icons/fa";
import {
  FaXTwitter,
  FaGoogleScholar,
  FaResearchgate,
  FaOrcid,
} from "react-icons/fa6";
import spinner from "../Photos/Preloader/spinner.gif";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../style/Home.css";
import { Autoplay, Mousewheel, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../style/Team.css";

import { fetchTeam } from "../services/fetchData";

import Profile from "./Profile";

export default function Team() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [profInfo, setprofInfo] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [research, setResearch] = useState(false);

  const openModal = (info) => {
    setprofInfo(info);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setprofInfo({});
  };

  const getTeams = async () => {
    setLoading(true);
    try {
      const data = await fetchTeam();
      console.log(data.teams);
      setTeams(data.teams);
    } catch (err) {
      console.log(err);
      setError("Failed to load teams");
    } finally {
      setLoading(false);
    }
  };

  const handleIcon = (social) => {
    if (social.name === "twitter") {
      return <FaXTwitter />;
    } else if (social.name === "linkedin") {
      return <FaLinkedinIn />;
    } else if (social.name === "google-scholar") {
      return <FaGoogleScholar />;
    } else if (social.name === "researchgate") {
      return <FaResearchgate />;
    } else if (social.name === "orcid") {
      return <FaOrcid />;
    } else {
      return null;
    }
  };

  useEffect(() => {
    getTeams();
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Team | Emerging Tech 4 Health - AI-Powered Health Research
        </title>
        <meta
          name="description"
          content="Emerging Tech 4 Health is a platform dedicated to showcasing cutting-edge research in the health sector, powered by Artificial Intelligence. Explore the latest innovations, breakthroughs, and applications of AI in healthcare."
        />
      </Helmet>

      <Profile info={profInfo} open={isOpen} close={closeModal} />

      <div className="h-[28rem] xs:h-96 sm:h-96 lg:h-[35vh] xl:h-[46vh] 2xl:h-[48vh] w-full flex items-end bg-lightblue">
        <div className="h-auto w-full flex flex-col gap-y-10">
          <div className="flex flex-row gap-x-1 items-end justify-center">
            <h3 className="text-2xl text-grey font-bold font-sans text-center">
              Meet our
            </h3>
            <span className="text-6xl text-darkblue font-bold font-sans">
              Team
            </span>
          </div>
          <p className="text-base text-grey font-semibold font-sans text-center px-6 sm:px-10 md:px-20 lg:px-32 xl:px-48 2xl:px-72">
            Welcome to our team page! Our team is dedicated to pioneering
            advancements in preventive healthcare through the integration of
            artificial intelligence. Our diverse group of experts, researchers,
            and alumni collaborate to transform healthcare and improve lives.
          </p>
        </div>
      </div>

      <div className="h-auto w-full bg-lightblue py-44 px-4 sm:px-10 flex flex-col gap-y-24">
        {teams.length == 0 && loading && (
          <div className="min-h-screen w-full flex justify-center items-start">
            <img className="h-10 w-10" src={spinner} alt="loading spinner" />
          </div>
        )}

        {/* Scientific Team */}
        {teams &&
          !loading &&
          teams.map((team, index) => {
            const isResearchers = team.name.startsWith("Researchers");
            if (research == false && isResearchers) {
              setResearch(true);
            }
            const [researchers, group] = isResearchers
              ? team.name.split(" - ")
              : [];
            {
              if (!isResearchers) {
                return (
                  <div
                    key={index}
                    className="h-auto w-full bg-white rounded-lg px-4 sm:px-10 py-5 flex flex-col gap-y-4 border border-solid border-grey"
                  >
                    <h2 className="text-grey font-sans text-3xl text-center font-semibold">
                      {team.name}
                    </h2>

                    <div
                      className={`${
                        index == 0
                          ? "bg-[url('https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
                          : "bg-[url('https://images.unsplash.com/photo-1564951415682-4466397f7707?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8')]"
                      } bg-cover bg-no-repeat h-full w-full bg-slate-400 rounded-lg px-6 sm:px-12 md:px-16 xl:px-24 py-5`}
                    >
                      <Swiper
                        autoplay={{
                          delay: 2000,
                          disableOnInteraction: false,
                          pauseOnMouseEnter: true,
                        }}
                        spaceBetween={20}
                        loop={true}
                        mousewheel={true}
                        speed={800}
                        pagination={{ clickable: true }}
                        modules={[Mousewheel, Pagination, Navigation, Autoplay]}
                        className="mySwiper"
                        breakpoints={{
                          // when window width is >= 640px
                          640: {
                            slidesPerView: 1,
                          },
                          // when window width is >= 768px
                          768: {
                            slidesPerView: 2,
                          },
                          // when window width is >= 1024px
                          1024: {
                            slidesPerView: 2,
                          },
                          1280: {
                            slidesPerView: 3,
                          },
                          1536: {
                            slidesPerView: 4,
                          },
                        }}
                      >
                        {/* Card */}
                        {team.peoples.map((people, index) => (
                          <SwiperSlide
                            onClick={() => {
                              openModal(people);
                            }}
                            className="bg-white bg-opacity-0 py-7"
                            key={index}
                          >
                            <div className="h-full w-64 px-5 py-4 rounded-md bg-white bg-opacity-20 backdrop-blur-lg border border-solid border-white border-opacity-20 shadow-md shadow-grey flex flex-col gap-y-4 hover:-translate-y-2 transition duration-500 ease-in-out cursor-pointer">
                              <div className="h-48 w-full bg-sky-200 rounded-lg overflow-hidden">
                                <img
                                  className="h-full w-full object-cover"
                                  src={people.profilePic}
                                  alt="profile"
                                  loading="lazy"
                                />
                              </div>
                              <div className="flex flex-col gap-y-2 justify-between item-start">
                                <span className="font-sans w-full truncate text-base font-semibold">
                                  {people.name}
                                </span>
                                <div className="flex flex-row justify-between items-center gap-x-4">
                                  <span className="text-sm w-full truncate font-sans font-medium">
                                    {people.designation}
                                  </span>
                                  <div className="flex flex-row justify-center items-center gap-x-3">
                                    {people.socialLinks &&
                                      people.socialLinks
                                        .slice(0, 3)
                                        .map((social) => {
                                          return (
                                            <Link
                                              key={social._id}
                                              to={social.url}
                                            >
                                              <div className="h-6 w-6 bg-white bg-opacity-45 backdrop-blur-lg border border-solid border-lightgrey border-opacity-20 flex justify-center items-center rounded-md hover:bg-opacity-20 hover:text-darkblue">
                                                {handleIcon(social)}
                                              </div>
                                            </Link>
                                          );
                                        })}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                );
              }
            }
          })}

        {/* Researchers */}
        {teams && !loading && research && (
          <div className="h-auto w-full bg-white px-4 sm:px-10 py-5 rounded-lg flex flex-col gap-y-5 border border-solid border-grey">
            <h2 className="text-grey font-sans text-3xl text-center font-semibold">
              Researchers
            </h2>

            <div className="h-auto w-full flex flex-col gap-y-10">
              {/* Non Medical Group */}
              {teams &&
                !loading &&
                teams.map((team, index) => {
                  const isResearchers = team.name.startsWith("Researchers");
                  const [researchers, group] = isResearchers
                    ? team.name.split(" - ")
                    : [];
                  {
                    if (isResearchers) {
                      return (
                        <div className="h-auto w-full bg-lightblue rounded-lg px-4 sm:px-10 py-5 flex flex-col gap-y-4 border border-solid border-darkblue border-opacity-40">
                          <h2 className="text-grey font-sans text-2xl text-center font-semibold">
                            {group}
                          </h2>

                          <div className="bg-[url('https://images.unsplash.com/photo-1577138017060-8ed59846a432?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat h-full w-full bg-slate-400 rounded-lg px-6 sm:px-12 md:px-16 xl:px-24 py-5">
                            <Swiper
                              autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                              }}
                              spaceBetween={10}
                              loop={true}
                              mousewheel={true}
                              speed={800}
                              pagination={{ clickable: true }}
                              modules={[
                                Mousewheel,
                                Pagination,
                                Navigation,
                                Autoplay,
                              ]}
                              className="mySwiper"
                              breakpoints={{
                                // when window width is >= 640px
                                640: {
                                  slidesPerView: 1,
                                },
                                // when window width is >= 768px
                                768: {
                                  slidesPerView: 2,
                                },
                                // when window width is >= 1024px
                                1024: {
                                  slidesPerView: 2,
                                },
                                1280: {
                                  slidesPerView: 3,
                                },
                                1536: {
                                  slidesPerView: 4,
                                },
                              }}
                            >
                              {/* Card */}
                              {team.peoples.map((people, index) => (
                                <SwiperSlide
                                  onClick={() => {
                                    openModal(people);
                                  }}
                                  className="bg-white bg-opacity-0 py-7"
                                  key={index}
                                >
                                  <div className="h-full w-64 px-5 py-4 rounded-md bg-white bg-opacity-20 backdrop-blur-lg border border-solid border-white border-opacity-20 shadow-md shadow-grey flex flex-col gap-y-5 hover:-translate-y-2 transition duration-500 ease-in-out cursor-pointer">
                                    <div className="h-48 w-full bg-sky-200 rounded-lg overflow-hidden">
                                      <img
                                        className="h-full w-full object-cover"
                                        src={people.profilePic}
                                        alt="profile"
                                        loading="lazy"
                                      />
                                    </div>
                                    <div className="flex flex-col gap-y-2 justify-between item-start">
                                      <span className="font-sans w-full truncate text-base font-semibold">
                                        {people.name}
                                      </span>
                                      <div className="flex flex-row justify-between items-center gap-x-4">
                                        <span className="text-sm w-full truncate font-sans font-medium">
                                          {people.designation}
                                        </span>
                                        <div className="flex flex-row justify-center items-center gap-x-3">
                                          {people.socialLinks &&
                                            people.socialLinks
                                              .slice(0, 3)
                                              .map((social) => {
                                                return (
                                                  <Link
                                                    key={social._id}
                                                    to={social.url}
                                                  >
                                                    <div className="h-6 w-6 bg-white bg-opacity-45 backdrop-blur-lg border border-solid border-lightgrey border-opacity-20 flex justify-center items-center rounded-md hover:bg-opacity-20 hover:text-darkblue">
                                                      {handleIcon(social)}
                                                    </div>
                                                  </Link>
                                                );
                                              })}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </SwiperSlide>
                              ))}
                            </Swiper>
                          </div>
                        </div>
                      );
                    }
                  }
                })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
