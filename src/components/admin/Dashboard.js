import React, { useState } from "react";
import Navbar from "./Navbar.js";
import Sidebar from "./Sidebar.js";
import "../../style/Dashboard.css";
import CategoryList from "../CategoryList.js";
import ProjectList from "../ProjectList.js";
import ProfileList from "../ProfileList.js";
import Publications from "../publicatoin.js";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  const [currentMenu, setcurrentMenu] = useState("");

  const [teamCategory, setteamCategory] = useState("")


  const handleEvent = (e) => {
    setteamCategory(e.target.value);
  }
  console.log(currentMenu)
  

  return (
    <>
      <Navbar />
      <div className="bg-black h-screen w-full flex flex-row">
        <Sidebar setcurrentMenu={setcurrentMenu} />
        <div className='h-full w-full bg-[url("https://e1.pxfuel.com/desktop-wallpaper/404/977/desktop-wallpaper-math-formula-science-formula.jpg")] flex justify-center items-center'>
          {/* Add Member Form */}
          {currentMenu == "add member" && (
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
          )}

          {/* Add Post Form */}
          {/* {currentMenu == "add post" && (
            <div className="h-[28rem] w-[60rem] bg-black border border-solid border-white/30 rounded-lg mb-16 p-10 flex flex-col gap-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div>  
                <label className="relative">
                  <input
                    type="text"
                    className="bg-black text-white font-sans border border-solid border-white/50 focus:border-blue-500 rounded-lg py-2 px-4 w-full h-12 tranition duration-200"
                  />
                  <span className="input-text absolute text-white/50 font-sans -top-1 left-0 ml-4 tranition duration-200">
                    Post Title
                  </span>
                </label>
                </div>
                <div>  
                <label className="relative">
                  <input
                    type="text"
                    className="bg-black text-white font-sans border border-solid border-white/50 focus:border-blue-500 rounded-lg py-2 px-4 w-full h-12 tranition duration-200"
                  />
                  <span className="input-text absolute text-white/50 font-sans -top-1 left-0 ml-4 tranition duration-200">
                    Post Descrip.
                  </span>
                </label>
                </div>
                <div>  
                <label className="relative">
                  <input
                    type="text"
                    className="bg-black text-white font-sans border border-solid border-white/50 focus:border-blue-500 rounded-lg py-2 px-4 w-full h-12 tranition duration-200"
                  />
                  <span className="input-text absolute text-white/50 font-sans -top-1 left-0 ml-4 tranition duration-200">
                    Post Image
                  </span>
                </label>
                </div>
                <div>  
                <label className="relative">
                  <input
                    type="text"
                    className="bg-black text-white font-sans border border-solid border-white/50 focus:border-blue-500 rounded-lg py-2 px-4 w-full h-12 tranition duration-200"
                  />
                  <span className="input-text absolute text-white/50 font-sans -top-1 left-0 ml-4 tranition duration-200">
                    Post Link
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

          {/* Projects page */}
          {
            currentMenu == "projects" && (
              <div className="h-[28rem] w-[60rem] bg-black border
               border-solid border-white/30 rounded-lg mb-16 p-10 flex flex-col
                gap-y-5 overflow-y-scroll" >
              <ProjectList/>
                </div>
            )
          }
 
          {/* Add Projects Form */}
          {currentMenu == "add project" && (
            <div className="h-[28rem] w-[60rem] bg-black border border-solid border-white/30 rounded-lg mb-16 p-10 flex flex-col gap-y-5 overflow-y-scroll">
              <div className="grid grid-cols-2 gap-5">
                <div>  
                <label className="relative">
                  <input
                    type="text"
                    className="bg-black text-white font-sans border border-solid border-white/50 focus:border-blue-500 rounded-lg py-2 px-4 w-full h-12 tranition duration-200"
                  />
                  <span className="input-text absolute text-white/50 font-sans -top-1 left-0 ml-4 tranition duration-200">
                    Project Title
                  </span>
                </label>
                </div>
                <div>  
                <label className="relative">
                  <input
                    type="text"
                    className="bg-black text-white font-sans border border-solid border-white/50 focus:border-blue-500 rounded-lg py-2 px-4 w-full h-12 tranition duration-200"
                  />
                  <span className="input-text absolute text-white/50 font-sans -top-1 left-0 ml-4 tranition duration-200">
                    Project Descrip.
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
                    Project Image
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
                    Research obj.
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
                    Advancement
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
                    Hypothesis
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
                    Impact
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
          )}

          {/* Add Team Form */}
          {
            currentMenu ==="profiles" && (
              <div>
                <div className="h-[28rem] w-[60rem] bg-black
                 border border-solid border-white/30 rounded-lg 
                 mb-16 p-10 flex flex-col gap-y-5 overflow-y-scroll" >
                 <ProfileList/>
                 </div>
              </div>
            )
          }

          {/* Add Paper Form */}
          {currentMenu == "add paper" && (
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
                    Author's Name
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
                    Publication Name
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
                    Access Link
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
          )}
          {/* Category */}
          {currentMenu == "category" && (
            <div>
              <CategoryList/>
            </div>
          )}

          {
            currentMenu == "publications" && (
              <div>
                <Publications/>
              </div>
            )
          }
        </div>

        


      </div>
    </>
  );
}
