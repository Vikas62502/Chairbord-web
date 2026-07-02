'use client'
import Slideshow from "../components/Slideshow";
import Form from "../components/Form";
import Image from "next/image";
import logo from "../assets/chairbord.png";

export default function SignIn() {
  return (
    <div className="flex h-screen ">
      {/* Left side with Slideshow */}
      <div className="relative w-1/2 hidden md:block">
        <Slideshow />
        <div className="absolute top-6 left-6 text-white text-2xl font-bold">
        <Image
        alt="Chairbord"
        src={logo}
        className="md:w-[200px] w-[140px] justify-start lg:ml-0 ml-[-10px]"
        width={200}
        height={50}
      />
        </div>
        <a
          href="/"
          className="absolute top-6 right-6 bg-glass text- py-2 px-6 rounded-full backdrop-blur-xs border bg-gray-500/50 "
        >
          Back to website
        </a>
        {/* <div className="absolute bottom-10 left-10 text-white text-lg">
          <h3>Capturing Moments,</h3>
          <h3>Creating Memories</h3>
        </div> */}
      </div>

      {/* Right side with Login/Signup Form */}
      <div className="w-full md:w-1/2 bg-[#28272C]  flex justify-center items-center">
        <Form />
      </div>
    </div>
  );
}
