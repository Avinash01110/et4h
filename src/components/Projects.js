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
  });

  return (
    <>
      <div className="h-auto w-full bg-lightblue pt-16">
        {/* Active Project */}
        <div className="border-b-2 border-grey bg-lightblue h-auto w-full flex flex-col items-center gap-y-1">
          {/* <h2 className="text-5xl text-blue font-bold uppercase [text-shadow:2px_4px_5px_var(--tw-shadow-color)] shadow-grey">
            Active Projects
          </h2> */}

          <div className="projects w-full h-auto px-16 flex flex-row">
            <div className="left w-1/2 h-auto flex items-center justify-center">
              <div className="projects-text">
                {Projects.map((project, index) => (
                  <div
                    key={index}
                    className="h-[100vh] project-info flex flex-col justify-center gap-y-10"
                  >
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
