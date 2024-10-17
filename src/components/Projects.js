import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { fetchProject } from "../services/fetchData";
import spinner from "../Photos/Preloader/spinner.gif";
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
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const animationRef = useRef(null);

  useEffect(() => {
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

  const getProjects = async () => {
    setIsLoading(true);
    try {
      const data = await fetchProject();
      setProjects(data.posts);
    } catch (err) {
      setError("Failed to load teams");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Projects | Emerging Tech 4 Health - AI-Powered Health Research
        </title>
        <meta
          name="description"
          content="Emerging Tech 4 Health is a platform dedicated to showcasing cutting-edge research in the health sector, powered by Artificial Intelligence. Explore the latest innovations, breakthroughs, and applications of AI in healthcare."
        />
      </Helmet>

      <div className="project h-auto w-full bg-lightblue pt-16 opacity-100">
        <div className="bg-lightblue h-auto w-full flex flex-col items-center gap-y-1">
          {projects.length == 0 && isLoading && (
            <div className="w-full min-h-screen px-4 py-36 sm:py-36 lg:py-0 lg:px-6 xl:px-10 2xl:px-16 flex items-center justify-center">
              <img className="h-10 w-10" src={spinner} alt="loading spinner" />
            </div>
          )}
          {projects && !isLoading && (
            <div className="projects w-full h-auto px-4 py-36 sm:py-36 lg:py-0 lg:px-6 xl:px-10 2xl:px-16 flex flex-row">
              <div className="left w-full sm:w-full lg:w-1/2 h-auto flex items-center justify-center">
                <div className="projects-text flex flex-col gap-y-36">
                  {projects &&
                    projects.map((project, index) => (
                      <div
                        key={project._id}
                        className="h-auto sm:h-auto lg:h-[100vh] project-info flex flex-col justify-center items-center sm:items-center lg:items-start gap-y-10"
                      >
                        <div className="flex sm:flex lg:hidden h-96 w-auto">
                          <div className="w-96 xs:w-[30rem] sm:w-[38rem] h-96 sm:h-96  px-4 sm:px-4">
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
                          <h3 className="text-2xl sm:text-4xl text-grey font-bold font-sans capitalize">
                            {project.title}
                          </h3>
                          <span className="text-base text-grey font-sans text-justify">
                            {project.shortDesc.length > 600
                              ? project.shortDesc.substring(0, 600) + "..."
                              : project.shortDesc}
                          </span>
                        </div>
                        <Link
                          to={"/Project/" + project._id + "/" + project.title}
                        >
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
                    useref={animationRef}
                    className="right-photo h-[28rem] xl:w-auto 2xl:w-auto relative"
                  >
                    {projects &&
                      projects?.map((project, index) => (
                        <div
                          key={project._id}
                          className="right-photo-item w-full h-full py-5 px-10 absolute"
                        >
                          <img
                            className="h-full w-full object-cover rounded-lg block border-2 border-grey"
                            src={project.image}
                            alt="Project Image"
                            loading="lazy"
                          />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
