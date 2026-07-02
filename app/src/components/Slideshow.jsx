import { useEffect, useState } from "react";
import p1 from "../assets/BG1.png";
import p2 from "../assets/BG2.png";
import p3 from "../assets/BG3.png";
import Image from "next/image";
const images = [
  p1,
  p2,
  p3,
];

export default function Slideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full ">
      <Image
        src={images[current]}
        alt="Slideshow Image"
        width={1000}
        height={1000}
        className="absolute w-full h-full object-cover  transition-all duration-1000"
      />
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-8 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
