import React, { useRef } from "react";
import { Link } from "react-router-dom";
import liverimage from "../Photos/Projects/liverimage.png";
import kidneyimage from "../Photos/Projects/kidneyimage.png";
import breastimage from "../Photos/Projects/breastimage.png";
import ECGimage from "../Photos/Projects/ECGimage.png";
import EEGimage from "../Photos/Projects/EEGimage.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Projects() {
  const Projects = [
    {
      index: "01",
      title: "Liver Tumor Segmentation",
      description: "description",
      link: "/Project",
      image: liverimage,
    },
    {
      index: "02",
      title: "Kidney Tumor Segmentation",
      description: "description",
      link: "/Project",
      image: kidneyimage,
    },
    {
      index: "03",
      title: "Breast Tumor Segmentation",
      description: "description",
      link: "/Project",
      image: breastimage,
    },
    {
      index: "04",
      title: "Electroencephalogram (EEG)",
      description: "description",
      link: "/Project",
      image: EEGimage,
    },
    {
      index: "05",
      title: "Electrocardiogram (ECG)",
      description: "description",
      link: "/Project",
      image: ECGimage,
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

  const animationRef = useRef(null);

  useGSAP(() => {
    const rightPhotoItems = gsap.utils.toArray(".right-photo-item");

    rightPhotoItems.forEach(function (item, index) {
      item.style.zIndex = rightPhotoItems.length - index;
    });

    gsap.set(".right-photo-item", {
      clipPath: "inset(0px 0px 0px 0px)",
    });

    animationRef.current = gsap.to(".right-photo-item:not(:last-child)", {
      clipPath: "inset(0px 0px 100% 0px)",
      stagger: 0.5,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: ".projects",
      scroller: "body",
      start: "top top",
      end: "bottom bottom",
      animation: animationRef.current,
      scrub: 1,
    });

    // page

    let tl = gsap.timeline();

    let fs = document.getElementsByClassName("fs");
    let elem = document.getElementsByClassName("elem");

    function height() {
      gsap.set(fs, {
        height: 0,
      });
    }

    tl.to(fs, {
      height: "100%",
      duration: 1.5,
      ease: "expo.inOut",
      onComplete: height(),
    });

    tl.to(elem, {
      width: "100%",
      duration: 1.5,
      ease: "expo.inOut",
    });

    // tl.to(".whiteelem", {
    //   height: "100%",
    //   duration: 2,
    //   delay: -1.8,
    //   ease: "expo.inOut",
    // });

    tl.to(".loader", {
      height: 0,
      duration: 1.5,
      ease: "expo.inOut",
    });

    tl.to(".project", {
      opacity: 1,
      duration: 0.5,
      ease: "expo.in",
    });
  });

  return (
    <>
      {/* <div className="loader h-full w-full z-50 top-0 left-0 fixed">
        <div className="fs h-0 w-full bg-lightblue absolute flex flex-col justify-center items-center overflow-hidden">
        </div>
        <div className="elem h-full w-0 bg-indigo-400 absolute left-0"></div>
        <div className="whiteelem h-0 w-full bg-indigo-200 absolute bottom-0"></div>
      </div> */}

      <div className="project h-auto w-full bg-lightblue pt-16 opacity-100">
        {/* Active Project */}
        <div className="bg-lightblue h-auto w-full flex flex-col items-center gap-y-1">
          {/* <h2 className="text-5xl text-blue font-bold uppercase [text-shadow:2px_4px_5px_var(--tw-shadow-color)] shadow-grey">
            Active Projects
          </h2> */}

          <div className="projects w-full h-auto px-4 py-36 sm:py-36 lg:py-0 lg:px-6 xl:px-10 2xl:px-16 flex flex-row">
            <div className="left w-full sm:w-full lg:w-1/2 h-auto flex items-center justify-center">
              <div className="projects-text flex flex-col gap-y-36">
                {Projects.map((project, index) => (
                  <div
                    key={index}
                    className="h-auto sm:h-auto lg:h-[100vh] project-info flex flex-col justify-center items-center sm:items-center lg:items-start gap-y-10"
                  >
                    <div className="flex sm:flex lg:hidden h-96 w-auto">
                      <div
                        className="w-96 xs:w-[30rem] sm:w-[38rem] h-96 sm:h-96  px-4 sm:px-4"
                      >
                        <img
                          className="h-full w-full object-cover rounded-lg block border-2 border-grey"
                          src={project.image}
                          alt="error"
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap flex-col w-full sm:w-full lg:w-auto px-6 sm:px-6 lg:px-0 gap-y-1">
                      {/* <span className="text-2xl text-grey font-semibold font-sans">
                        {project.index}
                      </span> */}
                      <h3 className="text-2xl sm:text-4xl text-grey font-bold font-sans">
                        {project.title}
                      </h3>
                      <span className="text-base text-grey font-sans">
                        {project.description}
                      </span>
                    </div>
                    <Link to={project.link + "/" + project.title}>
                      <button className="button bg-blue text-[#FFFFFF] py-2 px-3 rounded-lg text-sm font-medium font-sans active:bg-blue hover:bg-darkblue hover:shadow-md hover:shadow-lightgrey transition ease-in-out duration-300">
                        View More
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="right hidden sm:hidden lg:flex w-1/2 h-auto">
              <div className="right-b1 flex flex-col justify-center sticky top-0 w-full h-[100vh]">
                <div
                  useRef={animationRef}
                  className="right-photo h-[28rem] xl:w-auto 2xl:w-auto relative"
                >
                  {Projects.map((project, index) => (
                    <div
                      key={index}
                      className="right-photo-item w-full h-full py-5 px-10 absolute"
                    >
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
        </div>
      </div>
    </>
  );
}
