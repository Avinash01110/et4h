import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import "../../style/Sidebar.css";

export default function Sidebar({ setcurrentMenu }) {
  const [Home, setHome] = useState(false);
  const [Projects, setProjects] = useState(false);
  const [Team, setTeam] = useState(false);
  const [Publications, setPublications] = useState(false);
  const [Grants, setGrants] = useState(false);
  const [Research, setResearch] = useState(false);
  const [category, setCategory] = useState(false);
  // const [publications, setPublications] = useState([]);
  const handleMenuClick = (menu) => {
    setcurrentMenu(menu);
  };
  return (
    <>
      <div className="min-w-56 h-full bg-black flex flex-col overflow-y-scroll no-scrollbar border-r border-solid border-white/20">
        <div className="flex flex-col gap-y-5 w-full py-12 px-6">

          {/* Projects */} 
          <div className="flex flex-col">
              <div
                onClick={() => {
                  setCategory(!category);
                  handleMenuClick("projects");
                }}
                className="h-auto w-full flex justify-center py-2 px-4 items-center cursor-pointer group rounded-lg hover:bg-white/10 hover:bg-opacity-10 active:bg-white/15 border border-solid border-white/20"
              >
                <span className="text-white text-md font-semibold font-sans group-hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] shadow-white tracking-wide">
                  Projects
                </span>
              </div>
          </div>


          {/* Team */}
          <div className="flex flex-col">
            <div
              onClick={() => {
                setCategory(!category);
                handleMenuClick("profiles");
              }}
              className="h-auto w-full flex justify-center py-2 px-4 items-center cursor-pointer group rounded-lg hover:bg-white/10 hover:bg-opacity-10 active:bg-white/15 border border-solid border-white/20"
            >
              <span className="text-white text-md font-semibold font-sans group-hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] shadow-white tracking-wide">
                Profiles
              </span>
            </div>
          </div>

          {/* Publications */}
          <div className="flex flex-col">
            <div
              onClick={() => {
                setCategory(!category);
                handleMenuClick("publications");
              }}
              className="h-auto w-full flex justify-center py-2 px-4 items-center cursor-pointer group rounded-lg hover:bg-white/10 hover:bg-opacity-10 active:bg-white/15 border border-solid border-white/20"
            >
              <span className="text-white text-md font-semibold font-sans group-hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] shadow-white tracking-wide">
                Publications
              </span>
            </div>
          </div>
          

          {/* Category */}
          <div className="flex flex-col">
            <div
              onClick={() => {
                setCategory(!category);
                handleMenuClick("categories");
              }}
              className="h-auto w-full flex justify-center py-2 px-4 items-center cursor-pointer group rounded-lg hover:bg-white/10 hover:bg-opacity-10 active:bg-white/15 border border-solid border-white/20"
            >
              <span className="text-white text-md font-semibold font-sans group-hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] shadow-white tracking-wide">
                Category
              </span>
            </div>
          </div>

          {/* Front Page */}
          <div className="flex flex-col">
            <div
              onClick={() => {
                setCategory(!category);
                setcurrentMenu("front");
              }}
              className="h-auto w-full flex justify-center py-2 px-4 items-center cursor-pointer group rounded-lg hover:bg-white/10 hover:bg-opacity-10 active:bg-white/15 border border-solid border-white/20"
            >
              <span
                className="text-white text-md font-semibold menu-item 
              font-sans group-hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] 
              shadow-white tracking-wide"
              >
                Latest Post
              </span>
            </div>
          </div>

          {/* Logo*/}
          <div className="flex flex-col">
            <div
              onClick={() => {
                setCategory(!category);
                setcurrentMenu("logo");
              }}
              className="h-auto w-full flex justify-center py-2 px-4 items-center cursor-pointer group rounded-lg hover:bg-white/10 hover:bg-opacity-10 active:bg-white/15 border border-solid border-white/20"
            >
              <span
                className="text-white text-md font-semibold menu-item 
              font-sans group-hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] 
              shadow-white tracking-wide"
              >
                Logo
              </span>
            </div>
          </div>

          {/* team */}
          <div className="flex flex-col">
            <div
              onClick={() => {
                setCategory(!category);
                setcurrentMenu("team");
              }}
              className="h-auto w-full flex justify-center py-2 px-4 items-center cursor-pointer group rounded-lg hover:bg-white/10 hover:bg-opacity-10 active:bg-white/15 border border-solid border-white/20"
            >
              <span
                className="text-white text-md font-semibold menu-item 
              font-sans group-hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] 
              shadow-white tracking-wide"
              >
                Teams
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
