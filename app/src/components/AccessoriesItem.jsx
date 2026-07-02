import Image from 'next/image';
import a from '../assets/Accessories.png'
import { div } from 'framer-motion/client';

const AccessoriesItem = () => {
  return (
    <div>
    <div className="relative bg-white px-40 py-20 h-[80vh]  shadow-md overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 right-0 w-full h-full"
          style={{
            clipPath: 'polygon(100% 0%, 100% 100%, 0% 100%)',
            backgroundColor: '#d3d3d3',
          }}
        ></div>
      </div>

      <div className="relative flex flex-col lg:flex-row items-center">
        {/* Left Section - Text */}
        <div className="lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0">
          <div className="mb-8">
            <span className="bg-gray-200 text-gray-700 py-2 px-5 rounded-full inline-block text-4xl">
              Luxury and Classy
            </span>
          </div>
          <h1 className="text-7xl font-medium text-gray-800 leading-tight">
            Shining Metal <br /> <span className="text-gray-900 text-8xl font-extrabold">Key Cover</span>
          </h1>
          <p className="text-gray-600 mt-4 text-3xl">
            Tata Nexon | Curvv | Altroz | Harrier | <br /> Punch | EV | Safari and
            Facelift <br /> 4 Button Smart Key
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="lg:w-1/2 flex justify-center mt-10">
          <div className="relative ">
            <Image
              src={a} // Replace with your image path
              alt="Key Cover"
              
              width={800}
              height={800}
              className='w-[1200px]'
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>

    
    <div className="relative bg-white min-h-screen p-8">
      {/* Top Left Pattern */}
      <div
        className="absolute top-0 left-0 w-1/2 h-1/2 bg-gray-300"
        style={{
          clipPath: 'polygon(0% 0%, 0% 50%, 50% 0%)',
        }}
      ></div>

      {/* Top Right Pattern */}
      <div
        className="absolute top-0 right-0 w-1/2 h-1/2 bg-gray-300"
        style={{
          clipPath: 'polygon(100% 0%, 0% 0%, 100% 100%)',
        }}
      ></div>

      {/* Bottom Left Pattern */}
      <div
        className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gray-300"
        style={{
          clipPath: 'polygon(0% 100%, 0% 0%, 100% 100%)',
        }}
      ></div>

      {/* Bottom Right Pattern */}
      <div
        className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gray-300"
        style={{
          clipPath: 'polygon(100% 100%, 0% 100%, 100% 0%)',
        }}
      ></div>

      {/* Content */}
      <div className="relative flex flex-col lg:flex-row items-center justify-center h-full">
        {/* Left Section - Text */}
        <div className="lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0">
          <h2 className="text-gray-600 text-xl">Lavish Feel</h2>
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            Key <span className="text-gray-900">Cover</span>
          </h1>
          <p className="mt-4 text-lg">
            Small changes make <strong>Large Impact</strong>
          </p>
          <h3 className="text-2xl font-extrabold text-gray-800 mt-6">
            Shock Absorbent
          </h3>
          <p className="text-gray-600 mt-2">
            Complete protection from falls, shocks, and scratches; keep your
            key looking new.
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-64 h-64">
            <Image
              src="/path/to/key-cover.jpg" // Replace with your image path
              alt="Key Cover"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AccessoriesItem;
