// 'use client'
// import React, { useState } from "react";
// import m1 from '../assets/kamlesh.png'
// import m2 from '../assets/sunil.png'
// import m3 from '../assets/mahendra.png'
// import m4 from '../assets/vinod.png'
// import m5 from '../assets/amit.png'

// import Image from "next/image";
// const teamMembers = [
//   {
//     name: "Mr. Kamlesh Natwadiya",
//     designation: "(CEO & MD)",
//     email:"ceo@chairbord.com",
//     qualification:"Graduated from Rajasthan University",
//     image: m1,
//     bgColor: "bg-yellow-300",
//   },
//   {
//     name: "Mr. Sunil Natwadiya",
//     designation: "(CMO)",
//     email:"sunil@chairbord.com",
//     qualification:"Graduated from Rajasthan University",
//     image: m2,
//     bgColor: "bg-green-300",
//   },
//   {
//     name: "Mr. Mahendra Natwadiya",
//     designation: "(Manager)",
//     email:"connect@chairbord.com",
//     qualification:"Graduated from Rajasthan University",
//     image: m3,
//     bgColor: "bg-blue-500",
//   },
//   {
//     name: "Mr. Vinod Kudi",
//     designation: "(Management)",
//     email:"vinod.kudi@chairbord.com",
//     qualification:"Graduated from Rajasthan University",
//     image: m4,
//     bgColor: "bg-purple-300",
//   },
//   {
//     name: "Mr. Amit Kumar",
//     designation: "(CTO/Product Manager)",
//     email:"amit@chairbord.com",
//     qualification:"Graduated from Rajasthan University",
//     image: m5,
//     bgColor: "bg-red-300",
//   },
// ];

// const TeamMembers = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
//     );
//   };

//   const getVisibleMembers = () => {
//     // Show the current index and two adjacent members
//     const visible = [];
//     for (let i = -1; i <= 1; i++) {
//       const index = (currentIndex + i + teamMembers.length) % teamMembers.length;
//       visible.push(teamMembers[index]);
//     }
//     return visible;
//   };

//   return (
//     <div className="flex flex-col items-center overflow-hidden pt-2 lg:pt-0  bg-white">
//       <div className="flex items-center justify-center lg:my-6 lg:px-6  px-5 lg:w-fit w-full">
//         <div className="flex-grow border-t border-gray-300 h-[1px] w-[150px]"></div>
//         <h2 className="text-center mx-4 lg:text-2xl text-lg font-semibold text-black">Team&nbsp;Members</h2>
//         <div className="flex-grow border-t border-gray-300 h-[1px] w-[150px] "></div>
//       </div>
//       <div className="relative flex items-center  w-full max-w-[1400px]  ">
//         <button
//           onClick={handlePrev}
//           className="absolute left-2 mb-14  text-xl bg-[#F5F5F5] py-2 px-4 rounded-full text-black shadow-lg z-10"
//         >
//           &#x276E;
//         </button>
//         <div className="flex justify-center items-center w-full overflow-hidden">
//           <div className="flex transition-transform duration-300 ease-in-out">
//             {getVisibleMembers().map((member, index) => {
//               const isCenter = index === 1; // The second item is in the center
//               const sizeClass = isCenter ? "lg:w-[350px] lg:h-[350px] w-[250px] h-[250px] " : "w-[250px] h-[250px]";
//               const imageSizeClass = isCenter ? "w-full lg:h-[450px] h-[350px]" : "w-full lg:h-[350px] ";
//               const memberTextClass = isCenter
//                 ? "lg:text-3xl text-xl font-semibold"
//                 : "text-xl opacity-30 font-semibold";
//               const desgnationTextClass = isCenter
//                 ? "lg:text-2xl text-lg font-medium"
//                 : "text-md opacity-30 font-medium";
//                 const otherTextClass = isCenter
//                 ? "lg:text-lg text-sm font-medium"
//                 : "text-sm opacity-30 font-medium";
//               return (
//                 <div
//                   key={index}
//                   className={`flex flex-col items-center  justify-center mx-16 lg:my-20 mt-24 mb-5 transition-all duration-300 ${isCenter ? "" : "opacity-60"}`}
//                 >
//                   <div
//                     className={`rounded-full flex items-center justify-center ${member.bgColor} ${sizeClass} transition-all duration-300`}
//                   >
//                     <Image
//                       src={member.image}
//                       alt={member.name}
//                       width={400}
//                       height={400}
//                       className={`rounded-full ${imageSizeClass} mb-[100px] object-cover`}
//                     />
//                   </div>
//                   <p className={`${memberTextClass} mt-4 text-black`}>{member.name}</p>
//                   <p className={`${desgnationTextClass}  text-black`}>{member.designation}</p>
//                   <p className={`${otherTextClass}  text-black`}>{member.email}</p>
//                   <p className={`${otherTextClass}  text-black`}>{member.qualification}</p>

//                 </div>
//               );
//             })}
//           </div>
//         </div>
//         <button
//           onClick={handleNext}
//           className="absolute right-2 mb-14 text-xl  bg-[#F5F5F5] py-2 px-4 rounded-full text-black shadow-lg z-10"
//         >
//           &#x276F;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TeamMembers;

// 'use client';
// import React, { useState } from "react";
// import m1 from '../assets/m1.jpg';
// import m2 from '../assets/m2.jpg';
// import m3 from '../assets/m3.jpg';
// import m4 from '../assets/m4.jpg';
// import m5 from '../assets/m5.jpg';

// const TeamMembers = () => {
//   const [currentIndex, setCurrentIndex] = useState(0); // Tracks the starting index of the visible members
//   const membersPerPage = 3; // Number of members visible at a time

//   const teamMembers = [
//     {
//       name: "Kamlesh Natwadiya",
//       title: "Founder of ChairBoard",
//       image: m1,
//     },
//     {
//       name: "Sunil Natwadiya",
//       title: "Founder of OctoBase",
//       image: m2,
//     },
//     {
//       name: "Mahendra Natwadiya",
//       title: "Founder of ProofList",
//       image: m3,
//     },
//     {
//       name: "Vinod Kumar",
//       title: "Founder of TechX",
//       image: m4,
//     },
//     {
//       name: "Amit Verma",
//       title: "Founder of SoftTech",
//       image: m5,
//     },
//   ];

//   const handleNext = () => {
//     if (currentIndex + membersPerPage < teamMembers.length) {
//       setCurrentIndex(currentIndex + membersPerPage);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentIndex - membersPerPage >= 0) {
//       setCurrentIndex(currentIndex - membersPerPage);
//     }
//   };

//   return (
//     <div className="relative bg-gray-50 py-5 flex flex-col  items-center">
//       <div className="flex items-center justify-center  lg:px-6  px-5 lg:w-fit w-full">
//          <div className="flex-grow border-t border-gray-300 h-[1px] w-[150px]"></div>
//          <h2 className="text-center mx-4 lg:text-2xl text-lg font-semibold text-black">Team&nbsp;Members</h2>
//          <div className="flex-grow border-t border-gray-300 h-[1px] w-[150px] "></div>
//        </div>
//       <div className=" text-center  text-black my-3">
//         <h2 className="text-5xl font-extrabold mb-4">Over 1000+ people trust us</h2>
//         <p className="text-lg ">
//           Transparency gives you the faith & belief you need to create a
//           successful business, irrespective of the field it is related to.
//         </p>
//       </div>

//       {/* Navigation Buttons */}
//       {/* <div className="flex justify-between items-center ">
//         <button
//           onClick={handlePrevious}
//           disabled={currentIndex === 0}
//           className={`py-2 px-4 bg-gray-200 rounded-full hover:bg-gray-300 ${
//             currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
//           }`}
//           aria-label="Scroll left"
//         >
//           &#x276E;
//         </button>
//         <button
//           onClick={handleNext}
//           disabled={currentIndex + membersPerPage >= teamMembers.length}
//           className={`py-2 px-4  bg-gray-200 rounded-full hover:bg-gray-300 ${
//             currentIndex + membersPerPage >= teamMembers.length
//               ? "opacity-50 cursor-not-allowed"
//               : ""
//           }`}
//           aria-label="Scroll right"
//         >
//           &#x276F;
//         </button>
//       </div> */}

//       {/* Team Members */}
//       <div className="flex justify-center items-center my-5 gap-10">
        
//         <button
//           onClick={handlePrevious}
//           disabled={currentIndex === 0}
//           className={`py-2 px-4 h-10 text-black bg-gray-200 rounded-full hover:bg-gray-300 ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//           aria-label="Scroll left"
//         >
//           &#x276E;
//         </button>
//         {teamMembers
//           .slice(currentIndex, currentIndex + membersPerPage)
//           .map((member, index) => (
//             <div
//               key={index}
//               className="w-80  relative bg-white rounded-lg shadow-lg overflow-hidden"
//             >
//               <div
//                 className="h-[500px] w-full shadow-xl bg-cover bg-center"
//                 style={{ backgroundImage: `url(${member.image.src})` }}
//               >
//                 <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
//                   <h3 className="font-semibold text-lg text-white">
//                     {member.name}
//                   </h3>
//                   <p className="text-gray-300 text-sm">{member.title}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//           <button
//           onClick={handleNext}
//           disabled={currentIndex + membersPerPage >= teamMembers.length}
//           className={`py-2 px-4 text-black bg-gray-200 rounded-full hover:bg-gray-300 ${
//             currentIndex + membersPerPage >= teamMembers.length
//               ? "opacity-50 cursor-not-allowed"
//               : ""
//           }`}
//           aria-label="Scroll right"
//         >
//           &#x276F;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TeamMembers;


'use client';
import React, { useState, useEffect } from "react";
import m1 from '../assets/m1.jpg';
import m2 from '../assets/m2.jpg';
import m3 from '../assets/m3.jpg';
import m4 from '../assets/m4.jpg';
import m5 from '../assets/m5.jpg';

const TeamMembers = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Tracks the starting index of the visible members
  const [membersPerPage, setMembersPerPage] = useState(3); // Default visible members

  const teamMembers = [
    {
      name: "Kamlesh Natwadiya",
      title: "Founder of ChairBoard",
      image: m1,
    },
    {
      name: "Sunil Natwadiya",
      title: "Founder of OctoBase",
      image: m2,
    },
    {
      name: "Mahendra Natwadiya",
      title: "Founder of ProofList",
      image: m3,
    },
    {
      name: "Vinod Kumar",
      title: "Founder of TechX",
      image: m4,
    },
    {
      name: "Amit Verma",
      title: "Founder of SoftTech",
      image: m5,
    },
  ];

  // Update membersPerPage based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMembersPerPage(1); // Mobile view: Show 1 member
      } else {
        setMembersPerPage(3); // Default for larger screens
      }
    };
    handleResize(); // Check on component mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    if (currentIndex + membersPerPage < teamMembers.length) {
      setCurrentIndex(currentIndex + membersPerPage);
    }
  };

  const handlePrevious = () => {
    if (currentIndex - membersPerPage >= 0) {
      setCurrentIndex(currentIndex - membersPerPage);
    }
  };

  return (
    <div className="relative bg-gray-50 py-5 flex flex-col items-center">
      <div className="flex items-center justify-center lg:px-6 px-5 lg:w-fit w-full">
        <div className="flex-grow border-t border-gray-300 h-[1px] w-[150px]"></div>
        <h2 className="text-center mx-4 lg:text-2xl text-lg font-semibold text-black">Team&nbsp;Members</h2>
        <div className="flex-grow border-t border-gray-300 h-[1px] w-[150px] "></div>
      </div>
      <div className="text-center text-black my-3 ">
        <h2 className="lg:text-5xl text-2xl font-extrabold mb-4">Over 1000+ people trust us</h2>
        <p className="lg:text-lg px-4 text-justify ">
          Transparency gives you the faith & belief you need to create a
          successful business, irrespective of the field it is related to.
        </p>
      </div>

      {/* Team Members */}
      <div className="flex justify-center items-center my-5 lg:gap-10 gap-5">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className={`py-2 px-4 h-10 text-black bg-gray-200 rounded-full hover:bg-gray-300 ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          aria-label="Scroll left"
        >
          &#x276E;
        </button>
        {teamMembers
          .slice(currentIndex, currentIndex + membersPerPage)
          .map((member, index) => (
            <div
              key={index}
              className="lg:w-80 relative w-52 bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div
                className="lg:h-[500px] h-[300px] w-full shadow-xl bg-cover bg-center"
                style={{ backgroundImage: `url(${member.image.src})` }}
              >
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
                  <h3 className="font-semibold text-lg text-white">
                    {member.name}
                  </h3>
                  <p className="text-gray-300 text-sm">{member.title}</p>
                </div>
              </div>
            </div>
          ))}
        <button
          onClick={handleNext}
          disabled={currentIndex + membersPerPage >= teamMembers.length}
          className={`py-2 px-4 text-black bg-gray-200 rounded-full hover:bg-gray-300 ${
            currentIndex + membersPerPage >= teamMembers.length
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          aria-label="Scroll right"
        >
          &#x276F;
        </button>
      </div>
    </div>
  );
};

export default TeamMembers;
