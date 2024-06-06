import React from "react";
import about_us1 from "../Photos/Aboutus/about_us1.png";
import about_us2 from "../Photos/Aboutus/about_us2.png";
import image from "../Photos/Aboutus/image.png";
import { FaRegLightbulb } from "react-icons/fa";
import { GiShakingHands } from "react-icons/gi";
import { IoAccessibilityOutline } from "react-icons/io5";


export default function About() {
  
  const coreValues = [
    {
      title: "Innovation",
      description:
        "We believe in the power of innovation to solve complex healthcare challenges. Our commitment to pioneering research and cutting-edge technology is unwavering, as we strive to develop solutions that push the boundaries of what is possible.",
      icon: FaRegLightbulb,
    },
    {
      title: "Collaboration",
      description:
        "Healthcare and technology are collaborative fields by nature. We value the power of teamwork, both within our organization and with our partners, believing that together, we can achieve outcomes that are greater than the sum of our parts.",
      icon: GiShakingHands,
    },
    {
      title: "Accessibility",
      description:
        "We are committed to making healthcare more accessible through technology. By breaking down barriers to care, we aim to ensure that every individual, regardless of their location or background, can benefit from the advances in medical science.",
      icon: IoAccessibilityOutline,
    },
  ];

  return (
    <>
      <div className="h-[100vh] w-full bg-lightblue flex items-center justify-center">
        <div className="h-96 w-10/12 flex flex-col gap-y-2 mt-20">
          <h2 className="text-4xl text-grey font-bold">
            Transforming Healthcare Through AI Innovation
          </h2>
          <div className="w-full h-96 rounded-lg relative border border-lightgrey">
            <img
              className="h-full w-full object-cover rounded-lg"
              src={about_us1}
              alt="error"
            />
            <div className="h-64 w-6/12 bg-darkblue absolute -bottom-48 left-16 rounded-lg p-10 flex flex-col justify-center gap-y-5">
              <h2 className="text-2xl text-purewhite font-bold">
                Welcome to EmergingTech4Health
              </h2>
              <p className="text-base text-purewhite text-justify opacity-80">
                EmergingTech4Health is a healthcare technology company that is
                dedicated to improving the quality of healthcare through the use
                of Artificial Intelligence. We are committed to providing
                innovative solutions that will help healthcare providers deliver
                better care to their patients.
              </p>
            </div>
          </div>
        </div>
      </div>
     
      {/* Our Mission */}
      <div className="h-auto w-full bg-lightblue flex items-center justify-center">
        <div className="h-96 w-full mt-60 flex flex-row px-12">
          <div className="left h-full w-6/12 flex flex-col justify-center gap-y-5 px-6">
            <h3 className="text-4xl text-darkblue font-bold">Our Mission</h3>
            <p className="text-grey font-semibold opacity-80 text-justify">
              At EmergingTech4Health, our mission is to harness the power of AI
              and emerging technologies to create a future where healthcare is
              more accessible, accurate, and personalized. By developing
              cutting-edge AI applications for tumor segmentation and advanced
              research in EEG and ECG analytics, we are not just imagining the
              future of healthcare – we are building it.
            </p>
          </div>
          <div className="right h-full w-6/12 px-6 py-12 rounded-lg">
            <img
              className="h-full w-full object-cover rounded-lg border-2 border-grey"
              src={about_us2}
              alt="error"
            />
          </div>
        </div>
      </div>
      
      {/* Our Vision */}
      <div className="h-auto w-full px-16 flex flex-col items-center justify-center gap-y-10 py-16 bg-lightblue">
        <h2 className="text-4xl text-darkblue font-bold">Our Vision</h2>
        <div
          className="w-full h-[35rem] rounded-lg relative bg-cover bg-center bg-no-repeat px-60 py-4"
          style={{ backgroundImage: `url(${image})` }}
        >
          <p className="text-sm text-grey items-center font-bold opacity-80">
            Our vision is to lead the way in integrating AI with healthcare,
            creating solutions that not only solve today’s medical problems but
            also anticipate tomorrow's challenges. We believe in a world where
            every patient benefits from the advancements in medical technology,
            and every healthcare provider is empowered with the tools they need
            to deliver exceptional care.
          </p>
        </div>
      </div>

      {/* Our Core Values */}
      <div className="h-auto w-full px-16 flex flex-col items-center justify-center gap-y-10 py-16 bg-white">
        <h2 className="text-4xl text-darkblue font-bold">Our Core Values</h2>
        <div className="h-96 w-full flex flex-row items-center justify-between px-10">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="h-80 w-[19rem] bg-blue flex flex-col justify-center items-center px-6 gap-y-8 rounded-lg group"
            >
              <div className="flex flex-row gap-x-4 items-center justify-start w-full">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-lightgrey group-hover:bg-purewhite transition ease-in-out duration-300">
                  <value.icon
                    className="h-5 w-5 text-grey group-hover:text-darkblue transition ease-in-out duration-300"
                    aria-hidden="true"
                  />
                </div>
                <h4 className="text-white text-2xl font-semibold">
                  {value.title}
                </h4>
              </div>
              <p className="text-justify text-white opacity-80">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      
    </>
  );
}
