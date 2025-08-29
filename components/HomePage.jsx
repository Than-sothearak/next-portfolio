"use client";
import Image from "next/image";
import React from "react";

export const HomePage = () => {
  return (
    <section className="h-full flex flex-col lg:flex-row">
      <div className="h-1/2 lg:h-full lg:w-1/2 relative bottom-0">
        <Image src="/mypic.png" alt="" fill className="object-contain" />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        {/* TITLE */}
        <h1 className="text-xl md:text-6xl font-bold">
          Crafting Digital Experiences, Designing Tomorrow.
        </h1>
        {/* DESC */}
        <p className="md:text-xl">
          Welcome to my digital canvas, where innovation and creativity
          converge. With a keen eye for aesthetics and a mastery of code, my
          portfolio showcases a diverse collection of projects that reflect my
          commitment to excellence.
        </p>
        {/* BUTTONS */}
        <div className="w-full flex gap-4">
          <button
            className="p-4 rounded-lg ring-1 ring-black bg-black text-white"
            onClick={() => {
              const section = document.getElementById("Portfolio");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View My Work
          </button>
              <button
            className="p-4 rounded-lg ring-1 ring-black  text-black"
            onClick={() => {
              const section = document.getElementById("Contact");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};
