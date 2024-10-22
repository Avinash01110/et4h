import React, { useEffect, useState } from "react";
import Seo from "../utils/seo.js";
import seoData from "../utils/seoConfig.js";
import { Link } from "react-router-dom";
import research from "../Photos/Publications/research.png";
import { IoIosArrowRoundUp } from "react-icons/io";
import { LineWave } from "react-loader-spinner";
import { fetchPublications } from "../services/fetchData";

export default function Publications() {
  const [publication, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPublications = async () => {
      try {
        const data = await fetchPublications();
        setPublications(data.publications);
      } catch (error) {
        setError("Failed to load teams");
      } finally {
        setLoading(false);
      }
    };

    getPublications();
  }, []);

  const publications = [
    {
      title:
        "Actuator and sensor fault isolation in a class of nonlinear dynamical systems",
      authors: "Hamed Tirandaz, Christodoulos Keliris, Marios M. Polycarpou",
      publication: "Publication name",
      link: "#",
    },
    {
      title:
        "Actuator and sensor fault isolation in a class of nonlinear dynamical systems",
      authors: "Hamed Tirandaz, Christodoulos Keliris, Marios M. Polycarpou",
      publication: "Publication name",
      link: "#",
    },
    {
      title:
        "Actuator and sensor fault isolation in a class of nonlinear dynamical systems",
      authors: "Hamed Tirandaz, Christodoulos Keliris, Marios M. Polycarpou",
      publication: "Publication name",
      link: "#",
    },
    {
      title:
        "Actuator and sensor fault isolation in a class of nonlinear dynamical systems",
      authors: "Hamed Tirandaz, Christodoulos Keliris, Marios M. Polycarpou",
      publication: "Publication name",
      link: "#",
    },
  ];

  return (
    <>
      <Seo {...seoData.publications} />

      <div className="pt-28 sm:pt-28 sm:h-auto md:h-[35rem] lg:h-[32rem] w-full flex items-end bg-indigo-100/50 pb-14 border-b-2 border-solid border-darkblue">
        <div className="h-auto sm:w-full md:w-3/5 lg:w-3/5 xl:w-3/5 2xl:w-3/5 flex flex-wrap flex-col gap-y-10 px-6 sm:px-20">
          <div className="flex flex-wrap flex-row gap-x-4 items-end justify-start">
            <h1 className="text-4xl text-grey font-bold font-sans text-center">
              Our
            </h1>
            <span className="text-5xl text-darkblue font-bold font-sans">
              Publications
            </span>
          </div>
          <p className="text-lg text-grey font-natural font-sans text-justify">
            Discover the latest insights on our publication page! Here at
            Emerging Tech 4 Health, we are committed to advancing preventive
            healthcare through the innovative use of artificial intelligence.
            Our team of diverse experts, researchers, and alumni work together
            to publish groundbreaking research and transform healthcare for the
            better.
          </p>
        </div>
        <div className="hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex md:h-80 lg:h-96 w-2/5 overflow-hidden">
          <img
            className="h-full w-full object-contain"
            src={research}
            alt="research"
            loading="lazy"
          />
        </div>
      </div>

      <div className="h-auto w-full px-6 sm:px-20 md:px-20 lg:px-20 xl:px-20 2xl:px-20 py-28 bg-[url('https://static.vecteezy.com/system/resources/thumbnails/013/717/509/small_2x/school-education-and-science-doodle-background-free-vector.jpg')] relative">
        <div className="h-full w-full absolute top-0 left-0 z-10 bg-white/90"></div>
        <div className="h-auto w-full flex flex-wrap items-center justify-center sm:justify-center md:justify-center lg:justify-between xl:justify-between 2xl:justify-between flex-row gap-y-12 gap-x-12 z-20 relative">
          {publication &&
            !loading &&
            publication.map((publication, index) => (
              <div
                key={index}
                className="h-auto w-80 bg-white border-t-4 border-solid border-grey py-4 flex flex-col gap-y-5"
              >
                <div className="flex flex-col gap-y-2">
                  <Link to={publication.publicationLink}>
                    <h2 className="text-xl text-justify text-grey font-sans font-medium hover:underline hover:underline-offset-4 decoration-orange-500 transition-all ease-in-out duration-300">
                      {publication.title.length > 50
                        ? `${publication.title.slice(0, 50)}...`
                        : publication.title}
                    </h2>
                  </Link>
                  <span className="text-sm text-grey font-sans truncate capitalize">
                    {publication.authors}
                  </span>
                  <span className="text-sm text-grey font-semibold font-sans truncate uppercase">
                    {publication.publicationType}
                  </span>
                </div>
                <Link
                  to={publication.publicationLink}
                  className="flex flex-row justify-center items-center -gap-x-2 group cursor-pointer w-fit"
                >
                  <button className="text-sm font-sans underline underline-offset-2 group-hover:bg-white group-hover:text-darkblue transition ease-in-out duration-500">
                    {" "}
                    Learn More
                  </button>
                  <IoIosArrowRoundUp className="text-3xl text-grey font-sans font-extralight rotate-[35deg] group-hover:rotate-0 group-hover:text-darkblue transition ease-in-out duration-500" />
                </Link>
              </div>
            ))}

          {loading && (
            <div className="w-full h-auto flex justify-center items-center">
              <LineWave
                visible={true}
                height="120"
                width="120"
                color="#084df2"
                ariaLabel="line-wave-loading"
                wrapperStyle={{}}
                wrapperClass=""
                firstLineColor=""
                middleLineColor=""
                lastLineColor=""
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
