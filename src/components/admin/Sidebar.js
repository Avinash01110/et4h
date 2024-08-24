import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import "../../style/Sidebar.css";

export default function Sidebar({setcurrentMenu}) {
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
          {/* Analytics */}
          <div className="h-auto w-full flex justify-center py-2 px-2 group hover:bg-white/10 hover:bg-opacity-10 rounded-lg active:bg-white/15 border border-solid border-white/20">
            <span className="text-white text-md font-semibold font-sans group-hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] shadow-white tracking-wide">
              Analytics
            </span>
          </div>

          {/* Home */}
          <div className="flex flex-col">
            <div
              onClick={() => {
                setHome(!Home);
              }}
              className="h-auto w-full flex justify-center py-2 px-4 flex flex-row justify-between items-center cursor-pointer group rounded-lg hover:bg-white/10 hover:bg-opacity-10 active:bg-white/15 border border-solid border-white/20"
            >
              <span className="text-white text-md font-semibold font-sans group-hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] shadow-white tracking-wide">
                Home
              </span>
              <IoIosArrowUp
                className={`text-white text-xl transition duration-300  ease-in-out ${
                  Home == true ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            {Home && (
              <div
                className={`transition duration-500 ease-in-out text-white py-2 px-2 flex flex-col justify-between items-center gap-y-2`}
              >
                <span onClick={()=>{setcurrentMenu("add member")}} className="w-full py-1 px-2 text-center rounded-lg hover:bg-white/10 hover:bg-opacity-20 active:bg-white/15 hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] shadow-white cursor-pointer">
                  Add Member
                </span>
                <span onClick={()=>{setcurrentMenu("update member")}} className="w-full py-1 px-2 text-center rounded-lg hover:bg-white/10 hover:bg-opacity-20 active:bg-white/15 hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] shadow-white cursor-pointer">
                  Update Member
                </span>
                <span onClick={()=>{setcurrentMenu("delete member")}} className="w-full py-1 px-2 text-center rounded-lg hover:bg-white/10 hover:bg-opacity-20 active:bg-white/15 hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] shadow-white cursor-pointer">
                  Delete Member
                </span>
                <span onClick={()=>{setcurrentMenu("add post")}} className="w-full py-1 px-2 text-center rounded-lg hover:bg-white/10 hover:bg-opacity-20 active:bg-white/15 hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] shadow-white cursor-pointer">
                  Add Post
                </span>
                <span onClick={()=>{setcurrentMenu("update post")}} className="w-full py-1 px-2 text-center rounded-lg hover:bg-white/10 hover:bg-opacity-20 active:bg-white/15 hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] shadow-white cursor-pointer">
                  Update Post
                </span>
                <span onClick={()=>{setcurrentMenu("delete post")}} className="w-full py-1 px-2 text-center rounded-lg hover:bg-white/10 hover:bg-opacity-20 active:bg-white/15 hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] shadow-white cursor-pointer">
                  Delete Post
                </span>
              </div>
            )}
          </div>

          {/* Projects */}
          {/* <div className="flex flex-col">
            <div
              onClick={() => {
                setProjects(!Projects);
              }}
              className="h-auto w-full flex justify-center py-2 px-4 flex flex-row justify-between items-center cursor-pointer group rounded-lg hover:bg-white/10 hover:bg-opacity-10 active:bg-white/15 border border-solid border-white/20"
            >
              <span className="text-white text-md font-semibold font-sans group-hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] shadow-white tracking-wide">
                Projects
              </span>
              <IoIosArrowUp
                className={`text-white text-xl transition duration-300  ease-in-out ${
                Projects == true ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            {Projects && (
              <div
                className={`transition duration-500 ease-in-out text-white py-2 px-2 flex flex-col justify-between items-center gap-y-2`}
              >
                <span onClick={()=>{setcurrentMenu("add project")}} className="w-full py-1 px-2 text-center rounded-lg hover:bg-white/10 hover:bg-opacity-20 active:bg-white/15 hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] shadow-white cursor-pointer">
                  Add Project
                </span>
                <span onClick={()=>{setcurrentMenu("update project")}} className="w-full py-1 px-2 text-center rounded-lg hover:bg-white/10 hover:bg-opacity-20 active:bg-white/15 hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] shadow-white cursor-pointer">
                  Update Project
                </span>
                <span onClick={()=>{setcurrentMenu("delete project")}} className="w-full py-1 px-2 text-center rounded-lg hover:bg-white/10 hover:bg-opacity-20 active:bg-white/15 hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] shadow-white cursor-pointer">
                  Delete Project
                </span>
              </div>
            )}
          </div> */
          <div className="flex flex-col">
            <div
              onClick={() => {
                setCategory(!category);
              }}
              className="h-auto w-full flex justify-center py-2 px-4 flex flex-row justify-between items-center cursor-pointer group rounded-lg hover:bg-white/10 hover:bg-opacity-10 active:bg-white/15 border border-solid border-white/20"
            >
              <span className="text-white text-md font-semibold font-sans group-hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] shadow-white tracking-wide">
              <button onClick={() => handleMenuClick("projects")}>Projects</button>
              </span>
             
              
            </div>
           
          </div>
          }

          {/* Team */}
          <div className="flex flex-col">
            <div
              onClick={() => {
                setCategory(!category);
              }}
              className="h-auto w-full flex justify-center py-2 px-4 flex flex-row justify-between items-center cursor-pointer group rounded-lg hover:bg-white/10 hover:bg-opacity-10 active:bg-white/15 border border-solid border-white/20"
            >
              <span className="text-white text-md font-semibold font-sans group-hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] shadow-white tracking-wide">
              <button onClick={() => handleMenuClick("profiles")}>Profiles</button>
              </span>
             
              
            </div>
           
          </div>

          {/* Publications */}
          <div className="flex flex-col">
            <div
              onClick={() => {
                setCategory(!category);
              }}
              className="h-auto w-full flex justify-center py-2 px-4 flex flex-row justify-between items-center cursor-pointer group rounded-lg hover:bg-white/10 hover:bg-opacity-10 active:bg-white/15 border border-solid border-white/20"
            >
              <span className="text-white text-md font-semibold font-sans group-hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] shadow-white tracking-wide">
              <button onClick={() => handleMenuClick("publications")}>Publications</button>
              </span>
             
              
            </div>
           
          </div>
          {/* Grants */}
          <div className="flex flex-col">
            <div
              onClick={() => {
                setGrants(!Grants);
              }}
              className="h-auto w-full flex justify-center py-2 px-4 flex flex-row justify-between items-center cursor-pointer group rounded-lg hover:bg-white/10 hover:bg-opacity-10 active:bg-white/15 border border-solid border-white/20"
            >
              <span className="text-white text-md font-semibold font-sans group-hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] shadow-white tracking-wide">
                Grants
              </span>
              <IoIosArrowUp
                className={`text-white text-xl transition duration-300  ease-in-out ${
                  Grants == true ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            {Grants && (
              <div
                className={`transition duration-500 ease-in-out text-white py-2 px-2 flex flex-col justify-between items-center gap-y-2`}
              >
                <span className="w-full py-1 px-2 text-center rounded-lg hover:bg-white/10 hover:bg-opacity-20 active:bg-white/15 hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] shadow-white">
                  o1
                </span>
                <span className="w-full py-1 px-2 text-center rounded-lg hover:bg-white/10 hover:bg-opacity-20 active:bg-white/15 hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] shadow-white">
                  o2
                </span>
                <span className="w-full py-1 px-2 text-center rounded-lg hover:bg-white/10 hover:bg-opacity-20 active:bg-white/15 hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] shadow-white">
                  o3
                </span>
              </div>
            )}
          </div>

          {/* Research & Development */}
          <div className="flex flex-col">
            <div
              onClick={() => {
                setResearch(!Research);
              }}
              className="h-auto w-full flex justify-center py-2 px-4 flex flex-row justify-between items-center cursor-pointer group rounded-lg hover:bg-white/10 hover:bg-opacity-10 active:bg-white/15 border border-solid border-white/20"
            >
              <span className="text-white text-md font-semibold font-sans group-hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] shadow-white tracking-wide">
                Research
              </span>
              <IoIosArrowUp
                className={`text-white text-xl transition duration-300  ease-in-out ${
                  Research == true ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            {Research && (
              <div
                className={`transition duration-500 ease-in-out text-white py-2 px-2 flex flex-col justify-between items-center gap-y-2`}
              >
                <span className="w-full py-1 px-2 text-center rounded-lg hover:bg-white/10 hover:bg-opacity-20 active:bg-white/15 hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] shadow-white">
                  o1
                </span>
                <span className="w-full py-1 px-2 text-center rounded-lg hover:bg-white/10 hover:bg-opacity-20 active:bg-white/15 hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] shadow-white">
                  o2
                </span>
                <span className="w-full py-1 px-2 text-center rounded-lg hover:bg-white/10 hover:bg-opacity-20 active:bg-white/15 hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] shadow-white">
                  o3
                </span>
              </div>
            )}
          </div>
            
            {/* Category */}
          <div className="flex flex-col">
            <div
              onClick={() => {
                setCategory(!category);
              }}
              className="h-auto w-full flex justify-center py-2 px-4 flex flex-row justify-between items-center cursor-pointer group rounded-lg hover:bg-white/10 hover:bg-opacity-10 active:bg-white/15 border border-solid border-white/20"
            >
              <span className="text-white text-md font-semibold font-sans group-hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] shadow-white tracking-wide">
              <button onClick={() => handleMenuClick("categories")}>Category</button>
              </span>
             
              
            </div>
           
          </div>
          {/* Publications */}
          <div className="flex flex-col">
            <div
              onClick={() => {
                setCategory(!category);
              }}
              className="h-auto w-full flex justify-center py-2 px-4 flex flex-row justify-between items-center cursor-pointer group rounded-lg hover:bg-white/10 hover:bg-opacity-10 active:bg-white/15 border border-solid border-white/20"
            >
              <span className="text-white text-md font-semibold menu-item 
              font-sans group-hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] 
              shadow-white tracking-wide" onClick={() => setcurrentMenu("publications")} >
  Publications
              </span>
             
              
            </div>
           
          </div>

        </div>
      </div>
    </>
  );
}