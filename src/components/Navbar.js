import React, { useState, Fragment } from "react";
import logo from "../Photos/logo.png";
import { IoIosArrowDown, IoIosPaper } from "react-icons/io";
import { GiArchiveResearch } from "react-icons/gi";
import { RiExchangeFundsLine, RiTeamFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
import {Link} from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";

const solutions = [
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
  { name: "Team", description: "description", href: "#", icon: RiTeamFill },
];

export default function Navbar() {
  const [activePage, setActivePage] = useState("Home");

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
        <div className="items w-96 h-9 bg-purewhite list-none flex flex-row justify-center items-center gap-5 rounded-full text-sm font-semibold border border-lightgrey">
          <Link to={"/About"}><li
            className={`hover:text-blue hover:bg-lightblue text-grey cursor-pointer flex items-center justify-center px-2 py-1 rounded-lg ${activePage === 'Home' ? 'bg-blue text-purewhite' : ''}`}
            onClick={() => setActivePage("Home")}
          >
            Home
          </li>
          </Link>
          <li className={`hover:text-blue hover:bg-lightblue text-grey cursor-pointer flex items-center justify-center px-2 py-1 rounded-lg ${activePage === 'About' ? 'bg-blue text-purewhite' : ''}`}  onClick={() => setActivePage('About')}>
            About
          </li>
          <li className={`hover:text-blue hover:bg-lightblue text-grey cursor-pointer flex items-center justify-center px-2 py-1 rounded-lg ${activePage === 'Projects' ? 'bg-blue text-purewhite' : ''}`}  onClick={() => setActivePage('Projects')}>
            Projects
          </li>

          {/* <li className= "group hover:text-blue text-grey flex items-center justify-center gap-x-2 h-full relative">More<IoIosArrowDown className='transition duration-500 ease-in-out group-hover:-rotate-180'/>
          </li> */}

          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button className="hover:text-blue hover:bg-lightblue text-grey flex items-center justify-center gap-x-1 px-2 py-1 rounded-lg">
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
                        {solutions.map((item) => (
                          <div
                            key={item.name}
                            className="group relative flex gap-x-4 rounded-lg p-4 hover:bg-lightblue"
                          >
                            <div className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-lightgrey group-hover:bg-purewhite">
                              <item.icon
                                className="h-5 w-5 text-grey group-hover:text-darkblue"
                                aria-hidden="true"
                              />
                            </div>
                            <div>
                              <a
                                href={item.href}
                                className="font-semibold text-grey group-hover:text-blue"
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
        <button className="button bg-blue text-[#FFFFFF] py-2 px-5 rounded-lg text-sm font-medium hover:bg-darkblue">
          Contact us
        </button>
      </div>
    </>
  );
}
