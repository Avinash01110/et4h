import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Profile.css";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



export default function Profile({ info, open, close }) {
  return (
    <>
      {open && (
        <div
          className="relative z-50"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          {/* <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  --> */}
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              {/* <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      --> */}
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg h-auto border border-solid border-darkblue">

                <div className="h-auto w-full bg-lightblue p-5 flex flex-col sm:flex-row items-center gap-x-16 gap-y-2 border-b border-solid border-darkblue">
                  <div className="profile h-40 w-40 bg-blue overflow-hidden border border-solid border-grey">
                    <img
                      className="h-full w-full object-cover"
                      src={info.profilePic}
                      alt="error"
                    />
                  </div>
                  <div className="flex flex-col gap-y-4 w-full sm:w-auto">
                    <div className="h-auto w-auto sm:w-52 flex flex-col gap-y-1 mt-2">
                      <span className="text-center sm:text-start text-base font-sans font-semibold text-darkblue capitalize">
                        {info.name}
                      </span>
                      <span className="text-sm font-sans text-justify font-semibold">
                        Designation:{" "}
                        <span className="text-sm font-sans text-justify font-normal capitalize">
                          {info.designation}
                        </span>
                      </span>
                      <span className="text-sm font-sans text-justify font-semibold">
                        Qualification:{" "}
                        <span className="text-sm font-sans text-justify font-normal capitalize">
                          {info.qualifications}
                        </span>
                      </span>
                      <span className="text-sm font-sans text-justify font-semibold">
                        Area of Interest:{" "}
                        <span className="text-sm font-sans text-justify font-normal capitalize">
                          {info.AreaofInterest}
                        </span>
                      </span>
                      <span className="text-sm font-sans font-semibold">
                        Email id:{" "}
                        <span className="text-sm font-sans font-normal capitalize">
                          {info.email}
                        </span>
                      </span>
                    </div>
                    <div className="flex flex-row gap-x-2">
                    <Link to={info.twitter}>
                          <div className="h-7 w-7 bg-white bg-opacity-70 backdrop-blur-lg border border-solid border-lightgrey border-opacity-20 flex justify-center items-center rounded-md hover:bg-opacity-50 hover:text-darkblue text-lg">
                            <FaXTwitter />
                          </div>
                        </Link>
                        <Link to={info.facebook}>
                          <div className="h-7 w-7 bg-white bg-opacity-70 backdrop-blur-lg border border-solid border-lightgrey border-opacity-20 flex justify-center items-center rounded-md hover:bg-opacity-50 hover:text-darkblue text-lg">
                            <FaFacebookF />
                          </div>
                        </Link>
                        <Link to={info.linkedin}>
                          <div className="h-7 w-7 bg-white bg-opacity-70 backdrop-blur-lg border border-solid border-lightgrey border-opacity-20 flex justify-center items-center rounded-md hover:bg-opacity-50 hover:text-darkblue text-lg">
                            <FaLinkedinIn />
                          </div>
                        </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 h-52 w-full p-5 overflow-y-scroll text-sm text-justify font-medium font-sans">
                {info.about}
                </div>

                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    onClick={close}
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 bg-white shadow-sm ring-1 ring-inset ring-darkblue hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
