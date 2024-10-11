import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import lp1 from "../Photos/Home/landingPage/lp1.jpg";
import { FaPlus } from "react-icons/fa6";
import { fetchSingleProject } from "../services/fetchData";
import { getSinglePost } from "../services/operations/postAPI";

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
  console.log(id);

  const [parameter, setparameter] = useState({ rotate: 0 });

  const [menu, setmenu] = useState("research");

  const [project, setProject] = useState(null);
  const [subPost, setSubPost] = useState(null);
  const [contributors, setContributors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const researchProgress = () => {
    if (parameter.rotate == 0) {
      setparameter({ rotate: 45 });
      gsap.to(".rp", { height: "auto", ease: "expo.inOut", duration: 0.5 });
    } else {
      setparameter({ rotate: 0 });
      gsap.to(".rp", { height: "2.5rem", ease: "expo.inOut", duration: 0.5 });
    }
  };

  const menuChange = (e) => {
    setmenu(e.target.innerText.toLowerCase());
  };

  const getSingleProject = async () => {
    try {
      const data = await getSinglePost(id, toast);
      if (data) {
        setProject(data);
        setSubPost(data.subPost);
        setContributors(data.contributors);
      }
    } catch (err) {
      setError("Failed to load teams");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSingleProject();
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

      <div className="h-[82vh] w-full flex items-end bg-lightblue">
        <div className="h-96 w-full relative flex flex-wrap items-end justify-start">
          <img className="h-full w-full object-cover" src={lp1} alt="error" />
          <h4 className="capitalize text-3xl sm:text-4xl lg:text-5xl px-4 sm:px-10 py-20 text-purewhite font-bold font-sans absolute">
            {title}
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
                <div className="w-full lg:w-7/12 h-auto lg:min-h-96 transition ease-in-out duration-500">
                  <div
                    className={`rp h-10 w-full bg-white px-4 pb-6 cursor-pointer overflow-hidden rounded-lg`}
                  >
                    <div className="flex flex-row justify-between items-center h-10">
                      <span className="text-sm text-grey font-semibold font-sans">
                        Contributed By - Rahul Lalwani, Akshada Telang
                      </span>
                      <FaPlus
                        onClick={researchProgress}
                        className={`text-xl hover:text-blue rotate-${parameter.rotate} transition ease-in-out duration-500`}
                      />
                    </div>
                    <p className="text-grey text-justify text-sm font-normal font-sans">
                      In our pursuit of developing an effective methodology for
                      kidney tumor segmentation and detection, we systematically
                      explored and implemented various state-of-the-art models
                      and frameworks. Commencing with a UNet-based approach, we
                      meticulously trained the model on the KiTS19 dataset
                      utilizing Kaggle's P100 GPU, overcoming initial challenges
                      related to memory optimization to attain a Dice score of
                      6%. Subsequently, our investigation delved into the
                      implementation of the MISCNN framework. While encountering
                      notable challenges pertaining to extended training
                      durations, we observed promising outcomes when afforded
                      adequate computational resources. Our exploration of the
                      MONAI framework yielded significant insights. Leveraging a
                      UNet model with the KiTS19 dataset, we achieved
                      commendable results following training iterations of 10
                      and 100 epochs. Furthermore, the development of a Patch
                      dataset augmented our training data, further enhancing
                      performance. Additionally, our scrutiny extended to the
                      nnU-Net framework, renowned for its robustness and
                      adaptability. Training the model over 100 epochs yielded
                      results closely aligning with ground truth labels.
                      Furthermore, our assessment encompassed the Total
                      Segmentation tool, demonstrating potential for
                      segmentation across diverse classes in CT images with a
                      user-friendly interface. Lastly, preliminary
                      investigations into the Segment Anything for Medical
                      Imaging (Med Sem) model showcased promising advancements,
                      particularly in fine-tuning processes, surpassing previous
                      segmentation methodologies. As our research progresses, we
                      remain committed to optimizing these models further and
                      exploring novel methodologies to advance kidney tumor
                      segmentation and detection capabilities.
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-5/12 h-96 sticky top-0 font-sans">
                  <Swiper
                    direction={"vertical"}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    loop={true}
                    mousewheel={true}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    modules={[Mousewheel, Pagination, Autoplay]}
                    className="mySwiper rounded-lg overflow-hidden"
                  >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
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

          {/* contributors */}
          <div
            className={`${
              menu === "contributors" ? "grid grid-rows-1 md:grid-cols-2 2xl:grid-cols-3 gap-10" : "hidden"
            } w-full h-auto`}
          >
            {contributors &&
              contributors.map((profile) => {
                return (
                  <div
                    key={profile._id}
                    className="profile flex flex-col gap-y-4 justify-center items-center"
                  >
                    <div className="h-40 w-40 rounded-full border-2 border-grey overflow-hidden bg-blue">
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
