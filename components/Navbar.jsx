"use client";
import React, { useEffect, useRef, useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { FaInstagram, FaFacebook, FaGithub, FaTelegram } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pathName, setPathName] = useState("#HomePage");


  const links = [
    { url: "#HomePage", title: "Home" },
    { url: "#About", title: "About" },
    { url: "#Contact", title: "Contact" },
    { url: "#Portfolio", title: "Portfolio" },
  ];

  const listVariants = {
    closed: {
      height: 0,
      transition: {
        delay: 0.1,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    opened: {
      height: "100vh",
      transition: {
        type: "spring",
        staggerChildren: 0.3,
        staggerDirection: 1,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* LOGO */}
      <div className="hidden md:flex gap-4 text-2xl">
        <Link href={"https://www.facebook.com/Sothearak.gmail/"}>
          <FaFacebook />
        </Link>
        <Link href={"https://www.instagram.com/than_sothearak/"}>
          <FaInstagram />
        </Link>
        <Link href={"https://github.com/Than-sothearak"}>
          <FaGithub />
        </Link>
        <Link href={""}>
          <FaTelegram />
        </Link>
      </div>
      {/* MANIN LOGO */}
      <div>
        <Link
          href={"/"}
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center gap-2"
        >
          <span className="text-white pl-2">Thearak</span>
          <span className="w-12- h-8 bg-white rounded-sm flex items-center px-2">
            .dev
          </span>
        </Link>
      </div>
      {/* LINKS LISTS */}
      <div className="hidden md:flex">
        {/* SMOOTH SCROLL */}
        <ul
          className="flex gap-4"
          onClick={(e) => {
            e.preventDefault();
            const target = e.target;
            setPathName(target.getAttribute("href"));
            const id = target.getAttribute("href")?.replace("#", "");
            const element = document.getElementById(id);

            element?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          {links.map((link) => (
            <a
              href={link.url}
              key={link.title}
              className={`${
                pathName === link.url && "bg-black text-white"
              } px-2 py-1 text-sm rounded-md`}
            >
              {link.title}
            </a>
          ))}
        </ul>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        <button
          className="relative z-50"
          onClick={(e) => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <motion.div
              animate={{
                rotate: isOpen ? 90 : 0,
              }}
            >
              <MdClose size={28} color="white" />
            </motion.div>
          ) : (
            <motion.div
              animate={{
                rotate: isOpen ? 90 : 0,
                transition: {
                  delay: 0.3,
                },
              }}
            >
              <MdMenu size={28} color="black" />
            </motion.div>
          )}
        </button>
        {/* MENU LIST */}

        <motion.div
          variants={listVariants}
          initial="closed"
          animate={isOpen ? "opened" : "closed"}
          className="absolute z-20 top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl"
        >
          {links.map((link, index) => (
            <motion.div
              onClick={(e) => setIsOpen((prev) => !prev)}
              key={index}
              variants={listItemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={link.url}>{link.title}</Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <button
        className=" w-12 h-12 right-0 bottom-0 fixed mr-8 mb-8 flex items-center justify-center text-2xl bg-slate-500 rounded-full text-white"
        onClick={() => {
          setPathName("#HomePage");
          window.scroll({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default Navbar;
