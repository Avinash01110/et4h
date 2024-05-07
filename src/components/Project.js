import React from 'react'
import { useParams } from 'react-router-dom'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);


export default function Project() {

    const params = useParams();
    const {title} = params;

  return (
    <>
        <div className='min-h-screen'>
            This is a project page has {title}.
        </div> 
    </>
  )
}
