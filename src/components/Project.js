import React, { useState } from "react";
import { useParams } from "react-router-dom";
import about_us2 from "../Photos/Home/about_us2.png";
import lp1 from "../Photos/Home/landingPage/lp1.jpg";
import { FaPlus } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Project() {
  const params = useParams();
  const { title } = params;

  const [parameter, setparameter] = useState({ rotate: 0 });

  const [menu, setmenu] = useState("research");

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
    // alert(e.target.innerText.toLowerCase());
  };

  return (
    <>
      <div className="h-[82vh] w-full flex items-end bg-lightblue">
        <div className="h-96 w-full relative">
          <img className="h-full w-full object-cover" src={lp1} alt="error" />
          <h4 className="text-5xl text-purewhite font-bold font-sans bottom-32 left-16 absolute">
            {title}
          </h4>
        </div>
      </div>

      <div className="h-auto w-full bg-lightblue flex flex-row">
        <div className="left w-2/12 h-96 sticky top-0">
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

        <div className="right w-10/12 h-full px-10 py-32">

          {/* research */}
          <div
            className={`${
              menu === "research" ? "flex flex-col gap-y-20" : "hidden"
            }`}
          >
            <div className="research w-full h-auto">
              <div className="ro w-full h-auto flex flex-col gap-y-8">
                <h4 className="text-lg text-darkblue font-bold font-sans">
                  Research Objective
                </h4>
                <p className="text-grey font-bold text-justify opacity-95 font-sans">
                  We're pioneering a novel approach to kidney tumor detection
                  and segmentation, leveraging advanced computational
                  techniques. Our project aims to revolutionize medical imaging
                  analysis through the development of a sophisticated framework.
                  By exploring diverse datasets, we ensure the adaptability and
                  robustness of our methodology across various clinical
                  scenarios. Through rigorous evaluation, we'll validate the
                  accuracy and clinical relevance of our system, benchmarking it
                  against existing methods. Our ultimate goal is seamless
                  integration into clinical workflows, enhancing diagnostic
                  precision and treatment planning for improved patient
                  outcomes.
                </p>
              </div>
            </div>

            <div className="research w-full h-auto">
              <div className="ro w-full h-auto flex flex-col gap-y-8">
                <h4 className="text-lg text-darkblue font-bold font-sans">
                  Advancements in Kidney Tumor Assessment
                </h4>
                <p className="text-grey font-bold text-justify opacity-95 font-sans">
                  In this study, we developed and evaluated a computational
                  framework specifically designed for accurate kidney tumor
                  segmentation and detection, addressing a critical challenge in
                  healthcare. Leveraging cutting-edge techniques in medical
                  image analysis and machine learning, our primary objectives
                  included creating a novel framework, assessing its performance
                  on diverse datasets, and evaluating its accuracy and clinical
                  relevance. Through a thorough literature review, key
                  methodologies and trends in kidney tumor segmentation and
                  detection were identified, guiding our methodology. Advanced
                  techniques such as UNet, MIScnn, MONAI, and NNUnet were
                  employed, tailored for medical image analysis. Experimental
                  results showcased promising outcomes, achieving high accuracy
                  in segmenting kidney tumors from CT scans using the KiTS19
                  dataset. These findings underscore the transformative
                  potential of deep learning in advancing medical imaging
                  analysis, with continued research promising further
                  enhancements in patient care.
                </p>
              </div>
            </div>

            <div className="research w-full h-auto">
              <div className="ro w-full h-auto flex flex-col gap-y-8">
                <h4 className="text-lg text-darkblue font-bold font-sans">
                  Kidney Tumor Research Hypothesis
                </h4>
                <p className="text-grey font-bold text-justify opacity-95 font-sans">
                  Through harnessing advanced deep learning architectures,
                  including UNet, MIScnn, MONAI, and NNUnet, we hypothesize the
                  feasibility of constructing resilient computational
                  methodologies for kidney tumor segmentation and detection.
                  These methodologies are envisioned to bridge the divide
                  between theoretical research findings and practical
                  implementation within healthcare domains, thereby fostering
                  heightened precision and efficiency in kidney tumor diagnosis.
                  Additionally, we envisage our developed framework to furnish
                  valuable insights into the scalability and versatility of
                  these sophisticated architectures in tackling intricate
                  medical imaging obstacles, thereby culminating in improved
                  patient care outcomes
                </p>
              </div>
            </div>

            <div className="w-full h-auto bg-slate-200 py-6 flex flex-col gap-y-10 rounded-lg">
              <h3 className="text-2xl text-darkblue font-semibold font-sans text-center">
                Research Progress
              </h3>
              <div className="min-h-96 w-full flex flex-row px-2 gap-x-2">
                <div className="w-7/12 min-h-96 transition ease-in-out duration-500">
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
                <div className="w-5/12 h-96 sticky top-0 font-sans">
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

            <div className="research w-full h-auto">
              <div className="ro w-full h-auto flex flex-col gap-y-8">
                <h4 className="text-lg text-darkblue font-bold font-sans">
                  Impact of the Research
                </h4>
                <p className="text-grey font-bold text-justify opacity-95 font-sans">
                  Clinical Impact: The development of a robust computational
                  framework for kidney tumor segmentation and detection presents
                  a substantial opportunity to revolutionize clinical practice.
                  Healthcare professionals stand to benefit significantly from
                  the implementation of these advanced tools, as they hold the
                  potential to enhance the accuracy and efficiency of kidney
                  tumor diagnosis. This advancement could facilitate earlier
                  detection, enable the formulation of more tailored treatment
                  plans, and ultimately contribute to improved patient outcomes.
                  <br></br>
                  Reduction of Manual Workload: Traditional manual segmentation
                  methods are burdened by time constraints and subjectivity,
                  leading to variability in results. The integration of
                  automated segmentation algorithms offers a viable solution,
                  markedly reducing the workload on radiologists and clinicians.
                  This shift allows healthcare professionals to allocate more
                  time and attention to patient care and result interpretation,
                  rather than being consumed by labor-intensive segmentation
                  tasks.
                  <br></br>
                  Standardization and Consistency: Automated segmentation
                  algorithms promise a paradigm shift towards standardized and
                  reproducible analysis of medical imaging data. By providing a
                  consistent approach to tumor delineation, these algorithms can
                  mitigate inter-observer variability across healthcare
                  institutions and radiologists. Consequently, this
                  standardization enhances the reliability of diagnosis and
                  informs more confident treatment decisions.
                  <br></br>
                  Advancements in Medical Imaging: The adoption of sophisticated
                  deep learning architectures such as UNet, MIScnn, MONAI, and
                  NNUnet represents a significant stride forward in medical
                  imaging research. These architectures not only bolster kidney
                  tumor segmentation but also hold promise for broader
                  application across diverse healthcare domains. The
                  adaptability of these methodologies opens avenues for
                  innovation in medical imaging, fostering advancements that may
                  benefit a wide spectrum of healthcare applications.
                  <br></br>
                  Continuation of Research: The findings gleaned from this
                  project lay a solid foundation for continued exploration and
                  development within the realm of medical imaging and
                  computational healthcare. Ongoing research endeavors stand to
                  refine existing methodologies, paving the way for even more
                  sophisticated algorithms and tools. This iterative process
                  underscores a commitment to advancing the accuracy and
                  efficacy of medical image analysis, ultimately enhancing
                  patient care on a global scale.
                </p>
              </div>
            </div>
          </div>

          {/* contributors */}
          <div
            className={`${
              menu === "contributors" ? "grid grid-cols-3" : "hidden"
            } w-full h-auto`}
          >
            <div className="profile flex flex-col gap-y-4 justify-center items-center">
              <div className="h-40 w-40 rounded-full border-2 border-grey overflow-hidden bg-blue">
                <img
                  className="h-full w-full object-cover"
                  src={
                    "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt="error"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-grey font-medium font-sans text-base">Name</span>
                <span className="text-grey font-medium font-sans text-sm">Degree</span>
                <span className="text-grey font-medium font-sans text-sm">
                  College Name
                </span>
              </div>
            </div>

            <div className="profile flex flex-col gap-y-4 justify-center items-center">
              <div className="h-40 w-40 rounded-full overflow-hidden bg-blue border-2 border-grey">
                <img
                  className="h-full w-full object-cover"
                  src={
                    "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt="error"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-grey font-medium font-sans text-base">Name</span>
                <span className="text-grey font-medium font-sans text-sm">Degree</span>
                <span className="text-grey font-medium font-sans text-sm">
                  College Name
                </span>
              </div>
            </div>
          </div>
          
          {/* faq's */}
          <div className={`${
              menu === "faq's" ? "flex flex-col gap-y-10" : "hidden"
            } w-full h-auto bg-slate-200 py-10 rounded-lg`}>
            {/* <!-- component --> */}
            <h2 className="text-center text-xl text-darkblue font-semibold font-sans">For Any Query - Reach Out to Us </h2>
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
