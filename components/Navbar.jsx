"use client";
import React, { useEffect, useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";
import Social from "./Social";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pathName, setPathName] = useState("#HomePage");

  const links = [
    { url: "#HomePage", title: "Home" },
    { url: "#About", title: "About" },
    { url: "#Portfolio", title: "Portfolio" },
    { url: "#Contact", title: "Contact" },
  ];

  // ✅ Update active path while scrolling
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = `#${entry.target.getAttribute("id")}`;
            setPathName(id);
          }
        });
      },
      { threshold: 0.6 } // section must be 60% visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const listVariants = {
    closed: {
      height: 0,
      transition: { delay: 0.1, type: "spring", stiffness: 400, damping: 40 },
    },
    opened: {
      height: "100vh",
      transition: { type: "spring", staggerChildren: 0.3, staggerDirection: 1 },
    },
  };

  const listItemVariants = {
    closed: { x: -10, opacity: 0 },
    opened: { x: 0, opacity: 1 },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* SOCIAL */}
      <div className="max-sm:hidden">
        <Social />
      </div>

      {/* LOGO */}
      <div>
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center gap-2"
        >
          <span className="text-white pl-2">Thearak</span>
          <span className="w-12 h-8 bg-white rounded-sm flex items-center px-2">
            .dev
          </span>
        </Link>
      </div>

      {/* LINKS (desktop) */}
      <div className="hidden md:flex">
        <ul className="flex gap-4">
          {links.map((link) => (
            <a
              href={link.url}
              key={link.title}
              className={`${
                pathName === link.url ? "bg-black text-white" : ""
              } px-2 py-1 text-sm rounded-md cursor-pointer`}
              onClick={(e) => {
                e.preventDefault();
                const id = link.url.replace("#", "");
                const element = document.getElementById(id);
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {link.title}
            </a>
          ))}
        </ul>
      </div>

      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        <button className="relative z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <motion.div animate={{ rotate: isOpen ? 90 : 0 }}>
              <MdClose size={28} color="white" />
            </motion.div>
          ) : (
            <motion.div
              animate={{
                rotate: isOpen ? 90 : 0,
                transition: { delay: 0.3 },
              }}
            >
              <MdMenu size={28} color="black" />
            </motion.div>
          )}
        </button>

        {/* MOBILE MENU */}
        <motion.div
          variants={listVariants}
          initial="closed"
          animate={isOpen ? "opened" : "closed"}
          className="absolute z-20 top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl"
        >
          {links.map((link, index) => (
            <motion.div
              onClick={() => setIsOpen(false)}
              key={index}
              variants={listItemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={link.url}
                onClick={(e) => {
                  e.preventDefault();
                  const id = link.url.replace("#", "");
                  const element = document.getElementById(id);
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {link.title}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* SCROLL TO TOP */}
      <button
        className="w-12 h-12 right-0 bottom-0 fixed mr-8 mb-8 flex items-center justify-center text-2xl bg-slate-500 rounded-full text-white"
        onClick={() => {
          setPathName("#HomePage");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default Navbar;
