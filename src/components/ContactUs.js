import React from "react";
import { Link } from "react-router-dom";
import Seo from "../utils/seo.js";
import seoData from "../utils/seoConfig.js";
import { BsChatText } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { BiPhoneCall } from "react-icons/bi";
import {
  FaGithub,
  FaYoutube,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactUs = () => {
  
  const socialMedia = [
    {
      name: "Github",
      link: "https://github.com/EmergingTech4Health?tab=repositories",
      icon: FaGithub,
    },
    {
      name: "youtube",
      link: "/",
      icon: FaYoutube,
    },
    {
      name: "x",
      link: "https://x.com/EmergHealthTech",
      icon: FaXTwitter,
    },
    {
      name: "linkedin",
      link: "/",
      icon: FaLinkedin,
    },
    {
      name: "instagram",
      link: "/",
      icon: FaInstagramSquare,
    },
  ];

  return (
    <>
      <Seo {...seoData.contactus} />
      <div className="h-auto md:h-[68rem] w-full bg-lightblue py-32 px-4 md:px-6">
        <div className="h-full w-full flex flex-col md:flex-row rounded-lg overflow-hidden bg-[url('https://media1.tenor.com/m/9vRAkntogEMAAAAC/background.gif')] bg-no-repeat bg-cover bg-opacity-45 backdrop-blur-lg bg-black">
          <div className="h-full w-full md:w-2/5 lg:w-2/5 bg-white bg-opacity-10 backdrop-blur-2xl px-6 py-10 flex flex-col gap-12 overflow-scroll">
            <div className="flex flex-col lg:flex-row gap-6 group">
              <div className="h-10 w-10 text-lg text-white font-bold bg-white bg-opacity-20 backdrop-blur-lg border border-solid border-lightgrey border-opacity-20 flex justify-center items-center rounded-md group-hover:bg-opacity-20 group-hover:text-darkblue transition ease-in-out duration-300">
                <BsChatText />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <span className="font-sans text-white font-semibold text-lg">
                    Chat to us
                  </span>
                  <span className="font-sans text-white text-sm tracking-wider">
                    Our friendly team is here to help.
                  </span>
                </div>
                <span className="font-sans text-white text-sm font-semibold tracking-wider">
                  hi@gmail.com
                </span>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 group">
              <div className="h-10 w-10 text-lg text-white font-bold bg-white bg-opacity-20 backdrop-blur-lg border border-solid border-lightgrey border-opacity-20 flex justify-center items-center rounded-md group-hover:bg-opacity-20 group-hover:text-darkblue transition ease-in-out duration-300">
                <IoLocationOutline />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <span className="font-sans text-white font-semibold text-lg">
                    Visit us
                  </span>
                  <span className="font-sans text-white text-sm tracking-wider">
                    Come say hello at our office HQ.
                  </span>
                </div>
                <span className="font-sans text-white text-sm font-semibold tracking-wider">
                  100 smith Street Collingwood VIC 3066AU
                </span>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 group">
              <div className="h-10 w-10 text-lg text-white font-bold bg-white bg-opacity-20 backdrop-blur-lg border border-solid border-lightgrey border-opacity-20 flex justify-center items-center rounded-md group-hover:bg-opacity-20 group-hover:text-darkblue transition ease-in-out duration-300">
                <BiPhoneCall />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <span className="font-sans text-white font-semibold text-lg">
                    Call us
                  </span>
                  <span className="font-sans text-white text-sm tracking-wider">
                    Mon-Fri from 8am to 5pm.
                  </span>
                </div>
                <span className="font-sans text-white text-sm font-semibold tracking-wider">
                  +1 (555) 000-0000
                </span>
              </div>
            </div>
            <div className="h-full flex flex-wrap flex-row gap-4 justify-start items-end md:px-2">
              {socialMedia.map((item, index) => (
                <Link key={index} to={item.link}>
                  <div className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-indigo-200 bg-opacity-45 group hover:bg-indigo-50 transition ease-in-out duration-300">
                    <item.icon
                      className="h-5 w-5 text-grey group-hover:text-darkblue transition ease-in-out duration-300"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="h-full w-full md:w-3/5 lg:w-3/5 p-6 md:p-10 flex flex-col gap-16 overflow-scroll">
            <div className="flex flex-col gap-4">
              <h1 className="font-sans text-white text-5xl font-semibold tracking-wider">
                Got ideas? We've got the skills. Let's team up.
              </h1>
              <span className="font-sans text-white font-semibold tracking-widest">
                Tell us more about yourself and what you're got in mind.
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-sans text-white font-semibold tracking-wider ml-2">
                  Your Name
                </label>
                <input
                  className="outline-none p-2 rounded-lg bg-opacity-30 backdrop-blur-lg text-white border border-[#e0e0e0] bg-white focus:border-darkblue focus:shadow-md"
                  type="text"
                  placeholder="John"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-sans text-white font-semibold tracking-wider ml-2">
                  Email Address
                </label>
                <input
                  className="outline-none p-2 rounded-lg bg-opacity-30 backdrop-blur-lg text-white border border-[#e0e0e0] bg-white focus:border-darkblue focus:shadow-md"
                  type="email"
                  placeholder="John@gmail.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-sans text-white font-semibold tracking-wider ml-2">
                  Message
                </label>
                <textarea
                  className="outline-none p-2 rounded-lg bg-opacity-30 backdrop-blur-lg text-white resize-none border border-[#e0e0e0] bg-white focus:border-darkblue focus:shadow-md"
                  rows={6}
                  placeholder="I really want to express my interest in the listed projects."
                />
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
    </>
  );
};

export default ContactUs;
