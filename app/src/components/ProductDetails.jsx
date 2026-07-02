"use client";
import Image from "next/image";
import { useState } from "react";
import gps from "../assets/gps.png";
import credit from '../assets/creditcard.jpg'
import a from '../assets/Accessories.png'
const product = {
    id: "MHD-A3",
    name: "Jenny’s Closets – The winter top for female, green",
    price: 49,
    originalPrice: 99,
    reviews: 157,
    rating: 4,
    features: ["Made with full cotton", "Slim fit for any body", "Quality control by JC"],
    images: [gps, credit, a],
};

const suggestedProducts = [
    { id: "1", name: "SBI FASTag", price: 400, rating: 4, reviews: 243, image: gps },
    { id: "2", name: "Bajaj FASTag", price: 400, rating: 4, reviews: 243, image: credit },
    { id: "3", name: "MHD-A3", price: 499, rating: 4, reviews: 98, image: a },
    { id: "4", name: "SZK-D2", price: 499, rating: 4, reviews: 1002, image: gps },
];

export default function ProductDetails() {
    const [currentImage, setCurrentImage] = useState(product.images[0]);

    return (
        <div className="bg-white mx-auto lg:py-20 py-10 ">
            {/* Product Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-32 px-5  gap-8">
                {/* Left: Product Images */}
                <div className="flex lg:flex-row flex-col-reverse  gap-5 ">
                    



                    <div className="flex lg:flex-col gap-4">
                        {product.images.map((image, idx) => (
                            <div
                                key={idx}
                                className={`w-24 h-20 rounded-lg cursor-pointer  flex items-center justify-center ${currentImage === image ? "border-2 border-black" : "border-2 border-transparent"
                                    }`}
                                onClick={() => setCurrentImage(image)}
                            >
                                <Image
                                    src={image}
                                    width={500}
                                    height={500}
                                    alt={`Thumbnail ${idx}`}
                                    className="w-full h-full object-contain rounded-md"
                                />
                            </div>
                        ))}
                    </div>

                    <Image
                        src={currentImage}
                        width={500}
                        height={500}
                        alt="Main Product"
                        className="lg:w-[600px] lg:h-80 h-52  object-cover rounded-lg border"
                    />

                </div>

                {/* Right: Product Details */}
                <div>
                    <h1 className="text-2xl text-black font-bold">{product.name}</h1>
                    <div className="flex items-center my-2">
                        <span className="text-yellow-500">
                            {Array.from({ length: product.rating }).map((_, i) => (
                                <i key={i} className="ri-star-fill"></i>
                            ))}
                        </span>
                        <span className="ml-2 text-gray-600">{product.reviews} Reviews</span>
                    </div>

                    <div className="text-xl font-semibold text-green-600">
                    &#8377;{product.price}{" "}
                        <span className="line-through text-gray-400 text-lg">&#8377;{product.originalPrice}</span>
                    </div>

                    <ul className="list-disc ml-6 mt-4 space-y-2">
                        {product.features.map((feature, idx) => (
                            <li key={idx} className="text-gray-700">
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <div className="relative mt-6 lg:w-1/2 w-full flex gap-5 items-center">
                        <button className=" w-full bg-black text-white py-2 text-xl font-bold rounded-lg hover:bg-gray-800">
                            Book now
                        </button>
                        {/* <div className="border px-2 py-1 rounded-lg"><i className="ri-heart-line   text-2xl text-gray-600 cursor-pointer hover:text-red-500"></i></div> */}

                    </div>
                </div>
            </div>

            {/* Suggested Products */}
            <h2 className="text-xl font-bold lg:mt-12 mt-5 text-black lg:px-20 px-5 mb-4">You May Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:px-20 px-5">
                {suggestedProducts.map((item) => (
                    <div
                        key={item.id}
                        className="relative border rounded-lg overflow-hidden group cursor-pointer"
                    >
                        {/* Product Image */}
                        <div className="overflow-hidden">
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={400}
                                height={400}
                                className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-125"
                            />
                        </div>

                        {/* Heart and Cart Icons */}
                        {/* <div className="absolute top-2 right-2 flex flex-col gap-2">
                            <i className="ri-heart-line text-white bg-gray-800/50 px-2 py-1 rounded-full hover:text-red-500"></i>
                            <i className="ri-shopping-cart-line text-white bg-gray-800/50 px-2 py-1 rounded-full hover:text-green-500"></i>
                        </div> */}

                        {/* Product Info */}
                        <h3 className="mt-2 text-lg font-semibold px-2 text-black">{item.name}</h3>
                        <p className="text-gray-700 px-2">&#8377;{item.price}</p>
                        <div className="flex items-center mt-1 text-yellow-500 px-2 mb-2">
                            {Array.from({ length: item.rating }).map((_, i) => (
                                <i key={i} className="ri-star-fill"></i>
                            ))}
                            <span className="ml-2 text-gray-500 text-sm">({item.reviews})</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
