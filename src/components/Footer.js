import React from "react";
import { Link } from "react-router-dom";
import logo from "../Photos/logo.png";
import "../style/Footer.css";
import { IoSend } from "react-icons/io5";
import { FaGithub, FaYoutube, FaTwitter, FaLinkedin, FaInstagramSquare} from "react-icons/fa";

export default function Footer() {

  const socialMedia = [
    {
      name: "Github",
      link: "/",
      icon: FaGithub 
    },
    {
      name: "youtube",
      link: "/",
      icon: FaYoutube
    },
    {
      name: "twitter",
      link: "/",
      icon: FaTwitter 
    },
    {
      name: "linkedin",
      link: "/",
      icon: FaLinkedin
    },
    {
      name: "instagram",
      link: "/",
      icon: FaInstagramSquare
    },
  ];
  
  return (
    <div className="h-auto w-full bg-lightblue border-2 border-t-darkblue rounded-t-xl flex flex-col items-center gap-y-10 px-10 py-8">
      <div className="flex flex-row justify-center items-center gap-x-2">
        <div className="logo h-20 w-20">
          <img
            className="h-full w-full object-cover cursor-pointer"
            src={logo}
            alt="error"
          />
        </div>
        <h2 className="text-2xl text-grey font-bold">Emerging Tech4 Health</h2>
      </div>

      <div className="h-auto w-11/12 px-10 flex flex-row justify-between">
        <div className="h-full w-60 px-4 flex flex-col gap-y-4">
          <h3 className="text-xl text-blue font-bold">Important links</h3>
          <ul className="list-none flex flex-col gap-y-1 text-grey font-semibold opacity-85">
            <Link to={"/"}>
              <li className="link w-fit text-sm relative h-auto hover:text-darkblue transition ease-in-out duration-300">
                Home
              </li>
            </Link>
            <Link to={"/"}>
              <li className="link w-fit text-sm relative h-auto hover:text-darkblue transition ease-in-out duration-300">
                About
              </li>
            </Link>
            <Link to={"/"}>
              <li className="link w-fit text-sm relative h-auto hover:text-darkblue transition ease-in-out duration-300">
                Projects
              </li>
            </Link>
            <Link to={"/"}>
              <li className="link w-fit text-sm relative h-auto hover:text-darkblue transition ease-in-out duration-300">
                Publications
              </li>
            </Link>
            <Link to={"/"}>
              <li className="link w-fit text-sm relative h-auto hover:text-darkblue transition ease-in-out duration-300">
                Research & Development
              </li>
            </Link>
            <Link to={"/"}>
              <li className="link w-fit text-sm relative h-auto">Grants</li>
            </Link>
            <Link to={"/"}>
              <li className="link w-fit text-sm relative h-auto">
                Collaboration Opportunities
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-col justify-start items-start mt-10">
          <span className="text-xs text-grey font-semibold">
            EmergencyHealth4you
          </span>
          <span className="text-xs text-grey font-semibold">
            4602 21st St. #1797
          </span>
          <span className="text-xs text-grey font-semibold">
            Long Island City, NY, 11101
          </span>
          <span className="text-xs text-grey font-semibold">
            EmergencyHealth4You@.org
          </span>
          <span className="text-xs text-grey font-semibold">
            © 2024-2029 EmergencyHealth4you. All rights reserved.
          </span>
        </div>
        <div className="h-full w-80 flex flex-col gap-y-2">
          <div className="bg-gradient-to-bl from-darkblue to-blue h-32 w-full p-5 flex flex-col justify-center items-center gap-y-5 rounded-lg">
            <h3 className="text-xl text-white font-bold">Connect with Us!</h3>
            <div className="w-full h-10 rounded-xl flex flex-row gap-x-4">
              <input
                className="w-full h-full text-grey bg-lightblue border-2 border-lightblue rounded-lg p-2 focus:ring-1 focus:ring-white"
                type="email"
                placeholder="Email Address"
              />
              <button className="bg-lightblue text-grey hover:bg-purewhite hover:text-darkblue rounded-full h-10 w-14 flex justify-center items-center transition ease-in-out duration-300">
                <IoSend />
              </button>
            </div>
          </div>
          <div className="h-auto w-full flex flex-row gap-x-2">
            {socialMedia.map((item, index) => (
            <Link key={index} to={item.link}>
            <div className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-lightgrey group hover:bg-purewhite transition ease-in-out duration-300">
              <item.icon
                className="h-5 w-5 text-grey group-hover:text-darkblue transition ease-in-out duration-300"
                aria-hidden="true"
              />
            </div>
            </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
