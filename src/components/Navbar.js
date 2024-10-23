import React, { useState, Fragment, useEffect } from "react";
import logo from "../Photos/Home/logo.png";
import {
  IoIosArrowDown,
  IoIosPaper,
  IoIosMenu,
  IoIosArrowRoundUp,
} from "react-icons/io";
import { GiArchiveResearch } from "react-icons/gi";
import { RiExchangeFundsLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

import { Link, useLocation } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import "../style/Navbar.css";

export default function Navbar() {
  const More = [
    {
      name: "Research & Development",
      description: "description",
      to: "#",
      icon: GiArchiveResearch,
    },
    {
      name: "Publications",
      description: "description",
      to: "/Publications",
      icon: IoIosPaper,
    },
    {
      name: "Grants",
      description: "description",
      to: "#",
      icon: RiExchangeFundsLine,
    },
    // {
    //   name: "Collaboration Opportunities",
    //   description: "description",
    //   href: "#",
    //   icon: FaHandshake,
    // },
    // { name: "Team", description: "description", href: "#", icon: RiTeamFill },
  ];

  const location = useLocation();
  const [activePage, setActivePage] = useState(location.pathname);

  useEffect(() => {
    if (location.pathname === "/") {
      setActivePage("Home");
    } else if (location.pathname === "/Team") {
      setActivePage("Team");
    } else if (location.pathname === "/Projects") {
      setActivePage("Projects");
    } else if (location.pathname.startsWith("/Project/")) {
      setActivePage("Projects");
    } else if (location.pathname === "/Publications") {
      setActivePage("Publications");
    }
  }, [location]);

  // menu button state
  const [menu, setMenu] = useState("invisible");
  const [more, setMore] = useState(false);

  const togglemenu = () => {
    if (menu === "invisible") {
      setMenu("visible");
    } else {
      setMenu("invisible");
    }
  };

  return (
    <>
      {/* Desktop Nav */}
      <div className="w-full h-14 hidden sm:hidden md:hidden lg:flex justify-between items-center px-6 mt-6 fixed z-50">
        <Link to={"/"}>
          <div className="logo h-20 w-20">
            <img
              className="h-full w-full object-cover cursor-pointer"
              src={logo}
              alt="error"
            />
          </div>
        </Link>
        <div className="items w-96 h-9 bg-purewhite list-none flex flex-row justify-center items-center gap-5 rounded-full text-sm font-semibold border-2 border-darkblue">
          <Link to={"/"}>
            <li
              className={`group h-7 text-grey cursor-pointer flex flex-col items-center justify-center px-2 py-1 rounded-lg overflow-hidden border-none shadow-none ${
                activePage === "Home"
                  ? "bg-blue text-purewhite"
                  : "hover:text-blue hover:bg-lightblue"
              } transition ease-in-out duration-100`}
            >
              <div
                className={`flex flex-col translate-y-5 font-sans gap-y-5 ${
                  activePage === "Home"
                    ? ""
                    : "group-hover:-translate-y-5 transition ease-in-out duration-500"
                }`}
              >
                <span>Home</span>
                <span>Home</span>
              </div>
            </li>
          </Link>

          <Link to={"/Projects"}>
            <li
              className={`group h-7 text-grey cursor-pointer flex flex-col items-center justify-center px-2 py-1 rounded-lg overflow-hidden border-none shadow-none ${
                activePage === "Projects"
                  ? "bg-blue text-purewhite"
                  : "hover:text-blue hover:bg-lightblue"
              } transition ease-in-out duration-100`}
            >
              <div
                className={`flex flex-col translate-y-5 font-sans gap-y-5 ${
                  activePage === "Projects"
                    ? ""
                    : "group-hover:-translate-y-5 transition ease-in-out duration-500"
                }`}
              >
                <span>Projects</span>
                <span>Projects</span>
              </div>
            </li>
          </Link>

          <Link to={"/Team"}>
            <li
              className={`group h-7 text-grey cursor-pointer flex flex-col items-center justify-center px-2 py-1 rounded-lg overflow-hidden border-none shadow-none ${
                activePage === "Team"
                  ? "bg-blue text-purewhite"
                  : "hover:text-blue hover:bg-lightblue"
              } transition ease-in-out duration-100`}
            >
              <div
                className={`flex flex-col translate-y-5 font-sans gap-y-5 ${
                  activePage === "Team"
                    ? ""
                    : "group-hover:-translate-y-5 transition ease-in-out duration-500"
                }`}
              >
                <span>Team</span>
                <span>Team</span>
              </div>
            </li>
          </Link>

          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button className="hover:text-blue hover:bg-lightblue text-grey flex flex-row items-center justify-center gap-x-1 font-sans px-2 py-1 rounded-lg transition ease-in-out duration-300 border-none shadow-none">
                  <span>More</span>
                  <IoIosArrowDown
                    className={
                      open ? "-rotate-180 transition duration-500 ease" : ""
                    }
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-2">
                    <div className="w-screen max-w-72 flex-auto overflow-hidden rounded-lg bg-purewhite text-sm leading-6 border border-lightgrey">
                      <div className="p-2">
                        {More.map((item) => (
                          <div
                            key={item.name}
                            className="group relative flex gap-x-4 font-sans rounded-lg p-4 hover:bg-lightblue transition ease-in-out duration-300"
                          >
                            <div className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-lightgrey group-hover:bg-purewhite transition ease-in-out duration-300">
                              <item.icon
                                className="h-5 w-5 text-grey group-hover:text-darkblue transition ease-in-out duration-300"
                                aria-hidden="true"
                              />
                            </div>
                            <div>
                              <Link
                                to={item.to}
                                className="font-semibold text-grey group-hover:text-blue transition ease-in-out duration-300"
                              >
                                {item.name}
                                <span className="absolute inset-0" />
                              </Link>
                              <p className="mt-1 text-grey text-xs">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
        <Link to={"/Contactus"}>
          <button className="contactus font-sans bg-blue text-[#FFFFFF] py-2 px-5 rounded-lg text-sm font-medium active:bg-blue hover:bg-darkblue transition ease-in-out duration-300">
            Contact us
          </button>
        </Link>
      </div>

      {/* Mobile Nav */}
      <div className="w-full h-20 flex sm:flex md:flex lg:hidden justify-between items-center px-6 fixed z-50 bg-lightblue bg-opacity-20 backdrop-blur-lg">
        <Link to={"/"}>
          <div className="logo h-20 w-20">
            <img
              className="h-full w-full object-cover cursor-pointer"
              src={logo}
              alt="error"
            />
          </div>
        </Link>
        {menu == "invisible" ? (
          <IoIosMenu
            onClick={togglemenu}
            className="text-center text-2xl text-black"
          />
        ) : (
          <IoClose
            onClick={togglemenu}
            className="text-center text-3xl text-black"
          />
        )}

        <div
          className={`${menu} h-auto w-full absolute top-[5rem] left-0 bg-lightblue bg-opacity-50 backdrop-blur-lg rounded-lg shadow-lg shadow-lightgrey ${
            menu == "invisible"
              ? "transition ease-out duration-200 opacity-0 translate-y-1"
              : "transition ease-in duration-600 opacity-100 translate-y-0"
          }`}
        >
          <div className="flex flex-col justify-center py-2 divide-y-2 divide-lightgrey">
            <Link
              onClick={togglemenu}
              className="w-full flex items-center justify-center"
              to={"/"}
            >
              <span className="py-2 flex justify-center text-2xl text-grey font-sans font-bold tracking-wide">
                Home
              </span>
            </Link>
            <Link
              onClick={togglemenu}
              className="w-full flex items-center justify-center"
              to={"/Projects"}
            >
              <span className="py-2 flex justify-center text-2xl text-grey font-sans font-bold tracking-wide">
                Projects
              </span>
            </Link>
            <Link
              onClick={togglemenu}
              className="w-full flex items-center justify-center"
              to={"/Team"}
            >
              <span className="py-2 flex justify-center text-2xl text-grey font-sans font-bold tracking-wide">
                Team
              </span>
            </Link>

            <div
              onClick={() => {
                setMore(!more);
              }}
              className="w-full flex flex-row items-center justify-center cursor-pointer relative"
            >
              <span className="py-2 flex justify-center text-2xl text-grey font-sans font-bold tracking-wide ml-10">
                More
              </span>
              <IoIosArrowDown
                className={`text-2xl text-grey ml-4 mt-2 transition duration-500 ease
                  ${more ? "-rotate-180" : ""}
                `}
              />
              <div
                className={`h-auto w-full bg-lightblue opacity-70 backdrop-blur-5xl absolute top-12 py-4 flex-col justify-center items-center gap-y-4 ${
                  !more ? "hidden" : "flex"
                }`}
              >
                {more &&
                  More.map((item, index) => (
                    <Link
                      onClick={togglemenu}
                      key={index}
                      to={item.to}
                      className="w-full text-center text-2xl text-grey font-sans font-extrabold tracking-wide flex flex-row items-center justify-center gap-x-2 group"
                    >
                      <span className="ml-14">{item.name}</span>
                      <IoIosArrowRoundUp className="ml-4 text-4xl text-grey font-sans font-extralight rotate-[35deg] group-hover:rotate-0 group-hover:text-darkblue transition ease-in-out duration-500" />
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
