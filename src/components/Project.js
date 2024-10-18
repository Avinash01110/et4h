import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import lp1 from "../Photos/Home/landingPage/lp1.jpg";
import spinner from "../Photos/Preloader/spinner.gif";
import { FaPlus } from "react-icons/fa6";
import { getSinglePost } from "../services/operations/postAPI";
import { getResearchProgress } from "../services/operations/researchProgressAPI";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import toast from "react-hot-toast";
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Project() {
  const params = useParams();
  const { id, title } = params;

  const [parameters, setParameters] = useState({});

  const [menu, setmenu] = useState("research");

  const [project, setProject] = useState([]);
  const [subPost, setSubPost] = useState([]);
  const [research, setResearch] = useState([]);
  const researchImages = [];
  const [contributors, setContributors] = useState(null);
  const [singleProjectLoading, setSingleProjectLoading] = useState(false);
  const [researchLoading, setResearchLoading] = useState(false);
  const [error, setError] = useState("");

  const researchProgress = (id) => {
    setParameters((prevState) => {
      const newRotation = prevState[id]?.rotate === 45 ? 0 : 45;
      const newState = { ...prevState, [id]: { rotate: newRotation } };

      const targetClass = `.rp-${id}`;
      const targetHeight = newRotation === 45 ? "auto" : "2.5rem";
      gsap.to(targetClass, {
        height: targetHeight,
        ease: "expo.inOut",
        duration: 0.5,
      });

      return newState;
    });
  };

  const menuChange = (e) => {
    setmenu(e.target.innerText.toLowerCase());
  };

  const getSingleProject = async () => {
    setSingleProjectLoading(true);
    try {
      const data = await getSinglePost(id, toast);
      if (data) {
        setProject(data);
        setSubPost(data.subPost);
        setContributors(data.contributors);
      }
    } catch (err) {
      setError("Failed to load project");
    } finally {
      setSingleProjectLoading(false);
    }
  };

  const getResearch = async () => {
    setResearchLoading(true);
    try {
      const data = await getResearchProgress(id);
      if (data) {
        setResearch(data);
      }
    } catch (err) {
      setError("Failed to load research progress");
    } finally {
      setResearchLoading(false);
    }
  };

  useEffect(() => {
    getSingleProject();
    getResearch();
    setParameters({});
  }, []);

  return (
    <>
      <Helmet>
        <title>
          {title} | Emerging Tech 4 Health - AI-Powered Health Research
        </title>
        <meta
          name="description"
          content="Emerging Tech 4 Health is a platform dedicated to showcasing cutting-edge research in the health sector, powered by Artificial Intelligence. Explore the latest innovations, breakthroughs, and applications of AI in healthcare."
        />
      </Helmet>

      <div className="pt-20 lg:pt-0 h-auto w-full flex items-end bg-lightblue">
        <div className="h-[25rem] md:h-[28rem] 2xl:h-[32rem] w-full relative flex flex-wrap items-end justify-start">
          <img className="h-full w-full object-cover" src={lp1} alt="error" />
          <h4 className="capitalize text-3xl sm:text-4xl lg:text-5xl px-4 sm:px-10 py-20 text-purewhite font-bold font-sans absolute">
            {project ? project.title : ""}
          </h4>
        </div>
      </div>

      <div className="h-auto w-full bg-lightblue flex flex-col lg:flex-row">
        {/* mobile side menu */}
        <div className="flex flex-row items-start justify-center gap-6 xs:gap-10 sm:gap-16 md:gap-20 lg:hidden w-full h-10 my-16 border-t-2 border-solid border-grey/40">
          <div
            onClick={menuChange}
            className={`flex justify-center items-center group rounded-b-lg border-t-2 border-solid transition-all duration-300 ease-in-out ${
              menu === "research" ? "border-darkblue" : ""
            }`}
          >
            <button
              className={`font-sans text-sm md:text-base px-1 py-2 font-semibold hover:bg-lightblue transition-all duration-300 ease-in-out w-full h-full ${
                menu === "research"
                  ? "text-darkblue"
                  : "text-grey group-hover:text-darkblue"
              }`}
            >
              Research
            </button>
          </div>
          <div
            onClick={menuChange}
            className={`flex justify-center items-center group rounded-b-lg border-t-2 border-solid transition-all duration-300 ease-in-out ${
              menu === "contributors" ? "border-darkblue" : ""
            }`}
          >
            <button
              className={`font-sans px-1 py-2 text-sm md:text-base font-semibold hover:bg-lightblue transition-all duration-300 ease-in-out w-full h-full ${
                menu === "contributors"
                  ? "text-darkblue"
                  : "text-grey group-hover:text-darkblue"
              }`}
            >
              Contributors
            </button>
          </div>
          <div
            onClick={menuChange}
            className={`flex justify-center items-center group rounded-b-lg border-t-2 border-solid transition-all duration-300 ease-in-out ${
              menu === "faq's" ? "border-darkblue" : ""
            }`}
          >
            <button
              className={`font-sans px-1 py-2 text-sm md:text-base font-semibold hover:bg-lightblue transition-all duration-300 ease-in-out w-full h-full ${
                menu === "faq's"
                  ? "text-darkblue"
                  : "text-grey group-hover:text-darkblue"
              }`}
            >
              FAQ's
            </button>
          </div>
        </div>

        <div className="left hidden lg:flex w-2/12 h-96 sticky top-0">
          <div className="menu flex flex-col items-start gap-y-2 px-6 py-36">
            <div
              onClick={menuChange}
              className={`text-base font-bold font-sans border-b border-black cursor-pointer ${
                menu === "research"
                  ? "text-blue"
                  : "text-grey hover:text-blue transition ease-in-out duration-300"
              }`}
            >
              Research
            </div>
            <div
              onClick={menuChange}
              className={`text-base font-bold font-sans border-b border-black cursor-pointer ${
                menu === "contributors"
                  ? "text-blue"
                  : "text-grey hover:text-blue transition ease-in-out duration-300"
              } hover:text-blue transition ease-in-out duration-300`}
            >
              Contributors
            </div>
            <div
              onClick={menuChange}
              className={`text-base font-bold font-sans border-b border-black cursor-pointer ${
                menu === "faq's"
                  ? "text-blue"
                  : "text-grey hover:text-blue transition ease-in-out duration-300"
              }`}
            >
              FAQ's
            </div>
          </div>
        </div>

        <div className="right w-full lg:w-10/12 h-full px-4 sm:px-6 md:px-10 pt-6 lg:pt-32 pb-32">
          {/* research */}

          {subPost.length == 0 && singleProjectLoading && (
            <div className="flex items-center justify-center">
              <img className="h-10 w-10" src={spinner} alt="loading spinner" />
            </div>
          )}
          {subPost && !singleProjectLoading && (
            <div
              className={`${
                menu === "research" ? "flex flex-col gap-y-20" : "hidden"
              }`}
            >
              {subPost &&
                subPost.slice(0, subPost.length - 1).map((post) => {
                  return (
                    <div key={post._id} className="research w-full h-auto">
                      <div className="ro w-full h-auto flex flex-col gap-y-8">
                        <h4 className="capitalize text-lg text-darkblue font-bold font-sans">
                          {post.sectionName}
                        </h4>
                        <p className="text-grey font-bold text-justify opacity-95 font-sans">
                          {post.subSectionContent}
                        </p>
                      </div>
                    </div>
                  );
                })}

              {/* Research Progress */}
              <div className="w-full h-auto bg-slate-200 py-6 flex flex-col gap-y-10 rounded-lg">
                <h3 className="text-2xl text-darkblue font-semibold font-sans text-center">
                  Research Progress
                </h3>
                <div className="min-h-96 w-full flex flex-col-reverse lg:flex-row px-2 gap-2">
                  <div className="flex flex-col gap-2 w-full lg:w-7/12 h-auto lg:min-h-96 transition ease-in-out duration-500">
                    {research &&
                      research.map((research) => {
                        research.imageUrls.map((image) => {
                          researchImages.push(image);
                        });
                        return (
                          <div
                            key={research._id}
                            className={`rp-${research._id} h-10 w-full bg-white px-4 py-2 cursor-pointer rounded-lg flex flex-col gap-2 overflow-hidden`}
                          >
                            <div
                              className={`flex flex-row gap-3 justify-between items-start h-auto`}
                            >
                              <span
                                className={`w-full text-sm text-grey font-semibold font-sans transition-all ease-in-out duration-300 ${
                                  parameters[research._id]?.rotate == 45
                                    ? ""
                                    : "truncate"
                                }`}
                              >
                                Contributed By -{" "}
                                {research.contributors &&
                                  research.contributors
                                    .map((contributor) => contributor.name)
                                    .join(", ")}
                              </span>
                              <FaPlus
                                onClick={() => researchProgress(research._id)}
                                className={`w-4 text-xl hover:text-blue rotate-${
                                  parameters[research._id]?.rotate || 0
                                } transition ease-in-out duration-500`}
                              />
                            </div>
                            <div>
                              <p className="text-grey text-justify text-sm font-normal font-sans">
                                {research.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                  </div>

                  <div className="w-full lg:w-5/12 h-96 lg:sticky lg:top-0 font-sans">
                    <Swiper
                      key={researchImages ? researchImages.length : "no-images"}
                      direction={"vertical"}
                      autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                      }}
                      spaceBetween={30}
                      loop={true}
                      mousewheel={true}
                      slidesPerView={1}
                      pagination={{ clickable: true }}
                      modules={[Mousewheel, Pagination, Autoplay]}
                      className="mySwiper"
                    >
                      {researchImages &&
                        researchImages.map((image, index) => {
                          return (
                            <SwiperSlide key={index}>
                              <div className="flex justify-center items-center rounded-lg overflow-hidden">
                                <img
                                  className="object-contain"
                                  src={image}
                                  alt="Research Images"
                                  style={{
                                    width: "auto",
                                    height: "auto",
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                  }}
                                />
                              </div>
                            </SwiperSlide>
                          );
                        })}
                    </Swiper>
                  </div>
                </div>
              </div>

              {subPost &&
                subPost.slice(subPost.length - 1).map((post) => {
                  return (
                    <div key={post._id} className="research w-full h-auto">
                      <div className="ro w-full h-auto flex flex-col gap-y-8">
                        <h4 className="text-lg text-darkblue font-bold font-sans">
                          {post.sectionName}
                        </h4>
                        <p className="text-grey font-bold text-justify opacity-95 font-sans">
                          {post.subSectionContent}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}

          {/* contributors */}
          <div
            className={`${
              menu === "contributors"
                ? "grid grid-rows-1 md:grid-cols-2 2xl:grid-cols-3 gap-10"
                : "hidden"
            } w-full h-auto`}
          >
            {contributors &&
              contributors.map((profile) => {
                return (
                  <div
                    key={profile._id}
                    className="profile flex flex-col gap-y-4 justify-center items-center"
                  >
                    <div className="h-40 w-40 rounded-full border-2 border-grey overflow-hidden bg-lightblue">
                      <img
                        className="h-full w-full object-cover"
                        src={profile.profilePic}
                        alt="error"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-grey font-medium font-sans text-base">
                        {profile.name}
                      </span>
                      <span className="text-center text-grey font-medium font-sans text-sm">
                        {profile.qualifications.length > 40
                          ? profile.qualifications.slice(0, 40) + "..."
                          : profile.qualifications}
                      </span>
                      <span className="text-center text-grey font-medium font-sans text-sm">
                        {profile.designation.length > 40
                          ? profile.designation.slice(0, 40) + "..."
                          : profile.designation}
                      </span>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* faq's */}
          <div
            className={`${
              menu === "faq's" ? "flex flex-col gap-y-10" : "hidden"
            } w-full h-auto bg-slate-200 px-4 py-10 rounded-lg`}
          >
            {/* <!-- component --> */}
            <h2 className="text-center text-xl text-darkblue font-semibold font-sans">
              For Any Query - Reach Out to Us{" "}
            </h2>
            <div className="flex items-center justify-center">
              <div className="mx-auto w-full max-w-[550px]">
                {/* action="https://formbold.com/s/FORM_ID" */}
                <div>
                  <div className="mb-5">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-base font-medium font-sans text-[#07074D]"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium font-sans text-[#6B7280] outline-none focus:border-darkblue focus:shadow-md"
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-base font-medium font-sans text-[#07074D]"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="example@domain.com"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium font-sans text-[#6B7280] outline-none focus:border-darkblue focus:shadow-md"
                    />
                  </div>
                  {/* <div className="mb-5">
                    <label
                      htmlFor="subject"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Enter your subject"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div> */}
                  <div className="mb-5">
                    <label
                      htmlFor="message"
                      className="mb-3 block text-base font-medium font-sans text-[#07074D]"
                    >
                      Message
                    </label>
                    <textarea
                      rows="4"
                      name="message"
                      id="message"
                      placeholder="Type your message"
                      className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium font-sans text-[#6B7280] outline-none focus:border-darkblue focus:shadow-md"
                    ></textarea>
                  </div>
                  <div>
                    <button className="hover:shadow-form rounded-md bg-blue py-2 px-4 text-base font-semibold font-sans text-white outline-none active:bg-blue hover:scale-90 hover:bg-darkblue hover:shadow-md hover:shadow-lightgrey transition ease-in-out duration-300">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
