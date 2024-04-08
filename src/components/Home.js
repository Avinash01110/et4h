import React from 'react'
import lp_image1 from '../Photos/lp_image1.png'
import lp_image2 from '../Photos/lp_image2.png'
import lp_image3 from '../Photos/lp_image3.png'

export default function Home() {
  return (
    <>
    <div className='h-[100vh] w-full bg-lightblue flex items-end'>
      
      <div className='h-[29rem] w-full flex'>

        <div className='left w-1/2 h-full px-20'>
          <div className='flex w-[25rem] h-full flex-col justify-center items-start gap-y-6'>
            <h1 className='text-5xl uppercase font-bold text-blue'>Revolutionzing Healthcare</h1>
            <h4 className='text-lg capitalize text-justify text-grey'>Welcome to Emerging Tech4 Health,
              a Biotechnology Startup that
              leverages cutting edge technology,
              particularly AI, to revolutionize
              healthcare.</h4>
              <button className="button bg-blue text-[#FFFFFF] py-2 px-5 rounded-lg text-sm font-medium hover:bg-darkblue">
              Learn More
              </button>
          </div>
        </div>

        <div className='right w-1/2 h-full flex justify-center items-center'>
          <div className='h-96 w-[27rem] relative'>
            <div className='h-52 w-full absolute top-0 shadow-xl shadow-grey'>
              <img className='h-full w-full object-cover' src={lp_image2} alt="error" />
            </div>
            <div className='h-52 w-96 absolute top-24 -left-20 shadow-xl shadow-grey'>
              <img className='h-full w-full object-cover' src={lp_image1} alt="error" />
            </div>
            <div className='h-52 w-64 absolute bottom-0 right-0 shadow-xl shadow-grey'>
              <img className='h-full w-full object-cover' src={lp_image3} alt="error" />
            </div>

          </div>
        </div>
      </div>
    </div>
    <div className='h-[100vh] w-full bg-darkblue'>2nd</div>
    </>
  )
}
