'use client'
import React, { useState } from "react";
import m1 from '../assets/kamlesh.png'
import m2 from '../assets/sunil.png'
import m3 from '../assets/mahendra.png'
import m4 from '../assets/vinod.png'
import m5 from '../assets/amit.png'

import Image from "next/image";
const teamMembers = [
  {
    name: "Mr. Kamlesh Natwadiya",
    designation: "(CEO & MD)",
    email:"ceo@chairbord.com",
    qualification:"Graduated from Rajasthan University",
    image: m1,
    bgColor: "bg-yellow-300",
  },
  {
    name: "Mr. Sunil Natwadiya",
    designation: "(CMO)",
    email:"sunil@chairbord.com",
    qualification:"Graduated from Rajasthan University",
    image: m2,
    bgColor: "bg-green-300",
  },
  {
    name: "Mr. Mahendra Natwadiya",
    designation: "(Manager)",
    email:"connect@chairbord.com",
    qualification:"Graduated from Rajasthan University",
    image: m3,
    bgColor: "bg-blue-500",
  },
  {
    name: "Mr. Vinod Kudi",
    designation: "(Management)",
    email:"vinod.kudi@chairbord.com",
    qualification:"Graduated from Rajasthan University",
    image: m4,
    bgColor: "bg-purple-300",
  },
  {
    name: "Mr. Amit Kumar",
    designation: "(CTO/Product Manager)",
    email:"amit@chairbord.com",
    qualification:"Graduated from Rajasthan University",
    image: m5,
    bgColor: "bg-red-300",
  },
];

const TeamMembers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  const getVisibleMembers = () => {
    // Show the current index and two adjacent members
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + teamMembers.length) % teamMembers.length;
      visible.push(teamMembers[index]);
    }
    return visible;
  };

  return (
    <div className="flex flex-col items-center overflow-hidden   bg-white">
      <div className="flex items-center justify-center lg:my-6 lg:px-6  px-5 lg:w-fit w-full">
        <div className="flex-grow border-t border-gray-300 h-[1px] w-[150px]"></div>
        <h2 className="text-center mx-4 lg:text-2xl text-lg font-semibold text-black">Team&nbsp;Members</h2>
        <div className="flex-grow border-t border-gray-300 h-[1px] w-[150px] "></div>
      </div>
      <div className="relative flex items-center  w-full max-w-[1400px]  ">
        <button
          onClick={handlePrev}
          className="absolute left-2 mb-14  text-xl bg-[#F5F5F5] py-2 px-4 rounded-full text-black shadow-lg z-10"
        >
          &#x276E;
        </button>
        <div className="flex justify-center items-center w-full overflow-hidden">
          <div className="flex transition-transform duration-300 ease-in-out">
            {getVisibleMembers().map((member, index) => {
              const isCenter = index === 1; // The second item is in the center
              const sizeClass = isCenter ? "lg:w-[350px] lg:h-[350px] w-[250px] h-[250px] " : "w-[250px] h-[250px]";
              const imageSizeClass = isCenter ? "w-full lg:h-[450px] h-[350px]" : "w-full lg:h-[350px] ";
              const memberTextClass = isCenter
                ? "lg:text-3xl text-xl font-semibold"
                : "text-xl opacity-30 font-semibold";
              const desgnationTextClass = isCenter
                ? "lg:text-2xl text-lg font-medium"
                : "text-md opacity-30 font-medium";
                const otherTextClass = isCenter
                ? "lg:text-lg text-sm font-medium"
                : "text-sm opacity-30 font-medium";
              return (
                <div
                  key={index}
                  className={`flex flex-col items-center  justify-center mx-16 lg:my-20 mt-20 mb-5 transition-all duration-300 ${isCenter ? "" : "opacity-60"}`}
                >
                  <div
                    className={`rounded-full flex items-center justify-center ${member.bgColor} ${sizeClass} transition-all duration-300`}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={400}
                      className={`rounded-full ${imageSizeClass} mb-[100px] object-cover`}
                    />
                  </div>
                  <p className={`${memberTextClass} mt-4 text-black`}>{member.name}</p>
                  <p className={`${desgnationTextClass}  text-black`}>{member.designation}</p>
                  <p className={`${otherTextClass}  text-black`}>{member.email}</p>
                  <p className={`${otherTextClass}  text-black`}>{member.qualification}</p>

                </div>
              );
            })}
          </div>
        </div>
        <button
          onClick={handleNext}
          className="absolute right-2 mb-14 text-xl  bg-[#F5F5F5] py-2 px-4 rounded-full text-black shadow-lg z-10"
        >
          &#x276F;
        </button>
      </div>
    </div>
  );
};

export default TeamMembers;
