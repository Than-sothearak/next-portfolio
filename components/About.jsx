"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FaHtml5, FaNodeJs, FaCss3Alt, FaAws } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";
import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeaudition,
  SiAdobepremierepro,
} from "react-icons/si";
export const About = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
  return (
    <div className="w-screen h-screen flex items-center justify-center ">
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/profile.jpg"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              I’m a versatile professional specializing in graphic design and web development, passionate about combining creativity with technology. With experience in crafting visually engaging websites and functional digital solutions, I focus on delivering designs that not only look great but also provide seamless user experiences.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              My hobbies include enjoying music, movies, video games, and drawing, which fuel my creativity and inspiration in all my projects.
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
             <Image
              src="/sign.png"
              alt=""
              width={148}
              height={148}
              className=""
            />
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <div className="">
              <motion.div
                initial={{ x: "-900px" }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="text-xl border-b mb-4 pb-2"
              >
                <h1> Video and Graphich Design</h1>
              </motion.div>
              <motion.div
                initial={{ x: "-900px" }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="flex gap-4 flex-wrap mb-4 pb-4"
              >
                <div className="rounded flex gap-2 items-center p-2 text-sm cursor-pointer border hover:bg-white hover:text-black">
                  <SiAdobephotoshop size={24} /> Adobe Photoshop
                </div>

                <div className="rounded flex gap-2 items-center p-2 text-sm cursor-pointer border hover:bg-white hover:text-black">
                  <SiAdobeillustrator size={24} /> Adobe illustrator
                </div>
                <div className="rounded flex gap-2 items-center p-2 text-sm cursor-pointer border hover:bg-white hover:text-black">
                  <SiAdobepremierepro size={24} /> Adobe Premiere pro
                </div>

                <div className="rounded flex gap-2 items-center p-2 text-sm cursor-pointer border hover:bg-white hover:text-black">
                  <SiAdobeaudition size={24} /> Adobe Audition
                </div>
              </motion.div>
            </div>
            <div className="">
              <motion.div
                initial={{ x: "-900px" }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="text-xl border-b mb-4 pb-2"
              >
                <h1> Web Development</h1>
              </motion.div>
              <motion.div
                initial={{ x: "-900px" }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="border-b mb-4 pb-4"
              >
                <motion.div
                  initial={{ x: "-900px" }}
                  animate={isSkillRefInView ? { x: 0 } : {}}
                  transition={{ delay: 0.3 }}
                  className="text-md fon"
                >
                  <h1>Programing language:</h1>
                </motion.div>
                <div className="flex gap-4 flex-wrap mt-2">
                  <div className="rounded flex gap-2 items-center p-2 text-sm cursor-pointer bg-blue-500 text-white hover:bg-white hover:text-black">
                    <FaHtml5 size={24} /> HTML
                  </div>
                  <div className="rounded  flex gap-2 items-center p-2 text-sm cursor-pointer bg-[#e17055] text-white hover:bg-white hover:text-black">
                    <FaCss3Alt size={24} /> CSS
                  </div>
                  <div className="rounded  flex gap-2 items-center p-2 text-sm cursor-pointer bg-[#fdcb6e] text-white hover:bg-white hover:text-black">
                    <IoLogoJavascript size={24} /> JavaScript
                  </div>
                  <div className="rounded flex gap-2 items-center p-2 text-sm cursor-pointer bg-[#3c873a] text-white hover:bg-white hover:text-black">
                    <FaNodeJs size={24} /> Node.js
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: "-900px" }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="border-b mb-4 pb-4"
              >
                <motion.div
                  initial={{ x: "-900px" }}
                  animate={isSkillRefInView ? { x: 0 } : {}}
                  transition={{ delay: 0.3 }}
                  className="text-md"
                >
                  <h1>Frontend framwork:</h1>
                </motion.div>
                <div className="flex gap-4 flex-wrap mt-2">
                  <div className="rounded flex gap-2 items-center p-2 text-sm cursor-pointer border hover:bg-white hover:text-black">
                    <RiReactjsFill size={24} color="#61DBFB" /> React js
                  </div>
                  <div className="rounded flex gap-2 items-center p-2 text-sm cursor-pointer border hover:bg-white hover:text-black">
                    Next js
                  </div>
                  <div className="rounded flex gap-2 items-center p-2 text-sm cursor-pointer border hover:bg-white hover:text-black">
                    <SiTailwindcss size={24} color="#61DBFB" /> Tailwind css
                  </div>
                  <div className="rounded flex gap-2 items-center p-2 text-sm cursor-pointer border hover:bg-white hover:text-black">
                    Express js
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: "-900px" }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="border-b mb-4 pb-4"
              >
                <motion.div
                  initial={{ x: "-900px" }}
                  animate={isSkillRefInView ? { x: 0 } : {}}
                  transition={{ delay: 0.3 }}
                  className="text-md"
                >
                  <h1>Backend:</h1>
                </motion.div>
                <div className="flex gap-4 flex-wrap mt-2">
                  <div className="rounded flex gap-2 items-center p-2 text-sm cursor-pointer border hover:bg-white hover:text-black">
                    <SiMongodb size={24} color="#4DB33D" /> MongoDB
                  </div>
                  <div className="rounded flex gap-2 items-center p-2 text-sm cursor-pointer border hover:bg-white hover:text-black">
                    <SiMysql size={24} color="#F29111" /> MySQL
                  </div>
                  <div className="rounded flex gap-2 items-center p-2 text-sm cursor-pointer border hover:bg-white hover:text-black">
                    <FaNodeJs size={24} color="#3c873a" /> Node js
                  </div>
                  <div className="rounded flex gap-2 items-center p-2 text-sm cursor-pointer border hover:bg-white hover:text-black">
                    <FaAws size={24} /> AWS
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: "-900px" }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="border-b mb-4 pb-4"
              >
                <motion.div
                  initial={{ x: "-900px" }}
                  animate={isSkillRefInView ? { x: 0 } : {}}
                  transition={{ delay: 0.3 }}
                  className="text-md"
                >
                  <h1>Tools:</h1>
                </motion.div>
                <div className="flex gap-4 flex-wrap mt-2">
                  <div className="rounded  p-2 text-sm cursor-pointer border hover:bg-white hover:text-black">
                    VS Code
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer border hover:bg-white hover:text-black">
                    GitHub
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer border hover:bg-white hover:text-black">
                    OBS Studio
                  </div>
                  <div className="rounded  p-2 text-sm cursor-pointer border hover:bg-white hover:text-black">
                    MySQL Workbench
                  </div>
                </div>
              </motion.div>
            </div>

            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white font-semibold rounded-b-lg rounded-s-lg">
                    Senior Multimedia Studio
                  </div>
                  {/* JOB DESC */}
                  <div className="py-3 text-sm italic">
                    I led studio engineering, e-Learning Center at Institute of
                    Technology of Cambodia.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="py-3 text-green-400 text-sm font-semibold">
                    2019 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="rounded bg-white text-sm font-semibold w-fit">
                    Institute of Technology of Cambodia
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-green-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white font-semibold rounded-b-lg rounded-s-lg">
                    Organizer assistant
                  </div>
                  {/* JOB DESC */}
                  <div className="py-3 text-sm italic">
                    Sothearak serves as the Organizer Assistant for the Techno
                    Pre Incubation Program at Techno Pre Incubation Center.
                  </div>
                  {/* JOB DATE */}
                  <div className="py-3 text-blue-400 text-sm font-semibold">
                    2021 - 2023{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="rounded bg-white text-sm font-semibold w-fit">
                    Techno Pre Incubation Center (ITC)
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white font-semibold rounded-b-lg rounded-s-lg">
                    Internship{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="py-3 text-sm italic">
                    Internship at the Institute of Technology of Cambodia
                  </div>
                  {/* JOB DATE */}
                  <div className=" text-gray-400 text-sm font-semibold">
                    2018 - 2019{" "}
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-gray-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-24 z-30 xl:w-1/2">
          <Image src="/mypic2.png" alt="" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
};
