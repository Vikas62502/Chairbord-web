'use client'
import Image from "next/image";
import { useState } from "react";
import gps from '../assets/Accessories.png'

const ProductSection = () => {
  return (
    <div className="flex flex-col gap-10 bg-white py-10">
      <div className="flex flex-col md:flex-row items-center  justify-center gap-40 p-6 bg-white">
      {/* Left Section */}
      <div className="relative ">
        {/* Background */}
        <div className="absolute bg-gradient-to-tl px-4 py-2 from-gray-800 via-gray-600 to-gray-300 rounded-tr-[40px] rounded-bl-[40px] shadow-lg  w-80 h-96 bg-gray-200 flex items-end justify-end"><h2 className="text-xl font-bold text-white text-end ">MHD-A3</h2></div>

        {/* Image */}
        <div className="relative z-10 left-[-100px] overflow-hidden rounded-lg">
          <Image
            src={gps} // Replace with the actual image path
            alt="Product Image"
            width={550}
            height={550}
            className="transition-transform duration-500 ease-in-out hover:scale-110"
          />
        

        </div>
        <div className="w-[800px] h-1 -z-10 bg-gray-800 ml-10 mt-[41px]"></div>
      </div>

      {/* Right Section */}
      <div className=" max-w-2xl  ml-[-400px] text-center">
        {/* <h2 className="text-xl font-bold">MHD-A3</h2> */}
        <p className="mt-2 text-4xl font-bold text-gray-700">
          Mahindra Scorpio | Xuv 300 |<br/> Marazzo | Xuv 700 | Xuv 400 | <br/>Bolero |
          Thar | Tuv300 | Ev 3 Button Flip Key (Mhd-A3, Multi-Coloured)
        </p>
      </div>
    </div>
    <div className="flex flex-col md:flex-row-reverse items-center  justify-center gap-20 p-6 bg-white">
      {/* Left Section */}
      <div className="relative ">
        {/* Background */}
        <div className="absolute bg-gradient-to-tl px-4 py-2 from-gray-800 via-gray-600 to-gray-300 rounded-tl-[40px] ml-[220px] rounded-br-[40px] shadow-lg  w-80 h-96 bg-gray-200 flex items-end justify-start"><h2 className="text-xl font-bold text-white text-start ">MHD-A3</h2></div>

        {/* Image */}
        <div className="relative z-10 right-[-100px] overflow-hidden rounded-lg">
          <Image
            src={gps} // Replace with the actual image path
            alt="Product Image"
            width={550}
            height={550}
            className="transition-transform duration-500 ease-in-out hover:scale-110"
          />
        

        </div>
        <div className="w-[600px] h-1 -z-10 bg-gray-800 ml-[-350px] mt-[41px]"></div>
      </div>

      {/* Right Section */}
      <div className=" max-w-2xl  text-center ">
        {/* <h2 className="text-xl font-bold">MHD-A3</h2> */}
        <p className="mt-2 text-4xl font-bold text-gray-700">
          Mahindra Scorpio | Xuv 300 |<br/> Marazzo | Xuv 700 | Xuv 400 | <br/>Bolero |
          Thar | Tuv300 | Ev 3 Button Flip Key (Mhd-A3, Multi-Coloured)
        </p>
      </div>
    </div>
    <div className="flex flex-col md:flex-row items-center  justify-center gap-40 p-6 bg-white">
      {/* Left Section */}
      <div className="relative ">
        {/* Background */}
        <div className="absolute bg-gradient-to-tl px-4 py-2 from-gray-800 via-gray-600 to-gray-300 rounded-tr-[40px] rounded-bl-[40px] shadow-lg  w-80 h-96 bg-gray-200 flex items-end justify-end"><h2 className="text-xl font-bold text-white text-end ">MHD-A3</h2></div>

        {/* Image */}
        <div className="relative z-10 left-[-100px] overflow-hidden rounded-lg">
          <Image
            src={gps} // Replace with the actual image path
            alt="Product Image"
            width={550}
            height={550}
            className="transition-transform duration-500 ease-in-out hover:scale-110"
          />
        

        </div>
        <div className="w-[800px] h-1 -z-10 bg-gray-800 ml-10 mt-[41px]"></div>
      </div>

      {/* Right Section */}
      <div className=" max-w-2xl  ml-[-400px] text-center">
        {/* <h2 className="text-xl font-bold">MHD-A3</h2> */}
        <p className="mt-2 text-4xl font-bold text-gray-700">
          Mahindra Scorpio | Xuv 300 |<br/> Marazzo | Xuv 700 | Xuv 400 | <br/>Bolero |
          Thar | Tuv300 | Ev 3 Button Flip Key (Mhd-A3, Multi-Coloured)
        </p>
      </div>
    </div>
    <div className="flex flex-col md:flex-row-reverse items-center  justify-center gap-20 p-6 bg-white">
      {/* Left Section */}
      <div className="relative ">
        {/* Background */}
        <div className="absolute bg-gradient-to-tl px-4 py-2 from-gray-800 via-gray-600 to-gray-300 rounded-tl-[40px] ml-[220px] rounded-br-[40px] shadow-lg  w-80 h-96 bg-gray-200 flex items-end justify-start"><h2 className="text-xl font-bold text-white text-start ">MHD-A3</h2></div>

        {/* Image */}
        <div className="relative z-10 right-[-100px] overflow-hidden rounded-lg">
          <Image
            src={gps} // Replace with the actual image path
            alt="Product Image"
            width={550}
            height={550}
            className="transition-transform duration-500 ease-in-out hover:scale-110"
          />
        

        </div>
        <div className="w-[600px] h-1 -z-10 bg-gray-800 ml-[-350px] mt-[41px]"></div>
      </div>

      {/* Right Section */}
      <div className=" max-w-2xl  text-center ">
        {/* <h2 className="text-xl font-bold">MHD-A3</h2> */}
        <p className="mt-2 text-4xl font-bold text-gray-700">
          Mahindra Scorpio | Xuv 300 |<br/> Marazzo | Xuv 700 | Xuv 400 | <br/>Bolero |
          Thar | Tuv300 | Ev 3 Button Flip Key (Mhd-A3, Multi-Coloured)
        </p>
      </div>
    </div>
    </div>
  );
};

export default ProductSection;
