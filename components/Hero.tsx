"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
export function Hero() {
  const images = [
    "https://lh3.googleusercontent.com/p/AF1QipPcJBuPVQer_FdeLmi1eVSqDHyf5TFBUSzmc2MG=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/p/AF1QipMLDEW-i360laBwAQ6xukgAAR31yLUQYcQPnXPu=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyfVKuHnPXxOtY1nsyptEAqMCVF4j1Zvbs5y-OvevluseaCD64sywoJ16f_kvFAKdABXFZlWE_xqnDvraxkxlQcH636mYzW9XntMaveB0feept82KeYWKEqQdSrEYm7isF-xH4=s1360-w1360-h1020-rw",
    "https://lh3.googleusercontent.com/p/AF1QipP2JYr0PmvVMSaj7TizWanN87TkSJEpWC13jCUW=s1360-w1360-h1020-rw",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="w-full">
      <div className="container mx-auto dark:bg-gray-900 flex flex-col md:flex-row items-center justify-between px-3 pt-8 md:py-24">
        {/* Text Block */}
        <div className="flex-1 text-left space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
            Building with Precision and Quality
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-lg">
            Top-notch construction services that combine innovation,
            craftsmanship, and sustainability.
          </p>

          {/* <button className="mt-4 px-6 py-3 bg-blue-700 text-white text-lg font-semibold rounded-lg hover:bg-blue-800 transition">
            Get a Free Quote
          </button> */}
        </div>

        {/* <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
            alt="Construction site"
            className="w-full h-[60vh] md:h-auto shadow-lg object-cover"
          /> */}

        <div className="mt-10 md:mt-0 relative w-full h-[65vh] overflow-hidden shadow-lg">
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Hero Image ${index + 1}`}
              fill
              className={`object-cover transition-opacity duration-1000 ease-in-out ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
              priority={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
