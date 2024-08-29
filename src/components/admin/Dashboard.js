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
import LogoManagement from "../LogoManagement.js";
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

            {/* Logo */}
            {currentMenu === "logo" && (
              <div className="h-[28rem] w-[60rem] bg-black border border-solid border-white/30 rounded-lg mb-16 p-10 flex flex-col gap-y-5 overflow-y-scroll">
                <LogoManagement /> {/* Correctly render the FrontPagePosts component */}
              </div>
            )}
            
          </div>
        </div>
      </div>
    </>
  );
}
