import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Loader() {

  useGSAP(() => {
    // page

    let tl = gsap.timeline();

    let fs = document.getElementsByClassName("fs");
    let elem = document.getElementsByClassName("elem");

    function height() {
      gsap.set(fs, {
        height: 0,
      });
    }

    tl.to(fs, {
      height: "100%",
      duration: 1.5,
      ease: "expo.inOut",
      onComplete: height(),
    });

    tl.to(elem, {
      width: "100%",
      duration: 1.5,
      ease: "expo.inOut",
    });

    // tl.to(".whiteelem", {
    //   height: "100%",
    //   duration: 2,
    //   delay: -1.8,
    //   ease: "expo.inOut",
    // });

    tl.to(".loader", {
      height: 0,
      duration: 1.5,
      ease: "expo.inOut",
    });

    tl.to(".project", {
      opacity: 1,
      duration: 0.5,
      ease: "expo.in",
    });
  });

  return (
    <>
      <div className="loader h-full w-full z-50 top-0 left-0 fixed">
        <div className="fs h-0 w-full bg-lightblue absolute flex flex-col justify-center items-center overflow-hidden"></div>
        <div className="elem h-full w-0 bg-indigo-400 absolute left-0"></div>
        <div className="whiteelem h-0 w-full bg-indigo-200 absolute bottom-0"></div>
      </div>
    </>
  );
}
