'use client'
import "remixicon/fonts/remixicon.css"; // Import Remix Icons
import gps from '../assets/gps.png'
import Image from "next/image";
import { useState } from "react";
export default function Home() {
    const [view, setView] = useState("grid"); // Grid or List View
    const [filter, setFilter] = useState("Featured"); // Filter Dropdown
    const products = [
        {
            id: 1,
            name: "SBI FASTag",
            price: "400",
            rating: 243,
            stars: 4.5,
            image: gps,
        },
        {
            id: 2,
            name: "Bajaj FASTag",
            price: "400",
            rating: 243,
            stars: 3.5,
            image: gps,
        },
        {
            id: 3,
            name: "MHD-A3",
            price: "499",
            rating: 98,
            stars: 4.0,
            image: gps,
        },
        {
            id: 4,
            name: "SZK-D2",
            price: "499",
            rating: 1002,
            stars: 3.5,
            image: gps,
        },
        {
            id: 5,
            name: "4 Series — Intelligent Flight Battery",
            price: "499",
            rating: 356,
            stars: 4.8,
            image: gps,
        },
        {
            id: 6,
            name: "DJI Phantom 3 — Intelligent Battery",
            price: "599",
            rating: 100,
            stars: 4.2,
            image: gps,
        },
        {
            id: 7,
            name: "DJI Phantom 4 PRO",
            price: "699",
            rating: 78,
            stars: 4.9,
            image: gps,
        },
    ];

    // Function to display stars using Remix Icons
    const renderStars = (stars) => {
        const fullStars = Math.floor(stars);
        const hasHalfStar = stars % 1 !== 0;
        const totalStars = 5;

        return (
            <div className="flex gap-1 text-yellow-500">
                {[...Array(fullStars)].map((_, i) => (
                    <i key={i} className="text-xs lg:text-base ri-star-fill"></i>
                ))}
                {hasHalfStar && <i className=" text-xs lg:text-base ri-star-half-fill"></i>}
                {[...Array(totalStars - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
                    <i key={i} className=" text-xs lg:text-base ri-star-line"></i>
                ))}
            </div>
        );
    };

    return (
        <div className="bg-white w-full mx-auto lg:px-20 px-4 lg:py-12 py-10">
            <div className="flex items-center justify-between mb-6">
                <h1 className="lg:text-4xl text-2xl text-black font-bold">Products</h1>
                <div className="flex lg:gap-4 gap-2 items-center">
                    {/* Filter Dropdown */}
                    <select
                        className="border rounded text-gray-500 lg:px-2 lg:py-2 px-1 py-1"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="Featured">Featured</option>
                        <option value="FASTag">FASTag</option>
                        <option value="GPS">GPS</option>
                        <option value="Credit Card">Credit Card</option>
                    </select>

                    {/* View Toggle */}
                    <div className="flex gap-2">
                        <button
                            className={`lg:px-3 lg:py-1 py-[3px] px-2 rounded ${view === "grid" ? "bg-black text-white" : "bg-gray-200 text-black"}`}
                            onClick={() => setView("grid")}
                        >
                            <i className="ri-grid-fill "></i>
                        </button>
                        <button
                            className={`lg:px-3 lg:py-1 py-[3px] px-2 rounded ${view === "list" ? "bg-black text-white" : "bg-gray-200 text-black"}`}
                            onClick={() => setView("list")}
                        >
                            <i className="ri-list-unordered "></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className={view === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" : "flex  flex-col gap-4"}>
                {products.map((product) => (
                    <div
                        key={product.id}
                        className={view === "grid" ? " relative group border  rounded-lg  hover:shadow-xl p-4 transition duration-300" : "flex w-full rounded-lg border py-2 items-center lg:gap-24 gap-2"}
                    >
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={400}
                            height={400}
                            className={view === "grid" ? "w-full lg:h-32 h-24 object-contain mb-4 transition-transform duration-300 group-hover:scale-125" : " lg:h-32 h-10 object-contain  transition-transform duration-300 group-hover:scale-125"}
                        />
                        {/* <div className={view === "grid" ? "absolute top-2 right-2 flex flex-col gap-2" : "hidden"}>
                            <i className="ri-heart-line text-white bg-gray-800/50 px-2 py-1 rounded-full hover:text-red-500"></i>
                            <i className="ri-shopping-cart-line text-white bg-gray-800/50 px-2 py-1 rounded-full hover:text-green-500"></i>
                        </div> */}
                        <h2 className={view === "grid" ? "text-lg text-black  font-semibold" : "lg:text-lg text-sm  text-black  lg:w-[250px] w-[350px] font-semibold"}>{product.name}</h2>
                        <p className="text-gray-700 lg:text-base text-sm whitespace-nowrap">&#8377; {product.price}</p>
                        <div className={view === "grid" ? "lg:mt-2 flex items-center justify-between " : "mt-0 lg:flex items-center justify-between w-[250px] "}>
                            {renderStars(product.stars)}
                            <span className="lg:text-sm text-xs whitespace-nowrap text-gray-600 ">{product.rating} Reviews</span>
                        </div>
                        <a href="/productdetails">
                        <button  className={view==="grid"?"lg:mt-4 mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition":" bg-blue-500 hidden lg:block text-white lg:px-4 lg:py-2 px-2 py-1 text-xs lg:text-base whitespace-nowrap rounded hover:bg-blue-600 transition"}>
                            View Details
                        </button>
                        </a>
                        {/* <div className={view === "grid" ? "hidden" : "flex gap-5"}>
                            <i className="ri-heart-line text-white bg-gray-800/50 px-2 py-1 rounded-full hover:text-red-500"></i>
                            <i className="ri-shopping-cart-line text-white bg-gray-800/50 px-2 py-1 rounded-full hover:text-green-500"></i>
                        </div> */}
                    </div>
                ))}
            </div>
        </div>
    );
}
