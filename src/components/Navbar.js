import React, { useState, Fragment, useEffect } from "react";
import logo from "../Photos/Home/logo.png";
import { IoIosArrowDown, IoIosPaper } from "react-icons/io";
import { GiArchiveResearch } from "react-icons/gi";
import { RiExchangeFundsLine, RiTeamFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
import {Link, useLocation} from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import "../style/Navbar.css";



export default function Navbar() {

  const More = [
    {
      name: "Research & Development",
      description: "description",
      href: "#",
      icon: GiArchiveResearch,
    },
    {
      name: "Publications",
      description: "description",
      href: "#",
      icon: IoIosPaper,
    },
    {
      name: "Grants",
      description: "description",
      href: "#",
      icon: RiExchangeFundsLine,
    },
    {
      name: "Collaboration Opportunities",
      description: "description",
      href: "#",
      icon: FaHandshake,
    },
    // { name: "Team", description: "description", href: "#", icon: RiTeamFill },
  ];

  const location = useLocation();
  const [activePage, setActivePage] = useState("Home");

  useEffect(() => {
    if (location.pathname === "/") {
      setActivePage("Home");
    } else if (location.pathname === "/Team") {
      setActivePage("Team");
    } else if(location.pathname === "/Projects"){
      setActivePage("Projects");
    }
  }
  , [location]);

  return (
    <>
      <div className="w-full h-14 flex justify-between items-center px-6 mt-6 fixed z-50">
        <div className="logo h-20 w-20">
          <img
            className="h-full w-full object-cover cursor-pointer"
            src={logo}
            alt="error"
          />
        </div>
        <div className="items w-96 h-9 bg-purewhite list-none flex flex-row justify-center items-center gap-5 rounded-full text-sm font-semibold border-2 border-darkblue">

          <Link to={"/"}><li
            className={`group h-7 text-grey cursor-pointer flex flex-col items-center justify-center px-2 py-1 rounded-lg overflow-hidden ${activePage === 'Home' ? 'bg-blue text-purewhite' : 'hover:text-blue hover:bg-lightblue'} transition ease-in-out duration-100`}
          >
            <div className={`flex flex-col translate-y-5 gap-y-5 ${activePage === 'Home' ? '' : 'group-hover:-translate-y-5 transition ease-in-out duration-500'}`}>
            <span>Home</span>
            <span>Home</span>
            </div>
          </li>
          </Link>

          {/* <Link to= {"/About"}>
          <li className={`text-grey cursor-pointer flex items-center justify-center px-2 py-1 rounded-lg ${activePage === 'About' ? 'bg-blue text-purewhite' : 'hover:text-blue hover:bg-lightblue'} transition ease-in-out duration-300`}>
            About
          </li>
          </Link> */}

          <Link to={"/Projects"}>
          <li className={`group h-7 text-grey cursor-pointer flex flex-col items-center justify-center px-2 py-1 rounded-lg overflow-hidden ${activePage === 'Projects' ? 'bg-blue text-purewhite' : 'hover:text-blue hover:bg-lightblue'} transition ease-in-out duration-100`}>
          <div className={`flex flex-col translate-y-5 gap-y-5 ${activePage === 'Projects' ? '' : 'group-hover:-translate-y-5 transition ease-in-out duration-500'}`}>
            <span>Projects</span>
            <span>Projects</span>
            </div>
          </li>
          </Link>

          <Link to={"/Team"}>
          <li className={`group h-7 text-grey cursor-pointer flex flex-col items-center justify-center px-2 py-1 rounded-lg overflow-hidden ${activePage === 'Team' ? 'bg-blue text-purewhite' : 'hover:text-blue hover:bg-lightblue'} transition ease-in-out duration-100`}>
          <div className={`flex flex-col translate-y-5 gap-y-5 ${activePage === 'Team' ? '' : 'group-hover:-translate-y-5 transition ease-in-out duration-500'}`}>
            <span>Team</span>
            <span>Team</span>
            </div>
          </li>
          </Link>

          

          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button className="hover:text-blue hover:bg-lightblue text-grey flex items-center justify-center gap-x-1 px-2 py-1 rounded-lg transition ease-in-out duration-300">
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
                            className="group relative flex gap-x-4 rounded-lg p-4 hover:bg-lightblue transition ease-in-out duration-300"
                          >
                            <div className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-lightgrey group-hover:bg-purewhite transition ease-in-out duration-300">
                              <item.icon
                                className="h-5 w-5 text-grey group-hover:text-darkblue transition ease-in-out duration-300"
                                aria-hidden="true"
                              />
                            </div>
                            <div>
                              <a
                                href={item.href}
                                className="font-semibold text-grey group-hover:text-blue transition ease-in-out duration-300"
                              >
                                {item.name}
                                <span className="absolute inset-0" />
                              </a>
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

          {/* navbar-menu
          <div className='navbar-menu h-auto w-72 bg-purewhite border border-lightgrey absolute top-8 -right-5 flex flex-col  items-start justify-center gap-y-2 rounded-lg px-4 py-4'>

            <div className='flex flex-row gap-4 w-full py-2 cursor-pointer'>
              <div className='h-10 w-10 bg-lightgrey text-grey rounded-full flex justify-center items-center text-xl'><GiArchiveResearch /></div>
              <div className='flex flex-col text-grey hover:text-blue'>Research & Development
                <span className='text-xs text-grey'>description</span>
              </div>
            </div>
            <div className='flex flex-row gap-4 w-full py-2 cursor-pointer'>
              <div className='h-10 w-10 bg-lightgrey text-grey rounded-full flex justify-center items-center text-xl'><IoIosPaper /></div>
              <div className='flex flex-col text-grey hover:text-blue'>Publications
                <span className='text-xs text-grey'>description</span>
              </div>
            </div>
            <div className='flex flex-row gap-4 w-full py-2 cursor-pointer text-blue'>
              <div className='h-10 w-10 bg-lightgrey text-grey rounded-full flex justify-center items-center text-xl'><RiExchangeFundsLine />
              </div>
              <div className='flex flex-col text-grey hover:text-blue'>Grants
                <span className='text-xs text-grey'>description</span>
              </div>
            </div>
            <div className='flex flex-row gap-4 w-full py-2 cursor-pointer text-blue'>
              <div className='h-10 w-10 bg-lightgrey text-grey rounded-full flex justify-center items-center text-xl'><FaHandshake />
</div>
              <div className='flex flex-col text-grey hover:text-blue'>Collaboration Opportunities
                <span className='text-xs text-grey'>description</span>
              </div>
            </div>
            <div className='flex flex-row gap-4 w-full py-2 cursor-pointer hover:bg-blue'>
              <div className='h-10 w-10 bg-lightgrey text-grey rounded-full flex justify-center items-center text-xl'><RiTeamFill /></div>
              <div className='flex flex-col text-grey hover:text-blue'>Team
                <span className='text-xs text-grey'>description</span>
              </div>
            </div>
            
          </div> */}
          
        </div>

        <button className="contactus bg-blue text-[#FFFFFF] py-2 px-5 rounded-lg text-sm font-medium active:bg-blue hover:bg-darkblue transition ease-in-out duration-300">
          Contact us
        </button>
        
      </div>
    </>
  );
}
