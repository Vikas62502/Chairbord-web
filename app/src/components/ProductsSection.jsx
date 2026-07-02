// 'use client'
// // import { useEffect, useState, useRef } from 'react';
// import fastag from '../assets/Fastag.png'
// import creditcard from '../assets/creditcard.jpg'
// import gps from '../assets/gps.jpg'
// import accessories from '../assets/Accessories.png'
// import Image from 'next/image';

// const ProductsSection = () => {

//     return (

//         <div className='bg-[#F5F5F5] flex flex-col items-center lg:pt-6 pt-2 pb-5'>
//             <div className="flex items-center justify-center  lg:mb-6 mb-[-8px] lg:mx-auto lg:w-fit w-full px-5 ">
//                 <div className="flex-grow border-t border-gray-300 h-[1px] lg:w-[150px] w-[80px]"></div>
//                 <h2 className="text-center mx-4 lg:text-2xl text-lg font-semibold text-black">Products</h2>
//                 <div className="flex-grow border-t border-gray-300 h-[1px] lg:w-[150px] w-[80px]"></div>
//             </div>
//             <section className="work-section ">

//                 <div className="project project0">
//                     <div className="project-img">
//                         <div className="project-img-wrapper">
//                             <a href="/products" target="_blank">
//                                 <Image src={fastag} width={250} height={200} alt="project image" draggable="false" className=' img shadow-lg px-20 py-12 rounded-lg bg-white text-centerbg-[#C0C0C0] lg:mb-0 mb-[-20px]  ' />
//                             </a>

//                         </div>
//                     </div>
//                     <div className="project-details mx-6">
//                         <h3>FASTag</h3>
//                         <span className='font-medium' >What is FASTag?</span>
//                         <p className='mt-2 text-black'>
//                         FASTag is a revolutionary electronic toll collection system that revolutionizes your highway travel experience. It&apos;s a simple, reloadable tag that you affix to your vehicle&apos;s windscreen. This nifty device uses Radio Frequency Identification (RFID) technology to automatically deduct toll charges from your linked prepaid account as you pass through toll plazas.
//                         </p>
//                         {/* <span className='font-medium' >Why Choose FASTag?</span>
//                         <p className='mt-2 text-black'>
//                         FASTag is a revolutionary electronic toll collection system that revolutionizes your highway travel experience. It's a simple, reloadable tag that you affix to your vehicle's windscreen. This nifty device uses Radio Frequency Identification (RFID) technology to automatically deduct toll charges from your linked prepaid account as you pass through toll plazas.
//                         </p> */}

//                     </div>
//                     <a className="circle-dot" href="/products" target="_blank"></a>
//                     <div className="circle-extension"></div>
//                 </div>

//                 <div className="project project1">
//                     <div className="project-details mx-6">
//                         <h3>GPS</h3>
//                         <span className='font-medium'>What is GPS?</span>
//                         <p className='mt-2'>
//                         GPS, or Global Positioning System, is a satellite-based navigation system that provides highly accurate positioning, navigation, and timing (PNT) services worldwide. It&apos;s the technology that powers your smartphone&apos;s maps, your car&apos;s navigation system, and many other devices.
//                         </p>


//                     </div>
//                     <div className="project-img">
//                         <div className="project-img-wrapper ">
//                             <a href="/products" target="_blank" >
//                                 <Image src={gps} width={200} height={200} alt="project image" draggable="false" className='img shadow-lg px-20 py-5 rounded-lg bg-white text-center    lg:mb-0 mb-[-20px]' />

//                             </a>

//                         </div>
//                     </div>
//                     <a className="circle-dot" href="/products" target="_blank"> </a>
//                     <div className="circle-extension"></div>
//                 </div>
//                 <div className="project project2 ">
//                     <div className="project-img">
//                         <div className="project-img-wrapper">
//                             <a href="/products" target="_blank" className=''>
//                                 <Image src={creditcard} width={150} height={100} alt="project image" draggable="false" className='shadow-lg px-24 py-4  rounded-lg bg-white text-center  lg:mb-0 mb-[-20px]' />

//                             </a>

//                         </div>
//                     </div>
//                     <div className="project-details mx-6">
//                         <h3>Credit Card</h3>
//                         <span className='font-medium'>HDFC Credit Cards: Your Gateway to a World of Possibilities</span>
//                         <p className='mt-2'>
//                         HDFC Bank offers a diverse range of credit cards tailored to meet various needs and lifestyles. From basic rewards cards to premium travel and lifestyle cards, you&apos;re sure to find the perfect card to elevate your financial journey.
//                         </p>


//                     </div>
//                     <a className="circle-dot" href="/products" target="_blank"></a>
//                     <div className="circle-extension"></div>
//                 </div>
//                 <div className="project project3 ">

//                     <div className="project-details mx-6">
//                         <h3>Accessories</h3>
//                         <span className='font-medium'>Accessories: The Finishing Touch</span>
//                         <p className='mt-2'>
//                         Accessories are the secret ingredient to elevating any outfit. They can transform a simple look into a statement, adding a touch of personality and style. Whether you&apos;re dressing up for a special occasion or keeping it casual, the right accessories can make all the difference.
//                         </p>


//                     </div>
//                     <div className="project-img">
//                         <div className="project-img-wrapper">
//                             <a href="/products" target="_blank" className=''>
//                                 <Image src={accessories} width={200} height={100} alt="project image" draggable="false" className='img px-24 py-4 shadow-lg  rounded-lg bg-white text-center  lg:mb-0 mb-[-20px]' />

//                             </a>

//                         </div>
//                     </div>
//                     <a className="circle-dot" href="/products" target="_blank"></a>
//                     <div className="circle-extension"></div>
//                 </div>




//                 <div className="vertical-line"></div>
//             </section>
//             <a href="/products">
//             <button
//                                 type="submit"
//                                 className=" bg-[#00B4FF] text-white py-2 mt-5 px-5 rounded-lg font-semibold"
//                             >
//                                 View more
//                             </button>
//             </a>

//         </div>
//     );
// };

// export default ProductsSection;

// 'use client'
// import { useEffect, useState } from "react";
// import fastag from '../assets/Fastag.png'
// import creditcard from '../assets/creditcard.jpg'
// import gps from '../assets/gps.jpg'
// import accessories from '../assets/Accessories.png'
// import Image from 'next/image';
// const ProductSection = () => {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setShow(true);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="bg-gradient-to-t from-gray-200 via-white to-gray-200 py-5">
// <div className="flex items-center justify-center  lg:mb-6 mb-[-8px] lg:mx-auto lg:w-fit w-full px-5 ">
//          <div className="flex-grow border-t border-gray-300 h-[1px] lg:w-[150px] w-[80px]"></div>
//         <h2 className="text-center mx-4 lg:text-2xl text-lg font-semibold text-black">Products</h2>
//          <div className="flex-grow border-t border-gray-300 h-[1px] lg:w-[150px] w-[80px]"></div>
//     </div>
//       <div className="container mx-auto text-black text-center">
//         <h2 className="text-5xl font-bold mt-5 mb-4">We Serve All Needs for your Vehicle</h2>
//         <h3 className="text-2xl  mb-3">View by category</h3>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-5 text-black">
//           {[
//             { title: "FASTAG", desc: "SBI & BAJAJ FASTag with Service as our key term", img: fastag },
//             { title: "GPS", desc: "Track your vehicle and monitor at the same time", img: gps },
//             { title: "Accessories", desc: "Car accessories including cleaning items and premium keys to attach", img: accessories },
//             { title: "Credit Card", desc: "Exclusive offers for car payments and services", img: creditcard },
//           ].map((product, index) => (
//             <div
//               key={index}
//               className={`bg-gradient-to-tr max-w-[300px] max-h-[400px] border-[0.2px] border-gray-300 from-gray-300 to-white rounded-se-[40px] rounded-es-[40px] shadow-lg p-4 transform transition-all duration-500 ${
//                 show ? "motion-safe:translate-y-0" : "motion-safe:translate-y-10 opacity-0"
//               }`}
//               style={{ transitionDelay: `${index * 200}ms` }}
//             >
//               <div className="overflow-hidden rounded-md bg-white">
//                 <Image
//                   src={product.img}
//                   width={500}
//                   height={500}
//                   alt={product.title}
//                   className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500"
//                 />
//               </div>
//               <h4 className="text-2xl font-bold mt-4">{product.title}</h4>
//               <p className=" text-lg mt-2">{product.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductSection;


// components/ProductSection.js
'use client'
import Image from "next/image";
// components/ProductSection.js
import { useInView } from "react-intersection-observer";
import fastag from '../assets/Fastag.png'
import creditcard from '../assets/creditcard.jpg'
import gps from '../assets/gps.jpg'
import accessories from '../assets/Accessories.png'

const ProductSection = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const [ref4, inView4] = useInView({ triggerOnce: true });

  return (
    <div className="bg-[#F5F5F5]  lg:py-10 lg:px-20 py-5 px-4">
      <div className="flex items-center justify-center  mb-4 mt-[-20px] lg:mx-auto lg:w-fit w-full px-5 ">
        <div className="flex-grow border-t border-gray-300 h-[1px] lg:w-[150px] w-[80px]"></div>
        <h2 className="text-center mx-4 lg:text-2xl text-lg font-semibold text-black">Products</h2>
        <div className="flex-grow border-t border-gray-300 h-[1px] lg:w-[150px] w-[80px]"></div>
      </div>
      <div className="text-center mb-8">
        {/* <h3 className="text-blue-600 text-2xl  mb-2">Get new Products</h3> */}
        <h1 className="lg:text-5xl text-2xl text-black font-bold">Visit our Store</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* FASTag Card */}
        <div
          ref={ref1}
          className={`relative flex flex-col items-center transition-transform duration-700 ${inView1 ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
        >
          <div className="bg-white rounded-lg shadow-lg px-10 lg:py-5 py-3 w-full">
            <Image
              src={fastag}
              alt="FASTag"
              width={500}
              height={500}
              className="w-full lg:h-48 h-40 object-cover rounded-t-lg transform hover:scale-110 transition-transform duration-500"
            />
          </div>
          <h2 className="text-lg text-black font-bold mt-4 text-justify">
            Get SBI and Bajaj FASTag for Sale and Personal Use
          </h2>
          <a href="#" className="text-blue-600 mt-2 text-left w-full font-semibold inline-block">
            FASTag
          </a>
        </div>

        {/* GPS Card */}
        <div
          ref={ref2}
          className={`relative flex flex-col items-center transition-transform duration-700 ${inView2 ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
        >
          <div className="bg-white rounded-lg shadow-lg px-10 py-7 w-full">
            <Image
              src={gps}
              alt="FASTag"
              width={500}
              height={500}
              className="w-full lg:h-44 h-38 object-cover rounded-t-lg transform hover:scale-110 transition-transform duration-500"
            />
          </div>
          <h2 className="text-lg text-black font-bold mt-4 text-justify">
            Track and Monitor your Vehicle with our GPS
          </h2>
          <a href="#" className="text-blue-600 mt-2 text-left w-full font-semibold inline-block">
            GPS
          </a>
        </div>

        <div
          ref={ref3}
          className={`relative flex flex-col items-center transition-transform duration-700 ${inView3 ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
        >
          <div className="bg-white rounded-lg shadow-lg px-10 lg:py-5 py-3 w-full">
            <Image
              src={creditcard}
              alt="FASTag"
              width={500}
              height={500}
              className="w-full lg:h-48 h-40 object-cover rounded-t-lg transform hover:scale-110 transition-transform duration-500"
            />
          </div>
          <h2 className="text-lg text-black font-bold mt-4 text-justify">
            Track and Monitor your Vehicle with our GPS
          </h2>
          <a href="#" className="text-blue-600 mt-2 text-left w-full font-semibold inline-block">
            GPS
          </a>
        </div>

        {/* Accessories Card */}
        <div
          ref={ref4}
          className={`relative flex flex-col items-center transition-transform duration-700 ${inView4 ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
        >
          <div className="bg-white rounded-lg shadow-lg px-10 lg:py-5 py-3 w-full">
            <Image
              src={accessories}
              alt="FASTag"
              width={500}
              height={500}
              className="w-full lg:h-48 h-40 object-cover transform hover:scale-110 transition-transform duration-500 rounded-t-lg"
            />
          </div>
          <h2 className="text-lg  text-black font-bold mt-4 text-justify">
            Products enhancing your normal parts to lavish
          </h2>
          <a href="#" className="text-blue-600 mt-2 text-left w-full font-semibold inline-block">
            Accessories
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
