import React, { useState } from "react";
import Navbar from "./Navbar.js";
import Sidebar from "./Sidebar.js";
import "../../style/Dashboard.css";
import CategoryList from "../CategoryList.js";
import ProjectList from "../ProjectList.js";
import ProfileList from "../ProfileList.js";
import Publications from "../publicatoin.js";
import { IoDesktopOutline } from "react-icons/io5";
import FrontPagePosts from "../frontPagePosts.js"; // Correctly import the component
import TeamManagement from "../TeamManagement.js";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMenu, setcurrentMenu] = useState("");
  const [teamCategory, setteamCategory] = useState("");

  const handleEvent = (e) => {
    setteamCategory(e.target.value);
  };
  console.log(currentMenu);

  return (
    <>
      <div className="hidden sm:hidden xl:flex xl:flex-col">
        <Navbar />
        <div className="bg-black h-screen w-full flex flex-row">
          <Sidebar setcurrentMenu={setcurrentMenu} />
          <div className='h-full w-full bg-[url("https://e1.pxfuel.com/desktop-wallpaper/404/977/desktop-wallpaper-math-formula-science-formula.jpg")] flex justify-center items-center'>
            
            {/* Add Member Form */}
            {/* {currentMenu === "add member" && (
              <div className="h-[28rem] w-[60rem] bg-black border border-solid border-white/30 rounded-lg mb-16 p-10 flex flex-col gap-y-5">
                <div>
                  <label className="relative">
                    <input
                      type="text"
                      className="bg-black text-white font-sans border border-solid border-white/50 focus:border-blue-500 rounded-lg py-2 px-4 w-full h-12 tranition duration-200"
                    />
                    <span className="input-text absolute text-white/50 font-sans -top-1 left-0 ml-4 tranition duration-200">
                      Link of Logo
                    </span>
                  </label>
                </div>
                <div>
                  <button className="rounded-md bg-black py-2 px-4 text-base font-semibold font-sans text-white outline-none active:bg-white/30 hover:scale-90 hover:bg-white/20 hover:text-white hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] shadow-white border border-solid border-white/50 transition ease-in-out duration-300">
                    Submit
                  </button>
                </div>
              </div>
            )} */}

            {/* Projects page */}
            {currentMenu === "projects" && (
              <div className="h-[28rem] w-[60rem] bg-black border border-solid border-white/30 rounded-lg mb-16 p-10 flex flex-col gap-y-5 overflow-y-scroll">
                <ProjectList />
              </div>
            )}

            {/* Add Team Form */}
            {currentMenu === "profiles" && (
              <div className="h-[28rem] w-[60rem] bg-black border border-solid border-white/30 rounded-lg mb-16 p-10 flex flex-col gap-y-5 overflow-y-scroll">
                <ProfileList />
              </div>
            )}

            {/* Add Paper Form */}
            {/* {currentMenu === "add paper" && (
              <div className="h-[28rem] w-[60rem] bg-black border border-solid border-white/30 rounded-lg mb-16 p-10 flex flex-col gap-y-5 overflow-y-scroll">
                <div className="grid grid-cols-2 gap-5">
                  <div className="col-span-2">
                    <label className="relative">
                      <input
                        type="text"
                        className="bg-black text-white font-sans border border-solid border-white/50 focus:border-blue-500 rounded-lg py-2 px-4 w-full h-12 tranition duration-200"
                      />
                      <span className="input-text absolute text-white/50 font-sans -top-1 left-0 ml-4 tranition duration-200">
                        Title
                      </span>
                    </label>
                  </div>

                  <div className="col-span-2">
                    <label className="relative">
                      <input
                        type="text"
                        className="bg-black text-white font-sans border border-solid border-white/50 focus:border-blue-500 rounded-lg py-2 px-4 w-full h-12 tranition duration-200"
                      />
                      <span className="input-text absolute text-white/50 font-sans -top-1 left-0 ml-4 tranition duration-200">
                        Image
                      </span>
                    </label>
                  </div>
                  <div className="col-span-2">
                    <label className="relative">
                      <input
                        type="text"
                        className="bg-black text-white font-sans border border-solid border-white/50 focus:border-blue-500 rounded-lg py-2 px-4 w-full h-12 tranition duration-200"
                      />
                      <span className="input-text absolute text-white/50 font-sans -top-1 left-0 ml-4 tranition duration-200">
                        Authors
                      </span>
                    </label>
                  </div>
                </div>
                <div>
                  <button className="rounded-md bg-black py-2 px-4 text-base font-semibold font-sans text-white outline-none active:bg-white/30 hover:scale-90 hover:bg-white/20 hover:text-white hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] shadow-white border border-solid border-white/50 transition ease-in-out duration-300">
                    Submit
                  </button>
                </div>
              </div>
            )} */}

            {/* Add Publication List */}
            {currentMenu === "publications" && (
              <div className="h-[28rem] w-[60rem] bg-black border border-solid border-white/30 rounded-lg mb-16 p-10 flex flex-col gap-y-5 overflow-y-scroll">
                <Publications />
              </div>
            )}

            {/* Add Category Form */}
            {currentMenu === "categories" && (
              <div className="h-[28rem] w-[60rem] bg-black border border-solid border-white/30 rounded-lg mb-16 p-10 flex flex-col gap-y-5 overflow-y-scroll">
                <CategoryList />
              </div>
            )}

            {/* Front Page Posts */}
            {currentMenu === "front" && (
              <div className="h-[28rem] w-[60rem] bg-black border border-solid border-white/30 rounded-lg mb-16 p-10 flex flex-col gap-y-5 overflow-y-scroll">
                <FrontPagePosts /> {/* Correctly render the FrontPagePosts component */}
              </div>
            )}
            {/* Team */}
            {currentMenu === "team" && (
              <div className="h-[28rem] w-[60rem] bg-black border border-solid border-white/30 rounded-lg mb-16 p-10 flex flex-col gap-y-5 overflow-y-scroll">
                <TeamManagement /> {/* Correctly render the FrontPagePosts component */}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
